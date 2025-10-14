import './styles.css';

const Contact = () => {
    return(
        <div className='contact-container'>
            <div className='texts-staff'>
                <p className='subtitles subtitle-staff'>Sigamos en</p>
            <p className='title title-staff'>Contacto</p>
            </div>
            <div className='items-contact-container'>
                <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                <input type="hidden" name="access_key" value="23c55a5d-3109-47db-a478-9a102202543c" />

            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Tu e-mail" required />
            </div>

            <div className="form-group">
                <label htmlFor="telefono">Número de teléfono</label>
                <input type="tel" id="telefono" name="telefono" placeholder="Tu número de teléfono" />
            </div>

            <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje aquí" rows="6" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
                Enviar
            </button>
                </form>
                <div className='btns-container'>
                    <button className='contact-btn' onClick={() => window.open('https://api.whatsapp.com/send?phone=5216561032740&text=Hola%2C%20Necesito%20agendar%20una%20cita.', '_blank')}>WhatsApp</button>
                    <button className='contact-btn' onClick={() => window.location.href = 'tel:+526561032740'}>Teléfono</button>
                </div>
            </div>


        </div>
    )
}

export default Contact