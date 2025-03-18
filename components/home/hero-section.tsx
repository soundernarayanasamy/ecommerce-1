"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { generateWhatsAppLink } from "@/utils/whatsapp"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.5,
      },
    },
  }

  const handleContactClick = () => {
    window.open(generateWhatsAppLink("I'm interested in your products"), "_blank")
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-32 bg-tertiary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-1 bg-primary"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Natural Beauty <br />
                <span className="text-primary">Redefined</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-md leading-relaxed">
              Discover our collection of premium skincare products made with natural ingredients for radiant, healthy
              skin.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="px-8 py-7 text-base rounded-full group relative overflow-hidden"
                onClick={handleContactClick}
                suppressHydrationWarning
              >
                <span className="relative z-10">Shop Collection</span>
                <motion.span
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.span
                  className="absolute right-6 z-10"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Button>

              <Button
                variant="outline"
                className="border-primary text-black hover:bg-primary/10 px-8 py-7 text-base rounded-full"
                suppressHydrationWarning
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-tertiary overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=${i}`}
                      alt="Customer"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-medium">500+ Happy Customers</div>
                <div className="text-sm text-gray-500">Join our community</div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={imageVariants} className="relative">
            
            <motion.div
              className="absolute -bottom-8 -right-8 w-full h-full bg-primary/40 rounded-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            />
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Skincare product showcase"
              width={600}
              height={600}
              className="rounded-2xl relative z-10 w-full h-auto shadow-xl"
            />

            <motion.div
              className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="bg-primary/20 p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium text-sm">100% Natural</div>
                <div className="text-xs text-gray-500">Cruelty-free products</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

