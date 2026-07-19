import mongoose, { Schema, Document } from "mongoose"

export interface IEmailLogDocument extends Document {
  userId: mongoose.Types.ObjectId
  to: string
  subject: string
  type: "welcome" | "invoice" | "credentials" | "renewal" | "expiry" | "reset_password"
  status: "sent" | "failed"
  error?: string
  sentAt: Date
}

const EmailLogSchema = new Schema<IEmailLogDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    to: { type: String, required: true },
    subject: { type: String, required: true },
    type: {
      type: String,
      enum: ["welcome", "invoice", "credentials", "renewal", "expiry", "reset_password"],
      required: true,
    },
    status: { type: String, enum: ["sent", "failed"], default: "sent" },
    error: { type: String },
    sentAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const EmailLog =
  mongoose.models.EmailLog || mongoose.model<IEmailLogDocument>("EmailLog", EmailLogSchema)
