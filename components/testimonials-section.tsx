"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    text: "Visiting this sacred Shaktipeeth transformed my life. The divine energy here is palpable, and the priests are incredibly knowledgeable and helpful.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    text: "The Navratri celebrations here are absolutely magnificent. The devotion and spiritual atmosphere during the nine nights is truly unforgettable.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    location: "Bangalore, Karnataka",
    text: "I have been coming here for years. Every visit brings new blessings and spiritual insights. The temple management is excellent and very welcoming.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    text: "The morning aarti is a divine experience. The chanting, the bells, the fragrance of incense - everything creates a perfect spiritual ambiance.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Devotee Experiences</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Blessings & Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Hear from devotees who have experienced the divine grace and transformative power of this sacred place.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.25rem] flex-row [--duration:40s]">
            <div className="flex w-max items-stretch gap-[var(--gap)] animate-marquee will-change-transform group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, rowIndex) => (
                <div key={rowIndex} className="flex w-max items-stretch gap-[var(--gap)]">
                  {testimonials.map((testimonial, i) => (
                    <Card
                      key={`${rowIndex}-${i}`}
                      className="bg-card border-border hover:border-primary transition-all duration-300 hover:glow-gold w-[380px] sm:w-[420px] h-80"
                    >
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, starIndex) => (
                            <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-foreground leading-relaxed mb-6 italic flex-1 overflow-hidden">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}
