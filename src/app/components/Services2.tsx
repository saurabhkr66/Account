"use client"

import { motion } from "framer-motion"
import {
  Calculator,
  FileText,
  Users,
  DollarSign,
  Receipt,
  Building,
  Globe,
  FileCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Bookkeeping",
      description: "Comprehensive bookkeeping services to maintain accurate financial records.",
      icon: Calculator,
      image: "/placeholder.svg?height=250&width=400&text=Bookkeeping+Services",
      features: ["Daily transaction recording", "Bank reconciliation", "Financial data organization"],
    },
    {
      id: 2,
      title: "Invoicing Solutions",
      description: "Streamlined invoicing systems to manage billing and payments.",
      icon: FileText,
      image: "/placeholder.svg?height=250&width=400&text=Invoicing+Solutions",
      features: ["Automated billing", "Payment tracking", "Custom invoice templates"],
    },
    {
      id: 3,
      title: "Payroll Management",
      description: "Complete payroll processing and labor law compliance.",
      icon: Users,
      image: "/placeholder.svg?height=250&width=400&text=Payroll+Management",
      features: ["Salary calculations", "Tax deductions", "Compliance management"],
    },
    {
      id: 4,
      title: "Accounting",
      description: "Full-service accounting solutions and financial statements.",
      icon: DollarSign,
      image: "/placeholder.svg?height=250&width=400&text=Accounting+Services",
      features: ["Financial statements", "Ledger management", "Financial analysis"],
    },
    {
      id: 5,
      title: "Tax Consulting (Income Tax/GST)",
      description: "Expert tax consultation and GST compliance.",
      icon: Receipt,
      image: "/placeholder.svg?height=250&width=400&text=Tax+Consulting",
      features: ["Income tax planning", "GST compliance", "Tax optimization"],
    },
    {
      id: 6,
      title: "MCA Work",
      description: "Corporate compliance services for company registration and filings.",
      icon: Building,
      image: "/placeholder.svg?height=250&width=400&text=MCA+Compliance",
      features: ["Company registration", "Annual filings", "Regulatory compliance"],
    },
    {
      id: 7,
      title: "All Other Tax & Accounting Work",
      description: "Comprehensive tax and accounting services.",
      icon: FileCheck,
      image: "/placeholder.svg?height=250&width=400&text=Complete+Tax+Services",
      features: ["Financial management", "Regulatory compliance", "Custom solutions"],
    },
    {
      id: 8,
      title: "Foreign Accounting",
      description: "Coming soon: International accounting for global businesses.",
      icon: Globe,
      image: "/placeholder.svg?height=250&width=400&text=International+Accounting",
      features: ["Global compliance", "Multi-currency support", "International standards"],
      comingSoon: true,
    },
  ]

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Looking For
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive accounting and financial services to handle every aspect of your operations.
          </p>
        </div>

        {/* Animated Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-9xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLeft = index % 2 === 0

            const fadeVariant = {
              hidden: { opacity: 0, x: isLeft ? -60 : 60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.05 * index,
                },
              },
            }

            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeVariant}
              >
                <div className={`relative group ${service.comingSoon ? "opacity-75" : ""}`}>
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 group-hover:border-blue-200 group-hover:-translate-y-2 transition-all duration-500">
                    {service.comingSoon && (
                      <div className="absolute top-6 right-6 z-10 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                        Coming Soon
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6 text-base">{service.description}</p>

                      <ul className="mb-8 space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-center text-gray-700 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4">
                        <Button
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                          disabled={service.comingSoon}
                        >
                          {service.comingSoon ? "Notify Me" : "Get Started"}
                        </Button>
                        <Button
                          variant="outline"
                          className="border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 bg-transparent"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Start with our expert accounting solutions and experience smarter financial management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 bg-transparent"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
