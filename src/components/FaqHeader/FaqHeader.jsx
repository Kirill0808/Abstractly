import SectionLayout from '../layout/SectionLayout';
import FaqList from '../FaqList/FaqList';
import './FaqHeader.css';

export default function FaqHeader() {
   return (
      <SectionLayout
         className="faq"
         title="Frequently asked questions"
         subtitle="Choose any questions you need"
      >
         <FaqList />
      </SectionLayout>
   );
}
