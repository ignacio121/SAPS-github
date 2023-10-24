import express from "express";
import { getAllSR, getSR, createSR, updateSR, deleteSR} from "../controllers/SRController.js";


const router = express.Router();

router.get('/', getAllSR)
router.get('/:id',getSR)
router.post('/', createSR)
router.put('/:id',updateSR)
router.delete('/:id',deleteSR)

export default router