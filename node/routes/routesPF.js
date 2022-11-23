import express from "express";
import { getAllPreguntas_Frecuentes, getPreguntas_Frecuente, createPreguntas_frecuentes, updatePreguntas_frecuentes, deletePreguntas_frecuentes} from "../controllers/PreguntasFrecuentesController.js";


const router = express.Router();

router.get('/', getAllPreguntas_Frecuentes)
router.get('/:id',getPreguntas_Frecuente)
router.post('/', createPreguntas_frecuentes)
router.put(':id',updatePreguntas_frecuentes)
router.delete('/:id',deletePreguntas_frecuentes)

export default router