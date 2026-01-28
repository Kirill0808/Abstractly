import SectionLayout from '../layout/SectionLayout';
import FeatureCard from '../FeatureCard/FeatureCard';
import { features } from './constants';
import styles from './Features.module.css';

export default function Features() {
   return (
      <SectionLayout
         className={styles.features}
         topText="Premium abstract images"
         title="Easy access to top quality images"
         subtitle="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
      >
         <ul className={styles.grid}>
            {features.map((item) => (
               <FeatureCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                  variant="center"
               />
            ))}
         </ul>
      </SectionLayout>
   );
}
