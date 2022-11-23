
import PFModel from "../models/PFModel.js";

export const getAllPreguntas_Frecuentes = async(req,res)=> {
    try {
        const Preguntas_Frecuentes = await PFModel.findAll()
            res.json(Preguntas_Frecuentes)
    }catch (error){
        res.json({message: error.message})
    }
}

export const getPreguntas_Frecuente= async(req,res)=> {
    try {
        const Preguntas_frecuente = await PFModel.findAll({
            where:{ID_Pregunta:req.params.id}
        })
        res.json(Preguntas_frecuente[0])
    }catch (error){

    }
}

export const createPreguntas_frecuentes = async(req,res)=> {
    try {
        await PFModel.create(req.body)
        res.json({
            "message":"Preguntas frecuentes creada correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}

export const updatePreguntas_frecuentes = async(req,res)=> {
    try {
        await PFModel.update(req.body, {
            where: {ID_Pregunta:req.params.id}
        })
        res.json({
            "message":"Preguntas frecuentes actualizada correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}

export const deletePreguntas_frecuentes = async(req,res)=> {
    try {
        await PFModel.destroy({
            where: {ID_Preguntas_Frecuentes:req.params.id}
        })
        res.json({
            "message":"Preguntas frecuentes eliminado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}