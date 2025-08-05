

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Sparkles, TrendingUp, Users, FileText, Calendar, Target } from "lucide-react"
import SeamlessProcessesSection from "./section2"
import TestimonialsSection from "./testimonial"
import FaqContactSection from "./contact"
import Component from "./finicial"
import Image from "next/image"

const phrases = [
  "Delayed Payments?",
  "Inefficient Approval workflows?",
  "Duplicate or Missing Invoices?",
]

export default function AnimatedPayrollLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    clients: 0,
    invoices: 0,
    projects: 0,
    reconciliation: 0,
    team: 0,
  })

  useEffect(() => {
    setIsVisible(true)
    // Animate counters
    const animateCounter = (key: keyof typeof counters, target: number, duration = 2000) => {
      const start = Date.now()
      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - start) / duration, 1)
        const value = Math.floor(progress * target)
        setCounters((prev) => ({ ...prev, [key]: value }))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      animate()
    }

    const timer = setTimeout(() => {
      animateCounter("clients", 150)
      animateCounter("invoices", 500)
      animateCounter("projects", 89)
      animateCounter("reconciliation", 2300)
      animateCounter("team", 25)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const features = [
    { icon: TrendingUp, text: "EXPENSE TRACKING", color: "from-blue-600 to-blue-800" },
    { icon: Sparkles, text: "NEW SERVICE LAUNCH", color: "from-blue-500 to-blue-700" },
    { icon: Target, text: "MARKETING STRATEGY", color: "from-blue-700 to-blue-900" },
    { icon: FileText, text: "BOOKKEEPING", color: "from-blue-400 to-blue-600" },
    { icon: Calendar, text: "PAYROLL MANAGEMENT", color: "from-blue-600 to-blue-800" },
  ]

  const [index, setIndex] = useState(0)
  const [showLetters, setShowLetters] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setShowLetters(false)
    setKey((prev) => prev + 1)

    const showTimer = setTimeout(() => {
      setShowLetters(true)
    }, 300)

    const currentPhrase = phrases[index]
    const totalLetters = currentPhrase.length
    const letterDelay = 100
    const pauseAfterComplete = 1000

    const totalAnimationTime = totalLetters * letterDelay + pauseAfterComplete + 500

    const nextPhraseTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, totalAnimationTime)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(nextPhraseTimer)
    }
  }, [index])

  const currentPhrase = phrases[index]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse bg-blue-400/20 dark:bg-blue-500/10"></div>
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 bg-blue-500/20 dark:bg-blue-600/10"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse delay-2000 bg-blue-300/20 dark:bg-blue-400/10"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse delay-3000 bg-blue-600/20 dark:bg-blue-700/10"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Are You Suffering With
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-center">
                {currentPhrase.split("").map((char, i) => (
                  <span
                    key={`${key}-${i}`}
                    className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent opacity-0 animate-fade-in"
                    style={{
                      animationDelay: showLetters ? `${i * 0.1}s` : "0s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                We'll Help You Manage It All!
              </h3>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25 group border-0"
            >
              Book A Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative">
              {/* Floating dashboard cards */}
              <div className="absolute -top-8 -left-8 w-64 h-40 rounded-2xl border p-4 animate-float shadow-2xl bg-white/80 backdrop-blur-lg border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
                <div className="h-full rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm font-medium text-gray-800 dark:text-white">Analytics Dashboard</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-12 w-72 h-44 rounded-2xl border p-4 animate-float-delayed shadow-2xl bg-white/80 backdrop-blur-lg border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
                <div className="h-full rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800/30 dark:to-blue-700/30">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm font-medium text-gray-800 dark:text-white">Payroll Management</p>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-80 rounded-3xl backdrop-blur-lg border relative overflow-hidden shadow-2xl bg-gradient-to-br from-white/50 to-gray-100/50 border-gray-300 dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-gray-800/50 dark:border-gray-700"
              >
                <Image
                  src="/invoice.webp"
                  alt="Dashboard Preview"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Statistics Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <Card className="backdrop-blur-lg p-8 rounded-3xl shadow-2xl bg-white/80 border-gray-200 dark:bg-gray-900/50 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {counters.clients}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">CLIENTS SERVED</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">
                {counters.invoices}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">INVOICES PROCESSED PER MONTH</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                {counters.projects}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">COMPLETED PROJECTS</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent mb-2">
                {counters.reconciliation}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">RECONCILIATION IN A MONTH</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent mb-2">
                {counters.team}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">TEAM SIZE</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Services Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Expert   {" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
 Tax Consulting Services             </span>
            </h2>
            <p className="text-lg leading-relaxed text-justify text-gray-600 dark:text-gray-300">
             In today's intricate global economy, effective tax strategy is more than just a compliance necessity—it's a critical driver of 
           profitability and business sustainability. A reactive approach to taxes can lead to overpayment, missed opportunities, and 
           unnecessary risk. Our expert tax consulting services are designed to provide proactive, strategic guidance that aligns with
            your business objectives, ensuring you navigate the complexities of tax law with confidence and efficiency.
            </p>
          </div>
          <div className="relative">
            {/* Mobile mockup */}
            <div className="w-80 h-[600px] rounded-[3rem] p-6 mx-auto shadow-2xl border-4 bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
              <div className="w-full h-full rounded-[2rem] p-6 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-800">
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r ${feature.color} transform hover:scale-105 transition-all duration-300 shadow-lg animate-slide-in`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm">{feature.text}</span>
                    </div>
                  ))}
                  {/* Progress bar */}
                  <div className="mt-8 p-4 rounded-2xl bg-gray-100 dark:bg-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Overall Progress</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-white">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-600">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full animate-progress shadow-lg"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services We Offer Section */}
      <div className="relative z-10 py-20 bg-gray-100/80 backdrop-blur-lg dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
 Our Tax Consulting Services Include               </h2>
               <div className="space-y-6">
                 {[
                  "Strategic Tax Planning",
                  "Corporate Tax Compliance",
                  "International Tax Advisory",
                  "Indirect Tax Services (GST/VAT)",
                  "Tax Representation & Dispute Resolution",
                  "Mergers & Acquisitions (M&A) Tax",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group hover:translate-x-2 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-blue-500 transition-colors duration-300 text-gray-800 dark:text-white">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
             <Image
              src="/bookeeping.webp" // Replace with your image path (e.g. public/your-image.jpg)
              alt="Illustration of finance tools"
              width={1200} // Adjust width
              height={320} // Adjust height
              className="rounded-3xl object-cover w-full "
            />
          </div>
        </div>
      </div>

      {/* Challenges We Tackle Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Challenges We Tackle for You
          </h2>
        </div>
        {/* Payroll Accuracy Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
                          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent">

  Worried About Changing Tax Laws? </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
   This addresses the challenge of keeping up with complex and frequently updated tax legislation,
       which can create risks for your business. Our team dedicates itself to constantly monitoring these changes to ensure your business 
       remains fully compliant. This proactive approach not only prevents penalties but also allows you to capitalize on new opportunities 
       as they arise.
            </p>
          </div>
          <div className="relative">
            {/* Dashboard mockups */}
            <div className="relative">
              {/* Main dashboard */}
              <div className="w-full h-64 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-300">Accounts Payable</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
                  </div>
                </div>
                {/* Chart area */}
                <div className="grid grid-cols-6 gap-2 h-32 items-end">
                  {[60, 80, 45, 90, 70, 85].map((height, index) => (
                    <div
                      key={index}
                      className="rounded-t animate-grow-bar shadow-lg bg-gradient-to-t from-blue-500 to-blue-300 dark:from-blue-600 dark:to-blue-400"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 150}ms`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              {/* Floating expense card */}
              <div className="absolute -top-4 -right-8 w-48 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 shadow-2xl animate-float-delayed">
                <h5 className="text-white font-semibold text-sm mb-2">Expenses</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-white text-xs">
                    <span>Payroll</span>
                    <span>$45,230</span>
                  </div>
                  <div className="flex justify-between text-white text-xs">
                    <span>Benefits</span>
                    <span>$12,450</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full animate-progress shadow-sm"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Best Practices Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Laptop mockup */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                {/* Laptop base */}
                <div className="rounded-t-3xl p-8 shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                  <div className="rounded-2xl p-6 h-64 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-300">Payroll Dashboard</h4>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full shadow-sm"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full shadow-sm"></div>
                      </div>
                    </div>
                    {/* Dashboard content */}
                    <div className="space-y-4">
                      {/* Progress rings */}
                      <div className="flex justify-center space-x-6">
                        <div className="relative w-16 h-16">
                          <div className="absolute inset-0 rounded-full animate-spin-slow shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 opacity-20 dark:from-blue-500 dark:to-blue-600"></div>
                          <div className="absolute inset-2 rounded-full flex items-center justify-center shadow-md bg-white dark:bg-gray-700">
                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">85%</span>
                          </div>
                        </div>
                        <div className="relative w-16 h-16">
                          <div className="absolute inset-0 rounded-full animate-pulse shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 opacity-20 dark:from-blue-600 dark:to-blue-700"></div>
                          <div className="absolute inset-2 rounded-full flex items-center justify-center shadow-md bg-white dark:bg-gray-700">
                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">92%</span>
                          </div>
                        </div>
                      </div>
                      {/* Mini charts */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg p-3 shadow-sm bg-gray-100 dark:bg-gray-600">
                          <div className="flex items-end space-x-1 h-8">
                            {[4, 6, 3, 8, 5].map((height, index) => (
                              <div
                                key={index}
                                className="rounded-t flex-1 animate-grow-bar shadow-sm bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500"
                                style={{
                                  height: `${height * 4}px`,
                                  animationDelay: `${index * 100}ms`,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-lg p-3 shadow-sm bg-gray-100 dark:bg-gray-600">
                          <div className="flex items-end space-x-1 h-8">
                            {[6, 4, 7, 5, 8].map((height, index) => (
                              <div
                                key={index}
                                className="rounded-t flex-1 animate-grow-bar shadow-sm bg-gradient-to-t from-blue-400 to-blue-300 dark:from-blue-500 dark:to-blue-400"
                                style={{
                                  height: `${height * 4}px`,
                                  animationDelay: `${index * 100 + 500}ms`,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop bottom */}
                <div className="h-4 rounded-b-3xl shadow-lg bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800"></div>
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
            Leaving Money on the Table?  </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          This point targets the common issue where businesses fail to claim all the financial benefits they are entitled to.
         We conduct comprehensive reviews of your financial activities to identify every available tax credit, deduction, and incentive. 
         This meticulous process ensures you are not overpaying and that you maximize your potential savings.


            </p>
          </div>
        </div>
      </div>
      <SeamlessProcessesSection/>
      <TestimonialsSection/>
      <FaqContactSection/>
      <Component/>
    </div>
  )
}