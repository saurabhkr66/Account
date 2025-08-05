import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image Section - Centered */}
        <div className="flex justify-center items-center ">
          <div className="items-center">
            <Image
              src="/challanges.jpg"
              alt="Illustration of invoice tools"
              width={520}
              height={320}
              className="rounded-xl object-cover  "
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Invoice Management:{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Streamlined Invoicing Solutions
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-600 dark:text-gray-300">
            Managing invoices efficiently is crucial for maintaining healthy cash flow and fostering strong client relationships. Our comprehensive invoice services ensure accurate generation, timely dispatch, and proper tracking of all your business invoices. With automation and error-checking mechanisms, we help reduce delays, minimize disputes, and improve your accounts receivable process — so you get paid faster and maintain a professional image.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
