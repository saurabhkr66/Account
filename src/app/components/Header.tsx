'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  const [activeSection, setActiveSection] = useState('home');
  const [inHomeSection, setInHomeSection] = useState(true); // true only if user is in `#home`

  useEffect(() => {
    if (!isLandingPage) {
      setInHomeSection(false); // Force dark navbar if not on homepage
      return;
    }

    const sections = ['home', 'services', 'how-it-works', 'about', 'faq', 'technology', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            setInHomeSection(id === 'home'); // 👈 Track if we're in `home` or not
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
    console.log('scrollToSection',el);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

 const styles = {
  text: inHomeSection ? 'text-white' : 'text-black',
  bg: 'bg-transparent border-white/10', // ✅ always transparent
  shadow: 'shadow-md', // ✅ fixed, or remove if you don't want any shadow
};


  return (
    <header className="fixed top-4 left-0 w-full z-50 transition-colors duration-500">
      <div className={`max-w-[104rem] mx-auto rounded-xl backdrop-blur-lg px-6 h-24 flex justify-between items-center border transition-all duration-500 ${styles.bg} ${styles.shadow}`}>
        <button
          onClick={() => scrollToSection('home')}
          className="text-3xl flex flex-grid-2 cursor-pointer font-bold px-9 text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#A78BFA" />
            <path d="M16 4.5L27.5 16L16 27.5L4.5 16L16 4.5Z" fill="#8B5CF6" />
            <path d="M16 9L23 16L16 23L9 16L16 9Z" fill="white" />
          </svg>
          Account
        </button>
        <nav className="flex gap-8 items-center c">
          {[
            ['services', 'Services'],
            ['how-it-works', 'Who We Serve'],
            ['technology', 'Technology'],

            ['about', 'About'],
            ['faq', 'FAQ'],
            // ['contact', 'Contact Us'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`font-medium hover:underline transition-colors  cursor-pointer duration-300 ${
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
            className="ml-4 bg-gradient-to-r from-sky-400 to-blue-500 cursor-pointer text-white rounded-lg px-4 py-2 font-semibold shadow hover:scale-105 transition"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
