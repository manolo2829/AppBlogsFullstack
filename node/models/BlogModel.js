// LOS MODELOS SON LA ESENCIA DE SEQUELIZE
// UN MODLEO ES UNA ABSTRACCION QUE REPRESENTA UNA TABLA EN LA BASE DE DATOS.
// Sequelize ES UNA CLASE QUE EXTIENDE MODEL, EL MODELO LE DICE A Sequelize VARIAS COSAS SOBRE LA ENTIDAD QUE REPRESENTA, COMO EL NOMBRE DE LA TABLA, LAS COLUMNAS QUE TIENE, EL TIPO DE DATOS.
// NO ES NECESARIO QUE TENGA EL MISMO NOMBRE QUE LA TABLA

// importamos la conexion a la base de datos
import db from "../database/db.js";
// importamos Sequelize
import { DataTypes } from "sequelize";
// definimos nuestra conexion
const BlogModel = db.define('blogs', {
    // ponemos los campos que vamos a utilizar, el nombre del campo y dentro definimos el tipo de campo
    title: { type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default BlogModel;