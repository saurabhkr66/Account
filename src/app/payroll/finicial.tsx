"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowUpRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Bookkeeping Services",
    content:
      "Comprehensive bookkeeping solutions to keep your financial records accurate and up-to-date. We handle daily transactions, reconciliations, and maintain your books with precision.",
  },
  {
    id: 2,
    title: "Payroll Services",
    content:
      "Complete payroll management including salary calculations, tax deductions, compliance reporting, and direct deposits. Ensure your employees are paid accurately and on time.",
  },
  {
    id: 3,
    title: "Financial Statement Preparation",
    content:
      "Professional preparation of income statements, balance sheets, and cash flow statements. Get clear insights into your business performance with detailed financial reports.",
  },
]

export default function Component() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <div className="dark:bg-gradient-to-br dark:from-slate-900 dark:to-blue-900 bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold dark:text-slate-100 text-slate-800 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Expedite Your  
              </span>{" "}
              Workflow with Expert{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Invoice Processing Services
              </span>
            </motion.h1>

            <motion.p
              className="text-lg dark:text-slate-300 text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Managing invoices efficiently is crucial for maintaining smooth business operations.
              However, it can often become a time-consuming as well as a resource-intensive task. 
              Outsourcing invoice processing allows businesses to optimize financial workflows while focusing on important activities. 
              This is how outsourcing your invoicing process can help your business:
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Call
                <motion.div className="group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Services Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="dark:bg-slate-800 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden dark:border-slate-700 border-slate-100"
              >
                <motion.button
                  onClick={() => toggleItem(service.id)}
                  className="w-full p-6 flex items-center gap-4 text-left dark:hover:bg-slate-700 hover:bg-slate-50 transition-colors duration-200"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.id}
                  </motion.div>

                  <h3 className="flex-1 text-xl font-semibold dark:text-slate-100 text-slate-800">{service.title}</h3>

                  <motion.div
                    animate={{ rotate: expandedItem === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="dark:text-slate-400 text-slate-500"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedItem === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div initial={{ y: -10 }} animate={{ y: 0 }} exit={{ y: -10 }} className="px-6 pb-6 pt-2">
                        <div className="dark:bg-gradient-to-r dark:from-blue-900/30 dark:to-cyan-900/30 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-l-4 border-blue-500">
                          <p className="dark:text-slate-300 text-slate-600 leading-relaxed">{service.content}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}