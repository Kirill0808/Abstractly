import checkIcon from '../../assets/img/check-fill.png';
import Button from '../Button/Button';
import styles from './Pricing.module.css';

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
      <article className={`${styles.card} ${popular ? styles.popular : ''}`}>
         {popular && <span className={styles.badge}>Most Popular</span>}

         <h3 className={styles.title}>{title}</h3>
         <p className={styles.desc}>{desc}</p>

         <div className={`${styles.price} ${popular ? styles.priceAccent : ''}`}>
            <span>{price}</span>
            <span className={styles.period}>{period}</span>
         </div>

         <span className={styles.billing}>{billing}</span>

         <ul className={styles.list}>
            {features.map((item, index) => (
               <li key={index}>
                  <img src={checkIcon} alt="" />
                  {item}
               </li>
            ))}
         </ul>

         <Button variant={popular ? 'primary' : 'secondary'} className={styles.btn}>
            Buy now
         </Button>
      </article>
   );
}
