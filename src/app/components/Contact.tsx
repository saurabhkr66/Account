'use client';

import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// Enhanced illustration component with floating elements
const ContactIllustration = () => (
  <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px] flex items-center justify-center p-8">
    {/* Floating background elements */}
    <motion.div 
      className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-60"
      animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-indigo-200 to-violet-300 rounded-full opacity-60"
      animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Main phone mockup */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform -rotate-6 shadow-xl"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
    <motion.div 
      className="relative w-full max-w-sm h-[450px] bg-white rounded-3xl shadow-2xl p-6 border border-gray-200/80 flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {/* Phone header */}
      <div className="w-1/3 h-2 bg-gray-300 rounded-full mx-auto mb-6"></div>
      
      {/* Chat messages with animations */}
      <div className="space-y-4 mt-4">
        {[
          { width: 'w-3/4', color: 'bg-gradient-to-r from-sky-100 to-blue-100', delay: 0.6 },
          { width: 'w-1/2', color: 'bg-gradient-to-r from-violet-100 to-indigo-100', delay: 0.8, align: 'ml-auto' },
          { width: 'w-3/4', color: 'bg-gradient-to-r from-sky-100 to-blue-100', delay: 1.0 },
          { width: 'w-2/3', color: 'bg-gradient-to-r from-violet-100 to-indigo-100', delay: 1.2, align: 'ml-auto' }
        ].map((msg, index) => (
          <motion.div
            key={index}
            className={`${msg.width} h-8 ${msg.color} rounded-lg ${msg.align || ''}`}
            initial={{ opacity: 0, x: msg.align ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: msg.delay }}
          />
        ))}
      </div>
      
      {/* Enhanced input area */}
      <div className="mt-auto flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full">
        <div className="flex-grow h-8 bg-white rounded-full border border-gray-200 shadow-sm"></div>
        <motion.div 
          className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Send className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 py-16 sm:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Enhanced Illustration */}
          <div className="hidden lg:block">
            <Image
              src="/faq.webp"
              alt="Contact Us Illustration"
              width={600}
              height={300}
              className=" object-cover rounded-3xl"/>
          </div>

          {/* Right Column: Enhanced Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Form container with enhanced styling */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-800 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Trust indicators */}
                {/* <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-violet-200 ml-2 text-sm">Trusted by 10,000+ businesses</span>
                </div> */}

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Transform Your Business with 
                  <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent"> Expert Care</span>
                </h2>
                <p className="text-violet-200 mb-8 text-lg">
                  Join thousands of business owners who trust us to manage their finances and drive growth.
                </p>

                <form className="space-y-6">
                  {/* Enhanced input fields */}
                  {[
                    { icon: User, type: 'text', name: 'name', placeholder: 'Your Full Name' },
                    { icon: Mail, type: 'email', name: 'email', placeholder: 'Business Email Address' },
                    { icon: Phone, type: 'tel', name: 'phone', placeholder: 'Phone Number' }
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="relative group">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                          <field.icon className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          className="block w-full rounded-xl border-0 py-4 pl-12 pr-4 text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white/95 backdrop-blur-sm hover:bg-white focus:bg-white"
                          placeholder={field.placeholder}
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Enhanced textarea */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <div className="relative group">
                      <div className="pointer-events-none absolute top-4 left-0 flex items-center pl-4">
                        <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      </div>
                      <textarea
                        name="message"
                        rows={5}
                        className="block w-full rounded-xl border-0 py-4 pl-12 pr-4 text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white/95 backdrop-blur-sm hover:bg-white focus:bg-white resize-none"
                        placeholder="Tell us about your business needs and how we can help..."
                      />
                    </div>
                  </motion.div>

                  {/* Enhanced submit button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-6 py-4 text-lg font-semibold text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-violet-800 transition-all duration-200 relative overflow-hidden group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                      <Send className="w-5 h-5" />
                      <span>Get Your Free Quote</span>
                    </motion.button>
                  </motion.div>

                  {/* Trust elements */}
                  <motion.div
                    className="flex items-center justify-center space-x-6 pt-4 text-violet-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Free consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">No commitment</span>
                    </div>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
