import {DataTypes} from "sequelize";
import db from "../database/db.js";

const SolicitudModel = db.define('solicitudes',{
    ID_Solicitud: {type:DataTypes.INTEGER , primaryKey:true},
    ID_Prioridad: {type:DataTypes.INTEGER},
    Contenido: {type:DataTypes.STRING},
    ID_CategoriaS: {type:DataTypes.INTEGER}
})

export default SolicitudModel;