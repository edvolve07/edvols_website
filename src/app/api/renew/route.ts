import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Subscription } from "@/models/Subscription"
import { User } from "@/models/User"
import { requireAuth } from "@/lib/auth"
import { PLANS } from "@/lib/constants"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  const auth = requireAuth(request)
  if (auth.response) return auth.response

  try {
    await connectDB()
    const body = await request.json()
    const { planId } = body

    const user = await User.findById(auth.payload.userId)
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const plan = PLANS.find((p) => p.id === planId)
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
    }

    // If existing subscription, extend it
    if (user.subscriptionId) {
      const existingSub = await Subscription.findById(user.subscriptionId)

      if (existingSub && existingSub.status === "active") {
        const currentExpiry = new Date(existingSub.expiryDate)
        const newExpiry = new Date(currentExpiry)
        newExpiry.setDate(newExpiry.getDate() + plan.duration)

        existingSub.expiryDate = newExpiry
        existingSub.amount += plan.price
        await existingSub.save()

        return NextResponse.json({
          success: true,
          message: `Subscription extended by ${plan.duration} days`,
          newExpiry,
        })
      }
    }

    // New subscription
    const startDate = new Date()
    const expiryDate = new Date(startDate)
    expiryDate.setDate(expiryDate.getDate() + plan.duration)

    const subscription = await Subscription.create({
      userId: user._id,
      planId: plan.id,
      planName: plan.name,
      startDate,
      expiryDate,
      status: "active",
      amount: plan.price,
    })

    user.subscriptionId = subscription._id
    await user.save()

    return NextResponse.json({
      success: true,
      subscription: {
        id: subscription._id,
        planName: plan.name,
        startDate,
        expiryDate,
      },
    })
  } catch (error) {
    console.error("Renew error:", error)
    return NextResponse.json({ error: "Renewal failed" }, { status: 500 })
  }
}
