import PRModel from "../models/PRModel.js";


export const getAllPR = async(req,res)=>{
    try {
        const P_Realizadas = await PRModel.findAll()
        res.json(P_Realizadas)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getPR = async(req, res)=>{
    try {
        const P_Realizada = await PRModel.findAll({
            where: {ID_Pregunta:req.params.id}
        })
        res.json(P_Realizada[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createPR = async(req,res)=>{
    try {
        await PRModel.create(req.body)
        res.json({"message":"PR creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updatePR = async(req,res)=>{
    try {
        await PRModel.update(req.body,{
            where: {ID_Pregunta:req.params.id}
        })
        res.json({"message":"PR editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deletePR = async(req,res)=>{
    try {
        await PRModel.destroy({
            where: {ID_Pregunta:req.params.id}
        })
        res.json({"message":"PR eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}