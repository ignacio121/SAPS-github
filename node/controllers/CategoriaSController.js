import CategoriaSModel from "../models/CategoriaSModel.js";


export const getAllCategoriaS = async(req,res)=>{
    try {
        const CategoriaS = await CategoriaSModel.findAll()
        res.json(CategoriaS)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getCategoriaS = async(req, res)=>{
    try {
        const CategoriaS = await CategoriaSModel.findAll({
            where: {ID_CategoriaS:req.params.id}
        })
        res.json(CategoriaS[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createCategoriaS = async(req,res)=>{
    try {
        await CategoriaSModel.create(req.body)
        res.json({"message":"Categoria creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateCategoriaS = async(req,res)=>{
    try {
        await CategoriaSModel.update(req.body,{
            where: {ID_CategoriaS:req.params.id}
        })
        res.json({"message":"Categoria editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteCategoriaS = async(req,res)=>{
    try {
        await CategoriaSModel.destroy({
            where: {ID_CategoriaS:req.params.id}
        })
        res.json({"message":"Categoria eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}