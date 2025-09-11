import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Users, Building, Globe } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Student Access",
      price: "Free",
      description: "Complete access to AI-powered internship matching for all eligible students",
      icon: <Users className="h-8 w-8 text-accent" />,
      features: [
        "AI-powered profile analysis",
        "Intelligent internship matching",
        "Resume parsing and optimization",
        "Multi-language platform support",
        "Mobile-first responsive design",
        "24/7 customer support",
        "Transparent allocation process",
        "Blockchain-verified certificates",
        "Career guidance resources",
        "Skill development recommendations",
      ],
      popular: true,
    },
    {
      name: "Company Partnership",
      price: "Free",
      description: "Comprehensive platform access for participating companies to manage internships",
      icon: <Building className="h-8 w-8 text-accent" />,
      features: [
        "Automated candidate screening",
        "AI-powered candidate ranking",
        "Real-time management dashboard",
        "Bulk internship posting",
        "Advanced analytics and reporting",
        "Diversity metrics tracking",
        "Integration with HR systems",
        "Dedicated account manager",
        "Custom branding options",
        "Performance monitoring tools",
      ],
      popular: false,
    },
    {
      name: "Government Access",
      price: "Free",
      description: "Full administrative access for government agencies and policy makers",
      icon: <Globe className="h-8 w-8 text-accent" />,
      features: [
        "Comprehensive program monitoring",
        "Real-time analytics dashboard",
        "Policy impact assessment tools",
        "Gender equality tracking",
        "Geographic distribution analysis",
        "Fraud detection and prevention",
        "Audit trail management",
        "Custom report generation",
        "Multi-level admin access",
        "Data export capabilities",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Pricing Plans</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Free for All Stakeholders</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
              As a Government of India initiative, our AI-powered internship allocation system is completely free for
              students, companies, and government agencies
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-accent shadow-lg scale-105" : "border-border"} hover:shadow-lg transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4">{plan.icon}</div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-accent my-4">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground"> / forever</span>
                  </div>
                  <CardDescription className="text-balance">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">Why Is Everything Free?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              This is a Government of India initiative funded by public resources to ensure equal access to
              opportunities for all citizens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Public Service</h3>
              <p className="text-sm text-muted-foreground">Serving the public interest without profit motive</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Equal Access</h3>
              <p className="text-sm text-muted-foreground">Ensuring no financial barriers to opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Economic Growth</h3>
              <p className="text-sm text-muted-foreground">Investing in youth for national development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Digital India</h3>
              <p className="text-sm text-muted-foreground">Advancing technology adoption in governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">Funded by Government of India</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            With ₹10,831 crore allocated for the PM Internship Scheme in FY 2025-26, this AI system represents a small
            but crucial investment in making the program more efficient and effective for all beneficiaries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">₹10,831 Cr</div>
              <div className="text-muted-foreground">Total Budget Allocation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">₹2-3 Cr</div>
              <div className="text-muted-foreground">AI System Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">0.03%</div>
              <div className="text-muted-foreground">Of Total Budget</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
