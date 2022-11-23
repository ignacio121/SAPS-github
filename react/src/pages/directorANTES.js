import React, {useState} from 'react';
import Modal from '../components/Modal.jsx';
import '../App.css';
import axios from 'axios';
/*import Login from './pages/login';*/
const URI = 'http://localhost:8000/preguntas_frecuentes/'




function  Director  () {
  const [stateModal1,changeModal1] = useState(false);
  const [stateModal2,changeModal2] = useState(false);
  const [stateModal3,changeModal3] = useState(false);
  const [stateModal4,changeModal4] = useState(false);

  const [Titulo1, setTitulo1]= useState('')
  const [Categoria1, setCategoria1]= useState('')
  const [Contenido1, setContenido1]= useState('')
  const [ID_Carrera1, setID_Carrera1]= useState('');


  const store = async (e) => {
      e.preventDefault()
      await axios.post(URI, {Titulo:Titulo1,Categoria:Categoria1, Contenido:Contenido1, ID_Carrera:ID_Carrera1})
      
    }
  
  return (
    <div>
      <div>
        <button className='btn' onClick={()=>changeModal1(!stateModal2)}>Ingresa Preguntas Frecuentes</button>
        <button className="btn" onClick={()=>changeModal2(!stateModal1)}>Revisar Pregunta</button>
        <br/>
        <button className='btn' onClick={()=>changeModal3(!stateModal3)}>Revisar Solicitudes</button>
        <button className='btn' onClick={()=>changeModal4(!stateModal4)}>Graficos</button>
      </div>

        {/* Modal 1  */}
        <Modal
          state= {stateModal1}
          cambiarEstado={changeModal1}
          titulo="Ingresa la pregunta"
        >
        <div>
          <form onSubmit={store}>
            <div>
              <input type="text" id='name' required class='input'  value={Titulo1} onChange={(e)=>setTitulo1(e.target.value)}></input>
              <label for='name' class='input-label'>Titulo</label>
            
            </div>
            <div >
            <input type="text" id='name' required class='input' list='Categoria' value={Categoria1} onChange={(e)=>setCategoria1(e.target.value)}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='Categoria'>
                <option value= 'Secretaria'/>
                <option value= 'Marco Toranzo'/>
                <option value= 'Sergio Hernadez' />
              </datalist>
            </div>
            <div >
            <input type="text" id='name' required class='input' value={Contenido1} onChange={(e)=>setContenido1(e.target.value)}></input>
              <label for='name' class='input-label'>Contenido</label>
              
            </div>
            <div >
              <input type="number" id='name' required class='inputP' value={ID_Carrera1} onChange={(e)=>setID_Carrera1(e.target.value)}/>
              <label for='name' class='input-label'>ID_Carrera</label>
            </div>
            <div justify-content='center'>
            <button type="store" className='ButtonSend'>enviar</button>
            </div>
            
          </form>
        </div>
        </Modal>
    </div> 
  )
}

export default Director;