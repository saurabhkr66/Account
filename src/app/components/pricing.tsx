"use client"

import { Check, ArrowRight } from "lucide-react"
import React, { useState } from "react"
import { useId } from "react"

// Mock Button component
import  { ButtonHTMLAttributes, ReactNode } from "react"

type PlanKey = "essentials" | "growth" | "advanced"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

const Button = ({ children, className, ...props }: ButtonProps) => (
  <button className={className} {...props}>
    {children}
  </button>
)

export default function PricingSection() {
  const idPrefix = useId()
  const [activeTab, setActiveTab] = useState<PlanKey>("growth") // ✅ typed

  const features: {
    name: string
    essentials: boolean | string
    growth: boolean | string
    advanced: boolean | string
  }[] = [
    { name: "Bookkeeping Frequency", essentials: "Monthly", growth: "Weekly", advanced: "Daily" },
    { name: "Dedicated Bookkeeper", essentials: "Part Time", growth: "Part Time", advanced: "Full Time" },
    { name: "Phone,Chats & Email Support", essentials: true, growth: true, advanced: true },
    { name: "Transactions Processing", essentials: true, growth: true, advanced: true },
    { name: "Vendor Payments", essentials: true, growth: true, advanced: true },
    { name: "Monthly Books Closure", essentials: true, growth: true, advanced: true },
    { name: "P&L, Balance Sheet & Cash Flow Reporting", essentials: true, growth: true, advanced: true },
    { name: "Proactive Tax Planning", essentials: true, growth: true, advanced: true },
    { name: "Running Payroll", essentials: false, growth: true, advanced: true },
    { name: "Customer Invoicing & Followup", essentials: false, growth: true, advanced: true },
    { name: "Cash Flow Forecast", essentials: false, growth: true, advanced: true },
    { name: "Inventory Reporting & Analysis", essentials: false, growth: false, advanced: true },
    { name: "Budgeting & Variance Analysis", essentials: false, growth: false, advanced: true },
    { name: "Management Dashboard Reporting", essentials: false, growth: false, advanced: true },
  ]

  const plans: {
    name: string
    buttonText: string
    key: PlanKey // ✅ typed
    highlight: boolean
  }[] = [
    { name: "ESSENTIALS", buttonText: "Get Started", key: "essentials", highlight: false },
    { name: "GROWTH", buttonText: "Choose Plan", key: "growth", highlight: true },
    { name: "ADVANCED", buttonText: "Contact Sales", key: "advanced", highlight: false },
  ]

  const FeatureValue = ({ value, highlight }: { value: boolean | string; highlight: boolean }) => {
    if (typeof value === "boolean") {
      return value ? (
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            highlight ? "bg-gradient-to-r from-sky-400 to-blue-500" : "bg-sky-400"
          }`}
        >
          <Check className="w-4 h-4 text-white" />
        </div>
      ) : (
        <span className="text-slate-400 text-xl">–</span>
      )
    }
    return (
      <span className={`text-sm font-semibold ${highlight ? "text-blue-600" : "text-sky-600"}`}>
        {value}
      </span>
    )
  }

  const activePlan = plans.find((plan) => plan.key === activeTab)


  return (
    <div className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
            Choose the Bookkeeping Package that Suits You the Best
          </h1>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            {plans.map((plan) => (
              <button
                key={plan.key}
                onClick={() => setActiveTab(plan.key)}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === plan.key
                    ? plan.highlight
                      ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-md"
                      : "bg-white text-slate-800 shadow-md"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <div
              className={`rounded-xl border p-6 ${
                activePlan && activePlan.highlight
                  ? "bg-sky-50 border-sky-200"
                  : "bg-white border-gray-200"
              }`}
            >
              {activePlan && activePlan.highlight && (
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h2 className="text-2xl font-bold text-slate-700 text-center mb-6">
                {activePlan ? activePlan.name : ""}
              </h2>

              <div className="space-y-4 mb-6">
                {features.map((feature) => (
                  <div
                    key={`mobile-${feature.name}`}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="text-sm font-medium text-slate-700 flex-1">
                      {feature.name}
                    </span>
                    <div className="ml-4">
                      <FeatureValue
                        value={feature[activeTab]}
                        highlight={!!(activePlan && activePlan.highlight)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full group inline-flex items-center justify-center text-white transition-all duration-300 ${
                  activePlan && activePlan.highlight
                    ? "bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 shadow-lg"
                    : "bg-slate-700 hover:bg-slate-800"
                } px-4 py-3 rounded-md font-medium`}
              >
                {activePlan ? activePlan.buttonText : ""}
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="overflow-auto rounded-xl border border-gray-200 shadow-sm">
            <div className="min-w-[900px] grid grid-cols-[1fr_repeat(3,minmax(200px,1fr))]">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-slate-800">
                  CORE FEATURES
                </h2>
              </div>
              {plans.map((plan) => (
                <div
                  key={plan.key}
                  className={`p-6 text-center ${plan.highlight ? "bg-sky-50" : "bg-white"}`}
                >
                  <h3 className="text-lg font-bold text-slate-700">{plan.name}</h3>
                </div>
              ))}

              {features.map((feature) => (
                <React.Fragment key={`${idPrefix}-${feature.name}`}>
                  <div className="bg-white p-4 flex items-center border-t border-gray-200">
                    <p className="text-sm text-slate-700 font-medium">{feature.name}</p>
                  </div>
                  {plans.map((plan) => (
                    <div
                      key={`${idPrefix}-${feature.name}-${plan.key}`}
                      className={`p-4 flex justify-center items-center border-t border-gray-200 ${
                        plan.highlight ? "bg-sky-50" : "bg-white"
                      }`}
                    >
                      <FeatureValue value={feature[plan.key]} highlight={plan.highlight} />
                    </div>
                  ))}
                </React.Fragment>
              ))}

              <div className="bg-white p-6 border-t border-gray-200"></div>
              {plans.map((plan) => (
                <div
                  key={`${plan.key}-btn`}
                  className={`p-6 border-t border-gray-200 flex justify-center items-center ${
                    plan.highlight ? "bg-sky-50" : "bg-white"
                  }`}
                >
                  <Button
                    className={`w-full group inline-flex items-center justify-center text-white transition-all duration-300 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 shadow-lg"
                        : "bg-slate-700 hover:bg-slate-800"
                    } px-4 py-2 rounded-md text-sm font-medium`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat with Us Button */}
        <div className="fixed bottom-6 right-6">
          <Button className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full px-4 md:px-6 py-3 shadow-lg flex items-center text-sm md:text-base">
            Chat with Us
          </Button>
        </div>
      </div>
    </div>
  )
}
