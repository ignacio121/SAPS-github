import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import Moment from 'moment';

import styled from "styled-components";
import ValidadorForm from './validadorForm';
import { ButtonSend } from '../elements/Form';
const URIPRIO = 'http://localhost:5000/prioridad'
const URIU = 'http://localhost:5000/users'
const URIE = 'http://localhost:5000/estado'

const PregSol = ({URIR,URI,URIC}) => {

    const {user} = useSelector((state)=> state.auth);

    const [pregSolR, setPregSolR] = useState([]);
    const [pregSol, setPregSol] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [prioridad, setPrioridad] = useState([]);
    const [estado, setEstado] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [respuesta, setRespuesta] = useState({text:null,valido:null});
    const [correcto,setCorrecto] = useState();
    const [incorrecto,setIncorrecto] = useState(false);

    useEffect( () => {getAllR()}, [])
    const getAllR = async ()=> {
        const res = await axios.get(URIR)
        setPregSolR(res.data)
    }

    useEffect( () => {getAll()}, [])
    const getAll = async ()=> {
        const res = await axios.get(URI)
        setPregSol(res.data)
    }

    useEffect( () => {getAllC()}, [])
    const getAllC = async ()=> {
        const res = await axios.get(URIC)
        setCategoria(res.data)
    }

    useEffect( () => {getAllP()}, [])
    const getAllP = async ()=> {
        const res = await axios.get(URIPRIO)
        setPrioridad(res.data)
    }

    useEffect( () => {getAllU()}, [])
    const getAllU = async ()=> {
        const res = await axios.get(URIU)
        setAllUsers(res.data)
    }
    useEffect( () => {getAllE()}, [])
    const getAllE = async ()=> {
        const res = await axios.get(URIE)
        setEstado(res.data)
    }

        
    const pregUser = pregSolR.filter(p => p.ID_Emisor===(user&&user.id))

    const pregVis = pregSolR.filter(p => p.ID_Estado === 1)


    const preg = async (idP) => {
 
        if(respuesta.valido ==='true'){
            setCorrecto(true);
            await axios.put(URIR+idP, {ID_Estado:2})
            await axios.put(URI+idP, {Respuesta:respuesta.text})
            setRespuesta({text:'',valido:null});
        } else{
            setIncorrecto(true);
        }
        }
    
    const soli = async (idP,respuesta) =>{
        setCorrecto(true);
        if(respuesta===2){
            await axios.put(URIR+idP, {ID_Estado:2})
        }
        if(respuesta===3){
            await axios.put(URIR+idP, {ID_Estado:3})
        }
    }
        
        

    const validacionTextP = () =>{
        if((/^[a-zA-ZÀ-ÿ\s\d\W]{1,300}$/).test(respuesta.text)){
          setRespuesta({...respuesta,valido: 'true'})
        }else{
          setRespuesta({...respuesta,valido: 'false'})
        }}

    return(
        <Contariner>
            {user&&user.role===2 &&
                pregVis.map(pS=>(
                    <Item key={pS.id} height={"100px"}>
                        <Encabezado>
                            {pS.ID_Pregunta&&
                                <h3>{categoria.filter(p=>p.ID_CategoriaP===(pregSol.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.Categoria).at(0))).map(p=>p.Nombre_Categoria).at(0)}</h3>      
                            }
                            {pS.ID_Pregunta&&
                               prioridad.filter(p=>p.ID_Prioridad===(pregSol.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.Prioridad).at(0))).map(p=>p.Nombre_prioridad).at(0)
                            }
                            {pS.ID_Solicitud&&
                                <h3>{categoria.filter(p=>p.ID_CategoriaS===(pregSol.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.Categoria).at(0))).map(p=>p.Nombre_Categoria).at(0)}</h3>      
                            }
                            {pS.ID_Solicitud&&
                               prioridad.filter(p=>p.ID_Prioridad===(pregSol.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.Prioridad).at(0))).map(p=>p.Nombre_prioridad).at(0)
                            }
                        </Encabezado>

                        <Contenido>
                            {pS.ID_Pregunta&&
                                <div>
                                    {/*console.log(Moment(pregSolR.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.createdAt).at(0)))*/}
                                    <div>ID: P-{pregSol.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.ID_Pregunta).at(0)} Fecha: {Moment(pregSolR.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.createdAt).at(0)).format("DD/MMM/YYYY")}</div>
                                    <div>Estudiante: {allUsers.filter(u=>u.id===(pregSolR.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.ID_Emisor).at(0))).map(u=>u.name).at(0)}</div>
                                    <div>Correo: {allUsers.filter(u=>u.id===(pregSolR.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.ID_Emisor).at(0))).map(u=>u.email).at(0)}</div>
                                    <br/>
                                    <div>Contenido:</div>
                                    <PS>{pregSol.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.Contenido).at(0)}</PS>
                                    <div>Responder:</div>
                                    <Input value={respuesta.text} onChange={(e)=>setRespuesta({...respuesta,text: e.target.value})} onKeyUp={validacionTextP} onBlur={validacionTextP}/>
                                    <br/>
                                    <ButtonSend onClick={()=>preg(pS.ID_Pregunta)}>Enviar</ButtonSend>
                                </div>
                            }
                            {pS.ID_Solicitud&&
                                <div>
                                    <div>ID: S-{pregSol.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.ID_Solicitud).at(0)} Fecha: {Moment(pregSolR.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.createdAt).at(0)).format("DD/MMM/YYYY")}</div>
                                    <div>Estudiante: {allUsers.filter(u=>u.id===(pregSolR.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.ID_Emisor).at(0))).map(u=>u.name).at(0)}</div>
                                    <div>Correo: {allUsers.filter(u=>u.id===(pregSolR.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.ID_Emisor).at(0))).map(u=>u.email).at(0)}</div>
                                    <br/>
                                    <div>Contenido:</div>
                                    <PS>{pregSol.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.Contenido).at(0)}</PS>
                                    <br/>
                                    <ContButton>
                                        <ButtonSend onClick={()=>soli(pS.ID_Solicitud,2)}>Aceptar</ButtonSend>
                                        <ButtonSend onClick={()=>soli(pS.ID_Solicitud,3)}>Rechazar</ButtonSend>
                                    </ContButton>
                                </div>
                            }
                        </Contenido>                        
                    </Item>))
            }
            {user&&user.role===5 &&
                pregUser.map(pS=>
                    <ItemE key={pS.id}>
                        <Encabezado>
                            {pS.ID_Pregunta&&
                                <h3>{categoria.filter(p=>p.ID_CategoriaP===(pregSol.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.Categoria).at(0))).map(p=>p.Nombre_Categoria).at(0)}</h3>
                            }
                            {pS.ID_Pregunta&&
                                estado.filter(e=>e.ID_Estado===(pregSolR.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.ID_Estado).at(0))).map(e=>e.Nombre_Estado).at(0)
                            }
                            {pS.ID_Solicitud&&
                                <h3>{categoria.filter(p=>p.ID_CategoriaS===(pregSol.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.Categoria).at(0))).map(p=>p.Nombre_Categoria).at(0)}</h3>
                            }
                        </Encabezado>

                        <Contenido>
                        {pS.ID_Pregunta&&
                                <div>
                                    <div>ID: P-{pregSol.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.ID_Pregunta).at(0)} Fecha: {Moment(pregSolR.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.createdAt).at(0)).format("DD/MMM/YYYY")}</div>
                                    <br/>
                                    <div>Contenido:</div>
                                    <PS>{pregSol.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.Contenido).at(0)}</PS>
                                    <br/>
                                    <div>Respuesta: {pregSol.filter(p=>p.ID_Pregunta===pS.ID_Pregunta).map(p=>p.Respuesta).at(0)}</div>
                                </div>
                        }
                        {pS.ID_Solicitud&&
                                <div>
                                    <div>ID: P-{pregSol.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.ID_Solicitud).at(0)} Fecha: {Moment(pregSolR.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.createdAt).at(0)).format("DD/MMM/YYYY")}</div>
                                    <br/>
                                    <div>Contenido:</div>
                                    <PS>{pregSol.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.Contenido).at(0)}</PS>
                                    <br/>
                                    <div>Estado: {estado.filter(e=>e.ID_Estado===(pregSolR.filter(p=>p.ID_Solicitud===pS.ID_Solicitud).map(p=>p.ID_Estado).at(0))).map(e=>e.Nombre_Estado).at(0)}</div>
                                </div>
                        }
                        </Contenido>
                    </ItemE>)
            }
        <ValidadorForm correcto={correcto} setCorrecto={setCorrecto} incorrecto={incorrecto} setIncorrecto={setIncorrecto}/>
        </Contariner>
    )
};

export default PregSol;

const Contariner = styled.div`
    display: flex;
    overflow-x: scroll;
    padding: 24px;
    width: 900px;
    scroll-snap-type: x mandatory;
    scroll-padding: 24px;
    border-radius: 8px;
    gap: 12px;
`;

const Item = styled.div`
    flex: 0 0 50%;
    padding: 24px;
    border-radius: 8px;
    scroll-snap-align: start;
    background-color: azure;
    width: 100px;
    min-height: 100px;
`;
const ItemE = styled.div`
    flex: 0 0 50%;
    padding: 24px;
    border-radius: 8px;
    scroll-snap-align: start;
    background-color: azure;
    width: 100px;
    min-height: 220px;
`;

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    
    h3{
        font-weight: 500;
        font-size: 35px;
        color: #1766DC;
    } 
`;

const Contenido = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
`;

const PS = styled.div`
    display: flex;
    box-shadow: 0 0 0 0.1rem;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
`;

const Input= styled.input`
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    width:425px;
`;

const ContButton = styled.div`
    display: flex;
    flex-direction: row;
`;