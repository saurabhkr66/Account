import React, { useState, useEffect } from 'react';
import { Calculator, BarChart3, Shield, FileText, PieChart, TrendingUp, Sparkles, Star } from 'lucide-react';

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
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

const CardDescription = ({ children, className, ...props }) => (
  <p className={`text-gray-600 mt-2 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>
    {children}
  </div>
);

const AnimatedServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Calculator,
      title: "Daily Transaction Recording",
      description: "Meticulous recording of all business transactions with proper categorization and documentation.",
      features: ["Real-time entry", "Digital receipt management", "Automated categorization"],
    },
    {
      icon: BarChart3,
      title: "Financial Statements",
      description: "Comprehensive monthly and quarterly financial reports including P&L, balance sheets, and cash flow.",
      features: ["Monthly P&L statements", "Balance sheet preparation", "Cash flow analysis"],
    },
    {
      icon: Shield,
      title: "Bank Reconciliation",
      description: "Regular reconciliation of all bank accounts to ensure accuracy and identify discrepancies.",
      features: ["Monthly reconciliation", "Error identification", "Variance analysis"],
    },
    {
      icon: FileText,
      title: "Accounts Management",
      description: "Complete management of accounts payable and receivable for optimal cash flow.",
      features: ["Invoice tracking", "Payment scheduling", "Aging reports"],
    },
    {
      icon: PieChart,
      title: "GST Compliance",
      description: "Comprehensive GST bookkeeping and reporting to ensure full compliance with regulations.",
      features: ["GST calculations", "Return preparation", "Compliance monitoring"],
    },
    {
      icon: TrendingUp,
      title: "Financial Analysis",
      description: "In-depth analysis of financial data to provide insights for business growth and decision-making.",
      features: ["Trend analysis", "Performance metrics", "Growth insights"],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
            <div className="w-1 h-1 bg-blue-400/60 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
            <Star className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-700">Premium Services</span>
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse delay-300" />
          </div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
            Comprehensive Bookkeeping Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From daily transaction recording to advanced financial analysis, we provide end-to-end bookkeeping
            solutions tailored to your business needs.
          </p>
          
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 transition-all duration-500"></div>
                
                {/* Animated corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <CardHeader className="relative">
                  <div className="relative mb-4">
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <div className="relative h-12 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className={`flex items-center text-sm text-gray-600 transform transition-all duration-300 group-hover:translate-x-1`}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="h-1.5 w-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Subtle hover indicator */}
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2">
                    <span>Explore service</span>
                    <div className="ml-2 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700">
            <span>Get Started Today</span>
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-gray-600 mt-3 text-sm">
            Ready to streamline your bookkeeping? Contact us for a free consultation.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AnimatedServicesSection;