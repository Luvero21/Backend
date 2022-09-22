const productos = require('../../contenedor');

module.exports = (req,res)=>{
    if(productos.deleteById(req.params.id)){
        res.status(200).json({Bien:'Producto eliminado'})
    }else{
        res.status(404).json({error:'Producto no encontrado'})
    }
}
