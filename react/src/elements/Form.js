import styled,{css} from "styled-components";


const LeyendaError = styled.form`
    font-size: 12px;
    color:#ff0000;
    position: absolute;
    right: 0;
    margin-right: 170px;
    display: none;
    ${props => props.valido === 'true' && css`
        display: none;
    `}
    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;

const ButtonSend = styled.button`
    background-color: #fff;
    color: #1766DC;
    height: 40px;
    width: 70px;
    border-radius: 10px;
    cursor:pointer;
    bottom: 0;
    margin: 0 auto;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-color: rgb(26, 77, 171);
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    &:hover{
        background-color: rgb(26, 77, 171);
        color: #fff;
    }
`;


export{LeyendaError,ButtonSend}