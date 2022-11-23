import SRModel from "../models/SRModel.js";


export const getAllSR = async(req,res)=>{
    try {
        const S_Realizadas = await SRModel.findAll()
        res.json(S_Realizadas)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getSR = async(req, res)=>{
    try {
        const S_Realizada = await SRModel.findAll({
            where: {ID_Solicitud:req.params.id}
        })
        res.json(S_Realizada[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createSR = async(req,res)=>{
    try {
        await SRModel.create(req.body)
        res.json({"message":"SR creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateSR = async(req,res)=>{
    try {
        await SRModel.update(req.body,{
            where: {ID_Solicitud:req.params.id}
        })
        res.json({"message":"SR editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteSR = async(req,res)=>{
    try {
        await SRModel.destroy({
            where: {ID_Solicitud:req.params.id}
        })
        res.json({"message":"SR eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}