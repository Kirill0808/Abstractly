import { useState } from 'react';
import plusIcon from '../../assets/img/plus.svg';
import minusIcon from '../../assets/img/minus.svg';
import styles from './FaqItem.module.css';

export default function FaqItem({ question, answer }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <li className={`${styles.item} ${isOpen ? styles.open : ''}`}>
         <button className={styles.question} onClick={() => setIsOpen((prev) => !prev)}>
            <span>{question}</span>
            <img src={isOpen ? minusIcon : plusIcon} alt="" className={styles.icon} />
         </button>

         {isOpen && (
            <div className={styles.answer}>
               <p>{answer}</p>
            </div>
         )}
      </li>
   );
}
