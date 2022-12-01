import express  from 'express';
import { crearProducto } from '../controllers/ProductoControler.js';

const productoRouter = express.Router();

productoRouter.post('/', crearProducto)

export {
    productoRouter
}