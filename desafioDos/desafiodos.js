const fs = require ('fs');

class Contenedor{
    constructor(ruta){
        this.ruta=ruta
    }
    async #leerComun(){
        try{
        const objetoRecibido = await fs.promises.readFile(this.ruta,'utf-8')
        const parseado = JSON.parse(objetoRecibido)
        console.log(parseado);
        return parseado;
           } catch(error){ console.log(error);
                        }
                     }
    async save(obj){
    const archivo = await this.#leerComun()
    
        if(archivo.length !== 0) {
            await fs.promises.writeFile(this.ruta,JSON.stringify([...archivo, {...obj, id:archivo[archivo.length-1].id+1}],null,2),'utf-8')
            console.log('Guardado perfectamente');
        } else {
            await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj, id:1}]),'utf-8')
        }
        
    }
    async getById(id){
        const archivo=await this.#leerComun();

        const producto= archivo.filter(item=>item.id === id)
        if(producto.length>0){
            console.log(`producto encontrado`);

        } else{
            console.log('producto no encontrado');
        }
    }
    async getAll(){
        const archivo = await this.#leerComun()
        
    }
    async deleteById(id){
        const archivo = await this.#leerComun()
        const productNotDelete = archivo.filter(item => item.id !== id)
        const productDelete = archivo.filter(item =>item.id === id)
        if (productDelete.length >0){
            await fs.promises.writeFile(this.ruta,JSON.stringify(productNotDelete,null,2)),
            console.log(`producto ${JSON.stringify(productDelete,null,2)}eliminado`);
            
        } else {console.log('producto no existente');
            
        }
    }
     async deleteAll(){
            const archivo = await this.#leerComun()
            if(archivo.length >0){
                await fs.promises.writeFile(this.ruta,JSON.stringify([],null,2),'utf-8')
                console.log('Todos los productos fueron eliminados');
            }else{
                console.log('eliminados');
            }
        }
    
}

const contenedor = new Contenedor('./productos.txt');

console.log(contenedor);

module.exports = Contenedor;

//contenedor.save({titulo:'escuadra',precio:300,imagen:'https://www.freepik.es/vector-gratis/regla-triangulo-medicion-herramientas-geometria_3056601.htm#query=escuadra&position=5&from_view=search'});

//contenedor.deleteAll();
//contenedor.deleteById(2);
//contenedor.getAll();
//contenedor.getById(3);





