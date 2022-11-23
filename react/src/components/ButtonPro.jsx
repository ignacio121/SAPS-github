import React,{useState} from 'react'
import styled from "styled-components";
import { IconContext } from "react-icons";

import { BsGearFill,BsFillGearFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import Modal from './Modal';
import axios from 'axios';



const URIPF = 'http://localhost:5000/pregunta_frecuente/'


const ButtonPro = () => {
    const [isActive, setIsActive] =useState()
    const [stateModal1,changeModal1] = useState(false);

    const [Titulo1, setTitulo1]= useState('')
    const [Categoria1, setCategoria1]= useState('')
    const [Contenido1, setContenido1]= useState('')



    const store = async (e) => {
        e.preventDefault()
        await axios.post(URIPF, {Titulo:Titulo1,Categoria:Categoria1, Contenido:Contenido1})
        
      }

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
            <input type="text" id='name' required class='input' list='Categoria' value={Categoria1} onChange={(e)=>setCategoria1(e.target.value)}></input>
              <label for='name' class='input-label'>Categoria</label>
              <datalist id='Categoria'>
                <option value= 'Secretaria'/>
                <option value= 'Marco Toranzo'/>
                <option value= 'Sergio Hernadez' />
              </datalist>
            </div>
            <div >
            <input type="textarea" id='name' required class='input' value={Contenido1} onChange={(e)=>setContenido1(e.target.value)}></input>
              <label for='name' class='input-label'>Contenido</label>
            </div>
            <div justify-content='center'>
            <button type="store" className='ButtonSend'>enviar</button>
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
                </ActionContent>
        )}
        </IconContext.Provider>
    
    


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
    min-width: 200px;
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
