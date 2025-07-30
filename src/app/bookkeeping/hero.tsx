"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const phrases = [
  "Delayed Payments?",
  "Inefficient Approval workflows?",
  "Duplicate or Missing Invoices?",
]

export default function AnimatedPayrollLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [showLetters, setShowLetters] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setShowLetters(false)
    setKey((prev) => prev + 1)

    const showTimer = setTimeout(() => {
      setShowLetters(true)
    }, 300)

    const currentPhrase = phrases[index]
    const totalLetters = currentPhrase.length
    const totalAnimationTime = totalLetters * 100 + 1000

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
    <div className="h-[880px] bg-gradient-to-r from-[#211F36] to-[#4a2a58] text-gray-100 flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
         

          {/* Right: Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Are You Suffering With
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                {currentPhrase.split("").map((char, i) => (
                  <span
                    key={`${key}-${i}`}
                    className="inline-block bg-gradient-to-r from-sky-400  to-blue-500 bg-clip-text text-transparent opacity-0 animate-fade-in"
                    style={{
                      animationDelay: showLetters ? `${i * 0.05}s` : "0s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                We will Help You Manage It All!
              </h3>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25 group border-0"
            >
              Book A Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
           <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Image
              src="https://www.whizconsulting.net/in/wp-content/uploads/2025/07/Remote-bookkeeping.avif"
              alt="Bookkeeping Hero Image"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
