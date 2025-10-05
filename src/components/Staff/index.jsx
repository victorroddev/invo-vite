
import './style.css';
import Card from './Card';
import staffOne from '../../img/staff/daniel-jimenez.webp';
import angelaR from '../../img/staff/angela-rodriguez.webp';
import bereniceG from '../../img/staff/berenice-gonzales.webp';
import lizzeteL from '../../img/staff/lizzette-lopez.webp';
import jonathanA from '../../img/staff/jonathan-aguilar.webp';
import paolaP from '../../img/staff/paola-plasencia.webp';
import ivanR from '../../img/staff/ivan-roacho.webp';
import joseG from '../../img/staff/jose-a-garcia.webp';
import abrilM from '../../img/staff/abril-morales.webp';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';


const Staff = () => {

    return(
        <div className='staff-container'>
            <div className='texts-staff'>
                <p className='subtitles'>Nuestro</p>
                <h3 className='titles title-staff'>Equipo</h3>
            </div>
            <div className='items-container-staff'>
                <Splide className="slider"
                    options={ { 
                        perPage: 3,
                        rewind: true,
                        type: 'loop',
                        focus: 'center',
                        arrows: true,
                        breakpoints: {
                            1228: {
                                perPage: 2,
                                gap: '0.2rem'
                            },
                            950: {
                                perPage: 1
                            }

                        }
                    } }
                    aria-label="Slider staff"
                >
                    <SplideSlide className='person' >
                        <Card desc='Implantologia' name='Daniel Jimenez'img={staffOne} className='person' />
                    </SplideSlide>

                    <SplideSlide className='person' >
                        <Card desc='Ortodoncista' name='Berenice Gonzalez'img={bereniceG} className='person' />
                    </SplideSlide>

                    <SplideSlide className='person' >
                        <Card desc='Administración' name='Lizzette Lopez'img={lizzeteL} className='person' />
                    </SplideSlide>

                    <SplideSlide className='person' >
                        <Card desc='Laboratorio' name='Jonathan Aguilar'img={jonathanA} className='person' />
                    </SplideSlide>


                    <SplideSlide className='person' >
                        <Card desc='Odontologia general' name='Paola Plasencia'img={paolaP} className='person' />
                    </SplideSlide>

                    <SplideSlide className='person' >
                        <Card desc='Cirugía Dental' name='Jose A. Garcia'img={joseG} className='person' />
                    </SplideSlide>

                    <SplideSlide className='person' >
                        <Card desc='Anestesiologo' name='Ivan Roacho'img={ivanR} className='person' />
                    </SplideSlide>

                    <SplideSlide className='person' >
                        <Card desc='Asistente Dental' name='Abril Morales'img={abrilM} className='person' />
                    </SplideSlide>

                    <SplideSlide className='person' >
                        <Card desc='Asistente Dental' name='Angela Rodriguez'img={angelaR} className='person' />
                    </SplideSlide>
                    
                </Splide>

    
            </div>
        </div>

        
    ) 
};

export default Staff;