"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Shield, 
  DollarSign, 
  CheckCircle, 
  Send, 
  ArrowRight, 
  Phone, 
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Star,
  Zap
} from 'lucide-react'

export default function FaqContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const keyFeatures = [
    {
      icon: Shield,
      title: "Seamless Transition",
      description: "We ensure a smooth, hassle-free transition, minimizing disruption to your operations.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "We keep you informed at every step with clear, open communication.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: DollarSign,
      title: "Accurate Finances",
      description: "Our team provides precise financial tracking to ensure everything stays on budget and within scope.",
      color: "from-violet-500 to-purple-600",
    },
  ]

  const faqs = [
    {
      question: "What is the difference between your bookkeeping and accounting services?",
      answer:
        "Bookkeeping is the process of recording daily financial transactions. Our accounting services take that data and interpret, analyze, and summarize it to provide strategic insights, help with tax planning, and guide high-level business decisions.",
    },
    {
      question: "Can you help my business reduce its tax burden?",
      answer:
        "Yes. Our primary goal with tax services is proactive planning. We work with you year-round to implement strategies that legally and effectively minimize your tax liability.",
    },
    {
      question: "How can strategic accounting help my business grow?",
      answer:
        "By providing clear financial forecasts, identifying key performance indicators, analyzing profitability, and offering expert advice, we empower you to make smarter decisions about expansion, investment, and operations, directly fueling your growth.",
    },
    {
      question: "Do I need Virtual CFO services?",
      answer:
        "If your business needs high-level financial strategy and guidance but isn't ready for the expense of a full-time CFO, our Virtual CFO service is the perfect solution. It provides the expert oversight you need on a flexible, cost-effective basis.",
    },
    {
      question: "Can payroll outsourcing services grow with my business?",
      answer:
        "Professional payroll outsourcing services are designed to scale with your business. Whether you're adding employees, expanding to new locations, or changing benefit structures, outsourcing providers can adapt their services to meet your evolving needs without requiring additional internal resources.",
    },
    {
      question: "What makes your accounting service different from others?",
      answer:
        "We combine traditional accounting expertise with modern technology and personalized service. Our team focuses on building long-term relationships, providing proactive advice, and using cutting-edge tools to deliver accurate, timely financial insights that drive business growth.",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@yourcompany.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Business St, City, ST 12345",
      description: "Schedule an appointment"
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("faq-contact-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="faq-contact-section" className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-violet-200/40 to-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/35 to-rose-300/25 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-cyan-200/35 to-blue-300/25 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-br from-yellow-200/30 to-orange-300/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400/60 via-cyan-400/60 to-blue-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100/80 to-cyan-100/80 border-2 border-emerald-200/50 backdrop-blur-sm rounded-full mb-8">
              <Star className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">FAQ & Contact</span>
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Questions &
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions or reach out to our expert team for personalized assistance
            </p>
          </motion.div>

          <div className="space-y-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-10 bg-gradient-to-b from-emerald-500 to-cyan-600 rounded-full"></div>
              <div>
                <p className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-2">
                  Frequently Asked Questions
                </p>
                <h3 className="text-3xl font-bold text-gray-800">
                  Need more information?
                </h3>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-emerald-200/70">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-1 text-left flex items-center justify-between hover:bg-emerald-50/50 transition-all duration-300 group-hover:bg-emerald-50/30"
                      >
                        <span className="text-lg font-semibold text-gray-800 pr-4 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-all duration-300">
                          {openFaq === index ? (
                            <ChevronUp className="h-5 w-5 text-emerald-600" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-emerald-600" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-600 leading-relaxed text-lg">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-gray-200/50 relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-3xl blur opacity-0 hover:opacity-20 transition duration-700"></div>
                
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Get in touch with our expert team for a personalized consultation
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-50/50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-500 rounded-xl h-14 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm"
                        required
                      />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-gray-50/50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-500 rounded-xl h-14 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm"
                        required
                      />
                    </div>
                    
                    <Input
                      name="email"
                      type="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-50/50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-500 rounded-xl h-14 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                    
                    <Textarea
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-50/50 border-2 border-gray-200 text-gray-800 placeholder:text-gray-500 rounded-xl min-h-[140px] focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 resize-none backdrop-blur-sm"
                      required
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl h-14 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-emerald-500/25 group"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center"
          >
            <div className="w-full">
              <div className="relative block w-full max-w-7xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 border-2 border-gray-200/50 shadow-2xl">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <Clock className="w-10 h-10 text-emerald-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Need Immediate Assistance?</h3>
                    <Zap className="w-10 h-10 text-cyan-600" />
                  </div>
                  
                  <p className="text-gray-600 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    Our team is ready to help you with your accounting and tax needs. 
                    Choose the option that works best for you.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 text-lg hover:to-teal-700 text-white font-semibold py-6 px-10 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
                      <Phone className="w-7 h-7" />
                      <span>Call Now</span>
                    </Button>
                    
                    <Button variant="outline" className="text-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800 hover:bg-gray-50 font-semibold py-6 px-10 rounded-xl transition-all duration-300 backdrop-blur-sm transform hover:scale-105 inline-flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5" />
                      <span>WhatsApp Chat</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
