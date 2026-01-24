import { useState } from 'react';
import phoneIcon from '../../assets/img/phone.png';
import callIcon from '../../assets/img/call.png';
import letterIcon from '../../assets/img/letter.png';
import styles from './Contact.module.css';
import Button from '../Button/Button';

export default function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data:', formData);

      setFormData({ name: '', email: '', message: '' });
   };
   return (
      <section className={styles.contact}>
         <div className={`container ${styles.inner}`}>
            <div className={styles.info}>
               <h2 className={styles.title}>Talk to our team</h2>
               <p className={styles.text}>
                  We're committed to delivering the support you require to make your experience as
                  smooth as possible.
               </p>

               <ul className={styles.list}>
                  <li className={styles.item}>
                     <span className={styles.icon}>
                        <img src={phoneIcon} alt="" />
                     </span>
                     <span>123 Maple Street, Springfield, IL, USA</span>
                  </li>

                  <li className={styles.item}>
                     <span className={styles.icon}>
                        <img src={callIcon} alt="" />
                     </span>
                     <span>+1 (650) 555-0198</span>
                  </li>

                  <li className={styles.item}>
                     <span className={styles.icon}>
                        <img src={letterIcon} alt="" />
                     </span>
                     <span>hello@abstractly.com</span>
                  </li>
               </ul>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
               <div className={styles.row}>
                  <div className={styles.field}>
                     <label>Name</label>
                     <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                     />
                  </div>

                  <div className={styles.field}>
                     <label>Email</label>
                     <input
                        type="email"
                        name="email"
                        placeholder="example@example.com"
                        value={formData.email}
                        onChange={handleChange}
                     />
                  </div>
               </div>

               <div className={styles.field}>
                  <label>Message</label>
                  <textarea
                     name="message"
                     placeholder="Write your message..."
                     value={formData.message}
                     onChange={handleChange}
                  />
                  <span className={styles.counter}>{formData.message.length}/500</span>
               </div>

               <Button variant="primary" type="submit" className={styles.btn}>
                  Submit
               </Button>
            </form>
         </div>
      </section>
   );
}
