
import './style.css'

const Card = (props) => {
    return(
        <div className='doctor-container'>
                <div className='background'>
                    <div className='left-div'></div>
                    <div className='right-div'></div>
                    <img src={props.img} alt="Daniel Jiménez"  className='photo-staff'/>
                    <div className='text-staff'>
                        <p className='staff-paragraph--bold'>{props.desc}</p>
                    </div>
                    <div className='name-container'>
                        <p>{props.name}</p>
                    </div>
                </div>
                
            </div>
    )
};

export default Card;