import express from "express";
import { getAllPreguntas, getPregunta, createPregunta, updatePregunta, deletePregunta } from "../controllers/PreguntaController.js";


const router = express.Router();

router.get('/', getAllPreguntas)
router.get('/:id',getPregunta)
router.post('/',createPregunta)
router.put(':id',updatePregunta)
router.delete('/:id',deletePregunta)

export default router