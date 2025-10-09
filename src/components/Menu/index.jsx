import './styles.css';
import facebookBlue from '../../icons/facebook-icon-blue.png';
import instagramBlue from '../../icons/instagram-icon-blue.png';
import tiktokBlue from '../../icons/tiktok-icon-blue.png';
import { Link } from 'react-router-dom';


// Acepta la prop `closeMenu`
const Menu = ({ isOpen, closeMenu }) => {

    return (
        <div className={`menu ${isOpen ? 'menu-visible' : 'menu-hidden'}`}>
            <ul className='links'>
                {/* Enlace <a href> para "Preguntas frecuentes" */}
                {/* Cuando se hace click en este tipo de enlace, también cerramos el menú */}
                <li><a href="#Faq" onClick={closeMenu}>Preguntas frecuentes</a></li>
                <div className='divider-link'></div>

                {/* Enlace <Link> para "Servicios" */}
                {/* Usamos el prop `onClick` de Link para llamar a closeMenu */}
                <li><Link to='/Services' onClick={closeMenu}>Servicios</Link></li>
                <div className='divider-link' ></div>

                {/* Enlace <a href> para "Membresias" */}
                <li><a href="" onClick={closeMenu}>Membresias</a></li>
                <div className='divider-link' ></div>

                {/* Enlace <Link> para "Aviso de privacidad" */}
                <li><Link to='/Privacity' onClick={closeMenu}>Aviso de privacidad</Link></li>

                <li className='icons-container'>
                    {/* Enlaces de redes sociales */}
                    <li><a href="https://www.facebook.com/InvoDental" onClick={closeMenu}><img src={facebookBlue} alt="Icono de Facebook" className='rrss-icons'/></a></li>
                    <li><a href="https://www.instagram.com/invodental/" onClick={closeMenu}><img src={instagramBlue} alt="Iono de Instagram" className='rrss-icons' /></a></li>
                    <li><a href="https://www.tiktok.com/@invo_dental" onClick={closeMenu}><img src={tiktokBlue} alt="icono de tik tok" className='rrss-icons'/></a></li>
                </li>
            </ul>
        </div>
    )
}

export default Menu;