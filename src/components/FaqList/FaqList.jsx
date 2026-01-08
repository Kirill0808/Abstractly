import minusIcon from '../../assets/img/indeterminate-circle-line.png';
import './FaqList.css';

export default function Faq() {
   return (
      <section className="faq">
         <div className="container">
            <ul className="faq__list">
               <li className="faq__item is-open">
                  <button className="faq__question">
                     <span>What types of images are available on your platform?</span>
                     <img src={minusIcon} alt="" className="faq__icon" />
                  </button>
                  <div className="faq__answer">
                     <p>
                        Our platform offers a diverse range of abstract images to suit various
                        preferences and needs. From vibrant geometric patterns to soothing
                        landscapes, we strive to provide a wide selection to cater to different
                        tastes.
                     </p>
                  </div>
               </li>

               <li className="faq__item is-open">
                  <button className="faq__question">
                     <span>How can I access and download images from your platform?</span>
                     <img src={minusIcon} alt="" className="faq__icon" />
                  </button>
                  <div className="faq__answer">
                     <p>
                        Accessing and downloading images from our platform is simple. Upon signing
                        up and logging in, users can browse through our curated collection and
                        download their chosen images directly to their devices with just a few
                        clicks.
                     </p>
                  </div>
               </li>

               <li className="faq__item is-open">
                  <button className="faq__question">
                     <span>Do you offer free images, or is there a subscription required?</span>
                     <img src={minusIcon} alt="" className="faq__icon" />
                  </button>
                  <div className="faq__answer">
                     <p>
                        We provide both free and premium images on our platform. Users can explore a
                        selection of free images without any subscription. For access to our entire
                        library and additional features, we offer subscription plans tailored to
                        different user needs.
                     </p>
                  </div>
               </li>

               <li className="faq__item is-open">
                  <button className="faq__question">
                     <span>What payment methods do you accept for subscriptions?</span>
                     <img src={minusIcon} alt="" className="faq__icon" />
                  </button>
                  <div className="faq__answer">
                     <p>
                        We accept a variety of payment methods, including credit/debit cards and
                        online payment gateways, to make the subscription process convenient for our
                        users.
                     </p>
                  </div>
               </li>

               <li className="faq__item is-open">
                  <button className="faq__question">
                     <span>Can I cancel or modify my subscription at any time?</span>
                     <img src={minusIcon} alt="" className="faq__icon" />
                  </button>
                  <div className="faq__answer">
                     <p>
                        Yes, absolutely. You have the flexibility to cancel or modify your
                        subscription at any time through your account settings. Changes will take
                        effect immediately, ensuring you have full control over your subscription
                        preferences.
                     </p>
                  </div>
               </li>

               <li className="faq__item is-open">
                  <button className="faq__question">
                     <span>How frequently do you update your image collection?</span>
                     <img src={minusIcon} alt="" className="faq__icon" />
                  </button>
                  <div className="faq__answer">
                     <p>
                        We regularly update our image collection with fresh and captivating content
                        to keep our users inspired and engaged. New images are added consistently to
                        ensure there's always something new to discover on our platform.
                     </p>
                  </div>
               </li>
            </ul>

            <div className="faq__cta">
               <div>
                  <h3>Can’t find the answer you’re looking for?</h3>
                  <p>
                     Reach out to our <a href="#">customer support</a> team.
                  </p>
               </div>
               <a href="#" className="btn btn--primary">
                  Get in touch
               </a>
            </div>
         </div>
      </section>
   );
}
