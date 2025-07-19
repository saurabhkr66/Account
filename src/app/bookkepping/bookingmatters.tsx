import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, TrendingUp, Shield, Clock, Target, Sparkles } from 'lucide-react';

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-xl shadow-lg ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`text-xl font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>
    {children}
  </div>
);

const AnimatedBookkeepingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setAnimateItems(true), 500);
  }, []);

  const problems = [
    {
      text: "Cash flow problems due to lack of financial visibility",
      icon: TrendingUp,
      delay: 0
    },
    {
      text: "Tax penalties and compliance issues",
      icon: Shield,
      delay: 100
    },
    {
      text: "Missed opportunities for tax deductions",
      icon: Target,
      delay: 200
    },
    {
      text: "Difficulty securing loans or investments",
      icon: AlertTriangle,
      delay: 300
    }
  ];

  const benefits = [
    "Real-time financial insights for better decision making",
    "Improved cash flow management and forecasting",
    "Tax-ready records that minimize preparation time",
    "Professional financial statements for stakeholders",
    "Compliance with all regulatory requirements",
    "Time savings to focus on core business activities",
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-rose-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-sm font-semibold text-blue-700">Professional Insight</span>
            <Clock className="w-5 h-5 text-purple-600 animate-pulse delay-300" />
          </div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-6">
            Why Professional Bookkeeping Matters
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bookkeeping is the foundation of successful business management. It's not just about recording
            transactions—it's about creating a clear financial roadmap for your business growth.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems Section */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Warning icon with glow */}
              <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100 shadow-xl">
                <h3 className="text-2xl font-bold text-red-800 mb-6 ml-8">The Cost of Poor Bookkeeping</h3>
                
                <div className="space-y-4">
                  {problems.map((problem, index) => {
                    const IconComponent = problem.icon;
                    return (
                      <div 
                        key={index}
                        className={`group flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-red-100/50 hover:bg-white/80 transition-all duration-500 transform hover:scale-105 ${
                          animateItems ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${problem.delay}ms` }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700 font-medium group-hover:text-red-700 transition-colors duration-300">{problem.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <Card className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-0 shadow-2xl overflow-hidden">
              {/* Animated corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 transform rotate-45 translate-x-16 -translate-y-16 animate-pulse"></div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl opacity-50 animate-pulse"></div>
              
              <CardHeader className="relative">
                <CardTitle className="text-emerald-800 flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center animate-pulse">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  Benefits of Professional Bookkeeping
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li 
                      key={index} 
                      className={`group flex items-start gap-4 p-3 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 transform hover:scale-105 ${
                        animateItems ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <CheckCircle className="relative h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-emerald-700 transition-colors duration-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Bottom decoration */}
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Transform Your Business Today</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Ready to experience the benefits of professional bookkeeping? Let's get started.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AnimatedBookkeepingSection;