// IMPORTAMOS Sequelize
import {Sequelize} from 'sequelize'

// CREAMOS UNA INSTANCIA DE Sequelize
// HACEMOS LA CONEXION CON LOS PARAMETROS, EL NOMBRE DE LA BASE DE DATOS, EL NOMBRE DEL USUARIO Y LA CONTRASEÑA DEL USUARIO
const db = new Sequelize('database_app', 'root', '',{
    // PONEMOS EL SERVIDOR
    host:'localhost',
    // PONEMOS NUESTRA BASE DE DATOS
    dialect:'mysql'
})

export default db