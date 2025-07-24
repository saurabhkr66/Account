// This component represents a full page in a Next.js application.
// It uses React Hooks, Tailwind CSS for styling, and lucide-react for icons.
// To run this, you would place it in `app/page.js` in a Next.js project
// that has Tailwind CSS and lucide-react installed.
"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Main Page Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* Main container */}
      <div className="min-h-screen flex flex-col">
        {/* Header Component */}
        <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Commune</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-purple-600 transition-colors">Features</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Solutions</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Pricing</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Company</a>
            </nav>

            {/* CTA Button */}
            <a
              href="#"
              className="hidden md:block bg-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
            >
              Sign Up
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white pb-4 px-6">
              <nav className="flex flex-col space-y-4">
                 <a href="#" className="hover:text-purple-600 transition-colors">Features</a>
                 <a href="#" className="hover:text-purple-600 transition-colors">Solutions</a>
                 <a href="#" className="hover:text-purple-600 transition-colors">Pricing</a>
                 <a href="#" className="hover:text-purple-600 transition-colors">Company</a>
                 <a
                    href="#"
                    className="bg-purple-600 text-white text-center font-bold py-2 px-6 rounded-lg hover:bg-purple-700"
                  >
                    Sign Up
                  </a>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative text-white py-20 md:py-28 bg-gradient-to-br from-purple-600 to-indigo-600">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                  Turn Events into Communities
                </h1>
                <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-purple-200 mb-8">
                  You can run the entire event, from talks to coffee break networking and afterparty. Then your community can live on, always-on and year-round.
                </p>
                <a
                  href="#"
                  className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 inline-block shadow-lg"
                >
                  Sign up for Beta
                </a>
              </div>
              <div className="hidden md:block">
                 <img 
                    src="https://placehold.co/600x400/FFFFFF/6D28D9?text=Isometric+Virtual+Event" 
                    alt="Illustration of a virtual event on multiple devices"
                    className="rounded-lg w-full h-auto"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
                />
              </div>
            </div>
          </section>

          {/* Features Sections */}
          <div className="py-20 md:py-28 space-y-20 md:space-y-28">
            {/* Feature 1: Networking */}
            <section className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Networking for the Shy</h2>
                      <p className="text-lg text-gray-600">
                         Help your attendees meet new, random friends, and they will thank you for it. No more awkward moments, just serendipity and some fun structure. Empower leaders without limits.
                      </p>
                  </div>
                  <div className="p-4">
                      <img 
                          src="https://placehold.co/500x350/F3E8FF/6D28D9?text=Virtual+Networking" 
                          alt="Illustration of people networking online"
                          className="rounded-lg shadow-xl w-full h-auto"
                          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x350/cccccc/ffffff?text=Image+Not+Found'; }}
                      />
                  </div>
              </div>
            </section>

            {/* Feature 2: Hybrid Events */}
            <section className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="p-4 md:order-2">
                      <img 
                          src="https://placehold.co/500x350/F3E8FF/6D28D9?text=Hybrid+Event+on+Laptop" 
                          alt="Illustration of a hybrid event on a laptop screen"
                          className="rounded-lg shadow-xl w-full h-auto"
                          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x350/cccccc/ffffff?text=Image+Not+Found'; }}
                      />
                  </div>
                  <div className="text-center md:text-left md:order-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hybrid Events</h2>
                      <p className="text-lg text-gray-600">
                         Don't just stream online, create your community space where some people are in person and some are remote. We make sure you can run your hybrid event with a single source of truth, a single login and clear and fair spaces without streaming overhead.
                      </p>
                  </div>
              </div>
            </section>
            
            {/* Feature 3: Mobile First */}
            <section className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mobile First Apps</h2>
                      <p className="text-lg text-gray-600">
                         We believe not all events can be run on desktops, we have native mobile first iOS and Android.
                      </p>
                  </div>
                  <div className="p-4">
                      <img 
                          src="https://placehold.co/500x350/F3E8FF/6D28D9?text=Mobile+App+Interface" 
                          alt="Illustration of a person using a mobile event app"
                          className="rounded-lg shadow-xl w-full h-auto"
                          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x350/cccccc/ffffff?text=Image+Not+Found'; }}
                      />
                  </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; 2024 Commune Inc. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-purple-300">Privacy Policy</a>
                    <a href="#" className="hover:text-purple-300">Terms of Service</a>
                    <a href="#" className="hover:text-purple-300">Contact</a>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
};

// In a real Next.js app, you would export this as the default component for the page.
export default App;
