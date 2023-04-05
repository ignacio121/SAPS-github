import { DataTypes } from "sequelize";
import db from "../database/db.js";

const PreguntaModel=db.define('preguntas', {
    ID_Pregunta: {type:DataTypes.INTEGER, primaryKey:true},
    Prioridad: {type:DataTypes.INTEGER},
    Contenido: {type:DataTypes.STRING},
    Categoria: {type:DataTypes.INTEGER},
    Respuesta: {type:DataTypes.STRING}
})

export default PreguntaModel