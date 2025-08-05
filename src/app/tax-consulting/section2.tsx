"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Monitor, TrendingUp, DollarSign, BarChart3, PieChart, Settings } from "lucide-react"

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
    "Strategic Partnership",
    "Forward-Looking Insights",
    "Seamless Onboarding & Integration",
    "Holistic Financial Oversight",
    "Expert-Led and Technology-Powered",
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
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
Facing a Tax Audit?
            </h2>

            <p className="dark:text-white/80 text-gray-600 text-lg text-justify leading-relaxed">
A tax audit can be an intimidating and disruptive process for any business owner. 
Our expert representation service provides complete peace of mind by managing the entire audit on your behalf, from initial contact to final resolution. We handle all communications and documentation, protecting your interests and ensuring the process is as smooth as possible.



  </p>        </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {/* Professional with dashboard */}
            <div className="relative">
              {/* Main dashboard card */}
              <div className="w-80 h-64 dark:bg-white/10 bg-white/80 backdrop-blur-lg rounded-3xl dark:border-white/20 border-gray-200 p-6 shadow-2xl mx-auto">
                <div className="h-full bg-gradient-to-br dark:from-blue-50/80 from-blue-50 to-cyan-50 rounded-2xl p-4 relative overflow-hidden">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-slate-800 font-semibold text-sm">Business Projections</h4>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Donut chart */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-spin-slow opacity-80"></div>
                      <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center">
                        <PieChart className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-2">
                    {["Forecast vs Actuals", "Cash Flow Optimization", "Custom Financial Strategies"].map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 p-2 dark:bg-white/50 bg-white rounded-lg animate-slide-in"
                          style={{ animationDelay: `${index * 200 + 1000}ms` }}
                        >
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span className="text-slate-700 text-xs font-medium">{feature}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Professional avatar */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-cyan-600/20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full backdrop-blur-lg dark:border-white/20 border-gray-200 flex items-center justify-center animate-float">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center">
                  <Monitor className="h-12 w-12 text-white" />
                </div>
              </div>
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
                {/* Laptop base */}
                <div className="relative">
                  <div className="w-80 h-48 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-cyan-600/20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl backdrop-blur-lg dark:border-white/20 border-gray-200 p-6 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                    {/* Screen content */}
                    <div className="h-full bg-gradient-to-br dark:from-blue-50/80 from-blue-50 to-cyan-50 rounded-xl p-4 relative overflow-hidden">
                      {/* Floating UI elements */}
                      <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center animate-bounce">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>

                      <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center animate-pulse">
                        <Settings className="h-4 w-4 text-white" />
                      </div>

                      {/* Chart area */}
                      <div className="mt-8 grid grid-cols-5 gap-1 h-16 items-end">
                        {[40, 60, 35, 80, 55].map((height, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t animate-grow-bar"
                            style={{
                              height: `${height}%`,
                              animationDelay: `${index * 150}ms`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating coins */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>

                  <div className="absolute -top-2 -right-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center animate-ping shadow-lg">
                    <span className="text-white text-xs font-bold">$</span>
                  </div>

                  <div className="absolute -bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse shadow-lg"></div>

                  <div className="absolute -bottom-2 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full animate-bounce delay-500 shadow-lg"></div>

                  {/* Floating UI cards */}
                  <div className="absolute -left-8 top-12 w-16 h-12 bg-gradient-to-r from-blue-400/80 to-cyan-500/80 rounded-lg backdrop-blur-lg dark:border-white/20 border-gray-200 flex items-center justify-center animate-float shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>

                  <div className="absolute -right-8 top-20 w-16 h-12 bg-gradient-to-r from-blue-500/80 to-cyan-600/80 rounded-lg backdrop-blur-lg dark:border-white/20 border-gray-200 flex items-center justify-center animate-float-delayed shadow-lg">
                    <PieChart className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`space-y-8 order-1 lg:order-2 transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
Expanding Internationally?
            </h2>

              <p className="dark:text-white/80 text-gray-600 text-lg leading-relaxed text-justify">
 This speaks to the unique tax complexities that arise when a business begins to operate in multiple countries. 
 We provide the specialized knowledge required to navigate international tax treaties, transfer pricing, and foreign tax credits.
  This ensures your global operations are structured in the most tax-efficient manner, preventing double taxation and maximizing global profits.         </p>
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
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25 group"
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