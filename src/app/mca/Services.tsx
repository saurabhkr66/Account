import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image Section - Centered */}
        <div className="flex justify-center items-center">
          <div className="items-center">
            <Image
              src="/challanges.jpg"
              alt="Illustration of corporate compliance"
              width={520}
              height={320}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            MCA Compliance:{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Hassle-Free Corporate Filing & Governance
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-600 dark:text-gray-300">
            Staying compliant with the Ministry of Corporate Affairs (MCA) is essential for every registered business in India. Our MCA services cover everything from company incorporation and annual ROC filings to director KYC, DIN management, and regulatory updates. We ensure timely submissions, avoid penalties, and keep your company legally sound. Whether you’re a startup or an established enterprise, we simplify your compliance journey so you can focus on growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
