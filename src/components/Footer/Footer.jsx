import styles from './Footer.module.css';
import { socials } from './constants';

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={`container ${styles.inner}`}>
            <nav className={styles.nav}>
               <a href="#">Features</a>
               <a href="#">Pricing</a>
               <a href="#">About us</a>
               <a href="#">Contact</a>
            </nav>

            <ul className={styles.socials}>
               {socials.map((item) => (
                  <li key={item.name}>
                     <a href={item.href} aria-label={item.name}>
                        <img src={item.icon} alt={item.name} />
                     </a>
                  </li>
               ))}
            </ul>

            <p className={styles.copy}>© 2024 Abstractly, Inc. All rights reserved.</p>
         </div>
      </footer>
   );
}
