import SectionLayout from '../layout/SectionLayout';
import styles from './Features.module.css';

import icon1 from '../../assets/img/Thumbnail Icons-1.png';
import icon2 from '../../assets/img/Thumbnail Icons.png';
import icon3 from '../../assets/img/Thumbnail Icons-2.png';
import icon4 from '../../assets/img/Thumbnail Icons-3.png';
import icon5 from '../../assets/img/Thumbnail Icons-4.png';
import icon6 from '../../assets/img/Thumbnail Icons-5.png';

export default function Features() {
   return (
      <SectionLayout
         className={styles.features}
         topText="Premium abstract images"
         title="Easy access to top quality images"
         subtitle="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
      >
         <div className={styles.grid}>
            <article className={styles.card}>
               <img src={icon1} alt="" className={styles.icon} />
               <h3 className={styles.title}>Infinite Download</h3>
               <p className={styles.text}>
                  Once you subscribe to our plans, they're all yours. Download as many as you want
                  and use them for work presentations, wallpapers, and much more.
               </p>
            </article>

            <article className={styles.card}>
               <img src={icon2} alt="" className={styles.icon} />
               <h3 className={styles.title}>Purely Handcrafted</h3>
               <p className={styles.text}>
                  No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even
                  particles as small as dust.
               </p>
            </article>

            <article className={styles.card}>
               <img src={icon3} alt="" className={styles.icon} />
               <h3 className={styles.title}>All Are Under licensed</h3>
               <p className={styles.text}>
                  The only limitation with these abstract images is that you are not able to sell
                  them in any form.
               </p>
            </article>

            <article className={styles.card}>
               <img src={icon4} alt="" className={styles.icon} />
               <h3 className={styles.title}>Cancel Anytime</h3>
               <p className={styles.text}>
                  Subscribe at your own pace, and cancel when you feel it's enough.
               </p>
            </article>

            <article className={styles.card}>
               <img src={icon5} alt="" className={styles.icon} />
               <h3 className={styles.title}>Empowering For Team</h3>
               <p className={styles.text}>
                  We support multiple seats at once, requiring only a single payment.
               </p>
            </article>

            <article className={styles.card}>
               <img src={icon6} alt="" className={styles.icon} />
               <h3 className={styles.title}>No Limitations</h3>
               <p className={styles.text}>
                  Use as many as you want, from Dribbble presentations to PowerPoint presentations.
               </p>
            </article>
         </div>
      </SectionLayout>
   );
}
