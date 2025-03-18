"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import ProductImages from "@/components/product/product-images"
import ProductInfo from "@/components/product/product-info"
import ProductTabs from "@/components/product/product-tabs"
import RelatedProducts from "@/components/product/related-products"
import Footer from "@/components/layout/footer"
import { useEffect } from "react"
import { useParams } from "next/navigation"

// Mock product data - in a real app, you would fetch this from an API
const products = [
  {
    id: 1,
    name: "Gentle Foaming Cleanser",
    price: 24,
    description:
      "A gentle foaming cleanser that effectively removes impurities without stripping the skin of its natural oils. Suitable for all skin types, including sensitive skin.",
    longDescription:
      "Our Gentle Foaming Cleanser is formulated with natural ingredients to cleanse your skin without causing irritation. The gentle formula removes makeup, dirt, and excess oil while maintaining your skin's natural moisture balance. Enriched with chamomile and aloe vera, it soothes and calms the skin, leaving it feeling refreshed and clean.",
    ingredients:
      "Water, Glycerin, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Chamomilla Recutita (Matricaria) Flower Extract, Panthenol, Allantoin, Sodium PCA, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply a small amount to damp skin and massage gently in circular motions. Rinse thoroughly with warm water. Use morning and evening as the first step in your skincare routine.",
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.8,
    reviews: 124,
    category: "Cleansers",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 2,
    name: "Vitamin C Brightening Serum",
    price: 48,
    description:
      "A powerful serum that brightens the complexion, reduces dark spots, and protects against environmental damage. Formulated with stable Vitamin C for maximum efficacy.",
    longDescription:
      "Our Vitamin C Brightening Serum is designed to transform dull, uneven skin into a radiant, glowing complexion. The stable form of Vitamin C penetrates deeply to reduce hyperpigmentation and protect against free radical damage. With regular use, you'll notice brighter, more even-toned skin with improved texture and firmness.",
    ingredients:
      "Water, Ascorbic Acid (Vitamin C), Ferulic Acid, Vitamin E, Hyaluronic Acid, Glycerin, Propanediol, Ethoxydiglycol, Panthenol, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply 3-4 drops to clean, dry skin in the morning before moisturizer and sunscreen. Allow to fully absorb before applying other products.",
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.9,
    reviews: 86,
    category: "Serums",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 3,
    name: "Hydrating Face Moisturizer",
    price: 36,
    description:
      "A lightweight yet deeply hydrating moisturizer that provides long-lasting hydration without feeling heavy or greasy. Perfect for daily use.",
    longDescription:
      "Our Hydrating Face Moisturizer delivers intense hydration while maintaining a lightweight feel on the skin. Formulated with hyaluronic acid and ceramides, it strengthens the skin barrier and locks in moisture for up to 24 hours. The non-comedogenic formula won't clog pores and is suitable for all skin types.",
    ingredients:
      "Water, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Cetearyl Glucoside, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Hyaluronate, Dimethicone, Cyclopentasiloxane, Tocopherol, Panthenol, Carbomer, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply to clean skin morning and evening after serums. Massage gently in upward, circular motions until fully absorbed.",
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.7,
    reviews: 152,
    category: "Moisturizers",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 4,
    name: "Exfoliating Facial Scrub",
    price: 28,
    description:
      "A gentle exfoliating scrub that removes dead skin cells and unclogs pores for a smoother, brighter complexion. Contains natural exfoliants for effective yet gentle exfoliation.",
    longDescription:
      "Our Exfoliating Facial Scrub uses biodegradable jojoba beads and fruit enzymes to gently remove dead skin cells without causing micro-tears in the skin. Regular use reveals fresher, smoother skin and helps prevent clogged pores and breakouts. The formula is enriched with soothing botanical extracts to calm the skin during exfoliation.",
    ingredients:
      "Water, Jojoba Esters, Glycerin, Sodium Cocoyl Isethionate, Papain (Papaya Enzyme), Bromelain (Pineapple Enzyme), Aloe Barbadensis Leaf Juice, Calendula Officinalis Flower Extract, Chamomilla Recutita (Matricaria) Flower Extract, Panthenol, Allantoin, Tocopherol, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply to damp skin and massage gently in circular motions for 30-60 seconds, avoiding the eye area. Rinse thoroughly with warm water. Use 2-3 times per week.",
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.6,
    reviews: 98,
    category: "Exfoliators",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 5,
    name: "Overnight Repair Cream",
    price: 52,
    description:
      "A rich, nourishing night cream that works while you sleep to repair and rejuvenate the skin. Wake up to smoother, more radiant skin.",
    longDescription:
      "Our Overnight Repair Cream harnesses the power of your skin's natural nighttime renewal process to deliver transformative results. Packed with peptides, retinol, and nourishing oils, it works throughout the night to repair damage, boost collagen production, and restore elasticity. The rich texture provides deep hydration without feeling heavy or greasy.",
    ingredients:
      "Water, Squalane, Glycerin, Shea Butter, Retinol, Peptide Complex, Niacinamide, Sodium Hyaluronate, Ceramide Complex, Evening Primrose Oil, Rosehip Seed Oil, Tocopherol, Panthenol, Allantoin, Dimethicone, Carbomer, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply to clean skin in the evening as the final step in your skincare routine. Use a pea-sized amount and massage gently into the face, neck, and décolletage.",
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.9,
    reviews: 76,
    category: "Moisturizers",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 6,
    name: "Eye Contour Gel",
    price: 32,
    description:
      "A lightweight, cooling gel that reduces puffiness, dark circles, and fine lines around the delicate eye area. Provides instant and long-term benefits.",
    longDescription:
      "Our Eye Contour Gel is specifically formulated for the delicate skin around the eyes. The cooling gel texture instantly reduces puffiness and refreshes tired eyes, while powerful ingredients work over time to diminish dark circles and fine lines. The metal applicator tip provides a soothing massage during application for enhanced results.",
    ingredients:
      "Water, Glycerin, Caffeine, Niacinamide, Sodium Hyaluronate, Peptide Complex, Aloe Barbadensis Leaf Juice, Cucumber Extract, Green Tea Extract, Panthenol, Allantoin, Hydroxyethylcellulose, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply a small amount around the eye area using the metal applicator tip. Gently pat with ring finger until absorbed. Use morning and evening.",
    image: "/placeholder.svg?height=600&width=600",
    rating: 4.7,
    reviews: 112,
    category: "Eye Care",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
]

export default function ProductPage() {
  // Use the useParams hook to get the id parameter
  const routeParams = useParams()
  const productId = Number.parseInt(
    typeof routeParams.id === "string" ? routeParams.id : Array.isArray(routeParams.id) ? routeParams.id[0] : "0",
  )
  const product = products.find((p) => p.id === productId)

  // This useEffect ensures that any hydration mismatches are resolved after initial render
  useEffect(() => {
    // This is just to force a re-render after hydration
    const timer = setTimeout(() => {}, 0)
    return () => clearTimeout(timer)
  }, [])

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Button asChild suppressHydrationWarning>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-tertiary min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Link href="/" className="flex items-center text-primary hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to products
        </Link>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <ProductImages images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <ProductTabs product={product} />
        </div>

        <RelatedProducts currentProductId={product.id} products={products} />
      </div>

      <Footer />
    </div>
  )
}

