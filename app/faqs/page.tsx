import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  const faqs = [
    {
      question: "What is the AI-Based Smart Allocation Engine?",
      answer:
        "The AI-Based Smart Allocation Engine is an intelligent system that uses machine learning algorithms, natural language processing, and blockchain technology to efficiently match candidates with internship opportunities under the PM Internship Scheme. It ensures fair, transparent, and optimal allocation while promoting diversity and inclusion.",
    },
    {
      question: "Who is eligible for the PM Internship Scheme?",
      answer:
        "The scheme is open to youth aged 21-24 from families earning below ₹8 lakh annually. Eligible candidates include graduates, diploma holders, and ITI certificate holders. The program targets students who have completed their education and are looking to gain practical work experience.",
    },
    {
      question: "How does the AI matching process work?",
      answer:
        "Our AI system analyzes your resume using natural language processing to extract skills, qualifications, and preferences. It then uses TF-IDF vectorization and cosine similarity algorithms to match you with suitable internship opportunities based on skills alignment, geographic preferences, sector compatibility, and academic background.",
    },
    {
      question: "What financial support is provided?",
      answer:
        "Interns receive ₹5,000 per month as stipend plus a one-time grant of ₹6,000. This totals ₹66,000 in financial support over the 12-month internship period. The stipend is paid directly to interns' bank accounts.",
    },
    {
      question: "How is transparency ensured in the allocation process?",
      answer:
        "We use blockchain technology to create immutable audit trails of all allocation decisions. Every matching criterion, scoring mechanism, and final allocation is recorded transparently. Candidates can view their matching scores and understand why they were allocated to specific opportunities.",
    },
    {
      question: "How does the system address gender disparity?",
      answer:
        "Our AI system includes specific fairness mechanisms to promote gender balance. It considers safety factors, location preferences for women candidates, and implements targeted outreach strategies. The system has already helped increase female participation from 31% to 41% in pilot implementations.",
    },
    {
      question: "Which companies participate in the scheme?",
      answer:
        "The scheme includes India's top 500 companies across diverse sectors including technology, manufacturing, finance, healthcare, and more. These companies have committed to providing quality internship opportunities with proper mentorship and learning experiences.",
    },
    {
      question: "Can I specify my location preferences?",
      answer:
        "Yes, the AI system takes your location preferences into account during matching. You can specify preferred cities, states, or indicate if you're willing to relocate. The system considers travel feasibility, accommodation availability, and safety factors in its recommendations.",
    },
    {
      question: "What happens if I'm not satisfied with my allocation?",
      answer:
        "The system provides multiple rounds of allocation to maximize satisfaction. If you're not satisfied with your initial allocation, you can provide feedback, and the AI system will learn from this to improve future matches. There are also appeal mechanisms in place for special circumstances.",
    },
    {
      question: "How do I apply for the internship?",
      answer:
        "You can apply through our online platform by creating a profile, uploading your resume, and completing the application form. The AI system will then analyze your profile and match you with suitable opportunities. The entire process is digital and user-friendly.",
    },
    {
      question: "Is there any application fee?",
      answer:
        "No, there is no application fee for the PM Internship Scheme. The entire process from application to allocation is completely free for all eligible candidates.",
    },
    {
      question: "What support is available during the internship?",
      answer:
        "Interns receive comprehensive support including mentorship from company supervisors, regular progress monitoring, skill development programs, and 24/7 helpline support. There are also networking opportunities and career guidance sessions.",
    },
    {
      question: "How is the quality of internships ensured?",
      answer:
        "All participating companies are vetted for their internship programs. We have quality standards that companies must meet, including proper mentorship, meaningful work assignments, safe working conditions, and learning opportunities. Regular monitoring ensures compliance.",
    },
    {
      question: "Can I change my internship during the 12-month period?",
      answer:
        "While the internship is designed to be completed at one organization, there are provisions for transfers in exceptional circumstances such as harassment, unsafe conditions, or significant personal reasons. Such requests are reviewed on a case-by-case basis.",
    },
    {
      question: "What happens after completing the internship?",
      answer:
        "Upon successful completion, you receive a certificate and detailed performance report. Many companies offer full-time employment to outstanding interns. The system also provides career guidance and helps connect you with other opportunities in the ecosystem.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Frequently Asked Questions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get Your Questions Answered</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
              Find comprehensive answers to common questions about the AI-Based Smart Allocation Engine and the PM
              Internship Scheme
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-balance">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Our support team is here to help you with any additional questions about the AI allocation system or the
            internship process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground">support@pminternship.gov.in</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-muted-foreground">1800-XXX-XXXX (Toll Free)</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground">Available 24/7 on our platform</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
