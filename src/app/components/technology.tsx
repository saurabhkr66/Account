"use client";

type Feature = {
  name: string;
  color: string;
};

const FEATURES: Feature[] = [
  { name: "Zoho Books", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300" },
  { name: "TallyPrime", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300" },
  { name: "QuickBooks", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Xero", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" },
  { name: "Microsoft Dynamics 365", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300" },
  { name: "SAP S/4HANA Finance", color: "bg-gray-100 text-gray-600 dark:bg-gray-700/30 dark:text-gray-300" },
  { name: "Oracle Financials Cloud", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300" },
  { name: "Wave Accounting", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
  { name: "Busy Accounting Software", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300" },
  { name: "Marg ERP", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300" },
  { name: "NetSuite ERP", color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300" },
  { name: "Odoo Accounting", color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300" },
];

export default function Technology() {
  return (
    <section className="bg-[#f8faff] dark:bg-black py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-100/80 to-cyan-100/80 border-2 border-cyan-200/50 backdrop-blur-sm rounded-full mb-6">
          <span className="text-cyan-700 font-semibold">Our Technology</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">
          Our <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent dark:text-blue-400">Accounting Technology</span>
        </h2>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-7">
          {FEATURES.map((feature, idx) => (
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
