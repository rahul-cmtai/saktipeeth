"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary text-sm tracking-widest uppercase"
            >
              Sacred History
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance"
            >
              A Divine Legacy of Spiritual Power
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                Shree Mahavidya Shaktipeeth stands as one of the most revered spiritual destinations, where the divine
                feminine energy manifests in its purest form. This sacred site has been a beacon of spiritual awakening
                for centuries.
              </p>
              <p>
                According to ancient scriptures, this Shaktipeeth holds immense cosmic significance. Devotees from
                across the world visit to seek blessings, perform sacred rituals, and experience the transformative
                power of the Divine Mother.
              </p>
              <p>
                The temple complex embodies the essence of Tantric wisdom and Vedic traditions, offering a sanctuary for
                spiritual seekers to connect with the eternal consciousness that pervades all existence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {[
                { value: "1000+", label: "Years of History" },
                { value: "10K+", label: "Daily Visitors" },
                { value: "365", label: "Days Open" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden glow-gold"
            >
              <img
                src="/hindu-goddess-deity-divine-mother-spiritual-sacred.jpg"
                alt="Divine Deity"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
