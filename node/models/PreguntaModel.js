import { DataTypes } from "sequelize";
import db from "../database/db.js";

const PreguntaModel=db.define('preguntas', {
    ID_Pregunta: {type:DataTypes.INTEGER, primaryKey:true},
    ID_Prioridad: {type:DataTypes.INTEGER},
    Contenido: {type:DataTypes.STRING},
    ID_CategoriaP: {type:DataTypes.INTEGER},
})

export default PreguntaModel