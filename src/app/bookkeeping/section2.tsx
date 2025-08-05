"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Monitor, TrendingUp, DollarSign, BarChart3, PieChart, Settings } from "lucide-react"
import Image from "next/image"
export default function SeamlessProcessesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("seamless-processes")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const switchFeatures = [
    "Dedicated Bookkeeping Experts",
    "Advanced & Secure Technology",
    "Seamless Onboarding & Integration",
    "Actionable Financial Insights",
    "No Disruption to Operations",
    "Scalable Solutions",
  ]

  return (
    <div id="seamless-processes" className="relative dark:bg-gray-900 bg-gray-50">
      {/* Seamless Time-Consuming Processes Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
             Lacking Financial Visibility? 
            </h2>

            <p className="dark:text-white/80 text-gray-600 text-lg leading-relaxed">
 This point targets the challenge of not having a clear understanding of your company's financial health, which hinders strategic planning. 
 We solve this by transforming your raw data into clear, concise, and actionable financial reports.
  These insights empower you to see the bigger picture and make informed decisions that drive growth.  </p>        </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/3.png" // Replace with your image path  
              alt="Illustration of financial visibility"
              width={600} // Adjust width

              height={200} // Adjust height
              className="rounded-3xl object-cover"/>
          </div>
          </div>
        </div>
      </div>

      {/* Payroll Made Simple Section */}
      <div className="relative z-10 dark:bg-white/5 bg-blue-50 backdrop-blur-lg py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Isometric laptop illustration */}
             <div className="relative w-full max-w-md mx-auto">
                                    <Image
                                      src="/5.png" // Replace with your image path  
                                      alt="Illustration of financial visibility"
                                      width={600} // Adjust width
                        
                                      height={200} // Adjust height
                                      className="rounded-3xl object-cover"/>
                                  </div>
            </div>

            <div
              className={`space-y-8 order-1 lg:order-2 transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
High In-house Costs?              </h2>

              <p className="dark:text-white/80 text-gray-600 text-lg leading-relaxed">
 This highlights the significant expense of hiring a full-time bookkeeper, which includes salary, benefits, and training.
  By outsourcing to us, you gain access to a team of professionals for a fraction of the cost.
  This provides a cost-effective solution without compromising on the quality or expertise your business needs.              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Switch to Whiz Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-700 p-8 rounded-3xl shadow-2xl border-0 hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                {switchFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group animate-slide-in"
                    style={{ animationDelay: `${index * 150 + 1500}ms` }}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div
            className={`space-y-8 transform transition-all duration-1000 delay-900 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-white text-gray-900 leading-tight">
              Switch to Whiz{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Effortlessly!
              </span>
            </h2>

            <p className="dark:text-white/80 text-gray-600 text-lg leading-relaxed">
              Whiz makes the experience of shifting to a new accounting partner easy and hassle-free. We make sure that
              there are no disruptions and that there's a smooth transition when you switch to us. Let us handle the
              financial responsibilities while you focus on building your business.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-400 to-blue-500 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25 group"
            >
              Switch Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}