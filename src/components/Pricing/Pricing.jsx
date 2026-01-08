import PricingCard from './PricingCard';
import './Pricing.css';

export default function Pricing() {
   return (
      <section className="pricing">
         <div className="container">
            <div className="pricing__grid">
               <PricingCard
                  title="Basic Plan"
                  desc="Access to a curated selection of abstract images"
                  price="$9.99"
                  period="/ month"
                  billing="Billed monthly"
                  features={['Standard quality images', 'Limited to personal use', 'Email support']}
               />

               <PricingCard
                  popular
                  title="Standard Plan"
                  desc="Next-level integrations, priced economically"
                  price="$19.99"
                  period="/ month"
                  billing="Billed monthly"
                  features={[
                     'Expanded library',
                     'High-resolution images',
                     'Commercial use',
                     'Priority support',
                     'Advanced analytics',
                  ]}
               />

               <PricingCard
                  title="Premium Plan"
                  desc="Experience limitless living for power users"
                  price="$29.99"
                  period="/ month"
                  billing="Billed monthly"
                  features={[
                     'Full image library',
                     'Premium collections',
                     'Resale rights',
                     'Dedicated support',
                     '24/7 response',
                  ]}
               />
            </div>
         </div>
      </section>
   );
}
