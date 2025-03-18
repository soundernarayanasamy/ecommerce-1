"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { generateWhatsAppLink } from "@/utils/whatsapp"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleContactClick = () => {
    window.open(generateWhatsAppLink("I'm interested in your products"), "_blank")
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-tertiary shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Qura</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-800 hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="#" className="text-gray-800 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-primary transition-colors">
            Contact
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={handleContactClick}
              className="text-gray-800 hover:text-primary transition-colors relative"
              suppressHydrationWarning
            >
              <Phone className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={handleContactClick}
            className="text-gray-800 hover:text-primary transition-colors relative"
            suppressHydrationWarning
          >
            <Phone className="h-5 w-5" />
          </button>
          <button className="text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)} suppressHydrationWarning>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-tertiary border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#"
              className="text-gray-800 py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-gray-800 py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-800 py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="w-full"
              suppressHydrationWarning
              onClick={() => {
                setIsMenuOpen(false)
                handleContactClick()
              }}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}

