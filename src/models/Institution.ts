import mongoose, { Schema, Document } from "mongoose"

export interface IInstitutionDocument extends Document {
  name: string
  email: string
  phone: string
  address: string
  subscriptionId?: mongoose.Types.ObjectId
  studentCount: number
  isActive: boolean
  createdAt: Date
}

const InstitutionSchema = new Schema<IInstitutionDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true },
    address: { type: String },
    subscriptionId: { type: Schema.Types.ObjectId, ref: "Subscription" },
    studentCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

InstitutionSchema.index({ email: 1 })

export const Institution =
  mongoose.models.Institution ||
  mongoose.model<IInstitutionDocument>("Institution", InstitutionSchema)
