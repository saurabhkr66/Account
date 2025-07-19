
"use client"
import { MapPin, Phone, Mail, Clock, Github, MessageCircle, X } from "lucide-react"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
// You can place this component in your `components` directory.
// For example: `components/Footer.js`
// Make sure you have lucide-react installed: npm install lucide-react

const Footer = () => {
 


  return (
    <>
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-950 dark:text-gray-400 py-12 font-sans">
      <div className="container mx-auto px-4">
        {/* Top section: Services, Industries, Software Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-50">Accounting Services</h3>
            <div className="w-16 h-1 bg-teal-500 mb-4"></div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Offshore Accounting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Catch-Up Bookkeeping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Accounts Payable Outsourcing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Budgeting & Forecasting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Accounting Outsourcing India
                </a>
              </li>
             
            </ul>
          </div>
           <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-50"></h3>
            <div className="w-16 h-8 mb-4"></div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Online Bookkeeping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Financial Reporting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Accounts Reconciliation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Accounts Receivable Outsourcing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  KPIs Reporting
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-50">Industries</h3>
            <div className="w-16 h-1 bg-teal-500 mb-4"></div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Ecommerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Hospitality
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Media & Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Real Estate
                </a>
              </li>
            </ul>
          </div>
          

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-50">Software Expertise</h3>
            <div className="w-16 h-1 bg-teal-500 mb-4"></div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  QuickBooks Accounting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Xero Accounting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Zoho Books Accounting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Tally Accounting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  MS Business Central Accounting
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-gray-50">Hire Virtual Staff</h3>
            <div className="w-16 h-1 bg-teal-500 mb-4"></div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Virtual Accountant
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Offshore Bookkeeper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                  Virtual CFO
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Middle section: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-t border-gray-700 dark:border-gray-800">
          <div className="flex items-start gap-3">
            <MapPin className="text-teal-500 flex-shrink-0 mt-1" size={20} />
            <div className="text-sm">
              <p>Highway Towers- Tower 1, Ground Floor A13/2,3,4</p>
              <p>Sec 62 Noida (U.P) 201301 (Delhi NCR)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-teal-500 flex-shrink-0 mt-1" size={20} />
            <div className="text-sm">
              <p className="font-medium text-white dark:text-gray-50">Call us</p>
              <p>+91-925-825-6391</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-teal-500 flex-shrink-0 mt-1" size={20} />
            <div className="text-sm">
              <p className="font-medium text-white dark:text-gray-50">Email Us</p>
              <p>info@whizconsulting.net</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="text-teal-500 flex-shrink-0 mt-1" size={20} />
            <div className="text-sm">
              <p className="font-medium text-white dark:text-gray-50">Opening Hours</p>
              <p>Mon-Sat (9:00 AM to 6:00 PM)</p>
            </div>
          </div>
        </div>

        {/* Bottom section: Navigation Links */}
        <div className="flex flex-wrap gap-x-14 gap-y-3 justify-center  py-6 border-t border-gray-700 dark:border-gray-800 text-sm">
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            About Us
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Why Whiz
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Career
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Pricing
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Blogs
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Contact Us
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Terms and conditions
          </a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200">
            Confidentiality Policy
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-gray-200 dark:border-gray-800 text-sm px-4 gap-y-4">
      {/* Left Side */}
      <span className="text-gray-500 dark:text-gray-400 text-center sm:text-left">
        © 2025 Teklume. All Rights Reserved.
      </span>

      {/* Right Side */}
      <div className="flex space-x-6 pt-2">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-blue-600 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-blue-700 text-gray-300 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-sky-700 text-gray-300 hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                <X className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-pink-700 text-gray-300 hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-green-700 text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-110">
<MessageCircle className="w-5 h-5 text-green-500" />              </a>
            </div>
    </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
