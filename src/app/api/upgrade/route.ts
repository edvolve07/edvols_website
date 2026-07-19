import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Subscription } from "@/models/Subscription"
import { User } from "@/models/User"
import { requireAuth } from "@/lib/auth"
import { PLANS } from "@/lib/constants"

export async function POST(request: NextRequest) {
  const auth = requireAuth(request)
  if (auth.response) return auth.response

  try {
    await connectDB()
    const body = await request.json()
    const { newPlanId } = body

    const user = await User.findById(auth.payload.userId)
    if (!user || !user.subscriptionId) {
      return NextResponse.json({ error: "No active subscription" }, { status: 400 })
    }

    const currentSub = await Subscription.findById(user.subscriptionId)
    if (!currentSub || currentSub.status !== "active") {
      return NextResponse.json({ error: "No active subscription" }, { status: 400 })
    }

    const newPlan = PLANS.find((p) => p.id === newPlanId)
    const currentPlan = PLANS.find((p) => p.id === currentSub.planId)
    if (!newPlan || !currentPlan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
    }

    if (newPlan.price <= currentPlan.price) {
      return NextResponse.json({ error: "New plan must cost more" }, { status: 400 })
    }

    // Calculate remaining value of current plan
    const totalDuration = currentPlan.duration
    const elapsed = Math.floor((Date.now() - new Date(currentSub.startDate).getTime()) / (1000 * 60 * 60 * 24))
    const remaining = Math.max(0, totalDuration - elapsed)
    const remainingValue = (currentPlan.price / totalDuration) * remaining

    // Only pay the difference
    const amountDue = Math.max(0, newPlan.price - remainingValue)

    // Extend expiry
    const currentExpiry = new Date(currentSub.expiryDate)
    const newExpiry = new Date()
    newExpiry.setDate(newExpiry.getDate() + newPlan.duration)

    currentSub.planId = newPlan.id
    currentSub.planName = newPlan.name
    currentSub.expiryDate = newExpiry
    currentSub.amount = newPlan.price
    await currentSub.save()

    return NextResponse.json({
      success: true,
      amountDue: Math.round(amountDue),
      newExpiry: newExpiry,
      message: `Upgraded to ${newPlan.name}`,
    })
  } catch (error) {
    console.error("Upgrade error:", error)
    return NextResponse.json({ error: "Upgrade failed" }, { status: 500 })
  }
}
