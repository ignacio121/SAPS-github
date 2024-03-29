import React ,{useState, useEffect}  from 'react'
import styled from "styled-components";
import { HiMail } from "react-icons/hi";
import { TfiServer} from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../features/authSlice.js";
import {useNavigate} from "react-router-dom";

const Sidebar = ({changeOption}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   // const {user} = useSelector((state)=> state.auth);
    const logout = () =>{
      dispatch(LogOut());
      dispatch(reset());
      navigate("/")
    }
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
                            <div onClick={()=>logout()}>
                                <BiLogOut/>
                                Cerrar sesion 
                            </div>
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
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
    background-color: rgb(19, 57, 128) ;
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
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            display: flex;
            fill: #fff;
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

