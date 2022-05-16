
import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/UserController.js'

// establecemos las rutas

const router = express.Router()

// crear un usuario
router.post('/', createUser)

// obtener todos los usuarios
router.get('/', getAllUsers)

// obtener un usuario
router.get('/:id', getUser)

// actualizar un usuario
router.put('/:id', updateUser)

// eliminar un usuario
router.delete('/:id', deleteUser)


export default router