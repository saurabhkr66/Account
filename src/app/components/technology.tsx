"use client";

import { useState } from "react";

const TABS = ["Accountants", "Auditors", "Entrepreneurs"];

const FEATURES = {
  Accountants: [
    { name: "Cloud-Based Ledger", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
    { name: "Automated GST Filing", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "AI-Powered Bookkeeping", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300" },
    { name: "OCR for Invoice Entry", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Blockchain Recordkeeping", color: "bg-gray-100 text-gray-600 dark:bg-gray-700/30 dark:text-gray-300" },
    { name: "Realtime Financial Sync", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
    { name: "Smart Reconciliation", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "Bulk Import Tools", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300" },
    { name: "E-Invoicing API Integration", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Multi-user Access", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300" },
    { name: "Workflow Automation", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300" },
    { name: "Data-Driven Insights", color: "bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-300" },
  ],
  Auditors: [
    { name: "AI Audit Trails", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Smart Anomaly Detection", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "RegTech Compliance Tools", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300" },
    { name: "Immutable Logs", color: "bg-gray-100 text-gray-600 dark:bg-gray-700/30 dark:text-gray-300" },
    { name: "AI-Powered Risk Scoring", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300" },
    { name: "Automated Control Checks", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
    { name: "Blockchain-Based Verification", color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300" },
    { name: "e-Filing Integration", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300" },
    { name: "Forensic Audit Tools", color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300" },
    { name: "Cloud-based Collaboration", color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300" },
  ],
  Entrepreneurs: [
    { name: "AI Forecasting", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Custom KPI Dashboards", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
    { name: "Cash Flow AI Assistant", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
    { name: "Smart Budgeting Tools", color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300" },
    { name: "Scenario Simulator", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300" },
    { name: "Expense Auto-categorization", color: "bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-300" },
    { name: "Realtime P&L Monitoring", color: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300" },
    { name: "Integrated Banking", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
    { name: "Smart Invoicing System", color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300" },
    { name: "Automated Investor Reports", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300" },
  ],
};


export default function Technology() {
  const [activeTab, setActiveTab] = useState("Accountants");

  return (
    <section className="bg-[#f8faff] dark:bg-black py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Innovation and Delight</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">
          Account's <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent dark:text-blue-400">Feature Snapshots</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center cursor-pointer items-center gap-4 bg-white dark:bg-gray-800 rounded-full p-1 max-w-md mx-auto shadow mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium  cursor-pointer transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-sky-400 to-blue-500  text-white shadow"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-7">
          {FEATURES[activeTab].map((feature, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${feature.color} shadow-sm`}
            >
              <span>📌</span>
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}