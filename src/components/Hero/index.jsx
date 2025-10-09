import bookingIcon from '../../icons/book-icon.png'
import whatsAppIcon from '../../icons/whatsapp-icon.png'
import './style.css';

const Hero = () => {
    return (
        <div>
            <div className='hero-container'>
                <div className='layer'></div>
                <div className='hero-section'>
                    <h2 className='hero-text hero-title'>cuidamos</h2>
                    <div className='hero-sub-container'>
                        <div className='sub-left'>
                            <p className='hero-1-subtitle hero-text hero-subtitle'>tu salud</p>
                            <p className='hero-2-subtitle hero-text hero-subtitle'>dental</p>
                        </div>
                        <div className='sub-right'>
                            <p className='hero-paragraph'>Un espacio pensado para ti, con profesionales, equipo moderno y buen ambiente</p>
                        </div>
                            
                    </div>
                    <div className='hero-book-container'>
                        <p className='book-title'>Agenda ahora</p>
                        <div className='icons-container'>
                            <a href="#" className='icon-container'>
                                <img src={bookingIcon} alt="Logo Whatsapp" className='book-icon'/>
                            </a>
                            <a href="#" className='icon-container '>
                                <img src={whatsAppIcon} alt="Logo para agendar" className='book-icon'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;