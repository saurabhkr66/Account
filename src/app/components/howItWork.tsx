
"use client"

import { motion } from "framer-motion"


import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Component() {
  const services = [
    {
      title: 'Start-Ups',
      description:
        'We help startups establish a strong financial foundation by setting up efficient accounting systems and processes tailored to their early-stage needs.',
      color: 'from-sky-400 to-sky-600',
    },
    {
      title: 'Growing Businesses',
      description:
        'As your business scales, we provide insights and automated tools to streamline your finances, manage cash flow, and support sustainable growth.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Established Enterprises',
      description:
        'Advanced and remote accounting solutions for mature businesses seeking to optimize accuracy, compliance, and operational efficiency.',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      title: 'Individual Services',
      description:
        'Personalized services including tax planning, investment tracking, and wealth management to help individuals reach their financial goals.',
      color: 'from-cyan-400 to-cyan-600',
    },
  ];

  return (
    <section className="py-24 overflow-hidden relative">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Who We{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Serve
            </span>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Empowering businesses of all sizes to thrive.
          </p>
        </div>

<div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20 ">
          {services.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <Card className="h-90  bg-white/80 backdrop-blur-sm shadow-xl transition-all mt-20 mx-auto duration-700 border-2 border-gray-200/50 overflow-hidden relative">
                <CardContent className="relative p-8 h-full flex flex-col">
                  <div className="relative mb-6"></div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {feature.title}
                    </h3>

                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full mb-4`}
                    ></div>

                    <p className="text-gray-600 leading-relaxed mb-4  flex-1">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-sm font-semibold leading-none">
                      <span
                        className={`mr-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                      >
                        See Pricing
                      </span>
                      <ArrowRight className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
}


