import {DataTypes} from "sequelize";
import db from "../database/db.js";

const SolicitudModel = db.define('solicitudes',{
    ID_Solicitud: {type:DataTypes.INTEGER , primaryKey:true},
    Prioridad: {type:DataTypes.INTEGER},
    Contenido: {type:DataTypes.STRING},
    Categoria: {type:DataTypes.INTEGER}
})

export default SolicitudModel;