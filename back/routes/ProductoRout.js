import express  from 'express';
import { crearProducto, listarProductos, listarProducto, editarProducto, eliminarProducto } from '../controllers/ProductoControler.js';

const productoRouter = express.Router();

productoRouter.post('/', crearProducto)
productoRouter.get('/', listarProductos)
productoRouter.get('/:id', listarProducto)



export {
    productoRouter
}