import mongoose, { Schema, Document } from "mongoose"

export interface IInvoiceDocument extends Document {
  invoiceNumber: string
  userId: mongoose.Types.ObjectId
  subscriptionId: mongoose.Types.ObjectId
  transactionId: mongoose.Types.ObjectId
  amount: number
  gstAmount?: number
  totalAmount: number
  status: "paid" | "pending" | "cancelled"
  dueDate: Date
  paidAt?: Date
  createdAt: Date
}

const InvoiceSchema = new Schema<IInvoiceDocument>(
  {
    invoiceNumber: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subscriptionId: { type: Schema.Types.ObjectId, ref: "Subscription", required: true },
    transactionId: { type: Schema.Types.ObjectId, ref: "Transaction", required: true },
    amount: { type: Number, required: true },
    gstAmount: { type: Number },
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["paid", "pending", "cancelled"], default: "paid" },
    dueDate: { type: Date, required: true },
    paidAt: { type: Date },
  },
  { timestamps: true }
)

InvoiceSchema.index({ userId: 1 })
InvoiceSchema.index({ invoiceNumber: 1 })

export const Invoice =
  mongoose.models.Invoice || mongoose.model<IInvoiceDocument>("Invoice", InvoiceSchema)
