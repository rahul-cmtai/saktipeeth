"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Sparkles, Heart, Sun, Moon, Star } from "lucide-react"

const offerings = [
  {
    icon: Flame,
    title: "Maha Aarti",
    description: "Experience the divine energy through sacred fire rituals performed daily at dawn and dusk.",
  },
  {
    icon: Sparkles,
    title: "Abhishekam",
    description: "Sacred bathing ceremony of the deity with holy water, milk, honey, and sacred herbs.",
  },
  {
    icon: Heart,
    title: "Puja Services",
    description: "Personalized worship services for devotees seeking blessings for specific intentions.",
  },
  {
    icon: Sun,
    title: "Navratri Celebrations",
    description: "Nine nights of divine worship celebrating the triumph of good over evil.",
  },
  {
    icon: Moon,
    title: "Full Moon Rituals",
    description: "Special ceremonies performed during auspicious full moon nights for spiritual elevation.",
  },
  {
    icon: Star,
    title: "Tantric Sadhana",
    description: "Advanced spiritual practices guided by experienced priests for serious seekers.",
  },
]

export function OfferingsSection() {
  return (
    <section id="offerings" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Sacred Rituals</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Divine Offerings & Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Participate in ancient rituals and ceremonies that connect you with the divine energy of the cosmos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="group bg-card border-border hover:border-primary transition-all duration-500 hover:glow-gold cursor-pointer h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <offering.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{offering.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
