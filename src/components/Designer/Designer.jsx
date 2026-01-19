import './Designer.css';
import DesignerSection from '../DesignerSection/DesignerSection.jsx';
import FeatureCard from '../FeatureCard/FeatureCard';

import icon1 from '../../assets/img/Thumbnail Icons-6.png';
import icon2 from '../../assets/img/Thumbnail Icons-7.png';
import icon3 from '../../assets/img/Thumbnail Icons-8.png';
import designerImg from '../../assets/img/unsplash_rAtzDB6hWrU.jpg';

export default function Designer() {
   return (
      <DesignerSection
         className="designer"
         topText="High quality images"
         title="For designers, by designers"
         subtitle="Unleash boundless creativity..."
         image={designerImg}
         imagePosition="right"
      >
         <ul className="designer__features">
            <FeatureCard
               icon={icon1}
               title="5K resolution support"
               text="All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
            />

            <FeatureCard
               icon={icon2}
               title="From water to glass"
               text="We offer a wide array of abstractions, ranging from water to glass, including 3D and vector."
            />

            <FeatureCard
               icon={icon3}
               title="Portrait or landscape"
               text="Effortlessly adapt your images for any platform, from wallpapers to Instagram stories."
            />
         </ul>

         {/* <div className="designer__image">
            <img src={designerImg} alt="Abstract image" />
         </div> */}
      </DesignerSection>
   );
}
