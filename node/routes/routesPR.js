import express from "express";
import { getAllPR, getPR, createPR, updatePR, deletePR} from "../controllers/PRController.js";


const router = express.Router();

router.get('/', getAllPR)
router.get('/:id',getPR)
router.post('/', createPR)
router.put(':id',updatePR)
router.delete('/:id',deletePR)

export default router