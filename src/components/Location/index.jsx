import './style.css';
import paolaP from '../../img/staff/paola-plasencia-2.webp'

const Location = () => {
    return(
        <div className="location-container">
            <p className='subtitles subtitle-staff'>Descubre tu</p>
            <p className='title title-staff'>mejor sonrisa</p>
            <img src={paolaP} alt="" className='location-photo'/>
            <div className='location-text-container'>
                <a href="
                https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgYIAhBFGDwyBggDEEUYPNIBCDM0NDZqMWo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=mx&sa=X&geocode=KWvhUr79XOeGMS5RioesDYQo&daddr=Blvd.+Te%C3%B3filo+Borunda+%237751,+Bosques+del+Sol,+32617+Ju%C3%A1rez,+Chih.
                ">
                <p>Ubicación</p>
                </a>
            </div>
        </div>
    )
}

export default Location;