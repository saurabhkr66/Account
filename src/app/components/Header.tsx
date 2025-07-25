'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const isFirstPage = pathname === '/';
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'services', 'how-it-works', 'about', 'faq', 'testimonial', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
                    console.log('Now in section:', entry.target.id); // ✅ Add this line

            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const isHome = activeSection === 'home';

  const styles = {
    text: isHome ? 'text-white' : 'text-black',
    bg: isHome ? 'bg-transparent border-white/20' : 'bg-transparent border-gray-200',
    shadow: isHome ? 'shadow-md' : 'shadow-lg',
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 transition-colors duration-500">
      <div className={`max-w-[96rem] mx-auto rounded-xl backdrop-blur-lg px-6 h-24 flex justify-between items-center border transition-all duration-500 ${styles.bg} ${styles.shadow}`}>
        
        <button
          onClick={() => scrollToSection('home')}
          className="text-3xl  flex flex-grid-2 font-bold px-9 text-gradient bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-600 bg-clip-text text-transparent"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#A78BFA"/>
      <path d="M16 4.5L27.5 16L16 27.5L4.5 16L16 4.5Z" fill="#8B5CF6"/>
      <path d="M16 9L23 16L16 23L9 16L16 9Z" fill="white"/>
      {" "}
    </svg>
          Account
        </button>
        <nav className="flex gap-8 items-center">
          {[
            ['services', 'Services'],
            ['how-it-works', 'How It Works'],
            ['about', 'About'],
            ['faq', 'FAQ'],
            ['testimonial', 'Testimonials']
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`font-medium hover:underline transition-colors duration-300 ${
                activeSection === id ? 'text-emerald-400 font-semibold' : styles.text
              }`}
            >
              {label}
            </button>
          ))}
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
