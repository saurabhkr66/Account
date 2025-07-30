"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  PowerIcon as Gear,
  Handshake,
  FileText,
  TrendingUp,
  BarChart3,
  Users,
} from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      id: 1,
      quote:
        "Your team has been outstanding, and we're truly grateful for the exceptional service you've provided in managing our accounting and bookkeeping. The positive outcomes and seamless interactions have been invaluable to us.",
      author: "Kevin G. Gilles",
      position: "Founder & CEO",
      company: "TechStart Solutions",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      quote:
        "The level of professionalism and expertise shown by your team is remarkable. Our payroll processes have never been smoother, and the accuracy has improved dramatically since partnering with you.",
      author: "Sarah M. Johnson",
      position: "HR Director",
      company: "Global Enterprises",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      quote:
        "Switching to your services was the best decision we made this year. The cost savings and efficiency gains have exceeded our expectations, and your team's responsiveness is unmatched.",
      author: "Michael R. Chen",
      position: "CFO",
      company: "Innovation Corp",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const whyChooseUsFeatures = [
    {
      icon: Gear,
      title: "Innovative Workflow",
      description:
        "We leverage cutting-edge technology and best practices to create streamlined workflows that ensure accuracy, efficiency, and timely delivery of your financial reports.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Handshake,
      title: "Seamless Collaboration",
      description:
        "Our team works closely with you/team to ensure smooth communication and a deep understanding of your bookkeeping needs. Whether it's a quick update or a strategic discussion, we're always just a call away.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FileText,
      title: "Decade of Experience",
      description:
        "With over 10 years of industry experience, we have a proven track record of helping businesses from various sectors stay organized and financially sound.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: TrendingUp,
      title: "Dedicated Experts",
      description:
        "Our team consists of highly skilled, certified professionals who are dedicated to supporting your business. From accountants to financial analysts, we have the expertise to handle your unique challenges.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BarChart3,
      title: "Real-Time Insights",
      description:
        "Gain a clear, up-to-date view of your financial health round-the-clock. Our real-time reporting and dashboards provide actionable insights that help you make informed decisions and drive business growth.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Users,
      title: "Cost Savings",
      description:
        "Outsourcing your accounting and bookkeeping with us means lower overhead costs. We offer scalable services tailored to your needs, helping you save on hiring, training, and maintaining an in-house team.",
      color: "from-violet-500 to-purple-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("testimonials-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div id="testimonials-section" className="relative dark:bg-gray-900 bg-gray-50">
      {/* Why Choose Us Section */}
      <div className="relative z-10 dark:bg-white/5 bg-white/80 backdrop-blur-lg py-20">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-white text-gray-900 mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Choose Us?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`dark:bg-white/10 bg-white dark:border-white/20 border-gray-200 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 group animate-slide-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center space-y-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold dark:text-white text-gray-900 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="dark:text-white/80 text-gray-600 leading-relaxed group-hover:dark:text-white group-hover:text-gray-900 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 dark:bg-gradient-to-br dark:from-purple-800 dark:via-indigo-800 dark:to-blue-800 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <p className="text-cyan-400 font-semibold text-lg tracking-wider">TRUSTED PARTNERS</p>
                <h2 className="text-4xl lg:text-5xl font-bold dark:text-white text-white leading-tight">Client Testimonials</h2>
                <p className="dark:text-white/80 text-white/90 text-lg">
                  See how we've helped others achieve their financial goals with personalized solutions and expert
                  guidance.
                </p>
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-1000 delay-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              {/* Testimonial Card */}
              <Card className="dark:bg-white/10 bg-white/20 dark:border-white/20 border-white/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"></div>

                <div className="relative z-10 space-y-6">
                  {/* Quote */}
                  <div className="relative">
                    <div className="text-6xl text-cyan-400/30 font-serif absolute -top-4 -left-2">"</div>
                    <p className="dark:text-white text-white text-lg leading-relaxed italic pl-8 animate-fade-in">
                      {testimonials[currentTestimonial].quote}
                    </p>
                    <div className="text-6xl text-cyan-400/30 font-serif absolute -bottom-8 -right-2 rotate-180">"</div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 justify-center py-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current animate-star-glow"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 dark:border-t border-t dark:border-white/20 border-white/30">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg animate-pulse">
                      <span className="text-white font-bold text-lg">
                        {testimonials[currentTestimonial].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="dark:text-white text-white font-semibold text-lg">{testimonials[currentTestimonial].author}</h4>
                      <p className="text-cyan-300 text-sm">{testimonials[currentTestimonial].position}</p>
                      <p className="dark:text-white/60 text-white/70 text-sm">{testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="icon"
                  className="dark:bg-white/10 bg-white/20 dark:border-white/20 border-white/30 dark:text-white text-white hover:dark:bg-white/20 hover:bg-white/30 rounded-full w-12 h-12"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                {/* Dots indicator */}
                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500 scale-125"
                          : "dark:bg-white/30 bg-white/50 hover:dark:bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="icon"
                  className="dark:bg-white/10 bg-white/20 dark:border-white/20 border-white/30 dark:text-white text-white hover:dark:bg-white/20 hover:bg-white/30 rounded-full w-12 h-12"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}