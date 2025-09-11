import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Target, Award, CheckCircle, ArrowRight, Building, MapPin, Calendar } from "lucide-react"

export default function ProjectsPage() {
  const successStories = [
    {
      title: "Pilot Phase Success",
      location: "Pan India",
      date: "2024",
      participants: "60,000 students",
      companies: "150 companies",
      description:
        "The initial pilot phase demonstrated the system's potential, with significant improvements in allocation efficiency and transparency.",
      achievements: [
        "Processed 6.2 lakh applications efficiently",
        "Reduced processing time by 95%",
        "Improved female participation from 28% to 41%",
        "Achieved 85% candidate satisfaction rate",
      ],
      image: "/government-office-meeting-technology.jpg",
    },
    {
      title: "Maharashtra Implementation",
      location: "Maharashtra",
      date: "2024",
      participants: "15,000 students",
      companies: "45 companies",
      description:
        "Successful state-level implementation showcasing the system's scalability and effectiveness in diverse industrial sectors.",
      achievements: [
        "100% digital application process",
        "Zero manual intervention required",
        "Enhanced geographic distribution",
        "92% internship completion rate",
      ],
      image: "/mumbai-skyline-technology-hub.jpg",
    },
    {
      title: "Karnataka Tech Hub",
      location: "Karnataka",
      date: "2024",
      participants: "12,000 students",
      companies: "60 tech companies",
      description:
        "Focused implementation in Karnataka's technology sector, demonstrating AI system's effectiveness in skill-based matching.",
      achievements: [
        "Perfect skill-job alignment achieved",
        "Highest retention rates recorded",
        "Strong industry partnerships formed",
        "Innovation in AI matching algorithms",
      ],
      image: "/bangalore-tech-park-modern-buildings.jpg",
    },
  ]

  const impactMetrics = [
    {
      metric: "1.2M+",
      description: "Applications Processed",
      icon: <Users className="h-8 w-8 text-accent" />,
    },
    {
      metric: "85%",
      description: "Match Accuracy",
      icon: <Target className="h-8 w-8 text-accent" />,
    },
    {
      metric: "95%",
      description: "Time Reduction",
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
    },
    {
      metric: "500+",
      description: "Partner Companies",
      icon: <Building className="h-8 w-8 text-accent" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Success Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Transforming Lives Across India</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
              Discover how our AI-powered allocation system has successfully matched thousands of students with
              meaningful internship opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactMetrics.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{item.icon}</div>
                  <CardTitle className="text-3xl font-bold text-accent">{item.metric}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">Implementation Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Real results from our AI allocation system deployments across different states and sectors
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">{story.date}</Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-4">{story.title}</CardTitle>
                    <CardDescription className="text-base mb-6">{story.description}</CardDescription>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="font-semibold text-accent">{story.participants}</div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                      </div>
                      <div>
                        <div className="font-semibold text-accent">{story.companies}</div>
                        <div className="text-sm text-muted-foreground">Companies</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Achievements:</h4>
                      {story.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">What Stakeholders Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Feedback from students, companies, and government officials who have experienced our system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Priya Sharma</CardTitle>
                    <CardDescription>Engineering Graduate, Delhi</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "The AI system matched me perfectly with a tech internship in my preferred location. The process was
                  transparent and I could see exactly why I was selected."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rajesh Kumar</CardTitle>
                    <CardDescription>HR Director, Tech Corp</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "We received pre-screened candidates who were perfectly aligned with our requirements. The quality and
                  diversity of interns has significantly improved."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Dr. Anita Verma</CardTitle>
                    <CardDescription>Policy Advisor, MCA</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "The real-time analytics and transparency features have revolutionized how we monitor and improve the
                  internship program. Data-driven policy making is now possible."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-balance">Upcoming Initiatives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Expanding our impact with new features and broader implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-accent" />
                  <span>National Rollout 2025</span>
                </CardTitle>
                <CardDescription>Complete deployment across all 28 states and 8 union territories</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 1 crore internship target</li>
                  <li>• All 500 top companies onboarded</li>
                  <li>• Multi-language support expansion</li>
                  <li>• Rural outreach programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  <span>AI Enhancement Phase</span>
                </CardTitle>
                <CardDescription>Advanced features for better matching and user experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Predictive career path analysis</li>
                  <li>• Voice-based application support</li>
                  <li>• Advanced skill gap identification</li>
                  <li>• Integration with other schemes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-balance">Be Part of the Success Story</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Join thousands of students and hundreds of companies who are already benefiting from our AI-powered
            internship ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Apply for Internship
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
