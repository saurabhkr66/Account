'use client';

import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle, MapPin, FileQuestionIcon, Chrome } from 'lucide-react';

// New component for the left-side contact information
const ContactInfo = () => {
  const contactPoints = [
    // {
    //   icon: MapPin,
    //   title: 'Noida Office',
    //   details: 'Highway Towers- Tower 1, Ground Floor A13/2,3,4 Sec 62 Noida (U.P) 201301 (Delhi NCR)',
    // },
    {
      icon: MapPin,
      title: 'Mohali Office',
      details: 'Bestech Business Tower, A-411, Fourth Floor, Sector 66, Mohali',
    },
    {
      icon: MapPin,
      title: 'Bareilly Office',
      details: 'B-12, Deen Dayal Puram, Bareilly, 243122',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91-925-825-6391',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@consulting.net',
    },
    {
      icon: Chrome,
      title: 'website',
      details: 'https://accounting.net',
    },
    {
      icon: FileQuestionIcon,
      title: 'Opening Hours',
      details: '9AM - 6PM (Mon - Sat)',
    },
  ];

  return (
    <motion.div
      className="space-y-10 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
    >
      {contactPoints.map((point, index) => (
        <motion.div
          key={index}
          className="space-y-4"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-14 h-14 bg-sky-400/20 text-sky-500 rounded-full flex items-center justify-center">
              <point.icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-sky-500">{point.title}</h3>
              <p className="text-gray-600 text-xl mt-1">{point.details}</p>
            </div>
          </div>

          {/* Add a divider below each item except the last */}
          {index < contactPoints.length - 1 && (
            <div className="border-b border-gray-300 w-full" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};


export default function ContactUs() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Ready to transform your business? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: New Contact Info Component */}
          <div className="hidden lg:block">
            <ContactInfo />
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
<div className="bg-gradient-to-r from-[#211F36] to-[#4a2a58] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Transform Your Business with 
                  <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent"> Expert Care</span>
                </h2>
                <p className="text-violet-100 mb-8 text-lg">
                  Join thousands of business owners who trust us to manage their finances and drive growth.
                </p>

                <form className="space-y-6">
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
                          className="block w-full rounded-xl border-0 py-4 pl-4 pr-4 text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white/95 backdrop-blur-sm hover:bg-white focus:bg-white"
                          placeholder={field.placeholder}
                        />
                      </div>
                    </motion.div>
                  ))}

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
                        className="block w-full rounded-xl border-0 py-4 pl-4 pr-4 text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white/95 backdrop-blur-sm hover:bg-white focus:bg-white resize-none"
                        placeholder="Tell us about your business needs..."
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-4 text-lg font-semibold text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-violet-800 transition-all duration-200 relative overflow-hidden group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                      <Send className="w-5 h-5" />
                      <span>Get Your Free Quote</span>
                    </motion.button>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-center space-x-6 pt-4 text-violet-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-sky-400" />
                      <span className="text-sm">Free consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-sky-400" />
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
