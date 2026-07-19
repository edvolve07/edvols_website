import mongoose, { Schema, Document } from "mongoose"

export interface IUserDocument extends Document {
  name: string
  email: string
  phone: string
  password: string
  role: "student" | "institution" | "faculty" | "admin"
  institutionId?: mongoose.Types.ObjectId
  institutionName?: string
  gstNumber?: string
  isVerified: boolean
  isActive: boolean
  subscriptionId?: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "institution", "faculty", "admin"], default: "student" },
    institutionId: { type: Schema.Types.ObjectId, ref: "Institution" },
    institutionName: { type: String, trim: true },
    gstNumber: { type: String, trim: true },
    isVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    subscriptionId: { type: Schema.Types.ObjectId, ref: "Subscription" },
  },
  { timestamps: true }
)

UserSchema.index({ email: 1 })
UserSchema.index({ role: 1 })

export const User = mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema)
