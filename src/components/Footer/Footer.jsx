import youtubeIcon from '../../assets/img/youtube-line.png';
import instagramIcon from '../../assets/img/instagram-line.png';
import facebookIcon from '../../assets/img/facebook-box-line.png';
import githubIcon from '../../assets/img/github-line.png';
import twitterIcon from '../../assets/img/twitter-x-line.png';
import './Footer.css';

export default function Footer() {
   return (
      <footer className="footer">
         <div className="container footer__inner">
            <nav className="footer__nav">
               <a href="#">Features</a>
               <a href="#">Pricing</a>
               <a href="#">About us</a>
               <a href="#">Contact</a>
            </nav>

            <ul className="footer__socials">
               <li>
                  <a href="#">
                     <img src={youtubeIcon} alt="YouTube" />
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={instagramIcon} alt="Instagram" />
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={facebookIcon} alt="Facebook" />
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={githubIcon} alt="GitHub" />
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={twitterIcon} alt="X" />
                  </a>
               </li>
            </ul>

            <p className="footer__copy">© 2024 Abstractly, Inc. All rights reserved.</p>
         </div>
      </footer>
   );
}
