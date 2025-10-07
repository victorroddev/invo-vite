
import './styles.css';
import invoLogo from '../../img/logos/INVO PNG1 1.svg';
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Footer = () =>{
    return(
        <div className='footer-container'>
            <Link to="/" aria-label='Go to page' className='invo-logo-container'>
                <img src={invoLogo} alt="" className='invo-logo-footer'/>
            </Link>
            <div className='footer-line'></div>
            <p className='site-text'>Sitio</p>
            <ul>
                <li className="footer-link">Inicio</li>
                <Link to='/Privacity'>                
                <li className="footer-link">Politica de privacidad</li>
                </Link>
                <li className="footer-link">FAQ</li>
                <li className="footer-link">Servicios</li>
            </ul>
            <div className='footer-line'></div>
            <p className='site-text'>Síguenos</p>
            <div className="footer-social">
                    <a href="https://www.facebook.com/InvoDental" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookSquare />
                    </a>
                    <a href="https://www.instagram.com/invodental/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaSquareInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@invo_dental" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <AiFillTikTok className='footer-rrss-icon'/>

                    </a>
                </div>
            <div className='rrss-container'>
            </div>
        </div>
    )
}

export default Footer;