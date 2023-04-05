import React from 'react';
import styled from 'styled-components';

const Modal = ({children,state,cambiarEstado,titulo}) => {

        return (
            <>
            {state &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>{titulo}</h3>
                        </EncabezadoModal>
                            <BotonCerrar onClick={()=>cambiarEstado(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </BotonCerrar>
                        <ContenidoModal>{children}</ContenidoModal>
                        
                     
                    </ContenedorModal>
                    
                </Overlay>
                
            }
        </>
        )
    
}
export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:3;
`;

const ContenedorModal = styled.div`
    width: 1200px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    z-index:4;
`;

const EncabezadoModal = styled.div`
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
const BotonCerrar = styled.div`
    position: absolute;
    top: 15px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
        background: #f2f2f2
    }
    svg{
        width: 100%;
        height: 100%;
    }
`;

const ContenidoModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;


