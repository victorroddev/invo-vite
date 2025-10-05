
import './styles.css';
import facebookBlue from '../../icons/facebook-icon-blue.png';
import instagramBlue from '../../icons/instagram-icon-blue.png';
import tiktokBlue from '../../icons/tiktok-icon-blue.png';


const Menu = ({ isOpen }) => {
    return (
        <div className={`menu ${isOpen ? 'menu-visible' : 'menu-hidden'}`}>
            <ul className='links'>
                <li><a href="">Preguntas frecuentes</a></li>
                <div className='divider-link'></div>
                
                <li><a href="">Servicios</a></li>
                <div className='divider-link' ></div>
                <li><a href="">Membresias</a></li>
                <div className='divider-link' ></div>
                <li><a href="">Aviso de privacidad</a></li>
                <li className='icons-container'>
                    <a href=""><img src={facebookBlue} alt="Icono de Facebook" className='rrss-icons'/>
                    </a>
                    <a href=""><img src={instagramBlue} alt="Iono de Instagram" className='rrss-icons' />
                    </a>
                    <a href=""><img src={tiktokBlue} alt="icono de tik tok" className='rrss-icons'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu