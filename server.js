/* ---------------------------- MODULOS -----------------------------*/
const express = require('express');
const morgan = require('morgan');

/* ---------------------- INSTANCIA DE SERVER -----------------------*/
const app = express();
const router = require('./src/routes/productos.routes.js');

/* -------------------------- MIDDLEWARES ---------------------------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// const db = [];
// app.use((req, res, next)=>{

//     next();
// });

/* ------------------------------ RUTAS -----------------------------*/
app.use('/api/productos', router)

/* ---------------------------- SERVIDOR ----------------------------*/
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto http://localhost:${PORT}`);
})

server.on('error', err => {
    console.log(`Server error: ${err}`);
})