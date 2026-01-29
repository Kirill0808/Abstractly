import HeroImg from '../../assets/img/Hero image.jpg';
import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
   return (
      <section className={styles.hero}>
         <div className={`container ${styles.inner}`}>
            <div className={styles.content}>
               <h1 className={styles.title}>
                  Well crafted
                  <br />
                  abstract images
               </h1>

               <p className={styles.text}>
                  High quality abstract images for your projects, wallpaper and presentations.
               </p>

               <div className={styles.buttons}>
                  <Button variant="primary">Get started</Button>
                  <Button variant="secondary">Learn more</Button>
               </div>
            </div>

            <div className={styles.image}>
               <img src={HeroImg} alt="Abstract art" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
