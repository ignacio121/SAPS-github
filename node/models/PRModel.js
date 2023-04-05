import {DataTypes} from "sequelize";
import db from "../database/db.js"


const PRModel=db.define('preguntas_realizadas',{
    ID_Pregunta: {type:DataTypes.INTEGER, primaryKey:true},
    ID_Emisor:{type:DataTypes.INTEGER, primaryKey:true},
    ID_Estado: {type:DataTypes.INTEGER},
    createdAT: {type:DataTypes.DATE},
    updatedAT: {type:DataTypes.DATE}
})

export default PRModel