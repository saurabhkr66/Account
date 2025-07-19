import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  FileText,
  Users,
  Calculator,
  PieChart,
  Building2,
  Briefcase,
  Globe,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Bookkeeping",
      description: "Comprehensive bookkeeping services to maintain accurate financial records for your business.",
      features: ["Daily transaction recording", "Account reconciliation", "Financial statements preparation"],
      available: true,
      link: "/bookkepping",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FileText,
      title: "Invoicing Solutions",
      description: "Professional invoicing systems to streamline your billing process and improve cash flow.",
      features: ["Automated invoice generation", "Payment tracking", "Professional templates"],
      available: true,
      link: "/services/invoicing",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "Payroll Management",
      description: "Complete payroll processing services ensuring accurate and timely employee compensation.",
      features: ["Salary calculations", "Tax deductions", "Compliance management"],
      available: true,
      link: "/payroll",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Calculator,
      title: "Accounting",
      description: "Full-service accounting solutions for businesses of all sizes and industries.",
      features: ["Financial reporting", "Budget planning", "Cost analysis"],
      available: true,
      link: "/services/accounting",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: PieChart,
      title: "Tax Consulting (Income Tax/GST)",
      description: "Expert tax consultation services for income tax and GST compliance and optimization.",
      features: ["Tax planning", "GST filing", "Income tax returns"],
      available: true,
      link: "/services/tax-consulting",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Building2,
      title: "MCA Work",
      description: "Ministry of Corporate Affairs compliance and filing services for companies.",
      features: ["ROC filings", "Compliance management", "Annual returns"],
      available: true,
      link: "/services/mca-work",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Briefcase,
      title: "Tax & Accounting Support",
      description: "Comprehensive support for all tax and accounting related requirements.",
      features: ["Document preparation", "Audit support", "Consultation services"],
      available: true,
      link: "/services/tax-accounting-support",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Globe,
      title: "Foreign Accounting",
      description: "International accounting services for global business operations.",
      features: ["Multi-currency handling", "International compliance", "Cross-border taxation"],
      available: false,
      link: "/services/foreign-accounting",
      color: "from-slate-500 to-gray-600",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Professional Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Comprehensive Financial
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer a comprehensive range of accounting and tax services designed to meet all your business financial
            needs with precision, expertise, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
                  !service.available ? "opacity-80" : ""
                } bg-white/80 backdrop-blur-sm border-0 hover:transform hover:-translate-y-2 hover:scale-[1.02] shadow-lg`}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

                {!service.available && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1.5 rounded-full font-medium shadow-sm">
                      <Clock className="h-3 w-3" />
                      Coming Soon
                    </span>
                  </div>
                )}

                <CardHeader className="pb-4 relative">
                  <div
                    className={`h-14 w-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 relative">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <div
                          className={`h-2 w-2 bg-gradient-to-r ${service.color} rounded-full mr-3 mt-2 flex-shrink-0`}
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.available ? (
                    <Link href={service.link} className="block">
                      <Button
                        size="sm"
                        className={`w-full mt-6 bg-gradient-to-r ${service.color} hover:shadow-lg text-white border-0 group/btn transition-all duration-300 hover:scale-[1.02]`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      size="sm"
                      className="w-full mt-6 border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group/btn"
                      disabled
                    >
                      Notify Me
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  )}
                </CardContent>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-600 text-lg">Need a custom solution tailored to your business?</p>
            <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group px-8 py-3 text-lg font-semibold hover:scale-105">
              Get Custom Quote
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
