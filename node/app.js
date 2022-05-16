
// importamos express
import express from "express";
import cors from "cors";
// importamos la conexion a la base de datos
import db from "./database/db.js";

// importamos nuestro enrutador
import blogRoutes from './routes/routes.js'
import userRoutes from './routes/routesUser.js'

// le asignamos la clase expresss a esta constante para poder utilizar todos los metodos
const app = express()

// configuramos cors para no tener errores
app.use( cors() )
app.use(express.json())
app.use('/blogs', blogRoutes)
app.use('/users', userRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de la conexion es: ${error}`)
}

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// })

app.listen(8000, () => {
    console.log('Server up running in http://localhost:8000/')
}) 