import { Producto } from "../models/ProductoModel.js"

const crearProducto = async(req, res) => {
    try {
        Producto.create(req.body)
        res.json({
            message: 'Usuario creado correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo registrar ${error}`
        })
    }
}

const listarProductos = () => {
    
}

const listarProducto = () => {
    
}

const edtitarProducto = () => {
    
}

const eliminarProducto = () => {
    
}

export {
    crearProducto,
    listarProductos,
    listarProducto,
    edtitarProducto,
    eliminarProducto
}