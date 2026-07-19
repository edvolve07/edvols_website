import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail(options: EmailOptions) {
  try {
    await transporter.sendMail({
      from: `"EDVOLS" <${process.env.SMTP_USER || "noreply@edvols.com"}>`,
      ...options,
    })
    return { success: true }
  } catch (error) {
    console.error("Email send error:", error)
    return { success: false, error }
  }
}

export function getWelcomeEmail(params: {
  name: string
  username: string
  password: string
  planName: string
  expiryDate: string
  loginUrl: string
}): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #F8FAF8; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
        .header { background: linear-gradient(135deg, #123D32, #2F7D5B); padding: 40px; border-radius: 16px 16px 0 0; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 28px; }
        .header p { color: rgba(255,255,255,0.8); margin-top: 8px; }
        .content { background: white; padding: 40px; border-radius: 0 0 16px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .credentials { background: #EAF5F0; border-radius: 12px; padding: 24px; margin: 24px 0; }
        .credentials div { margin-bottom: 12px; }
        .credentials .label { font-size: 12px; color: #6B7280; }
        .credentials .value { font-size: 16px; color: #123D32; font-weight: 600; font-family: monospace; }
        .btn { display: inline-block; background: #2F7D5B; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; margin: 20px 0; }
        .footer { text-align: center; padding: 24px; color: #6B7280; font-size: 12px; }
        .details { border-top: 1px solid #E2E8E5; padding-top: 20px; margin-top: 20px; }
        .details div { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to EDVOLS!</h1>
          <p>Your placement preparation journey starts now</p>
        </div>
        <div class="content">
          <p>Hi <strong>${params.name}</strong>,</p>
          <p>Thank you for subscribing to EDVOLS. Your account has been created and your <strong>${params.planName}</strong> subscription is now active.</p>

          <div class="credentials">
            <div>
              <div class="label">Username</div>
              <div class="value">${params.username}</div>
            </div>
            <div>
              <div class="label">Temporary Password</div>
              <div class="value">${params.password}</div>
            </div>
          </div>

          <p style="text-align: center;">
            <a href="${params.loginUrl}" class="btn">Login to EDVOLS</a>
          </p>

          <div class="details">
            <div><span>Plan</span><span><strong>${params.planName}</strong></span></div>
            <div><span>Expiry Date</span><span><strong>${params.expiryDate}</strong></span></div>
          </div>

          <p style="font-size: 13px; color: #6B7280; margin-top: 16px;">
            For security, please change your password after your first login.
          </p>
        </div>
        <div class="footer">
          <p>EDVOLS - AI Powered Career Readiness Platform</p>
          <p>Need help? Contact support@edvols.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function getInvoiceEmail(params: {
  name: string
  invoiceNumber: string
  planName: string
  amount: string
  date: string
}): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #F8FAF8; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
        .header { background: #123D32; padding: 32px; border-radius: 16px 16px 0 0; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; }
        .content { background: white; padding: 40px; border-radius: 0 0 16px 16px; }
        .invoice-info { margin: 24px 0; }
        .invoice-info div { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #E2E8E5; }
        .total { font-size: 24px; font-weight: bold; color: #123D32; text-align: right; margin-top: 16px; }
        .footer { text-align: center; padding: 24px; color: #6B7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Invoice #${params.invoiceNumber}</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${params.name}</strong>,</p>
          <p>Your payment has been received successfully. Here are the invoice details:</p>
          <div class="invoice-info">
            <div><span>Invoice Number</span><span>${params.invoiceNumber}</span></div>
            <div><span>Plan</span><span>${params.planName}</span></div>
            <div><span>Date</span><span>${params.date}</span></div>
            <div><span>Status</span><span style="color:#2F7D5B;font-weight:600;">Paid</span></div>
          </div>
          <div class="total">₹${params.amount}</div>
        </div>
        <div class="footer">
          <p>EDVOLS - AI Powered Career Readiness Platform</p>
        </div>
      </div>
    </body>
    </html>
  `
}
