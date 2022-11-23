import express from "express";
import { getAllPrioridad, getPrioridad, createPrioridad, updatePrioridad, deletePrioridad } from "../controllers/PrioridadController.js";


const router = express.Router();

router.get('/', getAllPrioridad)
router.get('/:id',getPrioridad)
router.post('/',createPrioridad)
router.put(':id',updatePrioridad)
router.delete('/:id',deletePrioridad)

export default router