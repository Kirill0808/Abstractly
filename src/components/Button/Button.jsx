import './Button.css';

export default function Button({ children, variant = 'primary', href = '#', type = 'link' }) {
   const className = `btn btn--${variant}`;

   if (type === 'button') {
      return <button className={className}>{children}</button>;
   }

   return (
      <a href={href} className={className}>
         {children}
      </a>
   );
}
