'use client';

import { Mail, Phone, MapPin, X, Linkedin, Facebook, Instagram, MessageSquare } from 'lucide-react';
import Link from 'next/link';

// A simple SVG component for the logo to match the design
const TeklumeLogo = () => (
  <div className="flex items-center gap-2 ">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#A78BFA"/>
      <path d="M16 4.5L27.5 16L16 27.5L4.5 16L16 4.5Z" fill="#8B5CF6"/>
      <path d="M16 9L23 16L16 23L9 16L16 9Z" fill="white"/>
    </svg>
    <Link href="/" className="text-3xl font-bold text-gradient bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
    <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 cursor-pointer  bg-clip-text text-transparent">Account</span>
    </Link>
  </div>
);


// Social Icon wrapper - removed default text color to allow individual icon coloring.
const SocialIcon = ({ href, 'aria-label': ariaLabel, children }) => (
    <a 
        href={href} 
        aria-label={ariaLabel}
        className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
        {children}
    </a>
);

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 font-sans border-t border-gray-200">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-70 justify-around">
          
          {/* Column 1: Logo, Tagline, Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <TeklumeLogo />
            <p className="mt-4 text-gray-500 max-w-xs">
              Build Digital Solutions that scale
            </p>
            {/* FIX: Added brand colors to each social icon */}
            <div className="flex space-x-3 mt-6">
              <SocialIcon href="#" aria-label="X (formerly Twitter)">
                <X className="w-5 h-5 text-gray-800 transition-colors hover:text-black" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-blue-700 transition-colors hover:text-blue-800" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-blue-600 transition-colors hover:text-blue-700" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-pink-600 transition-colors hover:text-pink-700" />
              </SocialIcon>
               <SocialIcon href="#" aria-label="WhatsApp">
                <MessageSquare className="w-5 h-5 text-green-500 transition-colors hover:text-green-600" />
              </SocialIcon>
            </div>
            <p className="text-sm text-gray-400 mt-8">
              © 2025 Account. All rights reserved.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600 mb-4">Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-violet-600 hover:underline">Invoice</a></li>
              <li><a href="#" className="hover:text-violet-600 hover:underline">MCA</a></li>
              <li><a href="#" className="hover:text-violet-600 hover:underline">Bookkeeping</a></li>
              <li><a href="#" className="hover:text-violet-600 hover:underline">Tax and Accounting</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600 mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-violet-600 hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-violet-600 hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-violet-600 hover:underline">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-violet-600 hover:underline">Cancellation & Refund</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600 mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                <a href="mailto:hi@teklume.com" className="hover:text-violet-600 hover:underline">abc@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                <a href="tel:+918985350865" className="hover:text-violet-600 hover:underline">+91 888XXXXXXX</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
                <span>Sector-56<br/>New Delhi India</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
