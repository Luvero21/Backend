const productos= require('../../contenedor');
module.exports=(req,res)=>{
    const actualizar = productos.actualizarProducto(req.params.id,req.body)
    actualizar ? res.json(actualizar) : res.json({error:'producto no encontrado'})
}