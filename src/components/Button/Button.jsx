import styles from './Button.module.css';

export default function Button({
   children,
   variant = 'primary',
   href = '#',
   type = 'link',
   className = '',
}) {
   const classes = `${styles.btn} ${styles[variant]} ${className}`;

   if (type === 'button' || type === 'submit') {
      return (
         <button type={type} className={classes}>
            {children}
         </button>
      );
   }

   return (
      <a href={href} className={classes}>
         {children}
      </a>
   );
}
