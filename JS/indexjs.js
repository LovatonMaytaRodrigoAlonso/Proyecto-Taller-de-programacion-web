//Generar platos y bebidas

class Comida{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

	get getNombre(){
		return this.nombre;
	}

	set setNombre(newNombre){
		this.nombre = newNombre;
	}

	get getPrecio(){
		return this.precio;
	}

	set setPrecio(newPrecio){
		this.precio = newPrecio;
	}

	get getImagen(){
		return this.imagen;
	}

	set setImagen(newImagen){
		this.imagen = newImagen;
	}
}

const plato1 = new Comida('Aji de gallina', 's/. '+'10.00', '/Imagenes/Platos y Bebidas/Aji-de-gallina.jpg');
const plato2 = new Comida('Lomo saltado', 's/. '+'15.00', '/Imagenes/Platos y Bebidas/lomo-saltado.jpg');
const plato3 = new Comida('Arroz con pollo', 's/. '+'12.00', '/Imagenes/Platos y Bebidas/Arroz-con-pollo.jpg');
const plato4 = new Comida('Seco de carne', 's/. '+'15.00', '/Imagenes/Platos y Bebidas/seco-de-carne.jpg');
const plato5 = new Comida('Tallarines verdes', 's/. '+'12.00', '/Imagenes/Platos y Bebidas/tallarines-verdes.jpg');
const plato6 = new Comida('Chanfainita', 's/. '+'10.00', '/Imagenes/Platos y Bebidas/Chanfainita.jpg');
const plato7 = new Comida('Tallarin saltado', 's/. '+'13.00', '/Imagenes/Platos y Bebidas/Tallarin-saltado-criollo.jpg');
const plato8 = new Comida('Cau cau de pollo', 's/. '+'10.00', '/Imagenes/Platos y Bebidas/cau-cau.jpg');
const plato9 = new Comida('Picante de carne', 's/. '+'10.00', '/Imagenes/Platos y Bebidas/Picante-de-carne.jpg');

const bebida1 = new Comida('Inca kola', 's/. '+'7.50', '/Imagenes/Platos y Bebidas/inca-kola.jpg');
const bebida2 = new Comida('Jarra de chica morada', 's/. '+'6.00', '/Imagenes/Platos y Bebidas/jarra-de-chicha.jpg');
const bebida3 = new Comida('Jarra de maracuya', 's/. '+'5.00', '/Imagenes/Platos y Bebidas/jarra-de-maracuya.jpg');

let comidas = [];
let bebidas = [];

comidas.push(plato1,plato2,plato3,plato4,plato5,plato6,plato7,plato8,plato9);
bebidas.push(bebida1,bebida2,bebida3);


