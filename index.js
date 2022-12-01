// const express = require('express');
import { dataBase } from './database/conexionDatabase.js';
import express from 'express';

const app = express();

app.listen(3200, ()=>{
    console.log('Servidor corriendo en el puerto 3200');
})