
import React from 'react'
import Hero from './hero'
import AnimatedStatics from './AnimatedStatics'
import Offer from './offer'
import Services from './Services'
import SeamlessProcessesSection from './section2'
import Challanges from './challanges'
import Component from './finicial'
import ContactUs from '../components/Contact'
import FaqSection from '../components/FAQ'
import Testimonial from '../components/testimonial'

function page() {
  return (
 <div>
    <Hero/>
    <AnimatedStatics/>
    <Offer/>
    <Services/>
    <Challanges/>
    <SeamlessProcessesSection/>
    <Component/>
    <ContactUs/>
    <FaqSection/>
    <Testimonial/>
 </div>
  )
}

export default page