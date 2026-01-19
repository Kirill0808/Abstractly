import phoneIcon from '../../assets/img/phone.png';
import callIcon from '../../assets/img/call.png';
import letterIcon from '../../assets/img/letter.png';
import './Contact.css';
import Button from '../Button/Button';

export default function Contact() {
   return (
      <section className="contact">
         <div className="container contact__inner">
            <div className="contact__info">
               <h2 className="contact__title">Talk to our team</h2>
               <p className="contact__text">
                  We're committed to delivering the support you require to make your experience as
                  smooth as possible.
               </p>

               <ul className="contact__list">
                  <li className="contact__item">
                     <span className="contact__icon">
                        <img src={phoneIcon} alt="" />
                     </span>
                     <span>123 Maple Street, Springfield, IL, USA</span>
                  </li>

                  <li className="contact__item">
                     <span className="contact__icon">
                        <img src={callIcon} alt="" />
                     </span>
                     <span>+1 (650) 555-0198</span>
                  </li>

                  <li className="contact__item">
                     <span className="contact__icon">
                        <img src={letterIcon} alt="" />
                     </span>
                     <span>hello@abstractly.com</span>
                  </li>
               </ul>
            </div>

            <form className="contact-form">
               <div className="contact-form__row">
                  <div className="contact-form__field">
                     <label>Name</label>
                     <input type="text" placeholder="Your name" />
                  </div>

                  <div className="contact-form__field">
                     <label>Email</label>
                     <input type="email" placeholder="example@example.com" />
                  </div>
               </div>

               <div className="contact-form__field">
                  <label>Message</label>
                  <textarea placeholder="Write your message..."></textarea>
                  <span className="contact-form__counter">0/500</span>
               </div>

               <Button variant="primary" type="submit" className="contact-form__btn">
                  Submit
               </Button>
            </form>
         </div>
      </section>
   );
}
