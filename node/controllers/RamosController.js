import CategoriaSModel from "../models/RamosModel.js";


export const getAllRamos= async(req,res)=>{
    try {
        const Ramos = await RamosModel.findAll()
        res.json(Ramos)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getRamos = async(req, res)=>{
    try {
        const Ramos = await RolModel.findAll({
            where: {ID_Ramo:req.params.id}
        })
        res.json(Ramos[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createRamos = async(req,res)=>{
    try {
        await RolModel.create(req.body)
        res.json({"message":"Ramo creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateRamos = async(req,res)=>{
    try {
        await RamosModel.update(req.body,{
            where: {ID_Ramo:req.params.id}
        })
        res.json({"message":"Ramo editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteRamos = async(req,res)=>{
    try {
        await RamosModel.destroy({
            where: {ID_Ramo:req.params.id}
        })
        res.json({"message":"Ramo eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}