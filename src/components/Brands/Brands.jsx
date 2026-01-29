import Marquee from 'react-fast-marquee';
import SectionLayout from '../layout/SectionLayout';
import { BRANDS } from './constants';
import styles from './Brands.module.css';

const Brands = () => {
   return (
      <SectionLayout
         className={styles.brands}
         title="Used by teams that you love"
         titleSize="small"
         withContainer={false}
      >
         <Marquee speed={40} pauseOnHover gradient={false}>
            {BRANDS.map((brand) => (
               <div className={styles.item} key={brand.id}>
                  <img className={styles.logo} src={brand.img} alt={brand.alt} />
               </div>
            ))}
         </Marquee>
      </SectionLayout>
   );
};

export default Brands;
