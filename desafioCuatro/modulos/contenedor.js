class Contenedor{
    constructor(route){
        this.route;
        this.productos=[];
    }
    getAll(){
        return this.productos;
    }
    save(obj){
        obj.id = !this.productos.length ? 1:parseInt(this.productos[this.productos.length-1].id)+1;
        this.productos.push(obj);
        return obj
    }
    getById(id){
        return this.productos.find((producto)=>producto.id ==id);
    }
    actualizarProducto(id,obj){
        const productoIndex= this.productos.findIndex(producto =>producto.id == id);
        if(productoIndex != -1){
            this.productos[productoIndex].titulo = obj.titulo || this.productos[productoIndex].titulo;
            this.productos[productoIndex].precio = obj.precio || this.productos[productoIndex].precio;
            this.productos[productoIndex].imagen = obj.imagen || this.productos[productoIndex].imagen;
            return this.productos[productoIndex];
        }
        return false;
    }
    deleteById(id){
        const index = this.productos.findIndex(prod =>prod.id == id)
        if(index != -1){
            this.productos = this.productos.filter((producto)=>(producto.id !=id));
            return true
        }
        return false
    }
}
const productos = new Contenedor('./modulos/metodos/productos.txt');

productos.save( {titulo: "escuadra",precio: 300,imagen: "https://www.freepik.es/vector-gratis/regla-triangulo-medicion-herramientas-geometria_3056601.htm#query=escuadra&position=5&from_view=search"})
productos.save( {titulo: "regla",precio: 300,imagen: "https://www.freepik.es/vector-gratis/regla-triangulo-medicion-herramientas-geometria_3056601.htm#query=escuadra&position=5&from_view=search"})
productos.save( {titulo: "transportador",precio: 300,imagen: "https://www.freepik.es/vector-gratis/regla-triangulo-medicion-herramientas-geometria_3056601.htm#query=escuadra&position=5&from_view=search"}) 


module.exports = productos;
 
