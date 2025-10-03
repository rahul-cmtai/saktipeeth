"use client"

import { motion } from "framer-motion"
import { Sparkles, Calendar, Heart, Users } from "lucide-react"

const timelineEvents = [
  {
    year: "Ancient Times",
    title: "Divine Manifestation",
    description:
      "The sacred Shaktipeeth was established where the divine energy of Goddess manifested, marking it as one of the 51 holy sites.",
    icon: Sparkles,
    image: "/ancient-temple-goddess-divine-manifestation-golden.jpg",
  },
  {
    year: "12th Century",
    title: "Temple Construction",
    description:
      "The magnificent temple structure was built by devoted kings, creating an architectural marvel that stands to this day.",
    icon: Calendar,
    image: "/ancient-indian-temple-architecture-construction-go.jpg",
  },
  {
    year: "18th Century",
    title: "Spiritual Renaissance",
    description:
      "A period of renewed devotion and spiritual awakening, attracting saints and devotees from across the land.",
    icon: Heart,
    image: "/spiritual-saints-meditation-devotion-temple-golden.jpg",
  },
  {
    year: "Present Day",
    title: "Global Pilgrimage",
    description:
      "Thousands of devotees from around the world visit annually, experiencing divine blessings and spiritual transformation.",
    icon: Users,
    image: "/temple-pilgrims-devotees-worship-modern-golden.jpg",
  },
]

export function TimelineSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Sacred Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Divine Timeline
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through centuries of devotion, spirituality, and divine grace
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== timelineEvents.length - 1 && (
                <div className="absolute left-1/2 top-32 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2 hidden md:block" />
              )}

              <div
                className={`flex flex-col md:flex-row gap-8 mb-16 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content with Image */}
                <motion.div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>

                    <div className="p-6">
                      <p className="text-primary font-semibold text-sm mb-2">{event.year}</p>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Icon with enhanced animation */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center relative z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <event.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
