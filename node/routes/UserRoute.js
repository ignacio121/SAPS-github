import express from "express";
import {
    getUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// get : sacar recursos del back , post : guardar/crear recursos del back , put : modificar todo el recurso
// delete : elimina recrusos del back  , patch : modificar parte del recurso

// agrega restricciones al uso de metodos de peticion , creacion  , actualizacion y eliminacion de usuarios
router.get('/users', verifyUser, getUsers);
router.get('/users/:id',verifyUser, getUserId);
router.post('/users', verifyUser,adminOnly, createUser);
router.patch('/users/:id', verifyUser,adminOnly, updateUser);
router.delete('/users/:id', verifyUser,adminOnly, deleteUser);




export default router;