import { useState, useEffect, useRef } from 'react';
import logo from '../../img/logos/invo-blanco.png';
import './styles.css';
import Menu from '../Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    //Set open menu state as false
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); //Reference


    //Change state of menu
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect((()=> {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false); //closes menu
            }
        };
        //Function that determines if menu is open
        if(isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        //Event cleaner
        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }), [isMenuOpen]);

    return(
        <div className='navbar' ref={menuRef}>
            <div className='logo-container'>
                <Link to='/' aria-label="go to home page">
                    <img className="logo-navbar" src={logo} alt="Logo Invo Dental" />
                </Link>
            </div>
                <button 
                className={`menu-button ${isMenuOpen ? 'is-active': ''}`} 
                aria-label='toggle menu' 
                onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <p>Cerrar</p>
                </button>
                <Menu isOpen={isMenuOpen} />
        </div>
    );
};

export default Navbar;