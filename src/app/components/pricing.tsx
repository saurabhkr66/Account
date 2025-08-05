"use client"

import { Check, ArrowRight } from "lucide-react"
import React from "react"
import { useId } from "react"

// Mock Button component
const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
)

export default function PricingSection() {
  const idPrefix = useId()

  const features = [
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

  const plans = [
    {
      name: "ESSENTIALS",
      buttonText: "Get Started",
      key: "essentials",
      highlight: false,
    },
    {
      name: "GROWTH",
      buttonText: "Choose Plan",
      key: "growth",
      highlight: true,
    },
    {
      name: "ADVANCED",
      buttonText: "Contact Sales",
      key: "advanced",
      highlight: false,
    },
  ]

  const FeatureValue = ({ value, highlight }) => {
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
      <span
        className={`text-sm font-semibold ${
          highlight ? "text-blue-600" : "text-sky-600"
        }`}
      >
        {value}
      </span>
    )
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">
            Choose the Bookkeeping Package that Suits You the Best
          </h1>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-auto rounded-xl border border-gray-200 shadow-sm">
          <div className="min-w-[900px] grid grid-cols-[1fr_repeat(3,minmax(200px,1fr))]">
            {/* Header Row */}
            <div className="bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-800">CORE FEATURES</h2>
            </div>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 text-center relative ${plan.highlight ? "bg-sky-50" : "bg-white"}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2  translate-y-3 z-10">
                    {/* <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                      MOST POPULAR
                    </div> */}
                  </div>
                )}
                <h3 className="text-lg font-bold text-slate-700">{plan.name}</h3>
              </div>
            ))}

            {/* Feature Rows */}
            {features.map((feature, rowIndex) => (
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

            {/* Buttons */}
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

        {/* Chat with Us Button */}
        <div className="fixed bottom-6 right-6">
          <Button className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full px-6 py-3 shadow-lg flex items-center">
            Chat with Us
          </Button>
        </div>
      </div>
    </div>
  )
}
