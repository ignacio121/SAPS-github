import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import { IconContext } from "react-icons";

import { BsGearFill, BsArrowClockwise} from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import Modal from './Modal';
import axios from 'axios';
import { AiTwotoneDelete } from "react-icons/ai";//basurero
import { ButtonSend, LeyendaError } from '../elements/Form';
import ValidadorForm from './validadorForm';


const URIPF = 'http://localhost:5000/preguntas_frecuentes/'
const URICPF = 'http://localhost:5000/categoriaPF'


const ButtonPro = ({edit,changeEdit,trash,changeTrash}) => {
    const [isActive, setIsActive] =useState()
    const [stateModal1,changeModal1] = useState(false);

    const [Titulo1, setTitulo1]= useState('')
    const [CategoriaPF, setCategoriaPF]= useState({id:null,text:null,valido:null})
    const [Contenido1, setContenido1]= useState('')

    const [preguntaF, setPreguntaF] = useState([]);

    const [correcto,setCorrecto] = useState(false);
    const [incorrecto,setIncorrecto] = useState(false);

    useEffect( () => {getAllPreguntas_Frecuentes()}, [])
    const getAllPreguntas_Frecuentes = async ()=> {
      const res = await axios.get(URICPF)
      setPreguntaF(res.data)
    }

    const store = async (e) => {
        e.preventDefault()
        if(CategoriaPF.valido ==='true'){
          setCorrecto(true);
          console.log(Titulo1)
          console.log(CategoriaPF.id)
          console.log(Contenido1)
          await axios.post(URIPF, {Titulo:Titulo1,Categoria:CategoriaPF.id, Contenido:Contenido1})
          changeModal1(false);
          setTitulo1('')
          setCategoriaPF({text:'',valido:null})
          setContenido1('')
        }else{
          setIncorrecto(true);
        }
      }
    const validacionCP = () =>{
      if(preguntaF.map(p=>p.Nombre_Categoria).includes(CategoriaPF.text)){
        console.log(preguntaF.filter(p=>p.Nombre_Categoria===CategoriaPF.text).map(p=>p.ID_CategoriaPF).at(0))
        setCategoriaPF({...CategoriaPF,id:preguntaF.filter(p=>p.Nombre_Categoria===CategoriaPF.text).map(p=>p.ID_CategoriaPF).at(0),valido: 'true'})
      }else{
        setCategoriaPF({...CategoriaPF,valido: 'false'})
      }}
    
  return (
    <Container>
        <div>
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
            <input type="text" id='name' required class='input' list='Categoria' value={CategoriaPF.text} onChange={(e)=>setCategoriaPF({...CategoriaPF,text: e.target.value})} onKeyUp={validacionCP} onBlur={validacionCP}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='Categoria'>
                {preguntaF.map(preg=>(
                  <option key={preg.id} value={preg.id}>{preg.Nombre_Categoria}</option>
                ))}
              </datalist>
            </div>
            <div >
            <input type="textarea" id='name' required class='input' value={Contenido1} onChange={(e)=>setContenido1(e.target.value)}></input>
              <label for='name' class='input-label'>Contenido</label>
            </div>
            <div>
              <ButtonSend type="submit">enviar</ButtonSend>
            </div>
            
          </form>
        </div>
        </Modal>
        </div> 
        <IconContext.Provider value={{style:{fontSize: "2em"}}}>
        <ButtonPrimary onClick={(e) => setIsActive(!isActive)}>
          <BsGearFill/> 
        </ButtonPrimary>
        {isActive &&(
                <ActionContent>
                   <ButtonSecondary onClick={()=>changeModal1(!stateModal1)}>
                      <IconContent>
                        <GrAdd/>
                      </IconContent>
                    </ButtonSecondary>
                    <ButtonSecondary onClick={()=>changeEdit(!edit)} >
                      <IconContent>
                        <BsArrowClockwise/>
                      </IconContent>
                    </ButtonSecondary>
                    <ButtonSecondary onClick={()=>changeTrash(!trash)}>
                      <IconContent>
                        <AiTwotoneDelete/>
                      </IconContent>
                    </ButtonSecondary>
                </ActionContent>
        )}
        </IconContext.Provider>
        <ValidadorForm correcto={correcto} setCorrecto={setCorrecto} incorrecto={incorrecto} setIncorrecto={setIncorrecto}/>
    </Container>
  )
}

export default ButtonPro;

export const Container = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    margin: 35px 50px;
`;

export const ButtonPrimary = styled.div`
    display: flex;
    height: 60px;
    width:60px; 
    background-color: #f2f2f2;
    cursor:pointer;
    border-radius: 50%;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
    justify-content: center;
    align-items: center;
    z-index:2;
    &:hover{
        background-color: rgb(26, 77, 171);
        transition: 0.5s all ease;
        svg{
            fill: #fff;
        }
    }
    svg{
        display: flex;
        fill: rgb(26, 77, 171);
    }

`;
export const IconContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        fill: rgb(26, 77, 171);
        margin-right: 0.1rem
    }
`;
export const ActionContent = styled.div`
    display:flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    height: 50px;
    min-width: 250px;
    background-color: rgb(26, 77, 171);
    border-radius: 30px;
    left: 0;
    background-color: #f2f2f2;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
    transition: 0.5s all ease;
    z-index:1;
`;

export const ButtonSecondary = styled.div`
    display: flex;
    height: 50px;
    width:50px; 
    background-color: #f2f2f2;
    cursor:pointer;
    justify-content: center;
    align-items: center;
    
    &:hover{
        background-color: #d1c5fc;
        transition: 0.5s all ease;
        svg{
            fill: #fff;
        }
    }
    svg{
        display: flex;
        fill: #e07924;
    }

`;
