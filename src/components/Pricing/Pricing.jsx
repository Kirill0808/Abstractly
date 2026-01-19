import PricingCard from './PricingCard';
import { pricingPlans } from './pricingPlans';
import './Pricing.css';

export default function Pricing({ billingPeriod }) {
   return (
      <section className="pricing">
         <div className="container">
            <div className="pricing__grid">
               {pricingPlans[billingPeriod].map((plan) => (
                  <PricingCard key={plan.id} {...plan} />
               ))}
            </div>
         </div>
      </section>
   );
}
