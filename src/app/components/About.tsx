"use client"

import { useState, useEffect } from "react"
import { Calculator, Shield, Clock, TrendingUp, Users, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    {
      icon: Calculator,
      title: "Expert Financial Management",
      description: "Professional bookkeeping and financial reporting with 99.9% accuracy guarantee",
      color: "from-blue-600 via-blue-500 to-cyan-400",
      hoverColor: "from-blue-500 via-cyan-400 to-blue-600",
      delay: "delay-100",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with full compliance to tax regulations and industry standards",
      color: "from-purple-600 via-blue-500 to-indigo-400",
      hoverColor: "from-indigo-500 via-purple-400 to-blue-600",
      delay: "delay-200",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance with dedicated account managers for your business",
      color: "from-emerald-600 via-blue-500 to-teal-400",
      hoverColor: "from-teal-500 via-emerald-400 to-blue-600",
      delay: "delay-300",
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused",
      description: "Strategic insights and analytics to help scale your business efficiently",
      color: "from-orange-600 via-blue-500 to-amber-400",
      hoverColor: "from-amber-500 via-orange-400 to-blue-600",
      delay: "delay-400",
    },
    {
      icon: Users,
      title: "Trusted by 10,000+",
      description: "Join thousands of satisfied clients who trust us with their financial success",
      color: "from-rose-600 via-blue-500 to-pink-400",
      hoverColor: "from-pink-500 via-rose-400 to-blue-600",
      delay: "delay-500",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized industry leader with multiple certifications and excellence awards",
      color: "from-violet-600 via-blue-500 to-purple-400",
      hoverColor: "from-purple-500 via-violet-400 to-blue-600",
      delay: "delay-600",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Happy Clients" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Sparkles className="w-4 h-4" />
              Trusted by 10,000+ Businesses
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient-x">
                Accounting Service
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our comprehensive accounting solutions designed to streamline your finances
              and accelerate your business growth.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-blue-100/50 relative overflow-hidden group-hover:scale-105">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" style={{ padding: '2px' }}>
                  <div className="bg-white rounded-3xl w-full h-full" />
                </div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mb-2 animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border-0 bg-white/90 backdrop-blur-sm transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${feature.delay} relative overflow-hidden hover:scale-105`}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-700 animate-gradient-x`}
                />
                
                {/* Floating Orbs */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce" />

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl relative overflow-hidden`}
                >
                  <feature.icon className="w-full h-full text-white relative z-10" />
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-pulse`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Arrow with Animation */}
                <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-20px] group-hover:translate-x-0">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
       
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
