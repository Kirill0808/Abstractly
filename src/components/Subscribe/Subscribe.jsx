import checkIcon from '../../assets/img/check-fill.png';
import subscribeImage from '../../assets/img/Image.jpg';
import './Subscribe.css';

export default function Subscribe() {
   return (
      <section className="subscribe">
         <div className="container subscribe__inner">
            <div className="subscribe__content">
               <h2 className="subscribe__title">
                  Get the finest curated
                  <br />
                  abstracts delivered
                  <br />
                  weekly to your inbox
               </h2>

               <ul className="subscribe__list">
                  <li className="subscribe__item">
                     <img src={checkIcon} alt="" className="subscribe__icon" />
                     Exclusive access to new abstract images and collections
                  </li>
                  <li className="subscribe__item">
                     <img src={checkIcon} alt="" className="subscribe__icon" />
                     Unlock special promotions only for subscribers
                  </li>
                  <li className="subscribe__item">
                     <img src={checkIcon} alt="" className="subscribe__icon" />
                     Regular doses of artistic inspiration
                  </li>
               </ul>

               <form className="subscribe__form">
                  <input type="email" className="subscribe__input" placeholder="Enter your email" />
                  <button className="btn btn--primary">Subscribe</button>
               </form>

               <p className="subscribe__note">We only send you the best! No spam.</p>
            </div>

            <div className="subscribe__visual">
               <img src={subscribeImage} alt="Abstract images" />
            </div>
         </div>
      </section>
   );
}
