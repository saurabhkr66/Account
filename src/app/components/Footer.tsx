'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp,FaLinkedin, FaInstagram } from 'react-icons/fa';


// interface SocialIconProps {
//   href: string;
//   'aria-label': string;
//   children: ReactNode;
// }

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#A78BFA" />
      <path d="M16 4.5L27.5 16L16 27.5L4.5 16L16 4.5Z" fill="#8B5CF6" />
      <path d="M16 9L23 16L16 23L9 16L16 9Z" fill="white" />
    </svg>
    <Link
      href="/"
      className="text-3xl font-bold text-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
    >
      <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 cursor-pointer bg-clip-text text-transparent">
        Account
      </span>
    </Link>
  </div>
);

// const SocialIcon = ({ href, 'aria-label': ariaLabel, children }: SocialIconProps) => (
//   <a
//     href={href}
//     aria-label={ariaLabel}
//     className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//   >
//     {children}
//   </a>
// );

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 font-sans border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-around text-center md:text-left">
          
          {/* Column 1: Logo, Tagline, Socials */}
          <div className="flex flex-col items-center md:items-start lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-500 max-w-xs">
              Build Digital Solutions that scale
            </p>
            <div className="flex justify-center md:justify-start space-x-5 mt-6">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="text-black text-3xl"
>
  <path d="M20.81 3H16.1l-3.12 4.17L9.33 3H3.19L9.89 12l-6.7 9h4.65l3.65-4.89L14.79 21h6.03L14.83 12l5.98-9zM16.8 4.5h2.15l-6.7 9 6.7 9h-2.16l-6.7-9 6.71-9z" />
</svg>
              <FaLinkedin className="text-3xl text-blue-600" />
              <FaFacebook className="text-3xl text-blue-600" />
              <FaInstagram className="text-3xl text-pink-600" />
                
              <FaWhatsapp className="text-green-500 text-3xl" />

            </div>
            <p className="text-sm text-gray-400 mt-8">
              © 2025 Account. All rights reserved.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-b from-sky-400 to-blue-500 bg-clip-text text-transparent mb-4">Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-sky-500 hover:underline">Invoice</a></li>
              <li><a href="#" className="hover:text-sky-500 hover:underline">MCA</a></li>
              <li><a href="#" className="hover:text-sky-500 hover:underline">Bookkeeping</a></li>
              <li><a href="#" className="hover:text-sky-500 hover:underline">Tax and Accounting</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-b from-sky-400 to-blue-500 bg-clip-text text-transparent  mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-sky-500 hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-500 hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-sky-500 hover:underline">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-sky-500 hover:underline">Cancellation & Refund</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-b from-sky-400 to-blue-500 bg-clip-text text-transparent  mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                <a href="mailto:hi@teklume.com" className="hover:text-sky-500 hover:underline">abc@gmail.com</a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                <a href="tel:+918985350865" className="hover:text-sky-500 hover:underline">+91 888XXXXXXX</a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                <span>Sector-56<br />New Delhi India</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
