import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const URI = 'http://localhost:8000/preguntas/'

const CompCreatePregunta = () => {
    
    const [Prioridad, setPrioridad]= useState('')
    const [Contenido, setContenido]= useState('')
    const [Categoria, setCategoria]= useState('')
    const [Destinatario, setDestinatario]= useState('')
    const navigate=useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {Prioridad:Prioridad, Contenido:Contenido, Categoria:Categoria, Destinatario:Destinatario})
        navigate('/')
    }

    return(
        <div>
          <form onSubmit={store}>
            <div>
              <input type="text" id='name' required class='input' list='opciones' value={Categoria} onChange={(e)=>setCategoria(e.target.value)}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='opciones'>
                <option value= 'Problema inscipcion de ramos'/>
                <option value= 'Horarios de atencion Director'/>
                <option value= 'pico pal que lee' />
              </datalist>
            </div>
            <div >
            <input type="text" id='name' required class='input' list='destinatarios' value={Destinatario} onChange={(e)=>setDestinatario(e.target.value)}></input>
              <label for='name' class='input-label'>Destinatario</label>
              <datalist id='destinatarios'>
                <option value= 'Secretaria'/>
                <option value= 'Marco Toranzo'/>
                <option value= 'Sergio Hernadez' />
              </datalist>
            </div>
            <div >
            <input type="text" id='name' required class='input' list='priority' value={Prioridad} onChange={(e)=>setPrioridad(e.target.value)}></input>
              <input type="text" id='name' required class='input' list='priority'></input>
              <label for='name' class='input-label'>Prioridad</label>
              <datalist id='priority'>
                <option value= 'Muy poca'/>
                <option value= 'Poca'/>
                <option value= 'Media'/>
                <option value= 'Alta' />
                <option value= 'muy alta' />
              </datalist>
            </div>
            <div >
              <textarea type="textarea" id='name' required class='inputP' value={Contenido} onChange={(e)=>setContenido(e.target.value)}/>
              <label for='name' class='input-label'>Pregunta</label>
            </div>
            <div justify-content='center'>
            <button type="submit" className='ButtonSend'>enviar</button>
            </div>
            
          </form>
          
        </div>
    )
}

export default CompCreatePregunta

    