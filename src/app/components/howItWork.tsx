"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

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
    title: "Individual Services",
    description:
      "Personalized budgeting, tax planning, and wealth management solutions designed to help individuals take control of their finances.",
  },
];

// Reusable Card Component with increased width

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group"
    >
      <div className="h-[360px] w-full max-w-sm bg-white/80 backdrop-blur-sm shadow-xl border-2 border-gray-200/50 overflow-hidden rounded-2xl p-8 flex flex-col justify-between transition-all duration-700">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-4"></div>
          <p className="pt-1 text-gray-600 leading-relaxed text-lg flex-1">{description}</p>
        </div>

        <div className="mt-6 inline-flex items-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent font-semibold text-md">
          <span className="mr-2">View Pricing</span>
          <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};


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
