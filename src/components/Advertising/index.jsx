import { PiShieldWarningBold } from "react-icons/pi";
import './styles.css';

const Advertising = () => {
    return(
        <div className='advertising-container'>
            <a href="#memberships">
                <PiShieldWarningBold  className="advertising-icon"/>
                <p>Descubre nuestras nuevas membresias</p>
            </a>
            
        </div>
    )
}

export default Advertising