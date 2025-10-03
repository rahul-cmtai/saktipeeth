import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TimelineSection } from "@/components/timeline-section"
import { PricingSection } from "@/components/pricing-section"
import { OfferingsSection } from "@/components/offerings-section"
import { GallerySection } from "@/components/gallery-section"
import { EventsSection } from "@/components/events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <PricingSection />
      <OfferingsSection />
      <GallerySection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
