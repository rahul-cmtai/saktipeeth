"use server"

import type { CourseLevel } from "@/components/pricing-section"

export async function createRazorpayOrder(course: CourseLevel) {
  // Get the Razorpay key from server environment
  const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID

  if (!razorpayKeyId) {
    throw new Error("Razorpay configuration is missing")
  }

  // Return the configuration needed for client-side Razorpay
  return {
    keyId: razorpayKeyId,
    amount: course.price * 100, // Amount in paise
    currency: "INR",
    name: "Shree Mahavidya Shaktipeeth",
    description: `${course.title} - Divine Transformation Course`,
    image: "/goddess-lakshmi-golden.jpg",
  }
}

export async function verifyRazorpayPayment(paymentId: string, orderId: string, signature: string) {
  // Here you would verify the payment signature using Razorpay secret key
  // This is where you'd use the RAZORPAY_KEY_SECRET (server-only)

  console.log("[v0] Payment verification:", { paymentId, orderId, signature })

  // For now, just return success
  // In production, implement proper signature verification
  return { success: true, paymentId }
}
