import '../../src/App.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Staff from '../components/Staff';
import Memberships from '../components/Memberships';
import Contact from '../components/Contact';
import Faq from '../components/FAQ';
import Location from '../components/Location';
import Advertising from '../components/Advertising';


const HomePage = () => {
  return (
    <div>
      <Advertising />
      <Hero />
      <About />
      <Services />
      <Staff />
      <section id='memberships'>
        <Memberships />
      </section>
      <Contact />
      <Faq />
      <Location />
    </div>
  );
}

export default HomePage;