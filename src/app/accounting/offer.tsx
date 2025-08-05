import React from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

function Offer() {
  return (
    <div className="relative z-10 py-20 bg-gray-100/80 backdrop-blur-lg dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Our Comprehensive Accounting Services Include
            </h2>
            <div className="space-y-6">
              {[
                "Bookkeeping & Transaction Recording",
                "Accounts Receivable & Accounts Payable",
                "Bank & Credit Card Reconciliation",
                "Monthly, Quarterly, and Annual Reporting",
                "Payroll Support & Compliance",
                "Tax Preparation & Filing Assistance",
                "Cash Flow & Budget Analysis",
                "Financial Forecasting & Advisory",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group hover:translate-x-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-medium group-hover:text-blue-500 transition-colors duration-300 text-gray-800 dark:text-white">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <Image
            src="/services.jpg" // Make sure this path is correct (should be inside `public/`)
            alt="Illustration of accounting and financial services"
            width={600}
            height={100}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Offer
