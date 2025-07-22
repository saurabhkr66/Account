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
  Sparkles,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Bookkeeping",
      description: "Comprehensive bookkeeping services to maintain accurate financial records with precision and care.",
      icon: Calculator,
      image: "/bookeeping.webp",
      features: ["Daily transaction recording", "Bank reconciliation", "Financial data organization"],
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-600 to-blue-700",
    },
    {
      id: 2,
      title: "Invoicing Solutions",
      description: "Streamlined invoicing systems to manage billing and payments effortlessly.",
      icon: FileText,
      image: "/bookeeping.webp",
      features: ["Automated billing", "Payment tracking", "Custom invoice templates"],
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "from-emerald-600 to-teal-700",
    },
    {
      id: 3,
      title: "Payroll Management",
      description: "Complete payroll processing and labor law compliance for your peace of mind.",
      icon: Users,
      image: "/bookeeping.webp",
      features: ["Salary calculations", "Tax deductions", "Compliance management"],
      gradient: "from-violet-500 to-purple-600",
      hoverGradient: "from-violet-600 to-purple-700",
    },
    {
      id: 4,
      title: "Accounting",
      description: "Full-service accounting solutions and comprehensive financial statements.",
      icon: DollarSign,
      image: "/bookeeping.webp",
      features: ["Financial statements", "Ledger management", "Financial analysis"],
      gradient: "from-orange-500 to-red-500",
      hoverGradient: "from-orange-600 to-red-600",
    },
    {
      id: 5,
      title: "Tax Consulting (Income Tax/GST)",
      description: "Expert tax consultation and GST compliance to maximize your savings.",
      icon: Receipt,
      image: "/bookeeping.webp",
      features: ["Income tax planning", "GST compliance", "Tax optimization"],
      gradient: "from-pink-500 to-rose-600",
      hoverGradient: "from-pink-600 to-rose-700",
    },
    {
      id: 6,
      title: "MCA Work",
      description: "Corporate compliance services for seamless company registration and filings.",
      icon: Building,
      image: "/bookeeping.webp",
      features: ["Company registration", "Annual filings", "Regulatory compliance"],
      gradient: "from-indigo-500 to-blue-600",
      hoverGradient: "from-indigo-600 to-blue-700",
    },
    {
      id: 7,
      title: "All Other Tax & Accounting Work",
      description: "Comprehensive tax and accounting services tailored to your needs.",
      icon: FileCheck,
      image: "/bookeeping.webp",
      features: ["Financial management", "Regulatory compliance", "Custom solutions"],
      gradient: "from-yellow-500 to-amber-600",
      hoverGradient: "from-yellow-600 to-amber-700",
    },
    {
      id: 8,
      title: "Foreign Accounting",
      description: "Coming soon: International accounting for global businesses expansion.",
      icon: Globe,
      image: "/bookeeping.webp",
      features: ["Global compliance", "Multi-currency support", "International standards"],
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-600 to-emerald-700",
      comingSoon: true,
    },
  ]

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-rose-300/40 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-100/80 to-blue-100/80 border-2 border-cyan-200/50 text-cyan-700 text-sm font-semibold px-6 py-3 rounded-full mb-6 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-600" />
              Our Services
              <Star className="w-4 h-4 ml-2 text-cyan-600" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-800"
          >
            Everything Your Business
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
              Looking For
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive accounting and financial services designed to elevate your business operations 
            with precision, expertise, and innovation.
          </motion.p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-8xl mx-auto">
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
                <div className={`relative group ${service.comingSoon ? "opacity-90" : ""}`}>
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000`}></div>
                  
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 shadow-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-gray-200/60">
                    {service.comingSoon && (
                      <div className="absolute top-6 right-6 z-10 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse">
                        <span className="flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Enhanced Image Section */}
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                        <Icon className={`w-6 h-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                      </div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <div className={`w-8 h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-8 text-base group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>

                      <ul className="mb-8 space-y-3">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-center text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-4 flex-shrink-0`}></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex gap-4">
                        <Button
                          className={`flex-1 bg-gradient-to-r ${service.gradient} hover:${service.hoverGradient} hover:shadow-lg text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${service.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={service.comingSoon}
                        >
                          {service.comingSoon ? "Notify Me" : "Get Started"}
                        </Button>
                        <Button
                          variant="outline"
                          className={`border-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent border-gray-300 hover:border-gray-400 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 backdrop-blur-sm transform hover:scale-105 shadow-lg`}
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

       
      </div>
    </section>
  )
}
