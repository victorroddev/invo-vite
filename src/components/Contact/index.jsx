import './styles.css';

const Contact = () => {
    return(
        <div className='contact-container'>
            <div className='texts-staff'>
                <p className='subtitles subtitle-staff'>Sigamos en</p>
            <p className='title title-staff'>Contacto</p>
            </div>
            <div className='items-contact-container'>
                <form className="contact-form" action="/enviar" method="POST">
                <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
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
                    <button className='contact-btn'>WhatsApp</button>
                    <button className='contact-btn'>Teléfono</button>
                </div>
            </div>


        </div>
    )
}

export default Contact