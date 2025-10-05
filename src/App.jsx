import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Staff from './components/Staff';
import Memberships from './components/Memberships';
import Contact from './components/Contact';
import Faq from './components/FAQ';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Staff />
      <Memberships />
      <Contact />
      <Faq />
    </div>
  );
}

export default App;