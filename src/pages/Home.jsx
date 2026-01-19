import { useState } from 'react';

import Hero from '../components/Hero/Hero';
import Brands from '../components/Brands/Brands';
import Intro from '../components/Intro/Intro';
import Features from '../components/Features/Features';
import Designer from '../components/Designer/Designer';
import Designers from '../components/Designers/Designers';
import PricingHeader from '../components/PricingHeader/PricingHeader';
import Pricing from '../components/Pricing/Pricing';
import FaqHeader from '../components/FaqHeader/FaqHeader';
// import FaqList from '../components/FaqList/FaqList';
import Subscribe from '../components/Subscribe/Subscribe';
import Contact from '../components/Contact/Contact';

export default function Home() {
   const [billingPeriod, setBillingPeriod] = useState('monthly');

   return (
      <>
         <Hero />
         <Brands />
         <Intro />
         <Features />
         <Designer />
         <Designers />
         <PricingHeader billingPeriod={billingPeriod} onChange={setBillingPeriod} />
         <Pricing billingPeriod={billingPeriod} />
         <FaqHeader />
         {/* <FaqList /> */}
         <Subscribe />
         <Contact />
      </>
   );
}
