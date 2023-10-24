import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const URIPF = 'http://localhost:5000/categoriaPF'



const DropDown = ({enunciado, categoria, respuesta}) =>{
    const [isActive, setIsActive] =useState()
    const [preguntaF, setPreguntaF] = useState([]);

    useEffect( () => {getAllPreguntas_Frecuentes()}, [])
    const getAllPreguntas_Frecuentes = async ()=> {
      const res = await axios.get(URIPF)
      setPreguntaF(res.data)
    }

    const pregSel = preguntaF.filter(preg=>preg.ID_CategoriaPF===categoria).map(preg=>preg.Nombre_Categoria)

    return(
        
        <Dropdown>
            <DropdownBtn onClick={(e) => setIsActive(!isActive)}><Tittle>{enunciado}</Tittle>
                {pregSel}
            </DropdownBtn>
            {isActive &&(
                <DropdownContent>
                    <DropdownItem>{respuesta}</DropdownItem>
                </DropdownContent>
            )}
        </Dropdown>
       
    )
}

export default DropDown;

const Dropdown = styled.div`
    width: 900px;
    user-select: none;
    margin: 10px auto;
    position: relative;
`;
const DropdownBtn = styled.div`
    padding: 15px 20px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, .06);
    font-weight: bold;
    color: #1766DC;
    display: flex;
    align-content: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 10px;
    z-index: -2;
`;

const Tittle = styled.div`
    display:flex;
    margin-right: 50px;
`;

const DropdownContent = styled.div`
    position: absolute;
    top: 110%;
    left: 0;
    padding: 15px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, .06);
    font-weight: 500;
    color: #1766DC;
    width: 96%;
    border-radius: 10px;
    z-index: 1;
    
`;

const DropdownItem = styled.div`
    padding: 5px;
    min-height: 20px;
  
`;

