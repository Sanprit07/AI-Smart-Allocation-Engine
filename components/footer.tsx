import Link from "next/link"
import { Shield, Brain, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-accent" />
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AI Smart Allocation Engine</h3>
                <p className="text-sm text-muted-foreground">PM Internship Scheme</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Transforming India's largest youth employment initiative through AI-powered intelligent matching, ensuring
              fair, transparent, and efficient internship allocation.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-accent px-2 py-1 rounded text-accent-foreground font-medium">
                Government of India Initiative
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-accent transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>support@pminternship.gov.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Ministry of Corporate Affairs, New Delhi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Government of India. All rights reserved. |
            <Link href="/privacy" className="hover:text-accent ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-accent ml-1">
              Terms of Service
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">Powered by AI & Blockchain Technology</div>
        </div>
      </div>
    </footer>
  )
}
