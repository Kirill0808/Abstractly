import React from 'react';

const SectionLayout = ({
   className = '',
   topText,
   title,
   subtitle,
   children,
   withContainer = true,
}) => {
   const ContentWrapper = withContainer ? 'div' : React.Fragment;
   const wrapperProps = withContainer ? { className: 'container' } : {};

   return (
      <section className={className}>
         <ContentWrapper {...wrapperProps}>
            {(topText || title || subtitle) && (
               <div className={`${className}__header`}>
                  {topText && <span className={`${className}__label`}>{topText}</span>}
                  {title && <h2 className={`${className}__title`}>{title}</h2>}
                  {subtitle && <p className={`${className}__text`}>{subtitle}</p>}
               </div>
            )}

            {children}
         </ContentWrapper>
      </section>
   );
};

export default SectionLayout;
