"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Visit Us & Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Plan your visit or reach out to us for any inquiries about rituals, events, or spiritual guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Temple Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Shree Mahavidya Shaktipeeth
                      <br />
                      Sacred Temple Road
                      <br />
                      Spiritual District, India - 123456
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Temple Timings</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Morning: 5:00 AM - 12:00 PM
                      <br />
                      Evening: 4:00 PM - 9:00 PM
                      <br />
                      Open all days of the week
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contact Numbers</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Main Office: +91 98765 43210
                      <br />
                      Priest Contact: +91 98765 43211
                      <br />
                      Emergency: +91 98765 43212
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      info@shreemahavidya.org
                      <br />
                      donations@shreemahavidya.org
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="bg-background border-border focus:border-primary" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full glow-gold hover:glow-gold-strong transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden glow-gold">
          <div className="w-full h-96 bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive Map Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
