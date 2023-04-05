import React from "react";
import styled from "styled-components";



const Pagination = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts /postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
            <ContenedorPagination>
                {pageNumbers.map(number => (
                    <ContenedorNumbers key={number} onClick={() => paginate(number)}>
                            {number}
                    </ContenedorNumbers>
                ))}
            </ContenedorPagination>
    )
}
export default Pagination;


const ContenedorPagination = styled.div`
    display: flex;
    justify-content: space-arround;
    align-items: center;
    flex-direction:row;
`;

const ContenedorNumbers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    background-color: rgb(26, 77, 171);
    color: #fff;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    margin: 15px 3px;
`;
