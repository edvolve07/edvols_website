export interface IUser {
  _id: string
  name: string
  email: string
  phone: string
  password: string
  role: "student" | "institution" | "faculty" | "admin"
  institutionId?: string
  institutionName?: string
  gstNumber?: string
  isVerified: boolean
  isActive: boolean
  subscriptionId?: string
  createdAt: string
  updatedAt: string
}

export interface IInstitution {
  _id: string
  name: string
  email: string
  phone: string
  address: string
  subscriptionId?: string
  studentCount: number
  isActive: boolean
  createdAt: string
}

export interface IPlan {
  _id: string
  planId: string
  name: string
  duration: number
  price: number
  description: string
  features: Record<string, boolean>
  modules: string[]
  interviewLevels: number
  storage: string
  support: string
  certificate: boolean
  reports: string
  isActive: boolean
}

export interface ISubscription {
  _id: string
  userId: string
  planId: string
  planName: string
  startDate: string
  expiryDate: string
  status: "active" | "expired" | "cancelled" | "pending"
  autoRenew: boolean
  paymentId?: string
  amount: number
  createdAt: string
}

export interface ITransaction {
  _id: string
  userId: string
  subscriptionId?: string
  amount: number
  currency: string
  status: "pending" | "success" | "failed"
  paymentMethod: string
  paymentGateway: "razorpay" | "stripe"
  gatewayPaymentId?: string
  gatewayOrderId?: string
  description?: string
  createdAt: string
}

export interface IInvoice {
  _id: string
  invoiceNumber: string
  userId: string
  subscriptionId: string
  transactionId: string
  amount: number
  gstAmount?: number
  totalAmount: number
  status: "paid" | "pending" | "cancelled"
  dueDate: string
  paidAt?: string
  createdAt: string
}

export interface ICoupon {
  _id: string
  code: string
  discountType: "percentage" | "fixed"
  discountValue: number
  maxUses: number
  currentUses: number
  minAmount?: number
  validFrom: string
  validUntil: string
  isActive: boolean
}
