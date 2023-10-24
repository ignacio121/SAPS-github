import React, { useState, useEffect } from "react";
// hook useState  (guardar estado de componentes), useEffect (desencadena acciones dependiendo de cambios de estados)
import { useDispatch, useSelector } from "react-redux";
// useDispatch consume la funcion creada 
// leer estado 
import { useNavigate } from "react-router-dom";
// navegar entre rutas
import { LoginUser, reset } from "../features/authSlice";
// funciones importadas de authSlice
import styled from "styled-components";

import logo from '../images/Logo.png'


const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  
  useEffect(() => {
    if (user && isSuccess && user.role === 5) {
      navigate("/estudiante");
    }
    if (user && isSuccess && user.role === 2) {
      navigate("/director");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    //  preventDefault para que la pagina no recargue cuando envia datos del formulario 
    dispatch(LoginUser({ id, password }));
  };


  return (
    <Contenedor>
      <img src={logo}/>
      {isError && 
        <p>{message}</p>}
      <ContenedorForm>
        <LoginText>Inicio de Sesion</LoginText>
        <Form onSubmit={Auth} >
          <InputContainer>
            <Input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Rut"/>
            <br/>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******"/>
          </InputContainer>
          <br/>
          <br/>
          <br/>
          <br/>
          <ButtonContainer>
            <Button type="submit">
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </ButtonContainer>
        </Form>
      </ContenedorForm>
    </Contenedor>
  );
};

export default Login;


export const Contenedor = styled.div`
  display:flex;
  width: 100vw;
  height: 100vh;
  margin:0;
  padding: 0;
  align-items:center;
  justify-content: center;
  flex-direction:column;
`;

export const ContenedorForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 55vh;
  width: 30vw;
  background: #ffffff;  
  box-shadow: 0 0 0 0.1rem ;
  backdrop-filter: blur(8.5);
  border-radius: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;
const LoginText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: #051E64;
  font-size: 35px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`;

const InputContainer =  styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  height: 20%;
  width: 400px;   
`;

const Input = styled.input`
    background : rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: #03217b;
    font-size: 1.2rem;
    font-weight: bold;
    &:focus{
        display: inline-block;
        box-shadow: 0 0 0 0.1rem #03217b73;
        backdrop-filter: blur(12);
    }
    &::placeholder{
        color: #03217b;
        font-weight: 100;
        font-size: 1.2rem;

    }
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0 ;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);   
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 150px;
    height: 3rem;
    border: none;
    color: white;
    border-radius: rem;
    border-radius: 2rem;
    cursor: pointer;
    %:hover{
      background-color: #fff;   
    }
`;

