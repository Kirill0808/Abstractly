import SectionLayout from '../layout/SectionLayout';
import './DesignerSection.css';

const DesignerSection = ({
   className,
   topText,
   title,
   subtitle,
   image,
   imagePosition = 'right',
   children,
}) => {
   return (
      <SectionLayout className={className} topText={topText} title={title} subtitle={subtitle}>
         <div className={`designer__content designer__content--${imagePosition}`}>
            <div className="designer__body">{children}</div>

            <div className="designer__image">
               <img src={image} alt="" />
            </div>
         </div>
      </SectionLayout>
   );
};

export default DesignerSection;
