import styles from './FeatureCard.module.css';

export default function FeatureCard({ icon, title, text }) {
   return (
      <li className={styles.card}>
         <img src={icon} alt="" className={styles.icon} />

         <div className={styles.content}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.text}>{text}</p>
         </div>
      </li>
   );
}
