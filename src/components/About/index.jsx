import './style.css';

const About = () => {
    return(
        <div className='container'>
            <p className='text-subtitle'>Sobre nosotros</p>
            <div className='main-container'>
                <div className='dots-container dots-left'>
                    <div className='dot dot-left'></div>
                    <div className='dot dot-right'></div>
                </div>
                <h2 className='title'>nuestra</h2>
                <div className='dots-container dots-left'>
                    <div className='dot dot-left'></div>
                    <div className='dot dot-right'></div>
                </div>
                
            </div>
            <h2 className='title'>Experiencia para ti</h2>

            <div className='circle'>
                <h2 className='years-text'>
                    +19
                </h2>
                <h3 className='circle-subtitle'>años</h3>
                <h4 className='circle-paragraph'>de experiencia</h4>
            </div>
        </div>
    )
}

export default About