import {DataTypes} from "sequelize";
import db from "../database/db.js"


const PrioridadModel=db.define('prioridad',{
    ID_Prioridad: {type:DataTypes.INTEGER, primaryKey:true},
    Nombre_prioridad: {type:DataTypes.STRING}

})

export default PrioridadModel