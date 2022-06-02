
const pedirData = async () => {
    const respuesta = await
    fetch(`../data.json`)
    empresas = await respuesta.json()
    console.log(empresas)
} 
pedirData() 



function guardarProductEnCartYLS(producto){
    carrito.push(producto)
    let carritoJSON = JSON.stringify(carrito)
    localStorage.setItem(`productosSeleccionados`, carritoJSON)
    Toastify({
        text: `"${producto[0]}" agregado al carrito`,
        duration: 2000,
        gravity: `bottom`,
        position: `right`,
        style:{
            background: "rgba(253,29,29,1)", 
        }

    }).showToast();
}

function mostrarProductosDe(idDeEstaEmpresa) {
    let emp = [...empresas]
    let empresa =emp[idDeEstaEmpresa-1]
    console.log(empresa)
    let [a,b,c,d] = empresa.productos
    p1 = [a.p, a.precio, idDeEstaEmpresa]
    console.log(p1)
    p2 = [b.p, b.precio, idDeEstaEmpresa]
    p3 = [c.p, c.precio, idDeEstaEmpresa]

    empresa.boton? empresa.boton = false : empresa.boton = true;
    if(empresa.boton){
        //boton X
        let botonX = document.getElementById(`VerProductDeEmpNum${idDeEstaEmpresa}`)
        botonX.innerHTML= `<b>X</b>`
        //2do div
        let elemento2 = document.getElementById(`infoDeEmp${idDeEstaEmpresa}`)
        elemento2.classList.add("col-3")
        let clasesDeElemento2 = elemento2.classList
        elemento2.classList.remove(clasesDeElemento2[1]) 
        //3er div
        let elemento3 = document.getElementById(`productDeLaEmpNum${idDeEstaEmpresa}`)
        elemento3.classList.add("col-4", "contenedorProductos")
        let clasesDeElemento3 = elemento3.classList
        elemento3.classList.remove(clasesDeElemento3[2]) 
        let catalogo = document.createElement("div")
        catalogo.setAttribute("id", `catalogoEmp${idDeEstaEmpresa}`)
        //let cantDeCeldas = (empresa.productos).length
        catalogo.innerHTML = `
        <table>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
            </tr>
            <tr>
                <td>${a.p}</td>
                <td>${a.precio}</td>
                <td><button id="emp${idDeEstaEmpresa}pA" onclick="guardarProductEnCartYLS(p1)" class="probando"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>
                </td>
            </tr>
            <tr>
                <td>${b.p}</td>
                <td>${b.precio}</td>
                <td><button id="emp${idDeEstaEmpresa}pB" onclick="guardarProductEnCartYLS(p2)" class="probando"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>
                </td>
            </tr>
            <tr>
                <td>${c.p}</td>
                <td>${c.precio}</td>
                <td><button id="emp${idDeEstaEmpresa}pC" onclick="guardarProductEnCartYLS(p3)" class="probando"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>
                </td>
            </tr>
        </table>
        `
        elemento3.appendChild(catalogo)
    }  else{
        //2do div        
        let elemento2 = document.getElementById(`infoDeEmp${idDeEstaEmpresa}`)
        elemento2.classList.add("col-3")
        let clasesDeElemento2 = elemento2.classList
        elemento2.classList.remove(clasesDeElemento2[1]) 
        elemento2.classList.add("col-6")
        //3er div
        let elemento3 = document.getElementById(`productDeLaEmpNum${idDeEstaEmpresa}`)
        elemento3.classList.add("contenedorProductos", "col-4")
        let clasesDeElemento3 = elemento3.classList
        elemento3.classList.remove(clasesDeElemento3[3]) 
        elemento3.classList.remove(clasesDeElemento3[2]) 
        elemento3.classList.add("col-2")
        elemento3.innerHTML=`<button class="btn btn-warning" id="VerProductDeEmpNum${idDeEstaEmpresa}" onclick="mostrarProductosDe(${idDeEstaEmpresa})">Ver productos</button>`
    }
}


