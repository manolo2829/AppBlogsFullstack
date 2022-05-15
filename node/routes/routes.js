// importamos express
import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'

// establecemos las rutas

const router = express.Router()

// traer todos los blogs
router.get('/', getAllBlogs)

// mostrar un blog
router.get('/:id', getBlog)

// crear un blog
router.post('/', createBlog)

// actualizar un blog
router.put('/:id', updateBlog)

// eliminar un blog
router.delete('/:id', deleteBlog)

export default router