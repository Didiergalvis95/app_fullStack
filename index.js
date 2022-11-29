// const express = require('express');
import express from 'express';
const app = express();

app.listen(3200, ()=>{
    console.log('Servidor corriendo en el puerto 3200');
})