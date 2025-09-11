"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Brain } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Learn", href: "/learn" },
    { name: "FAQs", href: "/faqs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent" />
              <Brain className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-balance">AI Smart Allocation Engine</h1>
              <p className="text-sm text-muted-foreground">PM Internship Scheme</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Log In
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:bg-primary/80"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium py-2 px-3 rounded hover:bg-primary/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-primary/20">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Log In
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
