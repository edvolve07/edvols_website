import mongoose, { Schema, Document } from "mongoose"

export interface ITransactionDocument extends Document {
  userId: mongoose.Types.ObjectId
  subscriptionId?: mongoose.Types.ObjectId
  amount: number
  currency: string
  status: "pending" | "success" | "failed"
  paymentMethod: string
  paymentGateway: "razorpay" | "stripe"
  gatewayPaymentId?: string
  gatewayOrderId?: string
  description?: string
  createdAt: Date
}

const TransactionSchema = new Schema<ITransactionDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subscriptionId: { type: Schema.Types.ObjectId, ref: "Subscription" },
    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    paymentMethod: { type: String, required: true },
    paymentGateway: { type: String, enum: ["razorpay", "stripe"], required: true },
    gatewayPaymentId: { type: String },
    gatewayOrderId: { type: String },
    description: { type: String },
  },
  { timestamps: true }
)

TransactionSchema.index({ userId: 1 })
TransactionSchema.index({ status: 1 })
TransactionSchema.index({ gatewayPaymentId: 1 })

export const Transaction =
  mongoose.models.Transaction ||
  mongoose.model<ITransactionDocument>("Transaction", TransactionSchema)
