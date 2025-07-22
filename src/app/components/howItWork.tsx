"use client"

import { motion } from "framer-motion"
import {
  UserCheck,
  FileSearch,
  Calculator,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Award
} from "lucide-react"

export default function HowItWorksSection() {
  const keyFeatures = [
    {
      icon: UserCheck,
      title: "Initial Consultation & Assessment",
      description: "We begin with a comprehensive analysis of your current financial situation, understanding your business goals, and identifying opportunities for optimization.",
      color: "from-purple-600 to-indigo-600",
      delay: 0,
    },
    {
      icon: FileSearch,
      title: "Custom Strategy Development",
      description: "Our expert team crafts a personalized accounting strategy tailored to your industry, size, and specific requirements for maximum efficiency.",
      color: "from-indigo-600 to-purple-700",
      delay: 200,
    },
    {
      icon: Calculator,
      title: "Seamless Implementation",
      description: "We handle the complete setup process, from system integration to staff training, ensuring a smooth transition with minimal business disruption.",
      color: "from-purple-700 to-pink-600",
      delay: 400,
    },
    {
      icon: TrendingUp,
      title: "Continuous Monitoring & Growth",
      description: "Ongoing support with regular reviews, performance analytics, and strategic adjustments to keep your business financially optimized and growing.",
      color: "from-pink-600 to-purple-600",
      delay: 600,
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Award },
    { number: "99.9%", label: "Accuracy Rate", icon: Target },
    { number: "24/7", label: "Support", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Shield },
  ]

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#16213e] overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 text-purple-300 text-sm font-semibold px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            How It Works
            <Sparkles className="w-4 h-4 ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Journey to
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Financial Excellence
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience our streamlined process designed to transform your financial operations 
            with precision, efficiency, and unmatched expertise.
          </p>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-600/10 to-indigo-600/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Video Section with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Video Container */}
              <div className="relative w-full h-[600px] aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-500/30 backdrop-blur-sm">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/how_it_work.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
                
                {/* Play Button Overlay (Optional) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-500"></div>
            </div>
          </motion.div>

          {/* Features Section with Enhanced Design */}
          <div className="space-y-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: feature.delay / 1000 }}
                className="group"
              >
                <div className="flex items-start space-x-6 p-5 rounded-2xl bg-gradient-to-r from-purple-600/5 to-indigo-600/5 border border-purple-500/10 hover:border-purple-400/30 hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-indigo-600/10 transition-all duration-500 backdrop-blur-sm">
                  {/* Enhanced Icon */}
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0`}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Animated Underline */}
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-[#1e1b3a] via-[#2d1b4e] to-[#3a2a5c] rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold text-white">Ready to Get Started?</span>
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Join hundreds of businesses who have transformed their financial operations with our proven process.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
