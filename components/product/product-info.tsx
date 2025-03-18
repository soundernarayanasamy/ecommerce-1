"use client"

import { useState } from "react"
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateWhatsAppLink } from "@/utils/whatsapp"

interface ProductInfoProps {
  product: {
    id: number
    name: string
    price: number
    description: string
    rating: number
    reviews: number
    image?: string
  }
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleBuyNow = () => {
    const message = quantity > 1 ? `${product.name} (Quantity: ${quantity})` : product.name
    window.open(generateWhatsAppLink(message), "_blank")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        <p className="text-2xl font-bold mt-4">${product.price.toFixed(2)}</p>
      </div>

      <p className="text-gray-600">{product.description}</p>

      <div className="pt-4 border-t">
        <h3 className="font-medium mb-2">Quantity</h3>
        <div className="flex items-center">
          <button
            onClick={decrementQuantity}
            className="w-10 h-10 flex items-center justify-center border rounded-l-md"
            disabled={quantity <= 1}
            suppressHydrationWarning
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className="w-12 h-10 flex items-center justify-center border-t border-b">{quantity}</div>
          <button
            onClick={incrementQuantity}
            className="w-10 h-10 flex items-center justify-center border rounded-r-md"
            suppressHydrationWarning
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button onClick={handleBuyNow} className="py-6 flex-1" suppressHydrationWarning>
          <ShoppingBag className="w-5 h-5 mr-2" />
          Buy Now
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-primary text-primary hover:bg-primary/10"
          suppressHydrationWarning
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

