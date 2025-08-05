
// import InvoicingHero from "@/components/services/invoicing/invoicing-hero";
// import InvoicingFeatures from "@/components/services/invoicing/invoicing-features";
// import InvoicingBenefits from "@/components/services/invoicing/invoicing-benefits";
// import InvoicingTemplates from "@/components/services/invoicing/invoicing-templates";
// import InvoicingPricing from "@/components/services/invoicing/invoicing-pricing";
// import InvoicingDemo from "@/components/services/invoicing/invoicing-demo";
// import { CTASection } from "@/components/common/cta";
// import { Metadata } from "next";
// import { invoicingData } from "@/data/invoicing-data";
// export const metadata: Metadata = {
//   title: "Invoicing Solutions | AccountAX - Professional Invoice Management",
//   description: "Streamline your billing process with AccountAX's comprehensive invoicing platform. Create professional invoices, automate payments, and get paid faster.",
//   keywords: ["invoicing software", "invoice management", "billing automation", "payment processing", "invoice templates"],
// };

// export default function InvoicingPage() {
//   return (
//     <div>
      
//       <main>
//         <InvoicingHero />
//         <InvoicingDemo />
//         <InvoicingFeatures />
//         <InvoicingBenefits />
//         <InvoicingTemplates templates={invoicingData.templates}/>
//         <InvoicingPricing />
//         <CTASection />
//       </main>
      

//     </div>
//   );
// }
import React from 'react'
import Hero from './hero'
import AnimatedStatics from './AnimatedStatics'
import Services from '../bookkeeping/Services'
import Challanges from '../bookkeeping/challanges'
import SeamlessProcessesSection from './section2'
import ContactUs from '../bookkeeping/contact'
import Testimonial from '../components/testimonial'
import Offer from './offer'

function page() {
  return (
 <div>
    <Hero/>
    <AnimatedStatics/>
    <Offer/>
    <Services/>
    <Challanges/>
    <SeamlessProcessesSection/>
    <ContactUs/>
    <Testimonial/>

 </div>
  )
}

export default page