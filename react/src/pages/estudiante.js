import React ,{useState, useEffect} from 'react';
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {getMe} from "../features/authSlice";
import axios from 'axios';
import Select from 'react-select';
import Modal from '../components/Modal';
import Navbar from '../components/NavBar.jsx';
import Post from '../components/PostPF.jsx'
import Pagination from '../components/pagination';
import { ButtonSend, LeyendaError } from '../elements/Form';
import ValidadorForm from '../components/validadorForm';
import PregSol from '../components/PregSol.jsx';



const URIP = 'http://localhost:5000/pregunta/'
const URIPR = 'http://localhost:5000/pregunta_realizada/'
const URIS = 'http://localhost:5000/solicitud/'
const URISR = 'http://localhost:5000/solicitud_realizada'
const URIPF = 'http://localhost:5000/preguntas_frecuentes/'
const URICS = 'http://localhost:5000/categoriaS/'
const URICP = 'http://localhost:5000/categoriaP/'
const URICPF = 'http://localhost:5000/categoriaPF'
const URIPRIO = 'http://localhost:5000/prioridad'



const Student = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError} = useSelector((state)=> state.auth);

  useEffect(()=>{
    dispatch(getMe());
  },[dispatch]);
  useEffect(()=>{
    if(isError){
      navigate("/")
    }
  },[isError, navigate]);
  
  const userInSession = user;

  const [preguntaF, setPreguntaF] = useState([]);
  const [preguntaFfilt, setPreguntaFfilt] = useState(preguntaF);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const [stateModal1,changeModal1] = useState(false);
  const [stateModal2,changeModal2] = useState(false);
  const [stateModal3,changeModal3] = useState(false);
  const [stateModal4,changeModal4] = useState(false);

  const [PrioridadP, setPrioridadP]= useState({id:null,text:null,valido:null});
  const [CategoriaP, setCategoriaP]= useState({id:null,text:null,valido:null});
  const [ContenidoP, setContenidoP]= useState({text:null,valido:null});

  const [PrioridadS, setPrioridadS]= useState({id:null,text:null,valido:null});
  const [CategoriaS, setCategoriaS]= useState({id:null,text:null,valido:null});
  const [ContenidoS, setContenidoS]= useState({text:null,valido:null});

  const [CategoriasS, setCategoriasS]= useState([]);
  const [CategoriasP, setCategoriasP]= useState([]);
  const [Prioridad, setPrioridad]= useState([]);
  const [CPF, setCPF]= useState([]);
  
  const [preguntas,setPreguntas]=useState([]);
  const [solicitudes,setSolicitudes]=useState([]);

  const [correcto,setCorrecto] = useState(false);
  const [incorrecto,setIncorrecto] = useState(false);

  const soli = async (e) => {
    e.preventDefault()
    if(CategoriaS.valido ==='true' && PrioridadS.valido === 'true' && ContenidoS.valido==='true'){
      const idP = Math.floor(Math.random()*(20000-10000))+10000

      if(solicitudes.map(p=>p.ID_Solicitud).includes(idP)){
        idP = Math.floor(Math.random()*(20000-10000))+10000
      }
      setCorrecto(true);
      
      await axios.post(URIS, {ID_Solicitud:idP,Prioridad:PrioridadS.id, Contenido:ContenidoS.text, Categoria:CategoriaS.id})
      await axios.post(URISR, {ID_Solicitud:idP,ID_Emisor:user.id,ID_Estado:1})
      setPrioridadS({text:'',valido:null});
      setContenidoS({text:'',valido:null});
      setCategoriaS({text:'',valido:null});
      changeModal2(false);
    } else{
      setIncorrecto(true);
    }}
    

  const preg = async (e) => {
    e.preventDefault()
    if(CategoriaP.valido ==='true' && PrioridadP.valido === 'true' && ContenidoP.valido==='true'){
      const idP = Math.floor(Math.random()*(20000-10000))+10000

      if(preguntas.map(p=>p.ID_Pregunta).includes(idP)){
        idP = Math.floor(Math.random()*(20000-10000))+10000
      }
      setCorrecto(true);


      await axios.post(URIP, {ID_Pregunta:idP,Prioridad:PrioridadP.id, Contenido:ContenidoP.text, Categoria:CategoriaP.id, Respuesta:"Sin respuesta"})
      await axios.post(URIPR, {ID_Pregunta:idP,ID_Emisor:user.id,ID_Estado:1})
      setPrioridadP({text:'',valido:null});
      setContenidoP({text:'',valido:null});
      setCategoriaP({text:'',valido:null});
      changeModal1(false);
    } else{
      setIncorrecto(true);
    }}

  useEffect( () => {getAllPreguntas_Frecuentes()}, [])
  const getAllPreguntas_Frecuentes = async ()=> {
    const res = await axios.get(URIPF)
    setPreguntaF(res.data)
    setPreguntaFfilt(res.data)
  }

  useEffect( () => {getAllCategoriasS()}, [])
  const getAllCategoriasS = async ()=> {
    const res = await axios.get(URICS)
    setCategoriasS(res.data)
  }

  useEffect( () => {getAllCategoriaP()}, [])
  const getAllCategoriaP = async ()=> {
    const res = await axios.get(URICP)
    setCategoriasP(res.data)
  }

  useEffect( () => {getAllPrioridad()}, [])
  const getAllPrioridad = async ()=> {
    const res = await axios.get(URIPRIO)
    setPrioridad(res.data)
  }

  useEffect( () => {getAllPreguntas()}, [])
  const getAllPreguntas = async ()=> {
    const res = await axios.get(URIP)
    setPreguntas(res.data)
  }

  useEffect( () => {getAllSolicitudes()}, [])
  const getAllSolicitudes = async ()=> {
    const res = await axios.get(URIS)
    setSolicitudes(res.data)
  }
  useEffect( () => {getAllCPF()}, [])
  const getAllCPF = async ()=> {
    const res = await axios.get(URICPF)
    setCPF(res.data)
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = preguntaFfilt.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const validacionCP = () =>{
    if(CategoriasP.map(p=>p.Nombre_Categoria).includes(CategoriaP.text)){
      setCategoriaP({...CategoriaP,id:CategoriasP.filter(p=>p.Nombre_Categoria===CategoriaP.text).map(p=>p.ID_CategoriaP).at(0),valido: 'true'})
    }else{
      setCategoriaP({...CategoriaP,valido: 'false'})
    }}

  const validacionPP = () =>{
    if(Prioridad.map(p=>p.Nombre_prioridad).includes(PrioridadP.text)){
      setPrioridadP({...PrioridadP,id:Prioridad.filter(p=>p.Nombre_prioridad===PrioridadP.text).map(p=>p.ID_Prioridad).at(0),valido: 'true'})
    }else{
      setPrioridadP({...PrioridadP,valido: 'false'})
    }}

  const validacionTextP = () =>{
    if((/^[a-zA-ZÀ-ÿ\s\d\W]{1,300}$/).test(ContenidoP.text)){
      setContenidoP({...ContenidoP,valido: 'true'})
    }else{
      setContenidoP({...ContenidoP,valido: 'false'})
    }}
  
  const validacionCS = () =>{
    if(CategoriasS.map(p=>p.Nombre_Categoria).includes(CategoriaS.text)){
      setCategoriaS({...CategoriaS,id:CategoriasS.filter(p=>p.Nombre_Categoria===CategoriaS.text).map(p=>p.ID_CategoriaS).at(0),valido: 'true'})
    }else{
      setCategoriaS({...CategoriaS,valido: 'false'})
    }}

  const validacionPS = () =>{
    if(Prioridad.map(p=>p.Nombre_prioridad).includes(PrioridadS.text)){
      setPrioridadS({...PrioridadS,id:Prioridad.filter(p=>p.Nombre_prioridad===PrioridadS.text).map(p=>p.ID_Prioridad).at(0),valido: 'true'})
    }else{
      setPrioridadS({...PrioridadS,valido: 'false'})
    }}
  const validacionTextS = () =>{
    if((/^[a-zA-ZÀ-ÿ\s\d\W]{1,300}$/).test(ContenidoS.text)){
      setContenidoS({...ContenidoS,valido: 'true'})
    }else{
      setContenidoS({...ContenidoS,valido: 'false'})
    }}

  const filtro=(Categoria)=>{
    if(Categoria.ID_CategoriaPF!==7){
      setPreguntaFfilt(preguntaF.filter(p=>p.Categoria===Categoria.ID_CategoriaPF))
    }else{
      setPreguntaFfilt(preguntaF)
    }
    
  }
    
  return (
    <div> 
      <Navbar></Navbar>
      <div className='center'>
        
        <button className="btn" onClick={()=>changeModal1(!stateModal1)}>Ingresar Pregunta</button>
        <button className='btn' onClick={()=>changeModal2(!stateModal2)}>Ingresa solicitud</button>
        <br/>
        <button className='btn' onClick={()=>changeModal3(!stateModal3)}>Preguntas Frecuentes</button>
        <button className='btn' onClick={()=>changeModal4(!stateModal4)}>Estado de consultas</button>
      </div>

        {/* Modal 1  */}
        <Modal
          state= {stateModal1}
          cambiarEstado={changeModal1}
          titulo="Ingresa tu pregunta"
        >
        <div>
          <form onSubmit={preg}>
            <div>
              <LeyendaError valido={CategoriaP.valido}>Elija una categoria valida</LeyendaError>
              <input type="text" id='name' required class='input' list='opciones' value={CategoriaP.text} onChange={(e)=>setCategoriaP({...CategoriaP,text: e.target.value})} onKeyUp={validacionCP} onBlur={validacionCP}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='opciones'>  
                {CategoriasP.map(cat=>(
                  <option key={cat.id} value={cat.id}>{cat.Nombre_Categoria}</option>
                ))}
              </datalist>
            </div>

            <div >
            <LeyendaError valido={PrioridadP.valido}>Elija una prioridad valida</LeyendaError>
              <input type="text" id='name' required class='input' list='priority'value={PrioridadP.text} onChange={(e)=>setPrioridadP({...PrioridadP,text: e.target.value})} onKeyUp={validacionPP} onBlur={validacionPP}></input>
              <label for='name' class='input-label'>Prioridad</label>
              <datalist id='priority'>
                {Prioridad.map(prio=>(
                  <option key={prio.id}>{prio.Nombre_prioridad}</option>
                ))}
              </datalist>
            </div>

            <div >
              <LeyendaError valido={ContenidoP.valido}>Este campo no puede queda vacio</LeyendaError>
              <textarea type="textarea" id='name' required class='inputP' value={ContenidoP.text} onChange={(e)=>setContenidoP({...ContenidoP,text: e.target.value})} onKeyUp={validacionTextP} onBlur={validacionTextP}/>
              <label for='name' class='input-label'>Pregunta</label>
            </div>
            <div>
              <ButtonSend type="submit">Enviar</ButtonSend>
            </div>
            
          </form>
          
        </div>
          
        </Modal>
       
        {/* Modal 2 */}
        <Modal
          state= {stateModal2}
          cambiarEstado={changeModal2}
          titulo="Ingresa tu Solicitud"
        >
          <form onSubmit={soli}>
            <div>
            <LeyendaError valido={CategoriaS.valido}>Elija una categoria valida</LeyendaError>
              <input type="text" id='name' required class='input' list='opciones' value={CategoriaS.text} onChange={(e)=>setCategoriaS({...CategoriaS,text: e.target.value})} onKeyUp={validacionCS} onBlur={validacionCS}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='opciones'>
                {CategoriasS.map(cat=>(
                  <option key={cat.id} value={cat.id}>{cat.Nombre_Categoria}</option>
                ))}
              </datalist>
              
            </div>
            <div>
            <LeyendaError valido={PrioridadS.valido}>Elija una prioridad valida</LeyendaError>
              <input type="text" id='name' required class='input' list='priority' value={PrioridadS.text} onChange={(e)=>setPrioridadS({...PrioridadS,text: e.target.value})} onKeyUp={validacionPS} onBlur={validacionPS}></input>
              <label for='name' class='input-label'>Prioridad</label>
              <datalist id='priority'>
                {Prioridad.map(prio=>(
                  <option key={prio.id} value={prio.id}>{prio.Nombre_prioridad}</option>
                ))}
              </datalist>
            </div>
            <div >
             <LeyendaError valido={ContenidoS.valido}>Este campo no puede queda vacio</LeyendaError>
              <textarea type="textarea" id='name' required class='inputP' value={ContenidoS.text} onChange={(e)=>setContenidoS({...ContenidoS,text: e.target.value})} onKeyUp={validacionTextS} onBlur={validacionTextS}/>
              <label for='name' class='input-label'>Solicitud</label>
            </div>
          
            <div>
              <ButtonSend type="submit">Enviar</ButtonSend>
            </div>
          </form>

          
        </Modal>

        {/* Modal 3 */}
        <Modal
          state= {stateModal3}
          cambiarEstado={changeModal3}
          titulo="Preguntas frecuentes"
        >
          <Select 
            options={CPF}
            onChange={filtro}
            >

          </Select>
          <Post posts={currentPosts}/>
          <Pagination postsPerPage={postsPerPage} totalPosts={preguntaF.length} paginate={paginate}/>

        </Modal>

        {/* Modal 4 */}
        <Modal
          state= {stateModal4}
          cambiarEstado={changeModal4}
          titulo="Estado de preguntas y solicitudes"
        >
          <div class='subCabecera'>
            {/*
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" color= '#33e933'>
            <circle cx="8" cy="8" r="8"/>
            </svg>
            <p>Respondida</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" color= '#f1ff34'>
            <circle cx="8" cy="8" r="8"/>
            </svg>
            <p>Alerta</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" color= '#d1c5fc'>
            <circle cx="8" cy="8" r="8"/>
            </svg>
            <p>En espera</p>
            */}
            <div>Preguntas</div> 
            <PregSol URIR={'http://localhost:5000/pregunta_realizada/'} URI={'http://localhost:5000/pregunta/'} URIC={'http://localhost:5000/categoriaP/'}></PregSol>
            <div>Solicitudes</div> 
            <PregSol URIR={'http://localhost:5000/solicitud_realizada'} URI={'http://localhost:5000/solicitud/'} URIC={'http://localhost:5000/categoriaS/'}></PregSol>


            
          </div>
        </Modal>

        <ValidadorForm correcto={correcto} setCorrecto={setCorrecto} incorrecto={incorrecto} setIncorrecto={setIncorrecto}/>
    </div>
  );
}

export default Student;