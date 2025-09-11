import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Users, Target, CheckCircle, ArrowRight, Zap, Globe, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Government of India Initiative</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">AI-Powered Smart Allocation Engine</h1>
            <p className="text-xl md:text-2xl mb-8 text-balance max-w-4xl mx-auto text-muted-foreground">
              Revolutionizing the PM Internship Scheme with intelligent matching, ensuring fair opportunities for 1
              crore youth across India's top 500 companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Apply for Internship
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1 Crore</div>
              <div className="text-muted-foreground">Target Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Top Companies</div>
            </div>
            <div className="text-3xl font-bold text-accent mb-2 text-center">₹66,000</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Efficiency Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Intelligent Matching Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Our AI-powered system ensures fair, transparent, and efficient allocation while promoting diversity and
              inclusion across all sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-accent mb-4" />
                <CardTitle>AI-Powered Matching</CardTitle>
                <CardDescription>
                  Advanced machine learning algorithms analyze skills, preferences, and qualifications for optimal
                  internship placement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Blockchain Transparency</CardTitle>
                <CardDescription>
                  Immutable audit trails ensure complete transparency and accountability in the allocation process
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Diversity & Inclusion</CardTitle>
                <CardDescription>
                  Algorithmic fairness mechanisms promote gender balance and equal opportunities across all demographics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Transforming Youth Employment in India
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Enhanced Matching Accuracy</h3>
                    <p className="text-muted-foreground">
                      Personalized recommendations based on comprehensive profile analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Reduced Processing Time</h3>
                    <p className="text-muted-foreground">
                      95% reduction in manual processing with automated intelligent allocation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Gender Equality Focus</h3>
                    <p className="text-muted-foreground">
                      Addressing the 72:28 male-female participation gap through targeted solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Complete Transparency</h3>
                    <p className="text-muted-foreground">
                      Blockchain-powered audit trails for fair and accountable allocation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">90%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </Card>
              <Card className="text-center p-6">
                <Target className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">85%</div>
                <div className="text-sm text-muted-foreground">Match Accuracy</div>
              </Card>
              <Card className="text-center p-6">
                <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">28 States</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </Card>
              <Card className="text-center p-6">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-muted-foreground text-balance">
            Join thousands of students already benefiting from our AI-powered internship matching system. Start your
            journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
