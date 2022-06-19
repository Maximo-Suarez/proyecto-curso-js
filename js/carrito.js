
function quitarProducto(deLaEmp, opcion) {
    console.log(`deLa${deLaEmp}producto${opcion}`)
    let productosAgregados = JSON.parse(localStorage.getItem(`productosAgregados`))
    console.log(productosAgregados)
    let indiceDeEseProducto = productosAgregados.findIndex((x) =>  (x.deLaEmp === deLaEmp) && (x.opcion === opcion))
    let nombre = productosAgregados[indiceDeEseProducto].producto
    productosAgregados.splice(indiceDeEseProducto, 1)
    console.log(productosAgregados)
    actualizarLS(productosAgregados)
    Toastify({
        text: `"${nombre}"  eliminado del carrito`,
        duration: 2000,
        gravity: `bottom`,
        position: `right`,
        style:{
            background: "rgba(253,29,29,1)", 
        }
    }).showToast();

} 

function dibujarCarrito() {
    let productos = JSON.parse(localStorage.getItem(`productosAgregados`))
    Array.isArray(productos) ? console.log("si es array") : productos = [JSON.parse(localStorage.getItem(`productosAgregados`))] //pregunto si ya es array, si no lo es, lo convierto
    console.log(productos)
    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.classList.add("card", "shadow-lg")
    let totalAPagar = 0
    let totalDeCantDeProductos = 0
    let totalDeEmp = ""
    contenedor.innerHTML= `
    <table class="table prueba" >
        <thead>
            <tr>
                <th></th>
                <th scope="col">Stand/s</th>
                <th scope="col">Producto/s</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="tablaBody">
        </tbody>
    </table>
    `
    let tablaBody= document.getElementById("tablaBody")
    console.log(productos)
    productos.forEach((producto) => {
        if(producto != null){
            console.log(producto)
            let datos = document.createElement("tr")
            let subtotal = producto.cantidad * parseFloat((producto.precio).slice(1)); //convierto el precio (string) en number y le quito "$""
            totalAPagar += subtotal //agrego el subtotal del producto al total a pagar
            totalDeCantDeProductos += producto.cantidad //agrego la cantidad del producto a la cantidad total de productos agregados al cart
            let nombre = producto.producto.charAt(0).toUpperCase() + producto.producto.slice(1) //convierto el nombre para que sea en mayuscula la primera letra
            totalDeEmp.includes(producto.deLaEmp)? console.log("control: si esta el stand(" + producto.deLaEmp +")") :  totalDeEmp += ` - ${producto.deLaEmp}`; //control para que el numero de los stands elegidos no se repita
            datos.innerHTML=`
                    <th scope="row"></th>
                    <td >${producto.deLaEmp}</td>
                    <td>${nombre}</td>
                    <td>${producto.cantidad}</td>
                    <td>${"$"+ subtotal}</td>
                    <td><button class="btn btn-danger rounded-circle" onclick="quitarProducto(${producto.deLaEmp}, ${producto.opcion})">-</button> </td>
            `
            tablaBody.prepend(datos)
        }
    })
    //fila de "Total"
    let datosDeTotal = document.createElement("tr")
    datosDeTotal.classList.add("table-light")
    datosDeTotal.innerHTML =`
    <th scope="row">Total</th>
    <th>${totalDeEmp.slice(3)}</th>
    <th>${productos.length}</th>
    <th>${totalDeCantDeProductos}</th>
    <th>${"$"+ totalAPagar}</th>
    <th></th>
    `
    tablaBody.appendChild(datosDeTotal)
}

function removerDeLSLosProductos() {
    while (!(localStorage.length == 2)) {
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            if ((clave != "productosAgregados") && (clave != "empresasMostradas")) {
                console.log(clave +"borrado de ls")
                localStorage.removeItem(clave)
                console.log(productosSeleccionados)
            }
        }
    }
}

function actualizarLS(productosSeleccionados) {
    console.log(productosSeleccionados)
    localStorage.setItem(`productosAgregados`, JSON.stringify(productosSeleccionados))
    removerDeLSLosProductos()
    dibujarCarrito()
}

function aviso() {
    Swal.fire({
        icon: 'warning',
        title: 'No hay nada en tu carrito!',
        text: 'Ve a la tienda y agrega productos a tu carrito de compras',
        confirmButtonText: `OK!`
    })
}

function cargarProductos() {
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        if ((clave != "productosAgregados") && (clave != "empresasMostradas")) {
            let producto = localStorage.getItem(clave)
            productosSeleccionados.push(JSON.parse(producto))
        }
    }
    console.log(productosSeleccionados)
}

function inicio() {
    dibujarCarrito()
    productosSeleccionados.forEach(producto => {
        console.log(JSON.parse(productosAgregadosLS))
        let validarSiYaEsta = JSON.parse(productosAgregadosLS).find((x) => { return x.producto === producto.producto && x.deLaEmp === producto.deLaEmp})
        console.log(JSON.stringify(producto.producto))
        if (validarSiYaEsta) {
            let sumaDeCant = JSON.parse(productosAgregadosLS).find((x) => { return x.producto === producto.producto && x.deLaEmp === producto.deLaEmp})
            let indiceDeEseProducto = JSON.parse(productosAgregadosLS).findIndex((x) =>  {return x.producto === producto.producto && x.deLaEmp === producto.deLaEmp})
            sumaDeCant.cantidad += producto.cantidad
            console.log(sumaDeCant) 
            let productosQueYaEstaban = JSON.parse(productosAgregadosLS)
            productosQueYaEstaban.splice(indiceDeEseProducto, 1, sumaDeCant)
            console.log(productosQueYaEstaban)
            actualizarLS(productosQueYaEstaban)
            dibujarCarrito()
        } else {
            console.log("no se cumplio")
            console.log(producto.producto + "no esta") 
            let productosQueYaEstaban = JSON.parse(localStorage.getItem(`productosAgregados`))
            productosQueYaEstaban.push(producto)
            actualizarLS(productosQueYaEstaban)
        } 
    });
}

function pregunta() {
    productosAgregadosLS != null? inicio() : productosSeleccionados.length>0? actualizarLS(productosSeleccionados) : aviso();
}

function borrar() {
    localStorage.clear()
    productosAgregadosLS = null
    productosSeleccionados= []
    let contenedorCarrito = document.getElementById("contenedorCarrito")
    contenedorCarrito.innerHTML= " "
    contenedorCarrito.classList.remove("card","shadow-lg")
    pregunta()
}

let productosSeleccionados = []
let productosAgregadosLS = localStorage.getItem(`productosAgregados`)

cargarProductos()
pregunta()

let limpiarBoton = document.getElementById("limpiarCart");
limpiarBoton.onclick = () => {borrar() };

