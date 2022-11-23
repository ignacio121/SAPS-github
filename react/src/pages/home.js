import React, {useState} from 'react';
import {Barra} from './barra';
import Modal from '../components/Modal';
import "../App.css"

export function Home1(){
    
    const[active, setActive] = useState(true);

    const toggle = () => {setActive(!active)}
    return(
        <div>
            <Barra/>
            <div>
                <button className="btn" onClick={toggle}>Ingresar Pregunta</button>
                <button className='btn'>Ingresa solicitud</button>
                <br/>
                <button className='btn'>Preguntas Frecuentes</button>
                <button className='btn'>Estado de consultas</button>

            </div>
            <Modal 
                active={active}
                toggle={toggle}
            >
                <h1>aaaa</h1>
            </Modal> 
            
        </div>  
    );
};


export default Home1;