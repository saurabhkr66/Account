"use client"

import { motion } from "framer-motion"
import { Calculator, Shield, Clock, TrendingUp, Users, Award, CheckCircle, ArrowRight, Sparkles, Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  // const [isVisible, setIsVisible] = useState(false)
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // useEffect(() => {
  //   setIsVisible(true)
    
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY })
  //   }
    
  //   window.addEventListener('mousemove', handleMouseMove)
  //   return () => window.removeEventListener('mousemove', handleMouseMove)
  // }, [])

  const features = [
    {
      icon: Calculator,
      title: "Expert Management",
      description: "Professional bookkeeping and financial reporting with 99.9% accuracy guarantee and real-time insights",
      color: "from-emerald-500 via-teal-500 to-cyan-600",
      delay: 0,
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with full compliance to tax regulations, data protection, and industry standards",
      color: "from-blue-500 via-indigo-500 to-purple-600",
      delay: 100,
    },
    
    {
      icon: TrendingUp,
      title: "Growth-Focused Analytics",
      description: "Strategic insights, predictive analytics, and actionable recommendations to accelerate business growth",
      color: "from-orange-500 via-amber-500 to-yellow-600",
      delay: 300,
    },
    
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Industry-leading service with multiple certifications, excellence awards, and proven track record",
      color: "from-cyan-500 via-sky-500 to-blue-600",
      delay: 500,
    },
  ]

  const stats = [
    { number: "10,000+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Award },
  ]

  return (
    <section className="py-24 overflow-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-sky-400/60 via-blue-400/60 to-indigo-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-100/80 to-cyan-100/80 border-2 border-sky-200/50 text-sky-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm shadow-lg">
            <Star className="w-4 h-4 text-sky-600" />
            Trusted by 10,000+ Businesses
            <Sparkles className="w-4 h-4 text-sky-600" />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight ">
            Why {" "}
            
            <span className="bg-gradient-to-br from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Choose {" "}            </span>
            <span className="">
              Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the difference with our comprehensive accounting solutions designed to streamline your finances,
            ensure compliance, and accelerate your business growth with cutting-edge technology.
          </p>
        </motion.div>

        {/* Enhanced Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group"
            >
              <div className="relative">
                {/* Glow Effect */}
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8  hover:shadow-2xl transition-all duration-500 border-2 border-gray-200/50 overflow-hidden group-hover:border-sky-200/70">
                  {/* Icon */}
                  <stat.icon className="w-10 h-10 text-sky-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-sky-600 transition-all duration-300" />
                  
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Features Grid - HOVER EFFECTS REMOVED */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay / 1000 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <Card className="h-96 bg-white/80 backdrop-blur-sm shadow-xl transition-all duration-700 border-2 border-gray-200/50 overflow-hidden relative">
                <CardContent className="relative p-8 h-full flex flex-col">
                  {/* Icon - No Hover Effects */}
                  <div className="relative mb-6">
                    <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${feature.color} p-5 shadow-lg relative overflow-hidden`}>
                      <feature.icon className="w-full h-full text-white relative z-10" />
                    </div>
                  </div>

                  {/* Content - No Hover Effects */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {feature.title}
                    </h3>
                    
                    {/* Static Underline */}
                    <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full mb-4`}></div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                      {feature.description}
                    </p>

                    {/* Static Arrow */}
                    <div className={`flex items-center bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      <span className="text-sm font-semibold mr-2">Discover More</span>
                      <ArrowRight className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 1;
          }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  )
}
