import React,{useEffect, useState} from 'react'
import DropDown from "./DropDown";
import { BsArrowClockwise} from "react-icons/bs";
import styled from "styled-components";
import { AiTwotoneDelete } from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from "axios";
import Modal from './Modal';
import { ButtonSend} from '../elements/Form';

const URIPF = 'http://localhost:5000/categoriaPF'

const Post = ({ posts, editar, eliminar, URI}) =>{
    const [stateModal1,changeModal1] = useState(false);

    const [Titulo1, setTitulo1]= useState('')
    const [Categoria1, setCategoria1]= useState('')
    const [Contenido1, setContenido1]= useState('')

    const [preguntaF, setPreguntaF] = useState([]);

    useEffect( () => {getAllPreguntas_Frecuentes()}, [])
    const getAllPreguntas_Frecuentes = async ()=> {
      const res = await axios.get(URIPF)
      setPreguntaF(res.data)
    }

    const deletePF = async(id)=>{
        await axios.delete(URI+id)
        console.log(posts)
    }

    const update = async (id) => {
        await axios.put(URI+id, {Titulo:Titulo1,Categoria:Categoria1, Contenido:Contenido1})
        
      }


    return <div >
        {posts.map( PF=>(
            <Contenedor key={PF.id}>
              <DropDown
                enunciado={PF.Titulo} categoria={PF.Categoria} respuesta={PF.Contenido} />
                <IconContext.Provider value={{style:{fontSize: "2em"}}}>
                {eliminar&&
                    <Button onClick={()=> deletePF(PF.ID_Preguntas_Frecuentes)}>
                        <AiTwotoneDelete/>
                    </Button>
                }
                {editar&&
                    <Button onClick={()=>changeModal1(!stateModal1)}>
                        <BsArrowClockwise/>
                    </Button>
                }
                </IconContext.Provider>
            </Contenedor>
            
            
        ))}
        <Modal
          state= {stateModal1}
          cambiarEstado={changeModal1}
          titulo="Editar pregunta"
        >
        <div>
          <form onSubmit={update}>
            <div>
              <input type="text" id='name' required class='input'  value={Titulo1} onChange={(e)=>setTitulo1(e.target.value)}></input>
              <label for='name' class='input-label'>Titulo</label>
            
            </div>
            <div >
            <input type="text" id='name' required class='input' list='Categoria' value={Categoria1} onChange={(e)=>setCategoria1(e.target.value)}></input>
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
}

export default Post;

export const Contenedor = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;
export const Button = styled.button`
    display:flex;
    position: absolute;
    right: 0;
    margin-right: 140px;
    svg{
        display: flex;
        fill: rgb(26, 77, 171);
    }
`;