import { TbDental } from "react-icons/tb";
import './servicesStyles.css';

const ServicesPage = () => {
    return (
        <div className="services-cards-container">

            <div className="services-card-container">
                <div className="services-card-header">
                    <h3 className="title-service">Odontopediatría </h3>
                    <TbDental className='icon-service' />
                </div>

                <p className="service-paragraph">
                    La odontopediatría es la rama de la odontología que se especializa en el cuidado de la salud bucal de bebés, niños y adolescentes. Se enfoca tanto en la prevención como en el tratamiento de enfermedades dentales, considerando las particularidades de una boca en pleno desarrollo.
                </p>
            </div>

            <div className="services-card-container">
                <div className="services-card-header">
                    <h3 className="title-service">Ortodoncia</h3>
                    <TbDental className='icon-service' />
                </div>

                <p className="service-paragraph">
                    La ortodoncia es la especialidad de la odontología que se encarga de estudiar, prevenir y corregir las alteraciones del desarrollo, la forma de las arcadas dentarias y la posición de los maxilares. Su objetivo es restablecer el equilibrio tanto en la forma como en la función de la boca y la cara, mejorando también la estética facial.
                </p>
            </div>

            <div className="services-card-container">
                <div className="services-card-header">
                    <h3 className="title-service">Cirugía</h3>
                    <TbDental className='icon-service' />
                </div>
                <p className="service-paragraph">
                    La cirugía oral y maxilofacial es la especialidad odontológica que se encarga del diagnóstico y tratamiento quirúrgico de enfermedades, traumatismos y defectos en la boca, los maxilares y las estructuras faciales relacionadas.
                </p>
            </div>

            <div className="services-card-container">
                <div className="services-card-header">
                    <h3 className="title-service">Prótesis</h3>
                <TbDental className='icon-service' />
                </div>
                
                <p className="service-paragraph">
                    Una prótesis dental es un dispositivo artificial diseñado para reemplazar dientes perdidos o dañados, con el objetivo de restaurar tanto la función masticatoria como la estética de la boca.
                </p>
            </div>

            <div className="services-card-container">
                <div className="services-card-header">
                    <h3 className="title-service">Periodoncia</h3>
                    <TbDental className='icon-service' />
                </div>

                <p className="service-paragraph">
                    La periodoncia es la especialidad de la odontología que se enfoca en la prevención, diagnóstico y tratamiento de las enfermedades que afectan a los tejidos que sostienen los dientes. Esto incluye las encías, el ligamento periodontal y el hueso alveolar.
                </p>
            </div>

            <div className="services-card-container">
                <div className="services-card-header">
                    <h3 className="title-service">Endodoncia</h3>
                    <TbDental className='icon-service' />
                </div>

                <p className="service-paragraph">
                    La endodoncia es la especialidad odontológica que se encarga del estudio, prevención, diagnóstico y tratamiento de las enfermedades de la pulpa dental (comúnmente conocida como el "nervio" del diente) y de los tejidos que rodean la raíz.
                </p>
            </div> 


        </div>
    )
}

export default ServicesPage;