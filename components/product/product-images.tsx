"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProductImagesProps {
  images: string[]
  name: string
}

export default function ProductImages({ images, name }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg overflow-hidden"
      >
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={name}
          width={600}
          height={600}
          className="w-full h-auto object-cover"
        />
      </motion.div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 border-2 rounded-md overflow-hidden ${
              selectedImage === index ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${name} thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="w-20 h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

