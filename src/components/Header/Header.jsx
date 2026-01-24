import logo from '../../assets/img/logo.png';
import Button from '../Button/Button';
import styles from './Header.module.css';

export default function Header() {
   return (
      <header className={styles.header}>
         <div className={`container ${styles.inner}`}>
            <a href="#" className={styles.logo}>
               <img src={logo} alt="Abstractly logo" />
            </a>

            <nav className={styles.nav}>
               <ul className={styles.navList}>
                  <li>
                     <a href="#">Home</a>
                  </li>
                  <li>
                     <a href="#">Features</a>
                  </li>
                  <li>
                     <a href="#">Pricing</a>
                  </li>
                  <li>
                     <a href="#">About us</a>
                  </li>
                  <li>
                     <a href="#">Contact</a>
                  </li>
               </ul>
            </nav>

            <div className={styles.actions}>
               <Button variant="secondary">Learn more</Button>
               <Button variant="primary">See pricing</Button>
            </div>
         </div>
      </header>
   );
}
