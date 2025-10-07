import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar'
import Footer from './components/Footer';


function App(){
  return (
    <div>
      <NavBar />
      <main>

      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App;