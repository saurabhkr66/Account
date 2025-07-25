// FaqSection.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Star, Sparkles } from "lucide-react"
import Image from "next/image"

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

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index)

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Header and Image */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-100/80 to-cyan-100/80 border-2 border-cyan-200/50 backdrop-blur-sm rounded-full mb-6">
                <Star className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 font-semibold">FAQ</span>
                <Sparkles className="w-4 h-4 text-cyan-600" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Frequently Asked
                <br />
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
                Get answers to the most common inquiries about our services and support.
              </p>
            </div>

            {/* Image/Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-200 rounded-2xl p-8 lg:p-12">
                {/* You can replace this with an actual image */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our team is here to help you with any additional inquiries.
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="space-y-4 ">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 shadow hover:shadow-md transition-all">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-2  flex justify-between items-center text-left hover:bg-emerald-50/30"
                  >
                    <span className="text-lg font-medium text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600 text-base pt-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
