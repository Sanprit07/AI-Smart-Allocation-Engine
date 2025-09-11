import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Vedant Asutkar",
      role: "CEO",
      description:
        "Visionary leader with expertise in AI and government technology solutions. Leading the transformation of India's internship ecosystem.",
      image: "/professional-ceo-portrait.png",
      email: "vedant@pminternship.gov.in",
    },
    {
      name: "Sanprit Danav",
      role: "Co-Founder",
      description:
        "Technology strategist and blockchain expert. Driving innovation in transparent and fair allocation systems.",
      image: "/professional-cto-portrait.png",
      email: "sanprit@pminternship.gov.in",
    },
    {
      name: "Prajwal Yadav",
      role: "Manager",
      description:
        "Operations and project management specialist. Ensuring seamless implementation and stakeholder coordination.",
      image: "/professional-manager-portrait.jpg",
      email: "prajwal@pminternship.gov.in",
    },
    {
      name: "Rajat",
      role: "For any Query",
      description:
        "Customer support and query resolution specialist. Your first point of contact for all questions and assistance.",
      image: "/professional-support-specialist-portrait.jpg",
      email: "rajat@pminternship.gov.in",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Meet Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">The Minds Behind the Innovation</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
              Our dedicated team of experts is committed to revolutionizing India's internship ecosystem through
              cutting-edge AI and blockchain technology
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4 text-balance">{member.description}</CardDescription>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            To democratize access to quality internship opportunities through intelligent technology, ensuring every
            Indian youth has an equal chance to build their career and contribute to the nation's growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-accent mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Leveraging cutting-edge AI and blockchain for transparent solutions
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-2">Inclusion</h3>
              <p className="text-sm text-muted-foreground">
                Ensuring equal opportunities regardless of background or location
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-2">Impact</h3>
              <p className="text-sm text-muted-foreground">
                Creating lasting change in India's youth employment landscape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Have questions about our AI allocation system or need assistance? Our team is here to help you navigate the
            future of internships.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Contact Our Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
