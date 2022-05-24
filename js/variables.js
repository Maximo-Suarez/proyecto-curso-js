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
["Coca-cola", "Sprite", "Fanta"],
false);
const empresa2 = new Empresas("Pop's",
2,
["bebidas"],
["Coca-cola", "Agua mineral", "Jugo de naraja",],
false);
const empresa3 = new Empresas("Batut's", 
3, 
["comidas"], 
["Batido helado", "Helado"],
false);
const empresa4 = new Empresas("Al horno", 
4, 
["comidas"], 
["Empanadas de pollo", "Empanadas de cebolla y queso", "Empanadas de choclo"],
false);
const empresa5 = new Empresas("Club del mate", 
5, 
["regalos"], 
["termos", "matermos", "mates"],
false);
const empresa6 = new Empresas("Lluvia de sandwiches", 
6, 
["comidas"], 
["tortuguita", "sandwich de miga", "pebetes"],
false);
const empresa7 = new Empresas("Hakuna Matata", 
7, 
["bebidas"], 
["licuados", "ensalada de frutas"],
false);
const empresa8 = new Empresas("Dulce paladar", 
8, 
["comidas"], 
["chocotorta", "tarta cabsha", "tarta de coco"],
false);
const empresa9 = new Empresas("Tu encanto", 
9, 
["regalos"], 
["labial", "rimel", "deliniadores"],
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
["cactus", "pino", "menta"],
false);
const empresa12 = new Empresas("Little tings", 
12, 
["regalos"], 
["atrapasueños", "agendas", "lapiceras"],
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
