import PrioridadModel from "../models/PrioridadModel.js";


export const getAllPrioridad = async(req,res)=>{
    try {
        const Prioridad = await PrioridadModel.findAll()
        res.json(Prioridad)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getPrioridad= async(req, res)=>{
    try {
        const Prioridad= await PrioridadModel.findAll({
            where: {ID_Prioridad:req.params.id}
        })
        res.json(Prioridad[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createPrioridad = async(req,res)=>{
    try {
        await PrioridadPModel.create(req.body)
        res.json({"message":"Prioridad creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updatePrioridad = async(req,res)=>{
    try {
        await PrioridadModel.update(req.body,{
            where: {ID_Prioridad:req.params.id}
        })
        res.json({"message":"Prioridad editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deletePrioridad = async(req,res)=>{
    try {
        await PrioridadModel.destroy({
            where: {ID_Prioridad:req.params.id}
        })
        res.json({"message":"Prioridad eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}