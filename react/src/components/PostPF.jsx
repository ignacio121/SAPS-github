import React from "react";
import DropDown from "./DropDown";


const Post = ({ posts}) =>{

    return <div >
        {posts.map( PF=>(
            <tr key={PF.id}>
              <DropDown
                enunciado={PF.Titulo} categoria={PF.Categoria} respuesta={PF.Contenido} />
            </tr>
        ))}
    </div>
}

export default Post;