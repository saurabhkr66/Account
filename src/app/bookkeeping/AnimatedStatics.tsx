"use client"
import { Card } from '@/components/ui/card'
import React from 'react'
import { useState, useEffect } from 'react'

function AnimatedStatics() {
    const [isVisible, setIsVisible] = useState(false)

    const [counters, setCounters] = useState({
        clients: 0,
        invoices: 0,
        projects: 0,
        reconciliation: 0,
        team: 0,
      })
      useEffect(() => {
    setIsVisible(true)
    // Animate counters
    const animateCounter = (key: keyof typeof counters, target: number, duration = 2000) => {
      const start = Date.now()
      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - start) / duration, 1)
        const value = Math.floor(progress * target)
        setCounters((prev) => ({ ...prev, [key]: value }))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      animate()
    }

    const timer = setTimeout(() => {
      animateCounter("clients", 150)
      animateCounter("invoices", 500)
      animateCounter("projects", 89)
      animateCounter("reconciliation", 2300)
      animateCounter("team", 25)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

      
  return (
      <div className="relative z-40  -mt-18 container mx-auto px-4 ">
        <Card className="backdrop-blur-lg p-8 rounded-3xl shadow-2xl bg-white/80 border-gray-200 dark:bg-gray-900/50 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {counters.clients}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">CLIENTS SERVED</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent mb-2">
                {counters.invoices}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">INVOICES PROCESSED PER MONTH</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {counters.projects}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">COMPLETED PROJECTS</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {counters.reconciliation}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">RECONCILIATION IN A MONTH</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {counters.team}+
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">TEAM SIZE</p>
            </div>
          </div>
        </Card>
      </div>
  )
}

export default AnimatedStatics