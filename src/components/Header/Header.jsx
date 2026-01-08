import './Header.css';
import logo from '../../assets/img/logo.png';

export default function Header() {
   return (
      <header className="header">
         <div className="container header__inner">
            <a href="#" className="logo">
               <img src={logo} alt="Abstractly logo" />
            </a>

            <nav className="nav">
               <ul className="nav__list">
                  <li>
                     <a href="#">Home</a>
                  </li>
                  <li>
                     <a href="#">Features</a>
                  </li>
                  <li>
                     <a href="#">Pricing</a>
                  </li>
                  <li>
                     <a href="#">About us</a>
                  </li>
                  <li>
                     <a href="#">Contact</a>
                  </li>
               </ul>
            </nav>

            <div className="header__actions">
               <a href="#" className="btn btn--secondary">
                  Learn more
               </a>
               <a href="#" className="btn btn--primary">
                  See pricing
               </a>
            </div>
         </div>
      </header>
   );
}
