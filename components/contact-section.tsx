"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-card/30 to-background">
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
            <Card className="bg-card border-border hover:border-primary/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center glow-gold">
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

            <Card className="bg-card border-border hover:border-primary/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center glow-gold">
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

            <Card className="bg-card border-border hover:border-primary/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center glow-gold">
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

            <Card className="bg-card border-border hover:border-primary/60 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center glow-gold">
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

          {/* Contact Form - Redesigned for better aesthetics */}
          <Card className="bg-card border-border hover:border-primary/60 transition-colors">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input aria-label="Your Name" placeholder="Your Name" className="bg-background border-border focus:border-primary" />
                  <Input aria-label="Your Email" type="email" placeholder="Your Email" className="bg-background border-border focus:border-primary" />
                </div>
                <Input aria-label="Phone Number" type="tel" placeholder="Phone Number" className="bg-background border-border focus:border-primary" />
                <Textarea
                  aria-label="Your Message"
                  placeholder="Your Message"
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
                <Button className="w-full h-11 text-base glow-gold hover:glow-gold-strong transition-all duration-300">
                  Send Message
                </Button>
              </form>
              
              {/* Decorative separator and message added below */}
              <div className="mt-auto pt-6 text-center">
                <div className="flex items-center text-muted-foreground" aria-hidden="true">
                  <div className="flex-grow border-t border-border/50"></div>
                  <span className="mx-4 text-primary text-lg font-serif">ॐ</span>
                  <div className="flex-grow border-t border-border/50"></div>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  We will review your message and connect with you shortly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden glow-gold-strong border border-border">
          <iframe
            title="Temple Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.491325684619!2d82.9991838150113!3d25.28769248385419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db6c2f2d0a3%3A0x863a15c85b88f8f!2sShri%20Kashi%20Vishwanath%20Temple!5e0!3m2!1sen!2sin!4v1678886482565!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}