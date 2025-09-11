import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Shield, Users, Target, ArrowRight, Upload, Search, CheckCircle, FileText, Zap } from "lucide-react"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">How It Works</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Learn About Our AI System</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
              Discover how our intelligent allocation engine transforms the internship matching process using advanced
              AI and blockchain technology
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">The Allocation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              From application to placement, our AI system ensures fair and efficient matching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">1. Profile Creation</h3>
              <p className="text-sm text-muted-foreground">
                Students upload resumes and complete detailed profiles with skills, preferences, and qualifications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Our ML algorithms parse resumes, extract skills, and analyze compatibility with available opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">3. Smart Matching</h3>
              <p className="text-sm text-muted-foreground">
                Multi-criteria matching considers skills, location, sector preferences, and diversity requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">4. Allocation</h3>
              <p className="text-sm text-muted-foreground">
                Transparent allocation with blockchain audit trails ensures fair and accountable placement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">Technology Behind the System</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Cutting-edge technologies working together to deliver intelligent matching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Machine Learning</CardTitle>
                <CardDescription>
                  TensorFlow and Scikit-learn for advanced pattern recognition and predictive matching
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• TF-IDF Vectorization</li>
                  <li>• Cosine Similarity Matching</li>
                  <li>• Natural Language Processing</li>
                  <li>• Resume Parsing & Analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Blockchain Technology</CardTitle>
                <CardDescription>
                  Immutable audit trails ensuring transparency and preventing manipulation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Transparent Scoring</li>
                  <li>• Audit Trail Recording</li>
                  <li>• Fraud Prevention</li>
                  <li>• Fairness Monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Fairness Engine</CardTitle>
                <CardDescription>
                  Algorithmic mechanisms ensuring diversity, inclusion, and merit-based selection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Gender Balance Promotion</li>
                  <li>• Geographic Distribution</li>
                  <li>• Social Category Inclusion</li>
                  <li>• Merit-Based Selection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Matching Criteria */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-balance">Multi-Criteria Matching Engine</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI system analyzes multiple parameters to ensure optimal candidate-opportunity pairing
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold">Skills Alignment</h3>
                    <p className="text-muted-foreground">
                      Matching candidate competencies with internship requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold">Geographic Preferences</h3>
                    <p className="text-muted-foreground">Considering location constraints and travel feasibility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold">Sector Compatibility</h3>
                    <p className="text-muted-foreground">Aligning career interests with available opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-semibold">Academic Background</h3>
                    <p className="text-muted-foreground">Ensuring educational qualification relevance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <FileText className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Resume Parsing Accuracy</div>
              </Card>
              <Card className="text-center p-6">
                <Search className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">85%</div>
                <div className="text-sm text-muted-foreground">Match Precision</div>
              </Card>
              <Card className="text-center p-6">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">10x</div>
                <div className="text-sm text-muted-foreground">Faster Processing</div>
              </Card>
              <Card className="text-center p-6">
                <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Transparency</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Different Stakeholders */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">Benefits for All Stakeholders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Our system creates value for students, employers, and government agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-accent">For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Personalized internship recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Mobile-first accessible platform</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Transparent selection process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-accent">For Employers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Pre-screened quality candidates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Automated candidate ranking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Enhanced diversity metrics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Real-time management dashboard</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-accent">For Government</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Real-time program monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Data-driven policy insights</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Enhanced accountability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Gender equality advancement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-balance">Ready to Experience the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Join the AI-powered internship revolution and discover opportunities matched perfectly to your skills and
            aspirations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo Video
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
