import './Designer.css';

import icon1 from '../../assets/img/Thumbnail Icons-6.png';
import icon2 from '../../assets/img/Thumbnail Icons-7.png';
import icon3 from '../../assets/img/Thumbnail Icons-8.png';
import designerImg from '../../assets/img/unsplash_rAtzDB6hWrU.jpg';

export default function Designer() {
   return (
      <section className="designer">
         <div className="container">
            <span className="designer__label">High quality images</span>
            <h2 className="designer__title">For designers, by designers</h2>
            <p className="designer__subtitle">
               Unleash boundless creativity with a large repository of images optimized for
               designers
            </p>

            <div className="designer__content">
               <ul className="designer__features">
                  <li className="designer__item">
                     <div className="designer__icon">
                        <img src={icon1} alt="" />
                     </div>
                     <div className="designer__text">
                        <h4>5K resolution support</h4>
                        <p>
                           All images boast a minimum resolution of 5K, ensuring crisp,
                           crystal-clear quality.
                        </p>
                     </div>
                  </li>

                  <li className="designer__item">
                     <div className="designer__icon">
                        <img src={icon2} alt="" />
                     </div>
                     <div className="designer__text">
                        <h4>From water to glass</h4>
                        <p>
                           We offer a wide array of abstractions, ranging from water to glass,
                           including 3D and vector.
                        </p>
                     </div>
                  </li>

                  <li className="designer__item">
                     <div className="designer__icon">
                        <img src={icon3} alt="" />
                     </div>
                     <div className="designer__text">
                        <h4>Portrait or landscape</h4>
                        <p>
                           Effortlessly adapt your images for any platform, from wallpapers to
                           Instagram stories.
                        </p>
                     </div>
                  </li>
               </ul>

               <div className="designer__image">
                  <img src={designerImg} alt="Abstract image" />
               </div>
            </div>
         </div>
      </section>
   );
}
