"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    date: "March 25, 2025",
    time: "6:00 AM - 8:00 PM",
    title: "Maha Shivaratri Celebration",
    description: "All-night vigil with special abhishekam and sacred chanting ceremonies.",
    location: "Main Temple Complex",
  },
  {
    date: "April 9-17, 2025",
    time: "Daily 5:00 AM - 9:00 PM",
    title: "Chaitra Navratri",
    description: "Nine days of divine worship celebrating the nine forms of Goddess Durga.",
    location: "Temple Grounds",
  },
  {
    date: "May 23, 2025",
    time: "7:00 PM - 10:00 PM",
    title: "Buddha Purnima",
    description: "Special meditation and prayer ceremony on the auspicious full moon night.",
    location: "Meditation Hall",
  },
  {
    date: "October 3-12, 2025",
    time: "Daily 6:00 AM - 10:00 PM",
    title: "Sharad Navratri & Durga Puja",
    description: "Grand celebration with elaborate rituals, cultural programs, and prasad distribution.",
    location: "Entire Temple Complex",
  },
]

export function EventsSection() {
  return (
    <section id="events" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Upcoming Celebrations</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Sacred Events & Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Join us for these auspicious occasions and immerse yourself in divine celebrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary transition-all duration-300 hover:glow-gold"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
