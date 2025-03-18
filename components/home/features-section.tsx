"use client"

import { motion } from "framer-motion"

export default function FeaturesSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Qura</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine natural ingredients with scientific innovation to create skincare products that deliver real
            results.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              title: "Natural Ingredients",
              description: "All our products are made with carefully selected natural ingredients.",
            },
            {
              title: "Cruelty-Free",
              description: "We never test on animals and are committed to ethical skincare.",
            },
            {
              title: "Scientifically Proven",
              description: "Our formulas are developed and tested by dermatologists.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-tertiary p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-black font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

