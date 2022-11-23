import express from "express";
import { getAllCategoriaP ,getCategoriaP, createCategoriaP, updateCategoriaP, deleteCategoriaP} from "../controllers/CategoriaPController.js";


const router = express.Router();

router.get('/', getAllCategoriaP)
router.get('/:id',getCategoriaP)
router.post('/', createCategoriaP)
router.put(':id',updateCategoriaP)
router.delete('/:id',deleteCategoriaP)

export default router