import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Subscription } from "@/models/Subscription"
import { User } from "@/models/User"
import { Invoice } from "@/models/Invoice"
import { Transaction } from "@/models/Transaction"
import { requireAuth } from "@/lib/auth"

export async function GET(request: NextRequest) {
  const auth = requireAuth(request)
  if (auth.response) return auth.response

  try {
    await connectDB()

    const user = await User.findById(auth.payload.userId)
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const subscriptions = await Subscription.find({ userId: user._id }).sort({ createdAt: -1 })
    const invoices = await Invoice.find({ userId: user._id }).sort({ createdAt: -1 })
    const transactions = await Transaction.find({ userId: user._id }).sort({ createdAt: -1 })

    return NextResponse.json({
      subscriptions,
      invoices,
      transactions,
    })
  } catch (error) {
    console.error("Subscription fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
