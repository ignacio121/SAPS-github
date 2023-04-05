import React from "react";
import styled from "styled-components";
import { FaCross } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { IconContext } from "react-icons";
import {useDispatch, useSelector } from "react-redux";
import { getMe, LogOut, reset } from "../features/authSlice.js";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () =>{
    dispatch(LogOut());
    dispatch(reset());
    navigate("/")
  }

  const {user} = useSelector((state)=> state.auth);
  useEffect(()=>{
    dispatch(getMe());
  },[dispatch]);
  
  return(
      <Container>
            <Wrapper>
                <IconContext.Provider value={{style:{fontSize: "2em"}}}>
                  
                <LogoContainer>
                    <FaCross/>
                    <p>Universidad Catolica del Maule - </p>
                    <p> SAPS</p>

                </LogoContainer>
                {user&&user.role ===5&&
                <Menu>

                    <MenuItem>
                        <MenuItemLink onClick={logout}>
                          CERRAR SESION  
                        </MenuItemLink>
                    </MenuItem>
                    
                  </Menu>
                }
                  
                  
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar;

export const Container = styled.div`
  width: 100%;
  height: 7vh;
  background-color: rgb(26, 77, 171);
  position: absolute;
  z-index:1
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

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p{
    &:nth-child(2){
        color: #fff;
    }
    &:nth-child(3){
        font-size: 1.5rem;
        font-weight: 500;
        color: #e07942;
    }
  }
  svg {
    fill: #e07924;
    margin-right: 0.5rem
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
}`;