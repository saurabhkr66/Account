import React from 'react'
import Image from 'next/image'

function Challanges() {
  return (
    <div className="relative z-10 container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
          Challenges We Tackle for You
        </h2>
      </div>

      {/* Challenge 1: Missed Compliance Deadlines */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Missed ROC Filing Deadlines?
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 text-justify dark:text-gray-300">
            Failure to file mandatory forms like MGT-7, AOC-4, or DIR-3 KYC on time can lead to heavy penalties or even disqualification of directors. 
            Our team ensures you never miss a deadline with proactive reminders, accurate documentation, and timely submission of all MCA filings.
          </p>
        </div>
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="/5.png"
            alt="Compliance deadlines illustration"
            width={600}
            height={200}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Challenge 2: Confusion Around Legal Obligations */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="/4.png"
            alt="Corporate governance illustration"
            width={600}
            height={200}
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Confused About Compliance Requirements?
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 text-justify dark:text-gray-300">
            Navigating company law can be overwhelming—especially for startups and small businesses. We break down complex MCA requirements 
            into simple steps, guiding you through company incorporation, amendments, KYC updates, and regular compliance needs, 
            so your business stays protected and legally sound.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Challanges
