import CategoriaPFModel from "../models/CategoriaPFModel.js";


export const getAllCategoriaPF = async(req,res)=>{
    try {
        const CategoriaPF = await CategoriaPFModel.findAll()
        res.json(CategoriaPF)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getCategoriaPF = async(req, res)=>{
    try {
        const CategoriaPF= await CategoriaPFModel.findAll({
            where: {ID_CategoriaPF:req.params.id}
        })
        res.json(CategoriaPF[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createCategoriaPF = async(req,res)=>{
    try {
        await CategoriaPFModel.create(req.body)
        res.json({"message":"Categoria creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateCategoriaPF = async(req,res)=>{
    try {
        await CategoriaPFModel.update(req.body,{
            where: {ID_CategoriaPF:req.params.id}
        })
        res.json({"message":"Categoria editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteCategoriaPF = async(req,res)=>{
    try {
        await CategoriaPFModel.destroy({
            where: {ID_CategoriaPF:req.params.id}
        })
        res.json({"message":"Categoria eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}