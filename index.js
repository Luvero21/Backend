const express = require('express');
const app = express();

const PORT = 8080;
const productos = require('./Contenedor.js');

const server = app.listen(PORT, () =>{
    console.log(`ESCUCHANDO EN EL PUERTO ${server.address().port}`);
});
server.on("error",error =>console.log(`Error en el servidor ${error}`));

app.get('/', async(req,res) =>{
    res.send('En el 8080')
});

app.get('/productos',async (req,res) =>{
    try{
        const mostrarTodosProductos = await productos.getAll();
        res.send(mostrarTodosProductos);
    }catch(err){
        console.log(err);
    }
     
});

app.get('/productoRandom',async (req,res) =>{
        try{
            const p = await productos.getAll();
            const numeroRandom = Math.floor(Math.random()* p.length)
            res.send(p[numeroRandom])
            }catch(err){
            console.log(err);
        }
    });
    



