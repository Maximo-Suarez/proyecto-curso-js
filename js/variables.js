class Empresas {
    constructor(nombre, stand, categoria, productos){
        this.nombreEmpresa = nombre;
        this.numStand = stand;
        this.categoria = categoria;
        this.productos = productos;
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
["Coca-cola", "Sprite", "Fanta"]);
const empresa2 = new Empresas("Pop's",
2,
["bebidas"],
["Coca-cola", "Agua mineral", "Jugo de naraja",]);
const empresa3 = new Empresas("Batut's", 
3, 
["bebidas", "comidas"], 
["Batido helado", "Helado"]);
const empresa4 = new Empresas("Al horno", 
4, 
["comidas"], 
["Empanadas de pollo", "Empanadas de cebolla y queso", "Empanadas de choclo"]);
const empresa5 = new Empresas("Club del mate", 
5, 
["regalos"], 
["termos", "matermos", "mates"]);
const empresa6 = new Empresas("Lluvia de sandwiches", 
6, 
["comidas"], 
["tortuguita", "sandwich de miga", "pebetes"]);
const empresa7 = new Empresas("Hakuna Matata", 
7, 
["bebidas", "comidas"], 
["licuados", "ensalada de frutas"]);
const empresa8 = new Empresas("Dulce paladar", 
8, 
["comidas"], 
["chocotorta", "tarta cabsha", "tarta de coco"]);
const empresa9 = new Empresas("Tu encanto", 
9, 
["regalos"], 
["labial", "rimel", "deliniadores"]);
const empresa10 = new Empresas("Tartatuille", 
10, 
["comidas"], 
["tarta de jamon y queso", "tarta de verdura", "tarta de papa"]);
const empresa11 = new Empresas("Planthanos", 
11, 
["regalos"], 
["cactus", "pino", "menta"]);
const empresa12 = new Empresas("Little tings", 
12, 
["regalos"], 
["atrapasueños", "agendas", "lapiceras"]);

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

const carrito = [];
