import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Brands from './components/Brands/Brands';
import Intro from './components/Intro/Intro';
import Features from './components/Features/Features';
import Designer from './components/Designer/Designer';
import Designers from './components/Designers/Designers';
import PricingHeader from './components/PricingHeader/PricingHeader';
import FaqHeader from './components/Faq/FaqHeader';
import Pricing from './components/Pricing/Pricing';
import FaqList from './components/FaqList/FaqList';
import Subscribe from './components/Subscribe/Subscribe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
   return (
      <>
         <Header />
         <Hero />
         <Brands />
         <Intro />
         <Features />
         <Designer />
         <Designers />
         <PricingHeader />
         <Pricing />
         <FaqHeader />
         <FaqList />
         <Subscribe />
         <Contact />
         <Footer />
      </>
   );
}

export default App;
