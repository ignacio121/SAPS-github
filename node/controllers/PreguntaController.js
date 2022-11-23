import PreguntaModel from "../models/PreguntaModel.js";


export const getAllPreguntas = async(req,res)=>{
    try {
        const preguntas = await PreguntaModel.findAll()
        res.json(preguntas)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getPregunta = async(req, res)=>{
    try {
        const pregunta = await PreguntaModel.findAll({
            where: {ID_Pregunta:req.params.id}
        })
        res.json(pregunta[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createPregunta = async(req,res)=>{
    try {
        await PreguntaModel.create(req.body)
        res.json({"message":"pregunta creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updatePregunta = async(req,res)=>{
    try {
        await PreguntaModel.update(req.body,{
            where: {ID_Pregunta:req.params.id}
        })
        res.json({"message":"pregunta editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deletePregunta = async(req,res)=>{
    try {
        await PreguntaModel.destroy({
            where: {ID_Pregunta:req.params.id}
        })
        res.json({"message":"pregunta eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}