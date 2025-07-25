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
];

// Reusable Card Component
const ServiceCard = ({ title, description }) => (
  <div className="flex h-full flex-col justify-between rounded-2xl bg-slate-100/80 p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2">
    <div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
    <motion.a
      href="#"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group mt-8 inline-flex items-center justify-center self-center rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-400 px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-300"
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
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Who We Serve?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Empowering businesses of all sizes to thrive.
          </p>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl  rounded-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
