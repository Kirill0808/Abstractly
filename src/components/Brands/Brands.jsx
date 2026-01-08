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
      <section className="brands">
         <p className="brands__title">Used by teams that you love</p>
         <ul className="brands__list">
            {[...brands, ...brands].map((brand, index) => (
               <li key={index}>
                  <img src={brand.img} alt={brand.alt} />
               </li>
            ))}
         </ul>
      </section>
   );
};

export default Brands;
