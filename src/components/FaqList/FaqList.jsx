import FaqItem from './FaqItem';
import styles from './FaqList.module.css';
import Button from '../Button/Button';

const faqData = [
   {
      id: 1,
      question: 'What types of images are available on your platform?',
      answer:
         'Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes.',
   },
   {
      id: 2,
      question: 'How can I access and download images from your platform?',
      answer:
         'Upon signing up and logging in, users can browse through our curated collection and download images directly to their devices.',
   },
   {
      id: 3,
      question: 'Do you offer free images, or is there a subscription required?',
      answer:
         'We provide both free and premium images. A subscription is required for full access to the entire library.',
   },
   {
      id: 4,
      question: 'What payment methods do you accept for subscriptions?',
      answer:
         'We accept various payment methods including credit and debit cards as well as online payment gateways.',
   },
   {
      id: 5,
      question: 'Can I cancel or modify my subscription at any time?',
      answer:
         'Yes, you can cancel or modify your subscription at any time through your account settings.',
   },
   {
      id: 6,
      question: 'How frequently do you update your image collection?',
      answer: 'We regularly update our image collection with fresh and captivating content.',
   },
];

export default function FaqList() {
   return (
      <div className={styles.content}>
         <ul className={styles.list}>
            {faqData.map((item) => (
               <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
         </ul>

         <div className={styles.cta}>
            <div>
               <h3>Can’t find the answer you’re looking for?</h3>
               <p>
                  Reach out to our <a href="#">customer support</a> team.
               </p>
            </div>

            <Button variant="primary" href="#">
               Get in touch
            </Button>
         </div>
      </div>
   );
}
