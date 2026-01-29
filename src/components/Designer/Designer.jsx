import styles from './Designer.module.css';
import DesignerSection from '../DesignerSection/DesignerSection.jsx';
import FeatureCard from '../FeatureCard/FeatureCard';

import icon1 from '../../assets/img/Thumbnail Icons-6.png';
import icon2 from '../../assets/img/Thumbnail Icons-7.png';
import icon3 from '../../assets/img/Thumbnail Icons-8.png';
import designerImg from '../../assets/img/unsplash_rAtzDB6hWrU.jpg';

const features = [
   {
      id: 1,
      icon: icon1,
      title: '5K resolution support',
      text: 'All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.',
   },
   {
      id: 2,
      icon: icon2,
      title: 'From water to glass',
      text: 'We offer a wide array of abstractions, ranging from water to glass, including 3D and vector.',
   },
   {
      id: 3,
      icon: icon3,
      title: 'Portrait or landscape',
      text: 'Effortlessly adapt your images for any platform, from wallpapers to Instagram stories.',
   },
];

export default function Designer() {
   return (
      <DesignerSection
         className={styles.designer}
         topText="High quality images"
         title="For designers, by designers"
         subtitle="Unleash boundless creativity..."
         image={designerImg}
         imagePosition="right"
      >
         <ul className={styles.features}>
            {features.map((feature) => (
               <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  text={feature.text}
               />
            ))}
         </ul>
      </DesignerSection>
   );
}
