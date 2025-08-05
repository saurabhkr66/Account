import React from 'react'
import Hero from './hero'
import AnimatedStatics from '../bookkeeping/AnimatedStatics'
import Offer from './offer'
import Services from './Services'
import SeamlessProcessesSection from './section2'

function page() {
  return (
 <div>
    <Hero/>
    <AnimatedStatics/>
    <Offer/>
    <Services/>
    <SeamlessProcessesSection/>

 </div>
  )
}

export default page