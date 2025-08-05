"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, ChevronUp, MessageCircle, Shield, DollarSign, CheckCircle, Send,ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"


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
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "We keep you informed at every step with clear, open communication.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: DollarSign,
      title: "Accurate Finances",
      description: "Our team provides precise financial tracking to ensure everything stays on budget and within scope.",
      color: "from-emerald-500 to-teal-600",
    },
  ]

const faqs = [
 {
    question: "What is ROC filing?",
    answer:
      "ROC filing is the mandatory submission of a company's annual financial and operational documents to the Registrar of Companies (ROC). It is a key part of MCA compliance and ensures transparency and regulatory oversight.",
  },
  {
    question: "Are these filings mandatory for all companies?",
    answer:
      "Yes, all registered private limited companies, one-person companies, public limited companies, and LLPs in India must comply with annual ROC filing requirements.",
  },
  {
    question: "What happens if I miss a filing deadline?",
    answer:
      "Missing a deadline results in significant daily penalties (additional fees). Prolonged non-compliance can lead to the disqualification of directors and the company being marked as 'ACTIVE non-compliant,' which can disrupt business operations.",
  },
  {
    question: "Can you help with old, pending compliance issues?",
    answer:
      "Yes, we can assist in identifying any past non-compliance, calculating penalties, and filing the necessary forms to make your company's status compliant again.",
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
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div id="faq-contact-section" className="relative dark:bg-gray-900 bg-gray-50">
      {/* Key Features Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Professional working image placeholder */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/how_it_work.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

          </div>

          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 group animate-slide-in"
                  style={{ animationDelay: `${index * 200 + 500}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold dark:text-white text-gray-900 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="dark:text-white/80 text-gray-600 leading-relaxed group-hover:dark:text-white group-hover:text-gray-900 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ and Contact Section */}
      <div className="relative z-10 dark:bg-blue-900/10 bg-blue-50 backdrop-blur-lg py-20">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12">
      {/* FAQ Section */}
      <div
        className={`space-y-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
            <p className="text-blue-500 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase">
              Frequently Asked Questions
            </p>
          </div>
          <h3 className="text-3xl font-bold dark:text-white text-gray-800">
            Need more information?
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="dark:bg-blue-900/20 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-blue-800/50"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-blue-50/50 dark:hover:bg-blue-900/30 transition-colors duration-200"
              >
                <span className="text-lg font-medium dark:text-blue-100 text-blue-800 pr-3">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500 dark:text-blue-400 transition-transform" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-500 dark:text-blue-400 transition-transform" />
                  )}
                </div>
              </button>

              {openFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <div className="border-t border-blue-100 dark:border-blue-800/50 pt-4">
                      <p className="dark:text-blue-200 text-blue-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        className={`transform transition-all duration-1000 delay-700 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <Card className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-8 rounded-3xl shadow-xl border-0 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5"></div>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                Ready to streamline your invoices?
              </h3>
              <p className="text-blue-100/90">
                Get in touch with our team for a personalized consultation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/90 dark:bg-white/10 border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg h-12 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/90 dark:bg-white/10 border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg h-12 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/90 dark:bg-white/10 border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg h-12 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white/90 dark:bg-white/10 border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg min-h-[120px] focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg h-12 shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-blue-400/30 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}