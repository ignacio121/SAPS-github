import {DataTypes} from "sequelize";
import db from "../database/db.js"


const CategoriaSModel=db.define('categorias',{
    ID_CategoriaS: {type:DataTypes.INTEGER, primaryKey:true},
    Nombre_Categoria: {type:DataTypes.STRING}

})

export default CategoriaSModel