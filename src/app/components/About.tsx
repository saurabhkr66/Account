"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, Shield, Clock, TrendingUp, Users, Award, CheckCircle, ArrowRight, Sparkles, Star, Zap } from 'lucide-react'
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
      title: "Expert Management",
      description: "Professional bookkeeping and financial reporting with 99.9% accuracy guarantee and real-time insights",
      color: "from-emerald-500 via-teal-500 to-cyan-600",
      hoverColor: "from-emerald-600 via-teal-600 to-cyan-700",
      delay: 0,
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with full compliance to tax regulations, data protection, and industry standards",
      color: "from-blue-500 via-indigo-500 to-purple-600",
      hoverColor: "from-blue-600 via-indigo-600 to-purple-700",
      delay: 100,
    },
    {
      icon: Clock,
      title: "24/7 Expert Support",
      description: "Round-the-clock assistance with dedicated account managers and instant query resolution",
      color: "from-violet-500 via-fuchsia-500 to-pink-600",
      hoverColor: "from-violet-600 via-fuchsia-600 to-pink-700",
      delay: 200,
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Analytics",
      description: "Strategic insights, predictive analytics, and actionable recommendations to accelerate business growth",
      color: "from-orange-500 via-amber-500 to-yellow-600",
      hoverColor: "from-orange-600 via-amber-600 to-yellow-700",
      delay: 300,
    },
    {
      icon: Users,
      title: "Trusted by 10,000+",
      description: "Join thousands of successful businesses who trust us with their financial operations and growth",
      color: "from-rose-500 via-pink-500 to-purple-600",
      hoverColor: "from-rose-600 via-pink-600 to-purple-700",
      delay: 400,
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Industry-leading service with multiple certifications, excellence awards, and proven track record",
      color: "from-cyan-500 via-sky-500 to-blue-600",
      hoverColor: "from-cyan-600 via-sky-600 to-blue-700",
      delay: 500,
    },
  ]

  const stats = [
    { number: "10,000+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Award },
  ]

  return (
    <section className="py-24  overflow-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/35 to-rose-300/25 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }} />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-sky-400/60 via-blue-400/60 to-indigo-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-100/80 to-cyan-100/80 border-2 border-sky-200/50 text-sky-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm shadow-lg">
            <Star className="w-4 h-4 text-sky-600" />
            Trusted by 10,000+ Businesses
            <Sparkles className="w-4 h-4 text-sky-600" />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Accounting Service
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the difference with our comprehensive accounting solutions designed to streamline your finances,
            ensure compliance, and accelerate your business growth with cutting-edge technology.
          </p>
        </motion.div>

        {/* Enhanced Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200/50 overflow-hidden group-hover:border-sky-200/70">
                  {/* Icon */}
                  <stat.icon className="w-10 h-10 text-cyan-600 mx-auto mb-4 group-hover:scale-110 group-hover:text-cyan-600 transition-all duration-300" />
                  
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay / 1000 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <Card className="h-96 border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-gray-200/50 overflow-hidden relative group-hover:border-gray-300/70">
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700`}></div>
                
                <CardContent className="relative p-8 h-full flex flex-col">
                  {/* Animated Background Gradient */}
                  
                  {/* Enhanced Floating Orbs */}

                  {/* Enhanced Icon */}
                  <div className="relative mb-6">
                    <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${feature.color} p-5 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                      <feature.icon className="w-full h-full text-white relative z-10" />
                      {/* Icon Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-pulse`} />
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Animated Underline */}
                    <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 flex-1">
                      {feature.description}
                    </p>

                    {/* Enhanced Hover Arrow */}
                    <div className={`flex items-center bg-gradient-to-r ${feature.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-20px] group-hover:translate-x-0`}>
                      <span className="text-sm font-semibold mr-2">Discover More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 text-emerald-600" />
                    </div>
                  </div>

                  {/* Enhanced Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  )
}
