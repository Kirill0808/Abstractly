import './Designers.css';
import DesignerSection from '../DesignerSection/DesignerSection.jsx';
import FeatureCard from '../FeatureCard/FeatureCard';

import designersImg from '../../assets/img/unsplash_rAtzDB6hWrU (1).jpg';
import icon1 from '../../assets/img/Thumbnail Icons-9.png';
import icon2 from '../../assets/img/Thumbnail Icons-10.png';
import icon3 from '../../assets/img/Thumbnail Icons-11.png';

export default function Designers() {
   return (
      <DesignerSection
         className="designers"
         topText="Best-in-class support"
         title="Convenience and licensing that empowers"
         subtitle="In a world where storytelling evolves..."
         image={designersImg}
         imagePosition="left"
      >
         {/* <div className="designers__image">
            <img src={designersImg} alt="Abstract design" />
         </div> */}

         <ul className="designers__list">
            <FeatureCard
               icon={icon1}
               title="Faster downloads"
               text="Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience."
            />

            <FeatureCard
               icon={icon2}
               title="Convenience for teams"
               text="Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity."
            />

            <FeatureCard
               icon={icon3}
               title="Royalty-free licensing"
               text="Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project."
            />
         </ul>
      </DesignerSection>
   );
}
