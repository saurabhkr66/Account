"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// --- DATA ---
type Feature = {
  name: string;
  logo: string;
};

const FEATURES: Feature[] = [
  { name: "Zoho Books", logo: "/zoho.png" },
  { name: "TallyPrime", logo: "/tally.png" },
  { name: "QuickBooks", logo: "/quick.png" },
  { name: "Xero", logo: "/Xero.png" },
  { name: "Microsoft Dynamics 365", logo: "/ms.png" },
  { name: "SAP S/4HANA Finance", logo: "/sap.svg" },
  { name: "Oracle Financials Cloud", logo: "/oracle.png" },
  { name: "Wave Accounting", logo: "/wave.jpg" },
  { name: "Busy Accounting Software", logo: "/busy.jpg" },
  { name: "Marg ERP", logo: "/marg.jpg" },
  { name: "NetSuite ERP", logo: "/net.png" },
  { name: "Odoo Accounting", logo: "/oddo.png" },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Creates a cool staggering effect
    },
  },
};




export default function Technology() {
  return (
    <section className="bg-[#f8faff] dark:bg-black py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-100/80 to-cyan-100/80 border-2 border-cyan-200/50 backdrop-blur-sm rounded-full mb-6">
          <span className="text-cyan-700 font-semibold">Our Technology</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 dark:text-white">
          Our <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent dark:text-blue-400">Accounting Technology</span>
        </h2>

        {/* Animated Feature Cards Grid */}
        <motion.div
          className="w-full max-w-[960px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.name}
              className="bg-white dark:bg-gray-800/40 p-6 rounded-xl  flex flex-col items-center justify-start gap-5 border border-gray-200 dark:border-gray-700"
           
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-grow flex items-center justify-center">
                   <Image src={feature.logo} alt={feature.name} width={70} height={70} style={{objectFit: "contain"}} />
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200 text-center text-sm mt-auto">
                {feature.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}