import {DataTypes} from "sequelize";
import db from "../database/db.js"


const RolModel=db.define('roles',{
    ID_Rol: {type:DataTypes.INTEGER, primaryKey:true},
    Nombre_Rol: {type:DataTypes.STRING}

})

export default RolModel