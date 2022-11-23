import CategoriaSModel from "../models/RolModel.js";


export const getAllRol= async(req,res)=>{
    try {
        const Rol = await RolModel.findAll()
        res.json(Rol)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getRol = async(req, res)=>{
    try {
        const Rol = await RolModel.findAll({
            where: {ID_Rol:req.params.id}
        })
        res.json(Rol[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createRol = async(req,res)=>{
    try {
        await RolModel.create(req.body)
        res.json({"message":"Rol creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateRol = async(req,res)=>{
    try {
        await RolModel.update(req.body,{
            where: {ID_Rol:req.params.id}
        })
        res.json({"message":"Rol editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteRol = async(req,res)=>{
    try {
        await RolModel.destroy({
            where: {ID_Rol:req.params.id}
        })
        res.json({"message":"Rol eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}