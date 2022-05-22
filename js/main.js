/* let array1 = ["manzana", "pera", "banana"]
//let array2 = array1.slice(1, 2)
//console.log(array2)
let i = array1.indexOf("manzana")
console.log(array1)
console.log(i)
array1.splice(i, 1)
console.log(array1) */



function removerCards(conEstaCategoria) {
    let comidasBotonQuitar = document.getElementById("quitarComidas");
    let bebidasBotonQuitar = document.getElementById("quitarBebidas");
    let regalosBotonQuitar = document.getElementById("quitarRegalos");
    if(conEstaCategoria == "comidas"){
        comidasBotonQuitar.onclick = () => {
            let empresasMostradasLS = localStorage.getItem(`empresasMostradas`)
            let empresasPorQuitar = JSON.parse(empresasMostradasLS)
            empresasPorQuitar.forEach((empresa) => {
                if(empresa.categoria.find(x => x == conEstaCategoria)){
                    let i = idEmpresasMostradas.indexOf(empresa.numStand);
                    idEmpresasMostradas.splice(i, 1);    
                    console.log(idEmpresasMostradas)
                    let cards = document.getElementsByClassName(conEstaCategoria) ;
                    for (let card of cards) {
                        let clases = card.classList;
                        let item = clases.item(clases.length-1)
                        card.textContent = item;
                        if(item == "comidas"){
                            card.remove()
                        }
                        
                    }
                }
            })
            let botonQuitar = document.getElementById("quitarComidas")
            botonQuitar.remove()
            validarBoton1 = false;
        };
    } else if(conEstaCategoria == "bebidas") {
        bebidasBotonQuitar.onclick = () => {
            let empresasMostradas = localStorage.getItem(`empresasMostradas`)
            let empresasPorQuitar = JSON.parse(empresasMostradas)
            empresasPorQuitar.forEach((empresa) => {
                if(empresa.categoria.find(x => x == conEstaCategoria)){
                    let cards = document.getElementsByClassName(conEstaCategoria) ;
                    for (let card of cards) {
                        let clases = card.classList;
                        let item = clases.item(clases.length-1)
                        card.textContent = item;
                        if(item == "bebidas"){
                            card.remove()
                        }
                        
                    }
                }
            })
            let botonQuitar = document.getElementById("quitarBebidas")
            botonQuitar.remove()
            validarBoton2 = false;
        };
    } else if(conEstaCategoria == "regalos"){
        regalosBotonQuitar.onclick = () => {
            let empresasMostradas = localStorage.getItem(`empresasMostradas`)
            let empresasPorQuitar = JSON.parse(empresasMostradas)
            empresasPorQuitar.forEach((empresa) => {
                if(empresa.categoria.find(x => x == conEstaCategoria)){
                    let cards = document.getElementsByClassName(conEstaCategoria) ;
                    for (let card of cards) {
                        let clases = card.classList;
                        let item = clases.item(clases.length-1)
                        card.textContent = item;
                        if(item == "regalos"){
                            card.remove()
                        }
                        
                    }
                }
            })
            let botonQuitar = document.getElementById("quitarRegalos")
            botonQuitar.remove()
            validarBoton3 = false;
        };
    }
} 


//________________________________

function mostrarEmpresasEncontradas(empresasEncontradas) {   
    empresasEncontradas.forEach((x) => {
        if (idEmpresasMostradas.includes(x.numStand)) {
            return false
        } else {
            let contenedorCards = document.getElementById("contenedorCards");
            empresasEncontradas.forEach((empresa) =>{
                let card = document.createElement("article");
                card.classList.add("col-10", "card", "m-1", `${empresa.categoria}`);
                card.innerHTML= `
                <div class="d-flex align-items-center">
                    <div class="w-25">
                        <img class="w-100" src="../images/logo-ispe.png" alt="logo">
                    </div>
                    <div class="card-body">
                        <h5>${empresa.nombreEmpresa}</h5>
                        <p>Categoría: <b>${empresa.categoria}</b></p>
                        <p>Stand: ${empresa.numStand}</p>
                        <p>Productos: ${empresa.productos}</p>
                    </div>
                </div>
                `;
                contenedorCards.prepend(card);
                idEmpresasMostradas.push(empresa.numStand);
                empresasMostradas.push(empresa)
                let empresasMostradasJSON = JSON.stringify(empresasMostradas)
                localStorage.setItem(`empresasMostradas`, empresasMostradasJSON)
            })
        }
    })
    console.log(idEmpresasMostradas)

}
//________________________________

let validarBoton1 = false;
let validarBoton2 = false;
let validarBoton3 = false;
function agregarBotonQuitar(enLaCategoria) {
    switch (enLaCategoria) {
        case "comidas":
            let boton1 = document.getElementById("boton-1")
            if (validarBoton1) {
            } else {
                validarBoton1 = true;
                let botonQuitar1 = document.createElement("button");
                botonQuitar1.classList.add("quitarComidas")
                botonQuitar1.setAttribute("id", "quitarComidas")
                botonQuitar1.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                `
                boton1.appendChild(botonQuitar1);
                removerCards("comidas")
            }
            break;
        case "bebidas":
            let boton2 = document.getElementById("boton-2")
            if (validarBoton2) {
            } else {
                validarBoton2 = true;
                let botonQuitar2 = document.createElement("button");
                botonQuitar2.classList.add("quitarBebidas")
                botonQuitar2.setAttribute("id", "quitarBebidas")
                botonQuitar2.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                `
                boton2.appendChild(botonQuitar2);
                removerCards("bebidas")
            }
            break;
        case "regalos":
            if (validarBoton3) {
            } else {
                validarBoton3 = true;
                let boton3 = document.getElementById("boton-3")
                let botonQuitar3 = document.createElement("button");
                botonQuitar3.classList.add("quitarRegalos")
                botonQuitar3.setAttribute("id", "quitarRegalos")
                botonQuitar3.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                `
                boton3.appendChild(botonQuitar3);
                removerCards("regalos")
            }
            break;
        default:
            break;
    }
}

function filtrarEmpresasPor(categoria) {
    agregarBotonQuitar(categoria)
    let empresasEncontradas = [];
    empresas.forEach((empresa) => {
        empresa.categoria.forEach((categoriaDeLaEmpresa) => {
            if (categoriaDeLaEmpresa == categoria){
                empresasEncontradas.push(empresa)}
            }) 
    })
    mostrarEmpresasEncontradas(empresasEncontradas);
}



let comidasBoton = document.getElementById("comidas");
comidasBoton.onclick = () => {filtrarEmpresasPor("comidas") };

let bebidasBoton = document.getElementById("bebidas");
bebidasBoton.onclick = () => {filtrarEmpresasPor("bebidas") };

let regalosBoton = document.getElementById("regalos");
regalosBoton.onclick = () => {filtrarEmpresasPor("regalos") };



