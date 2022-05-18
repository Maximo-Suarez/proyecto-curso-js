/* function removerCards(conEstaCategoria) {
    let contenedorCards = document.getElementById("contenedorCards");
    let cards = contenedorCards.childNodes;
    console.log(card)    
} */

//console.log("")



/* function verProductos(deEstaEmpresa ) {
    let empresaRelacionada = empresas.find((empresa) => empresa.numStand === deEstaEmpresa)
    let contenedorCards = document.getElementById("contenedorCards");
    let cards= contenedorCards.childNodes;
    console.log(cards)
    let cardSeleccionada = cards[deEstaEmpresa];
    let cardSeleccionadaContenido = cardSeleccionada.childNodes
    let contenedorLista = document.createElement("div");
    let cadena = "";
    empresaRelacionada.productos.forEach((producto) => {
        cadena += `<li>${producto}</li>`;
    })
    contenedorLista.innerHTML = ` 
    <ul>
        ${cadena}
    </ul>
    `
    cardSeleccionadaContenido[1].appendChild(contenedorLista); 

}
 */

let empresasMostradas = [];
function mostrarEmpresasEncontradas(empresasEncontradas) {
    let validar = [];
    empresasEncontradas.forEach((empresa) => {validar.push(empresa.numStand)})
    console.log(validar)
    if (empresasMostradas.includes(validar[1])){
        alert("ya esta esta categoria")
    } else{
        empresasEncontradas.forEach((empresa) =>{
        let contenedorCards = document.getElementById("contenedorCards");
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
                <button class="btn btn-primary" onclick= "verProductos(${empresa.numStand})">Ver productos</button>
            </div>
        </div>
        `;
        contenedorCards.appendChild(card);
        empresasMostradas.push(empresa.numStand);
        })
    }
}

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
                botonQuitar1.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                `
                boton1.appendChild(botonQuitar1);
                let comidasBotonQuitar = document.getElementById("quitarComidas");
                //comidasBotonQuitar.onclick = () => {removerCards("comidas")};
            }
            break;
        case "bebidas":
            let boton2 = document.getElementById("boton-2")
            if (validarBoton2) {
            } else {
                validarBoton2 = true;
                let botonQuitar2 = document.createElement("button");
                botonQuitar2.classList.add("quitarBebidas")
                botonQuitar2.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                `
                boton2.appendChild(botonQuitar2);
                let bebidasBotonQuitar = document.getElementById("quitarBebidas");
                //bebidasBotonQuitar.onclick = () => {removerCards("bebidas")};
            }
            break;
        case "regalos":
            if (validarBoton3) {
            } else {
                validarBoton3 = true;
                let boton3 = document.getElementById("boton-3")
                let botonQuitar3 = document.createElement("button");
                botonQuitar3.classList.add("quitarRegalos")
                botonQuitar3.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                `
                boton3.appendChild(botonQuitar3);
                let regalosBotonQuitar = document.getElementById("quitarRegalos");
               // regalosBotonQuitar.onclick = () => {removerCards("regalos")};
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



