import styles from './PricingHeader.module.css';

export default function PricingHeader({ billingPeriod, onChange }) {
   return (
      <div className={styles.header}>
         <span className={styles.label}>Pricing Tiers</span>

         <h2 className={styles.title}>Fit for all your needs</h2>

         <p className={styles.text}>
            Pick the plan that suits you today and step up as your demands grow – our flexible
            options have your journey mapped out.
         </p>

         <div className={styles.toggle}>
            <button
               className={`${styles.toggleBtn} ${billingPeriod === 'monthly' ? styles.active : ''}`}
               onClick={() => onChange('monthly')}
            >
               Monthly
            </button>

            <button
               className={`${styles.toggleBtn} ${billingPeriod === 'yearly' ? styles.active : ''}`}
               onClick={() => onChange('yearly')}
            >
               Yearly
            </button>
         </div>
      </div>
   );
}
