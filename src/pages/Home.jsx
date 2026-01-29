import Hero from '../components/Hero/Hero';
import Brands from '../components/Brands/Brands';
import Features from '../components/Features/Features';
import Designer from '../components/Designer/Designer';
import Designers from '../components/Designers/Designers';
import PricingSection from '../components/PricingSection/PricingSection';
import FaqHeader from '../components/FaqHeader/FaqHeader';
import Subscribe from '../components/Subscribe/Subscribe';
import Contact from '../components/Contact/Contact';

export default function Home() {
   return (
      <>
         <Hero />
         <Brands />
         <Features />
         <Designer />
         <Designers />
         <PricingSection />
         <FaqHeader />
         <Subscribe />
         <Contact />
      </>
   );
}
