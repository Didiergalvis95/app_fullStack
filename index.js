// const express = require('express');
import express from 'express';
import { dataBase } from './database/conexionDatabase.js';
import { productoRouter } from './routes/ProductoRout.js';


const app = express();

app.use('/producto', productoRouter)

try {
    await dataBase.authenticate()
    console.log('conexion exitosa');
} catch (error) {
    console.log(error);
}


app.listen(3200, ()=>{
    console.log('Servidor corriendo en el puerto 3200');
    console.log('http://localhost:3200');
})