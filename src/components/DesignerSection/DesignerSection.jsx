import SectionLayout from '../layout/SectionLayout';
import styles from './DesignerSection.module.css';

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
         <div
            className={`${styles.content} ${
               imagePosition === 'right' ? styles.right : styles.left
            }`}
         >
            <div className={styles.body}>{children}</div>

            <div className={styles.image}>
               <img src={image} alt="" />
            </div>
         </div>
      </SectionLayout>
   );
};

export default DesignerSection;
