import './style.css';
import paolaP from '../../img/staff/paola-plasencia-2.webp'

const Location = () => {
    return(
        <div className="location-container">
            <p className='subtitles subtitle-staff'>Descubre tu</p>
            <p className='title title-staff'>mejor sonrisa</p>
            <img src={paolaP} alt="" className='location-photo'/>
            <div className='location-text-container'>
                <p>Ubicación</p>
            </div>
        </div>
    )
}

export default Location;