import {DataTypes} from "sequelize";
import db from "../database/db.js"


const SRModel=db.define('solicitudes_realizadas',{
    ID_Solicitud: {type:DataTypes.INTEGER},
    ID_Emisor:{type:DataTypes.INTEGER, primaryKey:true},
    ID_Receptor:{type:DataTypes.INTEGER, primaryKey:true},
    ID_Estado : {type:DataTypes.INTEGER},
    createdAT: {type:DataTypes.DATE},
    updatedAT: {type:DataTypes.DATE}

})

export default SRModel