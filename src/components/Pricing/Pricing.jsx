import PricingCard from './PricingCard';
import { pricingPlans } from './pricingPlans';
import styles from './Pricing.module.css';

export default function Pricing({ billingPeriod }) {
   return (
      <section className={styles.pricing}>
         <div className="container">
            <div className={styles.grid}>
               {pricingPlans[billingPeriod].map((plan) => (
                  <PricingCard key={plan.id} {...plan} />
               ))}
            </div>
         </div>
      </section>
   );
}
