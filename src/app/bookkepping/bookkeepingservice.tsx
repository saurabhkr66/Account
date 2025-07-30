import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BookkeepingLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-30 min-h-screen overflow-hidden bg-gradient-to-r from-[#211F36] to-[#4a2a58] text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Transform Your <span className="text-purple-200">Finances</span> into Success
                </h1>
                <p className="text-lg text-purple-100 sm:text-xl lg:text-2xl max-w-2xl">
                  Professional bookkeeping services that keep your business organized, compliant, and profitable. From
                  daily transactions to financial reporting, we handle it all.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3">
                  Get Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-8 py-3 bg-transparent"
                >
                  View Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/3.png"
                alt="Financial Dashboard Illustration"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 1 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Organized Bookkeeping Workspace"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Daily Transaction Management
                </h2>
                <p className="text-lg text-gray-600">
                  Keep your books up-to-date with our daily transaction recording services. We categorize expenses,
                  track income, and ensure every penny is accounted for with precision and accuracy.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  <span className="text-gray-700">Receipt and invoice processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  <span className="text-gray-700">Bank reconciliation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  <span className="text-gray-700">Expense categorization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 2 */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Financial Reporting & Analysis
                </h2>
                <p className="text-lg text-gray-600">
                  Get clear insights into your business performance with comprehensive financial reports. Monthly
                  statements, profit & loss analysis, and cash flow projections delivered on time, every time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-purple-600">99%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-purple-600">24h</div>
                  <div className="text-sm text-gray-600">Report Turnaround</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Financial Reports and Analytics"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 3 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-purple-100"></div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Tax Preparation and Compliance"
                width={500}
                height={400}
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Tax Preparation & Compliance
                </h2>
                <p className="text-lg text-gray-600">
                  Stay compliant and maximize your deductions with our comprehensive tax preparation services. We handle
                  quarterly filings, annual returns, and keep you prepared for audits year-round.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quarterly Tax Filings</h3>
                    <p className="text-gray-600">Never miss a deadline with our automated filing system</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Deduction Optimization</h3>
                    <p className="text-gray-600">Maximize your savings with expert deduction strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#211F36] to-[#4a2a58] text-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Streamline Your Finances?
              </h2>
              <p className="text-lg text-purple-100 sm:text-xl max-w-2xl mx-auto">
                Join hundreds of businesses who trust us with their bookkeeping. Get started with a free consultation
                and see the difference professional bookkeeping makes.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3">
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-8 py-3 bg-transparent"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">BookKeep Pro</h3>
              <p className="text-gray-400">Professional bookkeeping services for growing businesses.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Daily Bookkeeping</li>
                <li>Financial Reporting</li>
                <li>Tax Preparation</li>
                <li>Payroll Services</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@bookkeeppro.com</li>
                <li>(555) 123-4567</li>
                <li>123 Business Ave</li>
                <li>Suite 100, City, ST 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 BookKeep Pro. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
