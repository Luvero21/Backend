class Usuario {
    constructor(nombre,apellido,libros,mascotas){
    this.nombre=nombre;
    this.apellido=apellido;
    this.libros=libros || [];
    this.mascotas=mascotas|| [];
    }
    getFullName(){
        return `Usuario ${this.nombre} ${this.apellido}`
    }
    addMascota(newMascota){
        this.mascotas.push(newMascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre,autor){
        this.libros.push({nombre: nombre,autor: autor});

    }
    getBookNames(){
       let nameBook= this.libros.map(libros =>libros.nombre)
       return nameBook
    }
}
const usuario = new Usuario ('Luciana','Reales',[{nombre:'La brujula', autor:'Exupery'},{nombre:'Bible',autor:'66 persons'}],['perros','gatos','pandas','delfin']);

console.log(usuario.getFullName());
console.log(usuario.getBookNames());
console.log(usuario.countMascotas());


