"use client";

import { Button } from "@/components/ui/button";
import { Clock, MessageSquare, Phone, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="w-full py-12 sm:py-20 md:pb-24 md:pt-24 px-2 xs:px-4 sm:px-6 md:px-8">
          <div className="relative max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto">
            {/* Gradient background behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl sm:rounded-3xl opacity-100"></div>

            {/* Main card with padding and center text */}
            <div className="relative rounded-2xl sm:rounded-3xl px-4 sm:px-8 md:px-12 py-8 sm:py-12 text-white">
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
                <Clock className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Need Immediate Assistance?
                </h3>
                <Zap className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
              </div>

              <p className="text-base sm:text-xl mb-6 sm:mb-10 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed text-white/90">
                Our team is ready to help you with your accounting and tax needs.
                Choose the option that works best for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center w-full">
                {/* Book a Call Button */}
                <Button
                  variant="outline"
                  className="text-base sm:text-lg border-2 border-white bg-white font-semibold py-4 sm:py-5 px-6 sm:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <span className="text-sky-500">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Book a Call
                  </span>
                </Button>

                {/* WhatsApp Chat Button */}
                <Button
                  className="text-base sm:text-lg border-2 border-white text-white bg-gradient-to-r from-sky-400 to-blue-500 font-semibold py-4 sm:py-5 px-6 sm:px-10 rounded-xl inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
