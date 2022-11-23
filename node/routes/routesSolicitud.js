import express from "express";
import {getAllSolicitudes, getSolicitud, createSolicitud, updateSolicitud, deleteSolicitud } from "../controllers/SolicitudController.js";

const router = express.Router();

router.get('/',getAllSolicitudes)
router.get('/:id',getSolicitud)
router.post('/',createSolicitud)
router.put('/:id',updateSolicitud)
router.delete('/:id',deleteSolicitud)


export default router