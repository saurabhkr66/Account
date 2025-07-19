"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Calculator,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  FileText,
  BarChart3,
  Phone,
  Calendar,
  PieChart,
  ChevronDown,
  HelpCircle,
  Sparkles
} from "lucide-react"
import Footer from "../components/Footer"
import { useState,useEffect } from "react"
import AnimatedBookkeepingSection from "./bookingmatters"
import AnimatedServicesSection from "./bookkeepingservice"

export default function BookkeepingPage() {
      const [openIndex, setOpenIndex] = useState(null);
    

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  

  const services = [
    {
      icon: Calculator,
      title: "Daily Transaction Recording",
      description: "Meticulous recording of all business transactions with proper categorization and documentation.",
      features: ["Real-time entry", "Digital receipt management", "Automated categorization"],
    },
    {
      icon: BarChart3,
      title: "Financial Statements",
      description:
        "Comprehensive monthly and quarterly financial reports including P&L, balance sheets, and cash flow.",
      features: ["Monthly P&L statements", "Balance sheet preparation", "Cash flow analysis"],
    },
    {
      icon: Shield,
      title: "Bank Reconciliation",
      description: "Regular reconciliation of all bank accounts to ensure accuracy and identify discrepancies.",
      features: ["Monthly reconciliation", "Error identification", "Variance analysis"],
    },
    {
      icon: FileText,
      title: "Accounts Management",
      description: "Complete management of accounts payable and receivable for optimal cash flow.",
      features: ["Invoice tracking", "Payment scheduling", "Aging reports"],
    },
    {
      icon: PieChart,
      title: "GST Compliance",
      description: "Comprehensive GST bookkeeping and reporting to ensure full compliance with regulations.",
      features: ["GST calculations", "Return preparation", "Compliance monitoring"],
    },
    {
      icon: TrendingUp,
      title: "Financial Analysis",
      description: "In-depth analysis of financial data to provide insights for business growth and decision-making.",
      features: ["Trend analysis", "Performance metrics", "Growth insights"],
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Focus on your core business while we handle the financial paperwork.",
    },
    {
      icon: Shield,
      title: "Ensure Compliance",
      description: "Stay compliant with all financial regulations and tax requirements.",
    },
    {
      icon: TrendingUp,
      title: "Better Decisions",
      description: "Make informed business decisions with accurate financial insights.",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "More affordable than hiring a full-time bookkeeper with better expertise.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We assess your business needs and current financial state.",
    },
    {
      step: "2",
      title: "System Setup",
      description: "Configure accounting software and establish proper chart of accounts.",
    },
    {
      step: "3",
      title: "Data Migration",
      description: "Transfer existing financial data and ensure accuracy.",
    },
    {
      step: "4",
      title: "Ongoing Management",
      description: "Regular bookkeeping services with monthly reports and reviews.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      rating: 5,
      text: "Their bookkeeping service transformed our financial management. We now have clear insights into our cash flow and can make better business decisions.",
    },
    {
      name: "Michael Chen",
      company: "Retail Solutions Ltd.",
      rating: 5,
      text: "Professional, accurate, and always on time. They've saved us countless hours and helped us stay compliant with all regulations.",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      rating: 5,
      text: "The monthly reports are incredibly detailed and easy to understand. It's like having a CFO at a fraction of the cost.",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹5,000",
      period: "/month",
      description: "Perfect for small businesses with basic bookkeeping needs",
      features: [
        "Up to 50 transactions/month",
        "Monthly financial statements",
        "Bank reconciliation",
        "Basic GST compliance",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹12,000",
      period: "/month",
      description: "Ideal for growing businesses with comprehensive needs",
      features: [
        "Up to 200 transactions/month",
        "Monthly & quarterly reports",
        "Advanced reconciliation",
        "Full GST management",
        "Accounts payable/receivable",
        "Phone & email support",
        "Financial analysis",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹25,000",
      period: "/month",
      description: "Complete solution for established businesses",
      features: [
        "Unlimited transactions",
        "Real-time reporting",
        "Multi-location support",
        "Advanced analytics",
        "Dedicated account manager",
        "Priority support",
        "Custom integrations",
        "Audit preparation",
      ],
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How often will I receive financial reports?",
      answer:
        "We provide monthly financial statements including profit & loss, balance sheet, and cash flow statements. Quarterly reports include additional analysis and insights.",
    },
    {
      question: "What accounting software do you use?",
      answer:
        "We work with popular accounting software like Tally, QuickBooks, and Zoho Books. We can also recommend the best solution for your business needs.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We use bank-level encryption, secure cloud storage, and follow strict data protection protocols. All our staff sign confidentiality agreements.",
    },
    {
      question: "Can you help with tax preparation?",
      answer:
        "Yes, our bookkeeping services are designed to make tax preparation seamless. We also offer dedicated tax consulting services.",
    },
    {
      question: "What if I need to switch from my current bookkeeper?",
      answer:
        "We handle the entire transition process, including data migration and system setup, ensuring no disruption to your business operations.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-800/50 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="h-4 w-4" />
                  Professional Bookkeeping
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Expert Bookkeeping
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                    Services
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Transform your financial management with our comprehensive bookkeeping solutions. Accurate, timely,
                  and compliant services that empower your business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-300 text-blue-100 hover:bg-blue-800/50 hover:border-blue-200 bg-transparent"
                  >
                    View Pricing
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div className="text-blue-200 text-sm">Businesses Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                      <div className="text-blue-200 text-sm">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">24/7</div>
                      <div className="text-blue-200 text-sm">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">5★</div>
                      <div className="text-blue-200 text-sm">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bookkeeping Matters */}
       <AnimatedBookkeepingSection/>

        {/* Services We Offer */}
       <AnimatedServicesSection/>

        {/* Our Process */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Proven Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure seamless integration and ongoing excellence in your financial
                management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Bookkeeping Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core bookkeeping services with
                varying levels of support and features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "ring-2 ring-blue-500 shadow-2xl scale-105" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it—hear from businesses we've helped succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
         <section className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header with floating animation */}
        <div className="text-center mb-20 transform hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg animate-bounce">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
            <p className="text-xl text-gray-600 font-medium">Get answers to common questions about our bookkeeping services</p>
            <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse delay-300" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-white/50 ${
                openIndex === index ? 'scale-102 shadow-2xl bg-white/90' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <div className="relative">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between group-hover:bg-white/50 rounded-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold transition-all duration-300 ${
                      openIndex === index ? 'scale-110 rotate-12' : ''
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`transform transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-indigo-600' : 'text-gray-400 group-hover:text-indigo-500'
                  }`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                {/* Animated answer */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pl-14 pr-10">
                      <div className="h-px bg-gradient-to-r from-blue-200 to-indigo-200 mb-4 opacity-60"></div>
                      <p className={`text-gray-700 leading-relaxed transform transition-all duration-500 ${
                        openIndex === index ? 'translate-y-0' : 'translate-y-4'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 transform hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
            <span>Still have questions?</span>
            <span className="inline-block animate-bounce">💬</span>
          </div>
          <p className="text-gray-600 mt-4">Contact our team for personalized assistance</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Financial Management?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust us with their bookkeeping. Get started with a free consultation and
              see the difference professional bookkeeping can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-100 hover:bg-blue-800/50 hover:border-blue-200 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91-XXXXXXXXX
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
                <div className="text-blue-200">No obligation assessment</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">Quick Setup</div>
                <div className="text-blue-200">Get started in 48 hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">Money-Back Guarantee</div>
                <div className="text-blue-200">30-day satisfaction guarantee</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
