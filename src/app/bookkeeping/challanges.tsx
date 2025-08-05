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
        {/* Payroll Accuracy Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
                          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">

  Messy or Outdated Records?  </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
    This addresses the common problem of disorganized or neglected financial paperwork, which can lead to confusion and poor decision-making. 
Our service rectifies this by systematically organizing all past and present financial data.
 We then establish a streamlined process to ensure your records remain accurate and up-to-date going forward.
            </p>
          </div>
           <div className="relative w-full max-w-md mx-auto">
                       <Image
                         src="/5.png" // Replace with your image path  
                         alt="Illustration of financial visibility"
                         width={600} // Adjust width
           
                         height={200} // Adjust height
                         className="rounded-3xl object-cover"/>
                     </div>
        </div>
        {/* Best Practices Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full max-w-md mx-auto">
                      <Image
                        src="/4.png" // Replace with your image path  
                        alt="Illustration of financial visibility"
                        width={600} // Adjust width
          
                        height={200} // Adjust height
                        className="rounded-3xl object-cover"/>
                    </div>
          <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Worried About Compliance?   </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Many businesses struggle to keep up with ever-changing tax laws and financial regulations, risking costly penalties.
           Our team of experts is dedicated to staying current with these rules, ensuring your books are always 100% compliant. 
          This gives you peace of mind and protects your business from legal and financial trouble.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Challanges