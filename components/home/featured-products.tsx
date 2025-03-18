"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { generateWhatsAppLink } from "@/utils/whatsapp"

export default function FeaturedProducts() {
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

  const products = [
    { id: 1, name: "Gentle Foaming Cleanser", price: "$24", image: "/placeholder.svg?height=400&width=400" },
    {
      id: 2,
      name: "Vitamin C Brightening Serum",
      price: "$48",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Hydrating Face Moisturizer",
      price: "$36",
      image: "/placeholder.svg?height=400&width=400",
    },
    { id: 4, name: "Exfoliating Facial Scrub", price: "$28", image: "/placeholder.svg?height=400&width=400" },
    { id: 5, name: "Overnight Repair Cream", price: "$52", image: "/placeholder.svg?height=400&width=400" },
    { id: 6, name: "Eye Contour Gel", price: "$32", image: "/placeholder.svg?height=400&width=400" },
  ]

  const handleBuyNow = (productName: string) => {
    window.open(generateWhatsAppLink(productName), "_blank")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Premium skincare solutions for every skin type and concern.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={fadeIn} className="group">
              <Link href={`/product/${product.id}`} className="block">
                <div className="overflow-hidden rounded-xl bg-tertiary mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-xl">{product.price}</span>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 p-0 h-auto"
                    suppressHydrationWarning
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </Link>
              <Button onClick={() => handleBuyNow(product.name)} className="w-full mt-3" suppressHydrationWarning>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Buy Now
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

