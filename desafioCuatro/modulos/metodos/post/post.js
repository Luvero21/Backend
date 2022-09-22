const productos= require('../../contenedor');

module.exports=(req,res)=>{
    res.status(201).json(productos.save(req.body))
}
