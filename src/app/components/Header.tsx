'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  const [activeSection, setActiveSection] = useState('home');
  const [inHomeSection, setInHomeSection] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // 🍔 Toggle for mobile menu

  useEffect(() => {
    if (!isLandingPage) {
      setInHomeSection(false);
      return;
    }

    const sections = ['home', 'services', 'how-it-works', 'about', 'faq', 'technology', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            setInHomeSection(id === 'home');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px',
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isLandingPage]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false); // Close menu after click
    }
  };

  const styles = {
    text: inHomeSection ? 'text-white' : 'text-black',
    bg: 'bg-transparent border-white/10',
    shadow: 'shadow-md',
  };

  const navItems = [
    ['services', 'Services'],
    ['how-it-works', 'Who We Serve'],
    ['technology', 'Technology'],
    ['about', 'About'],
    ['faq', 'FAQ'],
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50 transition-colors duration-500">
      <div className={`max-w-[104rem] mx-auto rounded-xl backdrop-blur-lg px-6 h-20 flex justify-between items-center border transition-all duration-500 ${styles.bg} ${styles.shadow}`}>
        
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl md:text-3xl flex items-center font-bold px-2 text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#A78BFA" />
            <path d="M16 4.5L27.5 16L16 27.5L4.5 16L16 4.5Z" fill="#8B5CF6" />
            <path d="M16 9L23 16L16 23L9 16L16 9Z" fill="white" />
          </svg>
          <span className="ml-2">Account</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`font-medium hover:underline transition-colors duration-300 ${
                activeSection === id
                  ? inHomeSection
                    ? 'text-white font-semibold'
                    : 'text-sky-400 font-semibold'
                  : styles.text
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-lg px-4 py-2 font-semibold shadow hover:scale-105 transition"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className={`md:hidden mt-2 backdrop-blur-lg bg-white/90 dark:bg-black/80 rounded-xl mx-4 p-6 shadow-lg border ${inHomeSection ? 'text-black' : 'text-black'}`}>
          <nav className="flex flex-col space-y-4">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left font-medium ${
                  activeSection === id ? 'text-sky-500 font-semibold' : ''
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-lg px-4 py-2 font-semibold shadow hover:scale-105 transition"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
