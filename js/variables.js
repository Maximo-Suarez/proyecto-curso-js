class Empresas {
    constructor(nombre, stand, categoria, productos, boton){
        this.nombreEmpresa = nombre;
        this.numStand = stand;
        this.categoria = categoria;
        this.productos = productos;
        this.boton = boton;
    }
    mostrarNombre(){
        console.log(this.nombreEmpresa);
    }
    mostrarProductos(){
    }

}

 // Instancio empresas apartir del constructor de la clase Empresas
const empresa1 = new Empresas("Freshbar",
1, 
["bebidas"], 
//["Coca-cola", "Sprite", "Fanta"],
[{p:"Coca-cola", precio:"$100"}, {p:"Sprite", precio:"$120"}, {p:"Fanta", precio:"$300"}],
false);
const empresa2 = new Empresas("Pop's",
2,
["bebidas"],
//["Coca-cola", "Agua mineral", "Jugo de naraja",],
[{p:"Coca-cola", precio:"$100"}, {p:"Agua mineral", precio:"$120"}, {p:"Jugo de naranja", precio:"$300"}],
false);
const empresa3 = new Empresas("Batut's", 
3, 
["comidas"], 
//["Batido helado", "Helado"],
[{p:"Batido helado", precio:"$200"}, {p:"Helado", precio:"$820"}],
false);
const empresa4 = new Empresas("Al horno", 
4, 
["comidas"], 
//["Empanadas de pollo", "Empanadas de cebolla y queso", "Empanadas de choclo"],
[{p:"Empanadas de pollo", precio:"$100"}, {p:"Empanadas de cebolla y queso", precio:"$120"}, {p:"Empanadas de choclo", precio:"$300"}],
false);
const empresa5 = new Empresas("Club del mate", 
5, 
["regalos"], 
//["termos", "matermos", "mates"],
[{p:"Termos", precio:"$100"}, {p:"Matermos", precio:"$120"}, {p:"Mates", precio:"$300"}],
false);
const empresa6 = new Empresas("Lluvia de sandwiches", 
6, 
["comidas"], 
//["tortuguita", "sandwich de miga", "pebetes"],
[{p:"Tortuguita", precio:"$100"}, {p:"Sandwich de miga", precio:"$120"}, {p:"Pebetes", precio:"$300"}],
false);
const empresa7 = new Empresas("Hakuna Matata", 
7, 
["bebidas"], 
//["licuados", "ensalada de frutas"],
[{p:"Licuados", precio:"$100"}, {p:"Ensalada de frutas", precio:"$120"}],
false);
const empresa8 = new Empresas("Dulce paladar", 
8, 
["comidas"], 
//["chocotorta", "tarta cabsha", "tarta de coco"],
[{p:"chocotorta", precio:"$100"}, {p:"tarta cabsha", precio:"$120"}, {p:"tarta de coco", precio:"$300"}],
false);
const empresa9 = new Empresas("Tu encanto", 
9, 
["regalos"], 
//["labial", "rimel", "deliniadores"],
[{p:"Labial", precio:"$100"}, {p:"rimel", precio:"$120"}, {p:"deliniadores", precio:"$300"}],
false);
const empresa10 = new Empresas("Tartatuille", 
10, 
["comidas"], 
//["tarta de jamon y queso", "tarta de verdura", "tarta de papa"],
[{p:"tarta de jamon y queso", precio:"$100"}, {p:"tarta de verdura", precio:"$120"}, {p:"tarta de papa", precio:"$300"}],
false);
const empresa11 = new Empresas("Planthanos", 
11, 
["regalos"], 
//["cactus", "pino", "menta"],
[{p:"cactus", precio:"$100"}, {p:"pino", precio:"$120"}, {p:"menta", precio:"$300"}],
false);
const empresa12 = new Empresas("Little tings", 
12, 
["regalos"], 
//["atrapasueños", "agendas", "lapiceras"],
[{p:"atrapasueños", precio:"$100"}, {p:"agendas", precio:"$120"}, {p:"lapiceras", precio:"$300"}],
false);

//Array de objetos
let empresas = [
    empresa1,
    empresa2,
    empresa3,
    empresa4,
    empresa5,
    empresa6,
    empresa7,
    empresa8,
    empresa9,
    empresa10,
    empresa11,
    empresa12,
]
let idEmpresasMostradas = [];
let empresasMostradas = [];

const carrito = [];
