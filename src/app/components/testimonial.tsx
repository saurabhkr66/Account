"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Accloud has solved a long pending problem in accounting. I never thought I could switch from Tally to something with a premium experience. I fell in love with Accloud from the first moment I used it. The way the side panels for ledgers and groups appear is just fantastic. It makes navigating and managing my accounts so much easier.",
    name: "Phani Kumar",
    title: "MD, Syndy Pharma",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "PK",
  },
  {
    id: 2,
    text: "The transition to Accloud was seamless and the customer support team guided us through every step. Our accounting processes are now 3x faster and more accurate. The intuitive interface makes complex accounting tasks feel simple.",
    name: "Sarah Johnson",
    title: "CFO, TechCorp Solutions",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "SJ",
  },
  {
    id: 3,
    text: "After using traditional accounting software for years, Accloud feels like a breath of fresh air. The modern interface and powerful features have transformed how we handle our finances. Highly recommend to any growing business.",
    name: "Michael Chen",
    title: "Founder, GrowthLab",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "MC",
  },
  {
    id: 4,
    text: "Accloud's reporting capabilities are outstanding. We can generate comprehensive financial reports in minutes instead of hours. The real-time insights have helped us make better business decisions and improve our cash flow management.",
    name: "Emily Rodriguez",
    title: "Finance Director, InnovateCo",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "ER",
  },
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-black dark:via-black dark:to-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Testimonials Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-blue-200 dark:border-gray-700 mb-8">
            <span className="text-blue-600 dark:text-blue-400 font-medium">Testimonials</span>
          </div>

          {/* Main Heading */}
          <div className="relative mb-6">
            {/* Large decorative quote marks */}
            <div className="absolute -left-8 -top-4 text-blue-200 dark:text-blue-900 text-8xl font-serif opacity-30 dark:opacity-20 select-none">"</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Our <span className="text-blue-600 dark:text-blue-400">Success</span> Stories
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from those who've switched to Accloud
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </Button>

          {/* Main Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div
              // UPDATED LINE: Replaced border with a thick, semi-transparent ring for a highlighter effect.
              className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl ring-8 ring-blue-200/50 dark:ring-blue-800/50 transition-all duration-500 ease-in-out ${
                isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              }`}
            >
              {/* Large background quote marks */}
              <div className="absolute top-8 left-8 text-blue-100 dark:text-blue-900 text-6xl font-serif opacity-50 dark:opacity-20 select-none">"</div>

              <div className="relative z-10">
                {/* Customer Info */}
                <div className="flex items-center gap-6 mb-8">
                  <Avatar className="h-20 w-20 ring-4 ring-blue-100 dark:ring-blue-900/50">
                    <AvatarImage src={currentTestimonial.avatar || "/placeholder.svg"} alt={currentTestimonial.name} />
                    <AvatarFallback className="bg-blue-500 dark:bg-blue-600 text-white font-bold text-xl">
                      {currentTestimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{currentTestimonial.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">{currentTestimonial.title}</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                  {currentTestimonial.text}
                </blockquote>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsAnimating(false)
                    }, 300)
                  }
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-blue-500 dark:bg-blue-400 scale-125" 
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-8 right-8 text-blue-100 dark:text-blue-900 text-9xl font-serif opacity-20 dark:opacity-10 select-none">"</div>
      </div>
    </div>
  )
}
