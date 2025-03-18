"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductCategories() {
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
    <section className="py-16 md:py-24 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-between items-end mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
            <p className="text-gray-600 mt-2">Browse our skincare solutions</p>
          </div>
          <Link href="#" className="hidden md:flex items-center text-primary font-medium hover:underline">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { name: "Cleansers", image: "/placeholder.svg?height=400&width=300" },
            { name: "Serums", image: "/placeholder.svg?height=400&width=300" },
            { name: "Moisturizers", image: "/placeholder.svg?height=400&width=300" },
            { name: "Eye Care", image: "/placeholder.svg?height=400&width=300" },
          ].map((category, index) => (
            <motion.div key={index} variants={fadeIn} className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={300}
                height={400}
                className="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white font-bold text-lg md:text-xl">{category.name}</h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="h-1 bg-primary mt-2"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center md:hidden">
          <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
            View All Categories <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

