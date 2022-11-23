import CategoriaPModel from "../models/CategoriaPModel.js";


export const getAllCategoriaP = async(req,res)=>{
    try {
        const CategoriaP = await CategoriaPModel.findAll()
        res.json(CategoriaP)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getCategoriaP = async(req, res)=>{
    try {
        const CategoriaP= await CategoriaPModel.findAll({
            where: {ID_CategoriaP:req.params.id}
        })
        res.json(CategoriaP[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createCategoriaP = async(req,res)=>{
    try {
        await CategoriaPModel.create(req.body)
        res.json({"message":"Categoria creada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateCategoriaP = async(req,res)=>{
    try {
        await CategoriaPModel.update(req.body,{
            where: {ID_CategoriaP:req.params.id}
        })
        res.json({"message":"Categoria editada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteCategoriaP = async(req,res)=>{
    try {
        await CategoriaPModel.destroy({
            where: {ID_CategoriaP:req.params.id}
        })
        res.json({"message":"Categoria eliminada correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}