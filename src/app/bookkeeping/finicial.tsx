"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowUpRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Cut Costs, Enhance Efficiency",
    content:
      "In-house invoice processing demands dedicated staff, infrastructure, and ongoing training, and these mean a significant cost surge. By outsourcing to expert service providers, businesses can save on operational expenses while at the same time ensuring high-quality results."
  },
  {
    id: 2,
    title: "Benefit from Automation and Precision",
    content:
      "Manual invoicing is slow and error-prone. This leads to payment delays and potential conflicts. Automation, on the other hand, enhances accuracy in invoice processing as well as swiftly processing them. With invoice automation, you can change tedious tasks into efficient workflows and transform vendor relationships."
  },
  {
    id: 3,
    title: "Improving Accessibility and Transparency",
    content:
      "Cloud-based invoice processing platforms offer real-time access to financial data, offering complete visibility into workflows. This transparency assists businesses to track payments, prevent errors, and make informed decisions. This encourages further trust and collaboration with vendors."
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
              <span className="bg-gradient-to-r from-sky-400 to-blue-700 bg-clip-text text-transparent">
                Expedite Your  
              </span>{" "}
              Workflow with Expert{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
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
                className="group bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
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