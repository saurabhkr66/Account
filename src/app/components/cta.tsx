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
        <div className="w-full pb-24 pt-24">
          <div className="relative block  max-w-7xl mx-auto">
            {/* Gradient background behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400  to-blue-500 rounded-3xl opacity-100"></div>

            {/* Main card with padding and center text */}
            <div className="relative rounded-3xl p-12 text-white">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Clock className="w-10 h-10 text-white" />
                <h3 className="text-4xl font-bold">Need Immediate Assistance?</h3>
                <Zap className="w-10 h-10 text-white" />
              </div>

              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90">
                Our team is ready to help you with your accounting and tax needs.
                Choose the option that works best for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-10 justify-center">
  {/* Call Now Button */}
  {/* <Button
    className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-lg font-semibold py-5 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
  >
    <Phone className="w-6 h-6" />
    <span>Call Now</span>
  </Button> */}
  <Button
    variant="outline"
    // className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-lg font-semibold py-5 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
className="text-lg border-2 border-white bg-white  font-semibold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105  inline-flex items-center gap-2"
>
  <span className="text-sky-500">
    <Phone className="w-5 h-5 " />
    </span>
    <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Book a Call</span>
  </Button>

  {/* WhatsApp Chat Button */}
  <Button
    className="text-lg border-2 border-white text-white bold bg-gradient-to-r from-sky-400 to-blue-500 font-semibold py-5 px-10 rounded-xl inline-flex items-center gap-2"
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
