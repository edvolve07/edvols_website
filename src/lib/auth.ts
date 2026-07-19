import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

const JWT_SECRET = process.env.JWT_SECRET || "edvols-jwt-secret-dev"
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "edvols-refresh-secret-dev"

export interface JWTPayload {
  userId: string
  email: string
  role: string
}

export function generateTokens(payload: JWTPayload) {
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" })
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "30d" })
  return { accessToken, refreshToken }
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch {
    return null
  }
}

export function verifyRefreshToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as JWTPayload
  } catch {
    return null
  }
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export function generateTempPassword(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$"
  let password = ""
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

export function generateUsername(email: string): string {
  const prefix = email.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, "")
  const suffix = Math.random().toString(36).substring(2, 6)
  return `${prefix}_${suffix}`
}

export function generateInvoiceNumber(): string {
  const prefix = "EDV"
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}${timestamp}${random}`
}

export function getAuthToken(request: Request): string | null {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null
  return authHeader.split(" ")[1]
}

export function requireAuth(
  request: Request,
  allowedRoles?: string[]
): { payload: JWTPayload; response: null } | { payload: null; response: NextResponse } {
  const token = getAuthToken(request)
  if (!token) {
    return { payload: null, response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) }
  }

  const payload = verifyToken(token)
  if (!payload) {
    return { payload: null, response: NextResponse.json({ error: "Invalid token" }, { status: 401 }) }
  }

  if (allowedRoles && !allowedRoles.includes(payload.role)) {
    return { payload: null, response: NextResponse.json({ error: "Forbidden" }, { status: 403 }) }
  }

  return { payload, response: null }
}
