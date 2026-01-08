import { useState } from 'react';
import './PricingHeader.css';

export default function PricingHeader() {
   const [active, setActive] = useState('monthly');

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
               className={`btn btn--toggle ${active === 'monthly' ? 'btn--toggle-active' : ''}`}
               onClick={() => setActive('monthly')}
            >
               Monthly
            </button>

            <button
               className={`btn btn--toggle ${active === 'annually' ? 'btn--toggle-active' : ''}`}
               onClick={() => setActive('annually')}
            >
               Annually
            </button>
         </div>
      </div>
   );
}
