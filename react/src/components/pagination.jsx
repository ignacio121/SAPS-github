import React from "react";
import styled from "styled-components";



const Pagination = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts /postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
            <div>
                {pageNumbers.map(number => (
                    <div key={number} >
                        <a onClick={() => paginate(number)} href >
                            {number}
                        </a>
                    </div>
                ))}
            </div>
    )
}
export default Pagination;


const ContenidoModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;