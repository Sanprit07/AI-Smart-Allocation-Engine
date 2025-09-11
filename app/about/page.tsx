import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Users, Target, CheckCircle, Building, GraduationCap, IndianRupee } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">About Our Mission</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Revolutionizing India's Youth Employment
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
              The AI-Based Smart Allocation Engine represents a transformative solution to address critical
              inefficiencies in India's largest youth employment initiative
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-balance">The Challenge We're Solving</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 6.2 lakh applications for just 1.25 lakh positions in the pilot phase, the current manual
                allocation system has resulted in significant inefficiencies.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold">Poor Acceptance Rates</h3>
                    <p className="text-muted-foreground">Only 8,700 out of 60,000 offers accepted (14.5%)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold">Gender Disparity</h3>
                    <p className="text-muted-foreground">72% male vs 28% female participation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold">Manual Processing Limitations</h3>
                    <p className="text-muted-foreground">Time-consuming and prone to bias</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-destructive/20">
                <div className="text-3xl font-bold text-destructive mb-2">6.2L</div>
                <div className="text-sm text-muted-foreground">Applications Received</div>
              </Card>
              <Card className="text-center p-6 border-destructive/20">
                <div className="text-3xl font-bold text-destructive mb-2">1.25L</div>
                <div className="text-sm text-muted-foreground">Available Positions</div>
              </Card>
              <Card className="text-center p-6 border-destructive/20">
                <div className="text-3xl font-bold text-destructive mb-2">14.5%</div>
                <div className="text-sm text-muted-foreground">Acceptance Rate</div>
              </Card>
              <Card className="text-center p-6 border-destructive/20">
                <div className="text-3xl font-bold text-destructive mb-2">28%</div>
                <div className="text-sm text-muted-foreground">Female Participation</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PM Internship Scheme Overview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">PM Internship Scheme Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              A flagship initiative by the Ministry of Corporate Affairs under the FY25 Employment and Skilling Package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Target Beneficiaries</CardTitle>
                <CardDescription>
                  Youth aged 21-24 from families earning below ₹8 lakh annually. Includes graduates, diploma holders,
                  and ITI certificate holders.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <IndianRupee className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Financial Support</CardTitle>
                <CardDescription>
                  ₹5,000 monthly stipend + ₹6,000 one-time grant. Total support of ₹66,000 per intern over 12 months.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Building className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Participating Companies</CardTitle>
                <CardDescription>
                  Top 500 Indian companies across diverse sectors providing 12-month paid internship opportunities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">Our AI-Powered Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Leveraging cutting-edge technology to ensure fair, transparent, and efficient internship allocation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Machine Learning</CardTitle>
                <CardDescription>Advanced algorithms for intelligent matching and recommendation</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Blockchain</CardTitle>
                <CardDescription>Transparent audit trails and immutable allocation records</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Fairness Engine</CardTitle>
                <CardDescription>Algorithmic mechanisms ensuring diversity and inclusion</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Smart Matching</CardTitle>
                <CardDescription>Multi-criteria analysis for optimal candidate-opportunity pairing</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">Expected Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Transforming outcomes for students, employers, and the government
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">For Students</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Enhanced matching accuracy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Improved accessibility</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Transparency and fairness</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">For Employers</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Better candidate quality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Efficient process management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Diversity and inclusion goals</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">For Government</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Program effectiveness</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Gender equality advancement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Digital India alignment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
