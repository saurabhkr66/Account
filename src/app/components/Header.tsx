'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const isFirstPage = pathname === '/';
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Make sure these match your actual section IDs in page.tsx
    const sections = ['home', 'services', 'how it work', 'about', 'faq', 'testimonial', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Determine if we should use changed colors (not in home section)
  const shouldChangeColors = activeSection !== 'home';

  // Get header styles based on whether we're in home section or not
  const getHeaderStyles = () => {
    if (!shouldChangeColors) {
      // Home section - original white/transparent styling
      return {
        text: 'text-emerald-300'
      };
    } else {
      // Any other section - darker styling for better contrast
      return {
        text: 'text-black'
      };
    }
  };

  const styles = getHeaderStyles();

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <div className={`max-w-[96rem] mx-auto rounded-xl backdrop-blur-lg shadow-lg border px-6 h-24 flex justify-between items-center transition-all duration-500 ${styles.bg}`}>
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold px-9 text-gradient bg-gradient-to-r from-green-500 via-emerald-400 to-teal-300 bg-clip-text text-transparent"
        >
          Account
        </button>
        <nav className="flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('services')}
            className={`font-medium hover:underline transition-colors duration-300 ${
              activeSection === 'services' ? 'text-emerald-400 font-semibold' : styles.text
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className={`font-medium hover:underline transition-colors duration-300 ${
              activeSection === 'how it work' ? 'text-emerald-400 font-semibold' : styles.text
            }`}
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`font-medium hover:underline transition-colors duration-300 ${
              activeSection === 'about' ? 'text-white font-semibold' : styles.text
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className={`font-medium hover:underline transition-colors duration-300 ${
              activeSection === 'faq' ? 'text-emerald-400 font-semibold' : styles.text
            }`}
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('testimonial')}
            className={`font-medium hover:underline transition-colors duration-300 ${
              activeSection === 'testimonial' ? 'text-emerald-400 font-semibold' : styles.text
            }`}
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="ml-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 
            text-white rounded-lg px-4 py-2 font-semibold shadow hover:scale-105 transition"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
