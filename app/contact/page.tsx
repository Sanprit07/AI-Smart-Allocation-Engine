import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HeadphonesIcon, Building } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact Our Support Team</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
              Have questions about the AI allocation system or need assistance? We're here to help you navigate the
              future of internships
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Get detailed responses to your queries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">support@pminternship.gov.in</p>
                <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>Speak directly with our experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">1800-XXX-XXXX</p>
                <p className="text-sm text-muted-foreground mt-2">Toll-free nationwide</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Instant assistance when you need it</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Available 24/7</p>
                <p className="text-sm text-muted-foreground mt-2">On our platform</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Office Address</CardTitle>
                <CardDescription>Visit us for in-person assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sm">Ministry of Corporate Affairs</p>
                <p className="text-sm text-muted-foreground mt-2">New Delhi, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Hours */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-6 w-6 text-accent" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please describe your query or concern in detail..." rows={5} />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours and Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-accent" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Online support and live chat are available 24/7 for urgent queries and
                      technical assistance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HeadphonesIcon className="h-6 w-6 text-accent" />
                    <span>Support Categories</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Technical Support</h4>
                    <p className="text-sm text-muted-foreground">Platform issues, login problems, application errors</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Application Assistance</h4>
                    <p className="text-sm text-muted-foreground">
                      Help with profile creation, document upload, form completion
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Allocation Queries</h4>
                    <p className="text-sm text-muted-foreground">Questions about matching process, results, appeals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">General Information</h4>
                    <p className="text-sm text-muted-foreground">Scheme details, eligibility, company information</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-6 w-6 text-accent" />
                    <span>Regional Offices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold">Northern Region</h4>
                    <p className="text-muted-foreground">Delhi, Punjab, Haryana, Himachal Pradesh</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Western Region</h4>
                    <p className="text-muted-foreground">Maharashtra, Gujarat, Rajasthan, Goa</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Southern Region</h4>
                    <p className="text-muted-foreground">Karnataka, Tamil Nadu, Andhra Pradesh, Kerala</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Eastern Region</h4>
                    <p className="text-muted-foreground">West Bengal, Odisha, Jharkhand, Bihar</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">Before You Contact Us</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            You might find the answer to your question in our comprehensive FAQ section
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center space-y-2 bg-transparent">
              <MessageSquare className="h-8 w-8 text-accent" />
              <span className="font-semibold">Application Process</span>
              <span className="text-sm text-muted-foreground">How to apply and what to expect</span>
            </Button>
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center space-y-2 bg-transparent">
              <HeadphonesIcon className="h-8 w-8 text-accent" />
              <span className="font-semibold">Technical Issues</span>
              <span className="text-sm text-muted-foreground">Common problems and solutions</span>
            </Button>
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center space-y-2 bg-transparent">
              <Building className="h-8 w-8 text-accent" />
              <span className="font-semibold">Scheme Details</span>
              <span className="text-sm text-muted-foreground">Eligibility, benefits, and requirements</span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
