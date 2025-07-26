"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Data for the service cards
const services = [
  {
    title: "Start-Ups",
    description:
      "Establishing and streamlining financial processes for entrepreneurs that are starting out.",
  },
  {
    title: "Growing Businesses",
    description:
      "Providing tailored accounting solutions to optimize growth by giving insights into finances.",
  },
  {
    title: "Established Enterprises",
    description:
      "Advanced remote accounting services to streamline processes for seamless efficiency and accuracy.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Comprehensive accounting services with dedicated support for large-scale operations and compliance.",
  },
];

// Reusable Card Component with increased width
const ServiceCard = ({ title, description }) => (
  <div className="flex h-[360px] w-full max-w-sm flex-col justify-between rounded-2xl bg-slate-100/80 p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2">
    <div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
    <motion.a
      href="#"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group mt-6 inline-flex items-center justify-center self-center rounded-lg bg-gradient-to-r from-sky-400 to-blue-400 px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-300"
    >
      View Pricing
      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  </div>
);

// Main Section Component
export default function WhoWeServe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <motion.div
        className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Who We{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Serve
            </span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Empowering businesses of all sizes to thrive.
          </p>
        </div>

        <motion.div
          className="mx-auto px-48 mt-12 grid max-w-8xl gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={`${service.title}-${index}`} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
