"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, Crown, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { createRazorpayOrder, verifyRazorpayPayment } from "@/app/actions/razorpay"

export interface CourseLevel {
  id: string
  level: number
  badge: string
  title: string
  price: number
  originalPrice?: number
  image: string
  features: string[]
  highlighted?: boolean
  icon: any
  offerText?: string
  countdownDate?: string
}

const courseLevels: CourseLevel[] = [
  {
    id: "foundation",
    level: 1,
    badge: "Level 1",
    title: "Foundation Level",
    price: 3300,
    originalPrice: 5000,
    image: "/spiritual-foundation-meditation-golden-temple.jpg",
    icon: Sparkles,
    offerText: "Early Bird Offer",
    countdownDate: "2025-04-15",
    features: [
      "Introduction to Shree Suktam and its divine power",
      "Purush Suktam teachings for spiritual foundation",
      "Rin Mochan Stotram to clear karmic debts",
      "Basic Shree Yantra understanding",
      "Daily practice guidelines for 2 months",
      "Mantra pronunciation guidance",
      "Foundation for prosperity consciousness",
      "Weekly live sessions every Sunday",
    ],
  },
  {
    id: "intermediate",
    level: 2,
    badge: "Level 2",
    title: "Intermediate Level",
    price: 5100,
    originalPrice: 7500,
    image: "/advanced-spiritual-practice-golden-yantra-cosmic.jpg",
    icon: Zap,
    offerText: "Limited Time Offer",
    countdownDate: "2025-04-15",
    features: [
      "Advanced Shree Suktam practices (Months 3-4)",
      "Kanakdhara Stotram for golden abundance",
      "Samputik Shree Suktam techniques",
      "Shree Yantra Pooja detailed rituals",
      "Energy activation methods",
      "Wealth manifestation practices",
      "Divine connection deepening",
      "Removal of financial obstacles",
      "Personalized spiritual guidance",
    ],
  },
  {
    id: "master",
    level: 3,
    badge: "Level 3",
    title: "Master Level - Complete Course",
    price: 9600,
    originalPrice: 18000,
    image: "/divine-master-spiritual-enlightenment-golden-godde.jpg",
    icon: Crown,
    highlighted: true,
    offerText: "Best Value - All 3 Levels + Bonus Content",
    countdownDate: "2025-04-15",
    features: [
      "Complete 6-month Shree Suktam Sadhana journey",
      "All Level 1 & Level 2 content included",
      "Divine Jagrit Mantras of Maa Mahalaxmi (Months 5-6)",
      "Advanced prosperity rituals and techniques",
      "Attract unlimited abundance methods",
      "Health and wellness mantras",
      "Problem-solving divine solutions",
      "Lifetime spiritual transformation",
      "Direct connection with Maa Mahalaxmi",
      "Complete course certification",
      "Ongoing spiritual support & community access",
      "Bonus: Exclusive masterclasses with spiritual masters",
    ],
  },
]

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-2 justify-center mb-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-primary/20 rounded-lg px-3 py-2 min-w-[60px]">
            <span className="text-2xl font-bold text-primary">{value.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-xs text-muted-foreground mt-1 capitalize">{unit}</span>
        </div>
      ))}
    </div>
  )
}

const handleRazorpayPayment = async (course: CourseLevel) => {
  try {
    // Get Razorpay configuration from server action
    const config = await createRazorpayOrder(course)

    const options = {
      key: config.keyId,
      amount: config.amount,
      currency: config.currency,
      name: config.name,
      description: config.description,
      image: config.image,
      handler: async (response: any) => {
        console.log("  Payment response:", response)

        // Verify payment on server
        try {
          const verification = await verifyRazorpayPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id || "",
            response.razorpay_signature || "",
          )

          if (verification.success) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
          }
        } catch (error) {
          console.error("  Payment verification failed:", error)
          alert("Payment verification failed. Please contact support.")
        }
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#d4af37",
      },
    }

    // @ts-ignore
    const razorpay = new window.Razorpay(options)
    razorpay.open()
  } catch (error) {
    console.error("  Payment initialization failed:", error)
    alert("Payment system is not configured. Please contact the administrator.")
  }
}

export function PricingSection() {
  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Divine Courses</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Three Levels of Divine Transformation
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Complete your 6-month Shree Suktam Sadhana journey with structured learning paths. Each level builds upon
            the previous, creating a complete spiritual transformation to abundance and prosperity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courseLevels.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={course.highlighted ? "lg:scale-105" : ""}
            >
              <Card
                className={`relative overflow-hidden h-full transition-all duration-500 hover:shadow-2xl ${
                  course.highlighted
                    ? "border-2 border-primary shadow-lg shadow-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {course.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Best Value
                  </div>
                )}

                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {course.badge}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <course.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">{course.title}</h3>
                    </div>

                    {course.offerText && (
                      <div className="mb-4">
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          {course.offerText}
                        </Badge>
                      </div>
                    )}

                    {course.countdownDate && (
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-2 text-center">Offer ends in:</p>
                        <CountdownTimer targetDate={course.countdownDate} />
                      </div>
                    )}

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                        {course.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ₹{course.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {course.originalPrice && (
                        <p className="text-sm text-green-500">
                          Save ₹{(course.originalPrice - course.price).toLocaleString()} (
                          {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off)
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {course.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handleRazorpayPayment(course)}
                      className={`w-full ${
                        course.highlighted
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-primary/10 hover:bg-primary/20 text-primary"
                      } transition-all duration-300 hover:scale-105`}
                      size="lg"
                    >
                      Enroll Now - ₹{course.price.toLocaleString()}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All courses include lifetime access, certification, and ongoing spiritual support
          </p>
        </motion.div>
      </div>
    </section>
  )
}
