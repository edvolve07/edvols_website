import mongoose, { Schema, Document } from "mongoose"

export interface ISubscriptionDocument extends Document {
  userId: mongoose.Types.ObjectId
  planId: string
  planName: string
  startDate: Date
  expiryDate: Date
  status: "active" | "expired" | "cancelled" | "pending"
  autoRenew: boolean
  paymentId?: string
  amount: number
  createdAt: Date
}

const SubscriptionSchema = new Schema<ISubscriptionDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    planId: { type: String, required: true },
    planName: { type: String, required: true },
    startDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ["active", "expired", "cancelled", "pending"],
      default: "pending",
    },
    autoRenew: { type: Boolean, default: false },
    paymentId: { type: String },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
)

SubscriptionSchema.index({ userId: 1 })
SubscriptionSchema.index({ status: 1 })
SubscriptionSchema.index({ expiryDate: 1 })

export const Subscription =
  mongoose.models.Subscription ||
  mongoose.model<ISubscriptionDocument>("Subscription", SubscriptionSchema)
