import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import { Subscription } from "@/models/Subscription"
import { Transaction } from "@/models/Transaction"
import { Invoice } from "@/models/Invoice"
import { PLANS } from "@/lib/constants"
import {
  generateTempPassword,
  generateUsername,
  generateInvoiceNumber,
  hashPassword,
} from "@/lib/auth"
import { sendEmail, getWelcomeEmail, getInvoiceEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()
    const { paymentId, planId, userDetails, gateway } = body

    // Verify payment with Razorpay/Stripe
    // In production: verify signature with webhook secret

    const plan = PLANS.find((p) => p.id === planId)
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
    }

    // Generate credentials
    const tempPassword = generateTempPassword()
    const username = generateUsername(userDetails.email)
    const hashedPassword = await hashPassword(tempPassword)

    // Create user
    const user = await User.create({
      name: userDetails.name,
      email: userDetails.email,
      phone: userDetails.phone,
      password: hashedPassword,
      role: userDetails.role || "student",
      institutionName: userDetails.institutionName,
      gstNumber: userDetails.gstNumber,
      isVerified: true,
    })

    // Calculate dates
    const startDate = new Date()
    const expiryDate = new Date(startDate)
    expiryDate.setDate(expiryDate.getDate() + plan.duration)

    // Create subscription
    const subscription = await Subscription.create({
      userId: user._id,
      planId: plan.id,
      planName: plan.name,
      startDate,
      expiryDate,
      status: "active",
      autoRenew: false,
      paymentId,
      amount: plan.price,
    })

    // Update user with subscription
    user.subscriptionId = subscription._id
    await user.save()

    // Create transaction
    const transaction = await Transaction.create({
      userId: user._id,
      subscriptionId: subscription._id,
      amount: plan.price,
      currency: "INR",
      status: "success",
      paymentMethod: "online",
      paymentGateway: gateway || "razorpay",
      gatewayPaymentId: paymentId,
      description: `${plan.name} Subscription`,
    })

    // Generate invoice
    const invoiceNumber = generateInvoiceNumber()
    const invoice = await Invoice.create({
      invoiceNumber,
      userId: user._id,
      subscriptionId: subscription._id,
      transactionId: transaction._id,
      amount: plan.price,
      totalAmount: plan.price,
      status: "paid",
      dueDate: expiryDate,
      paidAt: new Date(),
    })

    // Send welcome email with credentials
    await sendEmail({
      to: user.email,
      subject: "Welcome to EDVOLS - Your Account Credentials",
      html: getWelcomeEmail({
        name: user.name,
        username,
        password: tempPassword,
        planName: plan.name,
        expiryDate: expiryDate.toLocaleDateString("en-IN"),
        loginUrl: `${process.env.NEXT_PUBLIC_URL || "https://edvols.com"}/login`,
      }),
    })

    // Send invoice email
    await sendEmail({
      to: user.email,
      subject: `Invoice #${invoiceNumber} - EDVOLS Payment Confirmed`,
      html: getInvoiceEmail({
        name: user.name,
        invoiceNumber,
        planName: plan.name,
        amount: plan.price.toLocaleString("en-IN"),
        date: new Date().toLocaleDateString("en-IN"),
      }),
    })

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        username,
        tempPassword,
      },
      subscription: {
        id: subscription._id,
        planName: plan.name,
        startDate,
        expiryDate,
      },
      invoice: {
        number: invoiceNumber,
        amount: plan.price,
      },
    })
  } catch (error) {
    console.error("Payment processing error:", error)
    return NextResponse.json({ error: "Payment processing failed" }, { status: 500 })
  }
}
