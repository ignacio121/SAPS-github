import {DataTypes} from "sequelize";
import db from "../database/db.js"


const CategoriaPFModel=db.define('categoriapfs',{
    ID_CategoriaPF: {type:DataTypes.INTEGER, primaryKey:true},
    Nombre_Categoria: {type:DataTypes.STRING}

})

export default CategoriaPFModel