import SectionLayout from '../layout/SectionLayout';
import FaqList from '../FaqList/FaqList';

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
