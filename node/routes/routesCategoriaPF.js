import express from "express";
import { getAllCategoriaPF ,getCategoriaPF, createCategoriaPF, updateCategoriaPF, deleteCategoriaPF} from "../controllers/CategoriaPFController.js";


const router = express.Router();

router.get('/', getAllCategoriaPF)
router.get('/:id',getCategoriaPF)
router.post('/', createCategoriaPF)
router.put(':id',updateCategoriaPF)
router.delete('/:id',deleteCategoriaPF)

export default router