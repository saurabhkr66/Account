"use client"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const images = ["/3.png", "/4.png", "/5.png"]

  return (
   <div
  className="min-h-screen relative overflow-hidden text-white"
>
  {/* Background Bars */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.08) 0px,
            rgba(255, 255, 255, 0.08) 2px,
            transparent 2px,
            transparent 16px
          )
        `,
        backgroundColor: "#0a0a1a",
      }}
    />
  </div>

  {/* Main Gradient Overlay */}
  <div
    className="relative z-10"
    style={{
      background: `
        linear-gradient(90deg, 
          rgba(15, 15, 35, 1) 0%, 
          rgba(15, 15, 35, 1) 40%, 
          rgba(255, 177, 255, 0.6) 70%, 
          rgba(15, 15, 35, 1) 40%, 
        )
      `,
    }}
  >
      {/* Header */}
     

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-32">
        <div className="bg-gradient-to-r  from-[#211F36] to-[#4a2a58]  backdrop-blur-xl rounded-3xl border border-gray-700/30 p-8 md:p-12 shadow-2xl">
          {/* Hero Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Accounting Software That
                <br />
                Exceeds Expectations
              </span>
            </h1>
          </div>

          {/* 3 Images */}
          <div className="grid md:grid-cols-3 gap-6 py-16 max-w-7xl mx-auto items-end">
            {images.map((src, index) => {
              const isMiddle = index === 1

              return (
                <div
                  key={index}
                  className={`transition-transform duration-500 relative ${
                    isMiddle ? "-translate-y-6" : "translate-y-2"
                  }`}
                >
                  {/* Glow for middle image */}
                  {isMiddle && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-40 bg-purple-500/60 blur-2xl rounded-full z-0" />
                  )}

                  <img
                    src={src}
                    alt={`Service ${index + 1}`}
                    className="w-full rounded-2xl shadow-xl object-cover relative z-10"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}
