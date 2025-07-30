import React from 'react'
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  Target,
} from 'lucide-react'

function Services() {
  return (
    <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Text Section */}
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Bookkeeping Services:{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Accounting Services
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-600 dark:text-gray-300">
            Accurate and timely bookkeeping is the bedrock of any successful business. It provides the financial clarity needed for informed decision-making,
            ensures regulatory compliance, and paves the way for sustainable growth. At Whiz Consulting, we offer meticulous, technology-driven bookkeeping
            services tailored to your unique business needs, freeing you to focus on what you do best.
          </p>
        </div>

        {/* Right Video Section */}
    <div className="w-[800px] h-[450px]">
  <iframe
    className="w-full h-full rounded-xl shadow-lg"
    src="/whiz-intro-video.mp4"
    title="Bookkeeping Services Overview"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>


      </div>
    </div>
  )
}

export default Services
