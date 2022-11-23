import React, {useEffect, useState} from 'react';
import Modal from '../components/Modal.jsx';
import '../App.css';
import axios from 'axios';
import Navbar from '../components/NavBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import styled from 'styled-components';
import ButtonPro from '../components/ButtonPro.jsx';
import Post from '../components/PostPF.jsx';
import Pagination from '../components/pagination.jsx';

const URIPF = 'http://localhost:5000/pregunta_frecuente/'

const Director = () =>{
    const [option,changeOption] = useState(0);

    const [preguntaF, setPreguntaF] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

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
        <div className='complete'>
        {<Navbar></Navbar>}
        <Sidebar changeOption={changeOption}></Sidebar>

        {option === 1 &&(
            <ContenedorOptions> coming soon...</ContenedorOptions>
        )}
        {option === 2 &&(
            <ContenedorOptions>
                <ButtonPro/>
                <Post posts={currentPosts}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={preguntaF.length} paginate={paginate}/>
            </ContenedorOptions>
        )}
        {option === 3 &&(
            <ContenedorOptions>

            </ContenedorOptions>
        )}
        {option === 4 &&(
            <ContenedorOptions> coming soon...</ContenedorOptions>
        )}

        </div>

    );

}

export default Director;

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
    flex-direction:column;
`;
