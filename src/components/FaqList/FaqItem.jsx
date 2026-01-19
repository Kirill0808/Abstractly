import { useState } from 'react';
import plusIcon from '../../assets/img/plus.svg';
import minusIcon from '../../assets/img/minus.svg';

export default function FaqItem({ question, answer }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <li className={`faq__item ${isOpen ? 'is-open' : ''}`}>
         <button className="faq__question" onClick={() => setIsOpen((prev) => !prev)}>
            <span>{question}</span>
            <img src={isOpen ? minusIcon : plusIcon} alt="" className="faq__icon" />
         </button>

         {isOpen && (
            <div className="faq__answer">
               <p>{answer}</p>
            </div>
         )}
      </li>
   );
}
