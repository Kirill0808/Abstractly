import './Designers.css';

import designersImg from '../../assets/img/unsplash_rAtzDB6hWrU (1).jpg';
import icon1 from '../../assets/img/Thumbnail Icons-9.png';
import icon2 from '../../assets/img/Thumbnail Icons-10.png';
import icon3 from '../../assets/img/Thumbnail Icons-11.png';

export default function Designers() {
   return (
      <section className="designers">
         <div className="container">
            <div className="designers__header">
               <span className="designers__label">Best-in-class support</span>
               <h2 className="designers__title">Convenience and licensing that empowers</h2>
               <p className="designers__text">
                  In a world where storytelling constantly evolves, don't let licensing and poor
                  support hold you down.
               </p>
            </div>

            <div className="designers__content">
               <div className="designers__image">
                  <img src={designersImg} alt="Abstract design" />
               </div>

               <ul className="designers__list">
                  <li className="designers__item">
                     <img className="designers__icon" src={icon1} alt="" />
                     <div>
                        <h3 className="designers__item-title">Faster downloads</h3>
                        <p className="designers__item-text">
                           Our robust servers are primed to deliver the highest resolution images
                           swiftly, ensuring a smooth download experience.
                        </p>
                     </div>
                  </li>

                  <li className="designers__item">
                     <img className="designers__icon" src={icon2} alt="" />
                     <div>
                        <h3 className="designers__item-title">Convenience for teams</h3>
                        <p className="designers__item-text">
                           Your single account can accommodate multiple users simultaneously
                           downloading without any disruptions, streamlining teamwork and
                           productivity.
                        </p>
                     </div>
                  </li>

                  <li className="designers__item">
                     <img className="designers__icon" src={icon3} alt="" />
                     <div>
                        <h3 className="designers__item-title">Royalty-free licensing</h3>
                        <p className="designers__item-text">
                           Our straightforward, royalty-free licensing means your chosen images are
                           yours to innovate with, without the hassle of negotiating usage rights
                           for every new project.
                        </p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
}
