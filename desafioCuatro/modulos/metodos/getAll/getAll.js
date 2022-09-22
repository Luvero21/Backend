const productos = require('../../contenedor');
module.exports=(req,res)=>{
    res.json(productos.getAll())
};
