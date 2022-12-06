import { Producto } from "../models/ProductoModel.js"

const crearProducto = async(req, res) => {
    try {
        await Producto.create(req.body)
        res.json({
            message: 'Producto creado correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se pudo registrar ${error}`
        })
    }
    /* const producto = await Producto.create(req.body)
    if(producto){
        await Producto.create(req.body)
        res.json({
            message: 'Producto creado correctamente'
    }else{
        res.json({
            message: `No se pudo registrar ${error}`
        })
    } */
}

const listarProductos = async(req, res) => {
    try{
        const productos = await Producto.findAll()
        res.json(productos)
    }catch(error){
        res.json({
            message: "Base de datos vacia"
        })
    }
}

const listarProducto = async(req, res) => {
    try{
        const producto = await Producto.findOne({where: {id: req.params.id}})
        res.json(producto)
    }catch(error){
        res.json({
            message: `No se encontro el producto ${error}`
        })
    }
}

const editarProducto = async(req, res) => {
    try{

    }catch(error){

    }
}

const eliminarProducto = async(req, res) => {
    var productoId = req.params.id;
 
        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
    Producto.findByIdAndRemove(productoId, (error, productoRemoved) => {
        if(error) return res.status(500).send({ 
            message: 'Error al buscar productos' 
        });
         
            if(frutaRemoved){
                return res.status(200).send({
                    Producto: productoRemoved
                });
            }else{
                return res.status(404).send({
                    message: 'No existe el producto'
                });
            }
    });

}

export {
    crearProducto,
    listarProductos,
    listarProducto,
    editarProducto,
    eliminarProducto
}