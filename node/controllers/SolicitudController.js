import SolicitudModel from "../models/SolicitudModel.js";

export const getAllSolicitudes = async(req,res)=> {
    try {
        const solicitudes = await SolicitudModel.findAll()
            res.json(solicitudes)
    }catch (error){
        res.json({message: error.message})
    }
}

export const getSolicitud = async(req,res)=> {
    try {
        const Solicitud = await SolicitudModel.findAll({
            where:{ID_Solicitud:req.params.id}
        })
        res.json(Solicitud[0])
    }catch (error){

    }
}

export const createSolicitud = async(req,res)=> {
    try {
        await SolicitudModel.create(req.body)
        res.json({
            "message":"Solicitud creada correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}

export const updateSolicitud = async(req,res)=> {
    try {
        await SolicitudModel.update(req.body, {
            where: {ID_Solicitud:req.params.id}
        })
        res.json({
            "message":"Solicitud actualizada correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}

export const deleteSolicitud = async(req,res)=> {
    try {
        await SolicitudModel.destroy({
            where: {ID_Solicitud:req.params.id}
        })
        res.json({
            "message":"Solicitud eliminada correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}