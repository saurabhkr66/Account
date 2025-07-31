"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Sparkles, Award } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Switching to their accounting service was the best decision for our business. The precision and expertise they bring has transformed our financial management completely. Their modern approach combined with traditional values makes them stand out.",
    name: "Phani Kumar",
    title: "MD, Syndy Pharma",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "PK",
    rating: 5,
    company: "Pharmaceutical Industry",
  },
  {
    id: 2,
    text: "The transition was seamless and the customer support team guided us through every step. Our accounting processes are now 3x faster and more accurate. The intuitive approach makes complex financial tasks feel effortless.",
    name: "Sarah Johnson",
    title: "CFO, TechCorp Solutions",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "SJ",
    rating: 5,
    company: "Technology Sector",
  },
  {
    id: 3,
    text: "After using traditional accounting services for years, this feels like a breath of fresh air. The modern approach and powerful insights have transformed how we handle our finances. Highly recommend to any growing business.",
    name: "Michael Chen",
    title: "Founder, GrowthLab",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "MC",
    rating: 5,
    company: "Startup Ecosystem",
  },
  {
    id: 4,
    text: "Their reporting capabilities are outstanding. We can get comprehensive financial insights in minutes instead of hours. The real-time analysis has helped us make better business decisions and improve our cash flow significantly.",
    name: "Emily Rodriguez",
    title: "Finance Director, InnovateCo",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "ER",
    rating: 5,
    company: "Innovation Hub",
  },
  {
    id: 5,
    text: "Professional, reliable, and incredibly efficient. Their team's expertise in tax compliance and financial planning has saved us countless hours and significant costs. The peace of mind they provide is invaluable.",
    name: "David Thompson",
    title: "CEO, BuildRight Construction",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "DT",
    rating: 5,
    company: "Construction Industry",
  },
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 400)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 400)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-sky-400/60 via-blue-500/60 to-indigo-600/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-100/80 to-indigo-100/80 border-2 border-sky-200/50 backdrop-blur-sm rounded-full mb-10">
            <Award className="w-5 h-5 text-sky-600" />
            <span className="text-sky-700 font-semibold text-lg">Client Testimonials</span>
            <Sparkles className="w-5 h-5 text-indigo-600" />
          </div>

          {/* Enhanced Main Heading */}
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              Our <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Success</span> Stories
            </h1>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed businesses with our expert accounting solutions and 
            <span className="text-sky-600 font-semibold"> exceptional service</span>
          </p>
        </motion.div>

        {/* Enhanced Statistics Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-8 mb-16 flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6  border-2 border-gray-200/50 group-hover:border-sky-200/70 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </motion.div>
          
          <div className="w-px h-12 bg-gray-300"></div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-gray-200/50 group-hover:border-blue-200/70 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">4.9/5</div>
                <div className="text-sm text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </motion.div>
          
          <div className="w-px h-12 bg-gray-300"></div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-gray-200/50 group-hover:border-indigo-200/70 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">99%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div> */}

        {/* Enhanced Testimonial Card */}
        <div className="relative">
          {/* Enhanced Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 hover:bg-white/90 hover:border-sky-200/70 shadow-lg group transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-sky-600 transition-colors duration-300" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 hover:bg-white/90 hover:border-sky-200/70 shadow-lg group transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-sky-600 transition-colors duration-300" />
          </Button>

          {/* Enhanced Main Testimonial Card */}
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow Effect */}
                
<div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-gray-200/50 overflow-hidden ring-8 ring-sky-300 ring-offset-2 ring-offset-blue">
                  <div className="relative z-10">
                    {/* Enhanced Customer Info */}
                    <div className="flex items-center gap-8 mb-10">
                      <div className="relative">
                        <Avatar className="h-24 w-24 ring-4 ring-sky-400/50 ">
                          <AvatarImage src={currentTestimonial.avatar || "/placeholder.svg"} alt={currentTestimonial.name} />
                          <AvatarFallback className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold text-2xl">
                            {currentTestimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        {/* Verified Badge */}
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white ">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">{currentTestimonial.name}</h3>
                        <p className="text-sky-600 text-xl font-medium mb-1">{currentTestimonial.title}</p>
                        <p className="text-gray-500 text-lg">{currentTestimonial.company}</p>
                        
                        {/* Star Rating */}
                        <div className="flex items-center gap-1 mt-3">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                          <span className="text-gray-500 ml-2 text-sm">Verified Review</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Testimonial Text */}
                    <blockquote className="text-gray-700 text-xl md:text-2xl leading-relaxed font-medium relative">
                      <span className="text-sky-400 text-6xl font-serif absolute -top-4 -left-2 opacity-50">"</span>
                      <span className="relative z-10 block pl-8">
                        {currentTestimonial.text}
                      </span>
                      <span className="text-indigo-600 text-6xl font-serif absolute -bottom-8 -right-2 opacity-50">"</span>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Dot Indicators */}
          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsAnimating(false)
                    }, 400)
                  }
                }}
                className={`relative h-4 w-4 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-sky-400 to-blue-500 scale-125" 
                    : "bg-gray-400 hover:bg-gray-500 hover:scale-110"
                }`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 animate-ping opacity-20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-40px) rotate(180deg); 
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
