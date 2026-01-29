import { useState } from 'react';

import PricingHeader from '../PricingHeader/PricingHeader';
import Pricing from '../Pricing/Pricing';

export default function PricingSection() {
   const [billingPeriod, setBillingPeriod] = useState('monthly');

   return (
      <section>
         <PricingHeader billingPeriod={billingPeriod} onChange={setBillingPeriod} />

         <Pricing billingPeriod={billingPeriod} />
      </section>
   );
}
