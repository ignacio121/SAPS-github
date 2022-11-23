import express from "express";
import { getAllRamos ,getRamos, createRamos, updateRamos ,deleteRamos} from "../controllers/RamosController.js";


const router = express.Router();

router.get('/', getAllRamos)
router.get('/:id',getRamos)
router.post('/', createRamos)
router.put(':id',updateRamos)
router.delete('/:id',deleteRamos)

export default router