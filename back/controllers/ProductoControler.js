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
    
}

const listarProducto = async(req, res) => {
    const productoId = req.params.id;
    Producto.findById(productoId).exec((error, nota) =>{
        if(error) return res.status(500).send({
            message: 'Error al listar productos'
        })
        if(Producto){
            return res.status(200).sed({
                Producto
            })
        }else{
            return res.status(404).send({
                message: 'No hay productos'
            })
        }
    })
}

const edtitarProducto = async(req, res) => {
    
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
    edtitarProducto,
    eliminarProducto
}