import checkIcon from '../../assets/img/check-fill.png';

export default function PricingCard({
   title,
   desc,
   price,
   period,
   billing,
   features,
   popular = false,
}) {
   return (
      <article className={`pricing-card ${popular ? 'pricing-card--popular' : ''}`}>
         {popular && <span className="pricing-card__badge">Most Popular</span>}

         <h3 className="pricing-card__title">{title}</h3>
         <p className="pricing-card__desc">{desc}</p>

         <div className={`pricing-card__price ${popular ? 'pricing-card__price--accent' : ''}`}>
            <span className="price">{price}</span>
            <span className="period">{period}</span>
         </div>

         <span className="pricing-card__billing">{billing}</span>

         <ul className="pricing-card__list">
            {features.map((item, index) => (
               <li key={index}>
                  <img src={checkIcon} alt="" />
                  {item}
               </li>
            ))}
         </ul>

         <button className={`btn ${popular ? 'btn--primary' : ''} pricing-card__btn`}>
            Buy now
         </button>
      </article>
   );
}