function removerCards(conEstaCategoria) {
    let comidasBotonQuitar = document.getElementById("quitarComidas");
    let bebidasBotonQuitar = document.getElementById("quitarBebidas");
    let regalosBotonQuitar = document.getElementById("quitarRegalos");
    if(conEstaCategoria == "comidas"){
        comidasBotonQuitar.onclick = () => {
            let empresasMostradasLS = localStorage.getItem(`empresasMostradas`)
            let empresasMostradasJSON = JSON.parse(empresasMostradasLS)
            let empresasPorQuitar = empresasMostradasJSON.filter((x) =>{ return x.categoria == conEstaCategoria})
            empresasPorQuitar.forEach((empresa) => {
                if(empresa.categoria == conEstaCategoria){
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
            let empresasMostradasLS = localStorage.getItem(`empresasMostradas`)
            let empresasMostradasJSON = JSON.parse(empresasMostradasLS)
            let empresasPorQuitar = empresasMostradasJSON.filter((x) =>{ return x.categoria == conEstaCategoria})
            empresasPorQuitar.forEach((empresa) => {
                if(empresa.categoria == conEstaCategoria){
                    let i = idEmpresasMostradas.indexOf(empresa.numStand);
                    idEmpresasMostradas.splice(i, 1);    
                    console.log(idEmpresasMostradas)

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
            let empresasMostradasLS = localStorage.getItem(`empresasMostradas`)
            let empresasMostradasJSON = JSON.parse(empresasMostradasLS)
            let empresasPorQuitar = empresasMostradasJSON.filter((x) =>{ return x.categoria == conEstaCategoria})
            empresasPorQuitar.forEach((empresa) => {
                if(empresa.categoria == conEstaCategoria){
                    let i = idEmpresasMostradas.indexOf(empresa.numStand);
                    idEmpresasMostradas.splice(i, 1);    
                    console.log(idEmpresasMostradas)

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
let idEmpresasMostradas = [];
let empresasMostradas = [];


function mostrarEmpresasEncontradas(empresasEncontradas) {   
    empresasEncontradas.forEach((x) => {
        if (idEmpresasMostradas.includes(x.numStand)) {
            return false
        } else {
            let contenedorCards = document.getElementById("contenedorCards");
            empresasEncontradas.forEach((empresa) =>{
                let card = document.createElement("article");
                card.classList.add("col-sm-10","col-lg-12", "card","shadow-sm", `${empresa.categoria}`);
                //<div class="d-flex align-items-center flex-sm-column flex-lg-row">
                card.innerHTML= `
                <div class="row align-items-center" id="contElementEmpresa${empresa.numStand}">
                    <div class="w-25 col-4">
                        <img class="w-100" src="../images/logo-ispe.png" alt="logo">
                    </div>
                    <div id="infoDeEmp${empresa.numStand}" class="card-body col-6">
                        <h5>${empresa.nombreEmpresa}</h5>
                        <p>Categoría: <b>${empresa.categoria}</b></p>
                        <p>Stand: ${empresa.numStand}</p>
                        <p>Aca iría una breve descripcion</p>
                    </div>
                    <div class="verProductDeEmp${empresa.numStand} card-body col-2" id="productDeLaEmpNum${empresa.numStand}" >
                        <button class="btn btn-warning" id="VerProductDeEmpNum${empresa.numStand}" onclick="mostrarProductosDe(${empresa.numStand})">Ver productos</button>
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
        if (empresa.categoria === categoria){
            empresasEncontradas.push(empresa)
        }
    })
    mostrarEmpresasEncontradas(empresasEncontradas);
}



let comidasBoton = document.getElementById("comidas");
comidasBoton.onclick = () => {filtrarEmpresasPor("comidas") };

let bebidasBoton = document.getElementById("bebidas");
bebidasBoton.onclick = () => {filtrarEmpresasPor("bebidas") };

let regalosBoton = document.getElementById("regalos");
regalosBoton.onclick = () => {filtrarEmpresasPor("regalos") };



let empresas 
const carrito = [];
