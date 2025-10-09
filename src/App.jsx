import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

function App(){
  return (
    <div>
      <main>

      <NavBar />
      <ScrollToTop />

      <Outlet />

      <Footer />\
        </main>
    </div>
  )
}

export default App;