import './style.css';
import ortodonciaIcon from '../../icons/ortodoncia.svg';
import endodonciaIcon from '../../icons/endodoncia.svg';
import implantologiaIcon from '../../icons/implantologia.svg';

const Services = () => {
    return(
        <div className='container'>
            <h2 className='titles title-services'>Servicios</h2>
            <div>
                <p className='services-paragraph paragraph'>Nuestro enfoque se centra en una odontología de calidad, donde cada tratamiento es planificado y ejecutado con precisión y los mejores materiales, asegurando resultados duraderos y funcionales.</p>
            </div>
            <div className='items-container'>
               { /* first item */ }
                <div className="item-container item-1">
                    <div className='item-content'>
                        <img src={ortodonciaIcon} alt="Limpieza Dental Icono"  className='services-icon-1'/>
                        <p className='paragraph-item'>Ortodoncia</p>
                    </div>
                </div>
                { /* second item */ }
                <div className="item-container item-2">
                    <div className='item-content'>
                        <img src={endodonciaIcon} alt="Control de caries" className='services-icon-2' />
                        <p className='paragraph-item'>Control de caries</p>
                    </div>
                </div>
                { /* third item */ }
                <div className="item-container item-3">
                    <div className='item-content'>  
                        <img src={implantologiaIcon} alt="Blanqueamiento dental" className='services-icon-3'/>
                        <p className='paragraph-item'>Blanqueamiento dental</p>
                    </div>
                </div>
            </div>
            <button className='services-button'>Descubre mas de nuestros servicios</button>
        </div>
    )
}

export default Services