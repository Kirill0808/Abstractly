import HeroImg from '../../assets/img/Hero image.jpg';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
   return (
      <section className="hero">
         <div className="container hero__inner">
            <div className="hero__content">
               <h1 className="hero__title">
                  Well crafted
                  <br />
                  abstract images
               </h1>
               <p className="hero__text">
                  High quality abstract images for your projects, wallpaper and presentations.
               </p>

               <div className="hero__buttons">
                  <Button variant="primary">Get started</Button>
                  <Button variant="secondary">Learn more</Button>
               </div>
            </div>

            <div className="hero__image">
               <img src={HeroImg} alt="Abstract art" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
