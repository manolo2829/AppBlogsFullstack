// importamos el modelo
import BlogModel from "../models/BlogModel.js";

//** METODOS PARA EL CRUD */

// Mostrar todos los registros

// al trabajar con node usamos los parametros request y response
export const getAllBlogs = async(req, res) => {
    // estructura de los procedimientos
    try {
        // Usamos el metodo findAll para traer todos los blogs
        // usamos async await que espere la respuesta de la base de datos antes de seguir
        const blogs = await BlogModel.findAll()
        // luego mostramos la respuesta de los blogs en formato .json
        res.json(blogs)
    } catch (error) {
        // finalmente en aso de error mostramos el error en un json
        res.json( {message: error.message} )
    }
}

// Mostar un registro

export const getBlog = async(req, res) => {
    try {
        // utilizamos el mismo metodo, pero le pasamos la clausura where y en formato de objeto le pasamos el id ( lo capturamos desde los parametros que estamos tipeando )
        const blog = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Crear un registro

export const createBlog = async(req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            'message':'¡Registro creado correctamente!'
        })
    } catch (error) {
        res.json( {message: error.message} )

    }
}

// Actualizar un registro

export const updateBlog = async(req,res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            'message':'¡Registro actualizado correctamente!'
        })
    } catch (error) {
        res.json( {message: error.message} )

    }
}

// Eliminar un registrore

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message':'¡Registro eliminado correctamente!'
        })
    } catch (error) {
        res.json( {message: error.message} )

    }
}