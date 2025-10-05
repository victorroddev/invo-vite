import './styles.css';

const Memberships = () => {
    return (
    <div className='memberships-container-section'>
        <h2 className='titles title-services'>Membresias</h2>
        <p className='services-paragraph paragraph'>Adquiere tu membresía y transforma tu cuidado dental</p>
        <div className="memberships-container">
            <div className="memberships-container">
                <div className="membership-container individual">
                    <div className='membership-title-container'>
                        <h3 className='membership-title individual-title'>Individual</h3>
                    </div>
                    <div className='memberships-items-container'>
                        <p className='price-membership'>$1,699.00</p>
                        <p className="membership-item">Consultas ilimitadas</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">2 limpiezas dentales</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">1 Blanqueamiento dental al 50%</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Endodoncia con 20% de descuento</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Implante dental con 20% de descuento</p>

                        

                        <button className='buy-button'>
                        Aquirir
                    </button>
                    </div>
                </div>

                <div className="membership-container familiar">
                    <div className='membership-title-container'>
                        <h3 className='membership-title individual-title'>Familiar</h3>
                    </div>
                    <div className='memberships-items-container'>
                        <p className='price-membership'>$2,900.00</p>
                        <p className="membership-item">Consultas ilimitadas</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">2 limpiezas dentales</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">1 Blanqueamiento dental al 50%</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Tratamiento de ortodoncia con 15% de descuento</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Endodoncia con 20% de descuento</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Implante dental al 20% de descuento</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">1 apicacion de selladores de fosetas y fisuras (cuadrante)</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Transporte de ida y vuelta gratis</p>
                        <p className='family-dis'>*Beneficios para 4 miembros</p>
                        <button className='buy-button'>
                        Aquirir

                        
                    </button>
                    </div>
                </div>

                <div className="membership-container premium">
                    <div className='membership-title-container'>
                        <h3 className='membership-title individual-title'>Premium</h3>
                    </div>
                    <div className='memberships-items-container'>
                        <p className='price-membership'>$3,900.00</p>
                        <p className="membership-item">Consultas ilimitadas</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">3 limpiezas dentales</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Extracciones dentales simples con 20% de descuento</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Obturaciones/Rellenos con 15% de descuento</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Coronas de zirconia con 20% de descuento</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">1 Blanqueamiento dental al 50%</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Implante dental con 20% de descuento</p>
                        <div className='membership-divider'></div>
                        <p className="membership-item">Transporte de ida y vuelta gratis</p>
                        <button className='buy-button'>
                        Aquirir
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    )
}

export default Memberships