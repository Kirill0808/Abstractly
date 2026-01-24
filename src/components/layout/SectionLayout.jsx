import React from 'react';
import styles from './SectionLayout.module.css';

const SectionLayout = ({
   className = '',
   topText,
   title,
   subtitle,
   titleAs = 'h2',
   titleSize = 'default',
   children,
   withContainer = true,
}) => {
   const TitleTag = titleAs;
   const ContentWrapper = withContainer ? 'div' : React.Fragment;
   const wrapperProps = withContainer ? { className: 'container' } : {};

   return (
      <section className={className}>
         <ContentWrapper {...wrapperProps}>
            {(topText || title || subtitle) && (
               <div className={styles.header}>
                  {topText && <span className={styles.label}>{topText}</span>}
                  {title && (
                     <TitleTag
                        className={`${styles.title} ${
                           titleSize === 'small' ? styles.smallTitle : ''
                        }`}
                     >
                        {title}
                     </TitleTag>
                  )}
                  {subtitle && <p className={styles.text}>{subtitle}</p>}
               </div>
            )}

            {children}
         </ContentWrapper>
      </section>
   );
};
export default SectionLayout;
