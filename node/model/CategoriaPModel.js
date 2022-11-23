import {DataTypes} from "sequelize";
import db from "../database/db.js"


const CategoriaPModel=db.define('categoriap',{
    ID_CategoriaP: {type:DataTypes.INTEGER, primaryKey:true},
    Nombre_Categoria: {type:DataTypes.STRING}

})

export default CategoriaPModel