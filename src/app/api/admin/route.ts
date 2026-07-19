import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { User } from "@/models/User"
import { Subscription } from "@/models/Subscription"
import { requireAuth } from "@/lib/auth"

export async function GET(request: NextRequest) {
  const auth = requireAuth(request, ["admin"])
  if (auth.response) return auth.response

  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type")

    let data

    switch (type) {
      case "users":
        data = await User.find({}).select("-password").sort({ createdAt: -1 }).limit(50)
        break
      case "subscriptions":
        data = await Subscription.find({}).sort({ createdAt: -1 }).limit(50)
        break
      case "revenue": {
        const subs = await Subscription.find({ status: "active" })
        const totalRevenue = subs.reduce((sum, s) => sum + s.amount, 0)
        data = {
          totalRevenue,
          activeSubscriptions: subs.length,
          totalUsers: await User.countDocuments({ role: { $ne: "admin" } }),
        }
        break
      }
      case "expiring": {
        const thirtyDays = new Date()
        thirtyDays.setDate(thirtyDays.getDate() + 30)
        data = await Subscription.find({
          status: "active",
          expiryDate: { $lte: thirtyDays },
        }).populate("userId", "name email")
        break
      }
      default:
        data = {
          users: await User.countDocuments({ role: { $ne: "admin" } }),
          activeSubscriptions: await Subscription.countDocuments({ status: "active" }),
          expiredSubscriptions: await Subscription.countDocuments({ status: "expired" }),
          recentUsers: await User.find({}).select("-password").sort({ createdAt: -1 }).limit(10),
        }
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Admin API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
