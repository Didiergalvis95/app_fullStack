import { dataBase } from "../database/conexionDatabase.js";
import { DataTypes } from "sequelize";

const Producto = dataBase.define('producto', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
});

export{
    Producto
}