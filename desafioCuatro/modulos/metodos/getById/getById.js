const productos = require('../../contenedor');

module.exports = (req,res)=>{
    const producto = productos.getById(req.params.id)
    console.log(producto);
    producto ? res.json(producto) : res.json({error:'Producto no encontrado'})
};



