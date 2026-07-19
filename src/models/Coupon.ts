import mongoose, { Schema, Document } from "mongoose"

export interface ICouponDocument extends Document {
  code: string
  discountType: "percentage" | "fixed"
  discountValue: number
  maxUses: number
  currentUses: number
  minAmount?: number
  validFrom: Date
  validUntil: Date
  isActive: boolean
}

const CouponSchema = new Schema<ICouponDocument>(
  {
    code: { type: String, required: true, unique: true, uppercase: true },
    discountType: { type: String, enum: ["percentage", "fixed"], required: true },
    discountValue: { type: Number, required: true },
    maxUses: { type: Number, default: 100 },
    currentUses: { type: Number, default: 0 },
    minAmount: { type: Number },
    validFrom: { type: Date, required: true },
    validUntil: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

CouponSchema.index({ code: 1 })

export const Coupon =
  mongoose.models.Coupon || mongoose.model<ICouponDocument>("Coupon", CouponSchema)
