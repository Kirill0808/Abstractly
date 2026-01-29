import checkIcon from '../../assets/img/check-fill.png';
import subscribeImage from '../../assets/img/Image.jpg';
import Button from '../Button/Button';
import styles from './Subscribe.module.css';

export default function Subscribe() {
   return (
      <section className={styles.subscribe}>
         <div className={`container ${styles.inner}`}>
            <div className={styles.content}>
               <h2 className={styles.title}>
                  Get the finest curated
                  <br />
                  abstracts delivered
                  <br />
                  weekly to your inbox
               </h2>

               <ul className={styles.list}>
                  <li className={styles.item}>
                     <img src={checkIcon} alt="" className={styles.icon} />
                     Exclusive access to new abstract images and collections
                  </li>

                  <li className={styles.item}>
                     <img src={checkIcon} alt="" className={styles.icon} />
                     Unlock special promotions only for subscribers
                  </li>

                  <li className={styles.item}>
                     <img src={checkIcon} alt="" className={styles.icon} />
                     Regular doses of artistic inspiration
                  </li>
               </ul>

               <form className={styles.form}>
                  <input type="email" className={styles.input} placeholder="Enter your email" />

                  <Button type="submit" variant="primary">
                     Subscribe
                  </Button>
               </form>

               <p className={styles.note}>We only send you the best! No spam.</p>
            </div>

            <div className={styles.visual}>
               <img src={subscribeImage} alt="Abstract images" />
            </div>
         </div>
      </section>
   );
}
