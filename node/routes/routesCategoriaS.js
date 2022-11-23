import express from "express";
import { getAllCategoriaS ,getCategoriaS, createCategoriaS, updateCategoriaS, deleteCategoriaS} from "../controllers/CategoriaSController.js";


const router = express.Router();

router.get('/', getAllCategoriaS)
router.get('/:id',getCategoriaS)
router.post('/', createCategoriaS)
router.put(':id',updateCategoriaS)
router.delete('/:id',deleteCategoriaS)

export default router