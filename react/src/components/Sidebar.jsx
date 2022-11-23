import React ,{useState, useEffect}  from 'react'
import styled from "styled-components";
import axios from 'axios';
import { HiMail } from "react-icons/hi";
import { TfiServer} from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { IconContext } from "react-icons";
import Post from '../components/PostPF.jsx'
import Pagination from '../components/pagination';
import ButtonPro from './ButtonPro.jsx';

const URIPF = 'http://localhost:8000/preguntas_frecuentes/'

const Sidebar = () => {

    const [option,changeOption] = useState(0);
    const [preguntaF, setPreguntaF] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect( () => {getAllPreguntas_Frecuentes()}, [])
  
    const getAllPreguntas_Frecuentes = async ()=> {
        const res = await axios.get(URIPF)
        setPreguntaF(res.data)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = preguntaF.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return(
        <>
        <Container>
            <Wrapper>
                <IconContext.Provider value={{style:{fontSize: "2em"}}}>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                            <div onClick={()=>changeOption(1)}>
                                <HiMail/>
                                Preguntas y solicitudes
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            <div onClick={()=>changeOption(2)}>
                                <TfiServer/>
                                Preguntas frecuentes  
                            </div>
                        </MenuItemLink>
                    </MenuItem> 
                    <MenuItem>
                        <MenuItemLink>
                            <div onClick={()=>changeOption(3)}>
                                <VscGraphLine/>
                                Estadisticas  
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            <div onClick={()=>changeOption(4)}>
                                <BiLogOut/>
                                Cerrar sesion 
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
        {option === 1 &&(
            <ContenedorOptions> wena</ContenedorOptions>
        )}
        {option === 2 &&(
            <ContenedorOptions>
                <ButtonPro/>
                <Post posts={currentPosts}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={preguntaF.length} paginate={paginate}/>
            </ContenedorOptions>
        )}
        {option === 3 &&(
            <ContenedorOptions> holaaa</ContenedorOptions>
        )}
        {option === 4 &&(
            <ContenedorOptions> holaaaaa</ContenedorOptions>
        )}

        </>
    )
}

export default Sidebar;

export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 16vw;
    background-color: rgb(26, 77, 171);
    z-index:0
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1700px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const Menu = styled.ul`
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`;

export const MenuItem = styled.li`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 77%;
  padding: 0.5rem 2.5rem;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  width: 100%;
  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
    div{
        svg{
            fill: rgb(26, 77, 171);
        }
    }
    }
    div{
        width: 100%;
        height: 100%;
        display: flex
        aling-items: center;
        justify-content: center;

        svg{
            display: flex;
            fill: #e07924;
            margin-right: 10px;
        }
    }
`;

export const ContenedorOptions = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    right: 0;
    height: 93vh;
    width:84vw; 
    background-color: #d1c5fc;
    justify-content: center;
    align-items: center;
`;

