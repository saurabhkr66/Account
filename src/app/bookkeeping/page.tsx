
import React from 'react'
import Hero from './hero'
import AnimatedStatics from './AnimatedStatics'
import Services from './Services'
import Challanges from './challanges'
import SeamlessProcessesSection from './section2'
import Component from './finicial'
import Offer from './offer'
import FaqSection from './FAQ'
import Cta from './cta'
import ContactUs from './Contact'
import Testimonial from './testimonial'

function bookeeping() {
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
      <Cta/>

 </div>
  )
}

export default  bookeeping