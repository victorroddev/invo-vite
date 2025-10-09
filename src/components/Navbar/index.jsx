import { useState, useEffect, useRef } from 'react';
import logo from '../../img/logos/invo-blanco.png';
import './styles.css';
import Menu from '../Menu'; // Importa tu componente Menu
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef(null); // Ref para el contenedor principal del Navbar

    // Función para cerrar el menú explícitamente
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Si el clic fue fuera del Navbar (que incluye el botón de menú y el menú mismo)
            // y el menú está abierto, ciérralo.
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className='navbar' ref={navbarRef}>
            <div className='logo-container'>
                <Link to='/' aria-label="go to home page" onClick={closeMenu}> {/* Cierra el menú al hacer clic en el logo */}
                    <img className="logo-navbar" src={logo} alt="Logo Invo Dental" />
                </Link>
            </div>
            <button
                className={`menu-button ${isMenuOpen ? 'is-active' : ''}`}
                aria-label='toggle menu'
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
                <p>{isMenuOpen ? 'Cerrar' : 'Menú'}</p> {/* Texto dinámico para el botón */}
            </button>
            {/* Aquí pasamos la función closeMenu como prop al componente Menu */}
            <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </div>
    );
};

export default Navbar;