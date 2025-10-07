
import './styles.css';
import questionIcon from '../../icons/question-icon.svg';

const Faq = () => {
    return(
        <div className='faq-section'>
            <div className='texts-staff'>
                <p className='subtitles subtitle-staff'>resolvemos</p>
            <p className='title title-staff'>tus dudas</p>
            <div className="faq-container">
                <div className="question question-1">
                <div className="header-container">
                    <div className='left-items'>
                        <div className="blue-line"></div>
                        <p className='faq-title'>Horarios</p>
                    </div>
                    <img src={questionIcon} alt="Icono de pregunta" className='question-icon'/>
                </div>
                <p className='question-text'>¿Cuáles son sus horarios de atención?</p>
                <p className='question-answer'>Lunes a Viernes 10:00 am 19:00 pm. <br />Sabado 10:00 am 19:00 pm.</p>
            </div>
            <div className="question question-2">
                <div className="header-container">
                    <div className='left-items'>
                        <div className="blue-line"></div>
                        <p className='faq-title'>EMERGENCIAS</p>
                    </div>
                    <img src={questionIcon} alt="Icono de pregunta" className='question-icon'/>
                </div>
                <p className='question-text'>¿Atienden emergencias? </p>
                <p className='question-answer'>Si, atendemos emergencias todos los dias de la semana.</p>
            </div>
            <div className="question question-3">
                <div className="header-container">
                    <div className='left-items'>
                        <div className="blue-line"></div>
                        <p className='faq-title'>aseguranzas</p>
                    </div>
                    <img src={questionIcon} alt="Icono de pregunta" className='question-icon'/>
                </div>
                <p className='question-text'>¿Aceptan aseguranzas americanas?</p>
                <p className='question-answer'>Si,  aceptamos la mayoria de aseguranzas americanas.</p>
            </div>
        </div>
        </div>
            </div>
            
        
    )
}

export default Faq;