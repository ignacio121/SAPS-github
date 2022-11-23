import EstadoModel from "../models/EstadoModel.js";


export const getAllEstado = async(req,res)=>{
    try {
        const Estados = await EstadoModel.findAll()
        res.json(Estados)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getEstado = async(req, res)=>{
    try {
        const Estado = await EstadoModel.findAll({
            where: {ID_Estado:req.params.id}
        })
        res.json(Estado[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createEstado = async(req,res)=>{
    try {
        await EstadoModel.create(req.body)
        res.json({"message":"Estado creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateEstado = async(req,res)=>{
    try {
        await EstadoModel.update(req.body,{
            where: {ID_Estado:req.params.id}
        })
        res.json({"message":"Estado editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteEstado = async(req,res)=>{
    try {
        await EstadoModel.destroy({
            where: {ID_Estado:req.params.id}
        })
        res.json({"message":"Estado eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}