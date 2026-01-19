import Marquee from 'react-fast-marquee';
import SectionLayout from '../layout/SectionLayout';

import Logo1 from '../../assets/img/logo-1.png';
import Logo2 from '../../assets/img/logo-2.png';
import Logo3 from '../../assets/img/logo-3.png';
import Logo4 from '../../assets/img/logo-4.png';
import Logo5 from '../../assets/img/logo-5.png';
import Logo6 from '../../assets/img/logo-6.png';
import Logo7 from '../../assets/img/logo-7.png';
import Logo8 from '../../assets/img/logo-8.png';

import './Brands.css';

const brands = [
   { img: Logo2, alt: 'Wan Nain' },
   { img: Logo1, alt: 'Robinwood' },
   { img: Logo3, alt: 'Swapdo' },
   { img: Logo4, alt: 'Wirang' },
   { img: Logo5, alt: 'Diamonds' },
   { img: Logo6, alt: 'Air car' },
   { img: Logo7, alt: 'Makrohard' },
   { img: Logo8, alt: 'BitterFly' },
];

const Brands = () => {
   return (
      <SectionLayout className="brands" title="Used by teams that you love" withContainer={false}>
         <Marquee speed={40} pauseOnHover gradient={false}>
            {brands.map((brand, index) => (
               <div className="brands__item" key={index}>
                  <img src={brand.img} alt={brand.alt} />
               </div>
            ))}
         </Marquee>
      </SectionLayout>
   );
};

export default Brands;
