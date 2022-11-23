import {DataTypes} from "sequelize";
import db from "../database/db.js"


const PFModel=db.define('preguntas_frecuentes',{
    ID_Preguntas_Frecuentes: {type:DataTypes.INTEGER, primaryKey:true},
    Titulo: {type:DataTypes.STRING},
    Categoria: {type:DataTypes.INTEGER}, 
    Contenido:{type:DataTypes.STRING}
})

export default PFModel