"use client"

import { Button } from '@/components/ui/button'
import { Clock, MessageSquare, Phone, Zap } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

export default function Cta() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center"
      >
        <div className="w-full">
          <div className="relative block w-full max-w-7xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 border-2 border-gray-200/50 shadow-2xl">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Clock className="w-10 h-10 text-sky-600" />
                <h3 className="text-3xl font-bold text-gray-800">Need Immediate Assistance?</h3>
                <Zap className="w-10 h-10 text-indigo-600" />
              </div>
              
              <p className="text-gray-600 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Our team is ready to help you with your accounting and tax needs. 
                Choose the option that works best for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 hover:from-sky-500 hover:via-blue-600 hover:to-indigo-700 text-lg text-white font-semibold py-6 px-10 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
                  <Phone className="w-7 h-7" />
                  <span>Call Now</span>
                </Button>
                
                <Button variant="outline" className="text-lg border-2 border-sky-300 text-sky-700 hover:border-blue-400 hover:text-blue-800 hover:bg-sky-50 font-semibold py-6 px-10 rounded-xl transition-all duration-300 backdrop-blur-sm transform hover:scale-105 inline-flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
