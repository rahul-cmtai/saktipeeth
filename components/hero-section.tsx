"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, BookOpen, Zap, Users } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 8,
    seconds: 8,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/hero.png"
          alt="Spiritual Journey"
          className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/45 to-background" />
        {/* <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 bg-black transition-opacity duration-500" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Offer Valid for Today Only</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 text-balance text-glow"
          >
            Shree Suktam Sadhana
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl font-semibold text-primary mb-6"
          >
            Complete Divine Course - All 3 Levels Combined
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed"
          >
            Transform your life with the divine blessings of Maa Mahalaxmi. Unlock abundance, prosperity, and divine
            grace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm mb-8"
          >
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Hours</div>
              </div>
              <span className="text-2xl text-primary">:</span>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Minutes</div>
              </div>
              <span className="text-2xl text-primary">:</span>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Seconds</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-black font-bold text-lg px-12 py-7 rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Enroll Now at ₹9,600
            </Button>
            <div className="flex flex-col items-center sm:items-start px-6 py-4 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm">
              <div className="text-sm text-muted-foreground line-through">Regular: ₹18,000</div>
              <div className="text-lg font-bold text-primary">Save ₹8,400</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-8 justify-center items-center text-sm"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Sacred Teachings</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Divine Mantras</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Expert Guidance</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.8 },
            y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
