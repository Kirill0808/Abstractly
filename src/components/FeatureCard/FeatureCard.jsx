import './FeatureCard.css';

export default function FeatureCard({ icon, title, text }) {
   return (
      <li className="feature-card">
         <img src={icon} alt="" className="feature-card__icon" />
         <div className="feature-card__content">
            <h4 className="feature-card__title">{title}</h4>
            <p className="feature-card__text">{text}</p>
         </div>
      </li>
   );
}
