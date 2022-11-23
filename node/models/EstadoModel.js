import {DataTypes} from "sequelize";
import db from "../database/db.js"


const EstadoModel=db.define('estado',{
    ID_Estado: {type:DataTypes.INTEGER, primaryKey:true},
    Nombre_Estado: {type:DataTypes.STRING}

})

export default EstadoModel