import './PricingHeader.css';

export default function PricingHeader({ billingPeriod, onChange }) {
   return (
      <div className="designers__header">
         <span className="designers__label">Pricing Tiers</span>
         <h2 className="designers__title">Fit for all your needs</h2>
         <p className="designers__text">
            Pick the plan that suits you today and step up as your demands grow – our flexible
            options have your journey mapped out.
         </p>

         <div className="toggle">
            <button
               className={`btn btn--toggle ${
                  billingPeriod === 'monthly' ? 'btn--toggle-active' : ''
               }`}
               onClick={() => onChange('monthly')}
            >
               Monthly
            </button>

            <button
               className={`btn btn--toggle ${
                  billingPeriod === 'yearly' ? 'btn--toggle-active' : ''
               }`}
               onClick={() => onChange('yearly')}
            >
               Yearly
            </button>
         </div>
      </div>
   );
}
