const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();



//Crear el servidor de express

const app = express();

//BASE DE DATOS

dbConnection();
// cors
app.use(cors())

// Directorio Publico   
app.use(express.static('public'));


// Lectura y parsea del body

app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'))



//TODO: CRUD: eventos



//Escuchar peticiones

app.listen(process.env.PORT,() => {
    console.log(`Servidor Corriendo en el puerto ${process.env.PORT}`);
});