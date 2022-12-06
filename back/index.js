import express from 'express';
import { dataBase } from './database/conexionDatabase.js';
import { productoRouter } from './routes/ProductoRout.js';
import cors from 'cors';
import { listarProductos } from './controllers/ProductoControler.js';

// Instancia de express y apertura del puerto
const app = express();
const port = 3200;

app.use(cors())
app.use('/productos', productoRouter)
// app.use('/mostrarProductos', listarProductos)

// Validacion de conexion a la base de datos
try {
    await dataBase.authenticate()
    console.log('conexion exitosa');
} catch (error) {
    console.log(`Conexion no exitosa: ${error}`);
}
// Ejecucion del servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log('http://localhost:3200');
})