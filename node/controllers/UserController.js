import UserModel from "../models/UserModel.js"

// Crear un usuario

export const createUser = async(req, res) => {
    try {
        await UserModel.create(req.body)
        res.json({
            'message':'¡Usuario creado correctamente!'
        })
    } catch (error) {
        res.json( {message: error.message} )

    }
}

// obtenemos la informacion de los usuario

export const getAllUsers = async(req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Obtener la informacion de un usuario

export const getUser = async(req, res) => {
    try {
        const user = await UserModel.findAll({
            where:{email:req.params.id}
        })
        res.json(user[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Actualizar la informacion de un usuario

export const updateUser = async(req,res) => {
    try {
        await UserModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            'message':'¡Registro actualizado correctamente!'
        })
    } catch (error) {
        res.json( {message: error.message} )

    }
}

// Eliminar un usuario

export const deleteUser = async (req, res) => {
    try {
        await UserModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            'message':'¡Registro eliminado correctamente!'
        })
    } catch (error) {
        res.json( {message: error.message} )

    }
}