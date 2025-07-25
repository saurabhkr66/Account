"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { 
  
  MessageCircle, 
  Shield, 
  DollarSign, 
  
  Phone, 

  Mail,
  MapPin,
  
} from 'lucide-react'
import Image from "next/image"

export default function FaqContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const keyFeatures = [
    {
      icon: Shield,
      title: "Seamless Transition",
      description: "We ensure a smooth, hassle-free transition, minimizing disruption to your operations.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "We keep you informed at every step with clear, open communication.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: DollarSign,
      title: "Accurate Finances",
      description: "Our team provides precise financial tracking to ensure everything stays on budget and within scope.",
      color: "from-violet-500 to-purple-600",
    },
  ]

  const faqs = [
    {
      question: "What is the difference between your bookkeeping and accounting services?",
      answer:
        "Bookkeeping is the process of recording daily financial transactions. Our accounting services take that data and interpret, analyze, and summarize it to provide strategic insights, help with tax planning, and guide high-level business decisions.",
    },
    {
      question: "Can you help my business reduce its tax burden?",
      answer:
        "Yes. Our primary goal with tax services is proactive planning. We work with you year-round to implement strategies that legally and effectively minimize your tax liability.",
    },
    {
      question: "How can strategic accounting help my business grow?",
      answer:
        "By providing clear financial forecasts, identifying key performance indicators, analyzing profitability, and offering expert advice, we empower you to make smarter decisions about expansion, investment, and operations, directly fueling your growth.",
    },
    {
      question: "Do I need Virtual CFO services?",
      answer:
        "If your business needs high-level financial strategy and guidance but isn't ready for the expense of a full-time CFO, our Virtual CFO service is the perfect solution. It provides the expert oversight you need on a flexible, cost-effective basis.",
    },
    {
      question: "Can payroll outsourcing services grow with my business?",
      answer:
        "Professional payroll outsourcing services are designed to scale with your business. Whether you're adding employees, expanding to new locations, or changing benefit structures, outsourcing providers can adapt their services to meet your evolving needs without requiring additional internal resources.",
    },
    {
      question: "What makes your accounting service different from others?",
      answer:
        "We combine traditional accounting expertise with modern technology and personalized service. Our team focuses on building long-term relationships, providing proactive advice, and using cutting-edge tools to deliver accurate, timely financial insights that drive business growth.",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@yourcompany.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Business St, City, ST 12345",
      description: "Schedule an appointment"
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("faq-contact-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-gray-100 text-gray-900  dark:bg-black dark:text-gray-100">
      {/* Fixed Navbar */}

      {/* Main Content with padding to avoid overlap */}
      <div className="flex min-h-screen flex-col items-center p-6 pt-20">
        {" "}
        {/* Adjust pt-20 based on navbar height */}
        {/* Header Section */}
        <div className="w-full max-w-7xl rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 p-8 text-center text-white shadow-lg dark:bg-blue-700">
          <button className="mb-4 rounded-full bg-white px-6 py-2 font-medium text-blue-500 dark:bg-gray-800 dark:text-white">
            WRITE TO US
          </button>
          <h1 className="text-4xl font-semibold">Get In Touch</h1>
        </div>
        {/* Main Content */}
        <div className="mt-8 grid w-full max-w-7xl gap-8 md:grid-cols-2">
          {/* Form Section */}
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <h2 className="mb-2 text-2xl font-semibold">Let’s Talk!</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Get in touch with us using the enquiry form or contact details below.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    placeholder="Shasanko"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    placeholder="Das"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="yourname@example.com"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  placeholder="Type something..."
                  rows={4}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-600"
                ></textarea>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />I agree to receive other communication
                  messages.
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />I give my consent to store my data.
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 py-3 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
            
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-3">
            <Image
              src="/customer.png"
              alt="Person looking at phone"
              width={200}
              height={200}
              className="h-auto w-full rounded-lg border-4 border-gray-300 dark:border-gray-600"
            />
            {/* <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold">Quick Contact</h3>
                  <p className="text-gray-600 dark:text-gray-300">hi@lumovateintelligence.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold">Phone Number</h3>
                  <p className="text-gray-600 dark:text-gray-300">phone number</p>
                  <p className="text-gray-600 dark:text-gray-300">phone number</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold">Headquarters</h3>
                  <p className="text-gray-600 dark:text-gray-300">Sikar, Rajasthan-332406</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
