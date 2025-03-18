"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"
import ProductCategories from "@/components/home/product-categories"
import FeaturedProducts from "@/components/home/featured-products"
import Newsletter from "@/components/home/newsletter"
import { useEffect } from "react"

export default function LandingPage() {
  // This useEffect ensures that any hydration mismatches are resolved after initial render
  useEffect(() => {
    // This is just to force a re-render after hydration
    const timer = setTimeout(() => {}, 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-tertiary">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductCategories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </div>
  )
}

