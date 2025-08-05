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

  Late or Unsent Invoices? </h2>
            <p className="text-lg leading-relaxed text-gray-600 text-justify dark:text-gray-300">
   Delayed or missed invoices can choke your cash flow and strain client relationships. 
   Our invoicing solution ensures every invoice is created, sent, and tracked promptly—reducing delays and 
   improving your revenue cycle. We automate recurring invoices, add payment reminders, and provide real-time
    updates so you always know what’s paid and what’s pending.
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
              Tired of Chasing Payments?  </h2>
            <p className="text-lg leading-relaxed text-gray-600 text-justify dark:text-gray-300">
         Manually following up with clients is time-consuming and awkward. We set up automated payment reminders, 
         integrate secure payment options, and offer client portals to streamline the payment experience.
          With us, your receivables process becomes smoother, faster, and more professional—freeing you from uncomfortable follow-ups.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Challanges