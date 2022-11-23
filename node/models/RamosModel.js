import {DataTypes} from "sequelize";
import db from "../database/db.js"


const RamosModel=db.define('ramos',{
    ID_Ramo: {type:DataTypes.INTEGER, primaryKey:true},
    Nombre_Ramo: {type:DataTypes.STRING}

})

export default RamosModel