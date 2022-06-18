//localStorage.clear()
let productosSeleccionados = []
let productosAgregadosLS = localStorage.getItem(`productosAgregados`)

/* function dibujarCarrito() {
    
} */
function dibujarCarrito() {
    let productos = JSON.parse(localStorage.getItem(`productosAgregados`))
    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML= `
    <table id="tabla">
        <tr>
            <th>Stand</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Subtotal</th>

        </tr>
    </table>
    `
    let tabla= document.getElementById("tabla")
    productos.forEach((producto) => {
        let datos = document.createElement("tr")
        producto.precio
        let subtotal = producto.cantidad * parseFloat((producto.precio).slice(1));
        datos.innerHTML=`
                <td>${producto.deLaEmp}</td>
                <td>${producto.producto.charAt(0).toUpperCase()}${producto.producto.slice(1)}</td>
                <td>${producto.cantidad}</td>
                <td>${"$"+ subtotal}</td>
        `
        tabla.appendChild(datos)
    })
}



function actualizarLS(productosSeleccionados) {
    console.log(productosSeleccionados)
    localStorage.setItem(`productosAgregados`, JSON.stringify(productosSeleccionados))
    removerDeLSLosProductos()
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

function removerDeLSLosProductos() {
    for (let i = 0; (i-1) < localStorage.length; i++) {
        const clave = localStorage.key(i);
        console.log(clave)
        if ((clave != "productosAgregados") && (clave != "empresasMostradas")) {
            console.log(clave +"borrado de ls")
            localStorage.removeItem(clave)
        }
    }
}

cargarProductos()


if (productosAgregadosLS != null) {
    productosSeleccionados.forEach(producto => {
        console.log(JSON.parse(productosAgregadosLS))
        let validarSiYaEsta = JSON.parse(productosAgregadosLS).find((x) => { return x.producto === producto.producto && x.deLaEmp === producto.deLaEmp})
        console.log(JSON.stringify(producto.producto))
        if (validarSiYaEsta) {
            console.log(producto.producto + "si esta")
            let indiceDeEseProducto = JSON.parse(productosAgregadosLS).findIndex((x) =>  {return x.producto === producto.producto && x.deLaEmp === producto.deLaEmp})
            let productoQueYaEstaba = JSON.parse(productosAgregadosLS)[indiceDeEseProducto]
            console.log(productoQueYaEstaba)
            productoQueYaEstaba.cantidad += producto.cantidad 
            console.log(productoQueYaEstaba)
            //productosSeleccionados.splice(indiceDeEseProducto, 1, productoQueYaEstaba)
            let reemplazo = JSON.stringify(productosSeleccionados).replace(JSON.stringify(producto) ,JSON.stringify(productoQueYaEstaba))
            console.log(reemplazo)
            productosSeleccionados = JSON.parse(reemplazo)
            actualizarLS(productosSeleccionados)


            /* console.log(producto.producto) 
            let indiceDeEseProducto = JSON.parse(productosAgregadosLS).findIndex((x) =>  {return x.producto ===  producto.producto})
            let product = JSON.parse(productosAgregadosLS)[indiceDeEseProducto]
            console.log( product.cantidad)
            console.log(producto.cantidad)
            product.cantidad += producto.cantidad 
            console.log( product.cantidad)
            productosSeleccionados.splice(indiceDeEseProducto, 1, product)
            actualizarLS(productosSeleccionados) */


        } else {
            console.log(producto.producto + "no esta") 

            actualizarLS(productosSeleccionados)
        } 
    });
} else {
    if (productosSeleccionados.length>0) {
        actualizarLS(productosSeleccionados)
    } else {
        aviso()
        
    }
}   


console.log(productosSeleccionados)


//productosAgregadosLS != null? mostrarCarrito(productosAgregadosLS) : aviso()

function aviso() {
    Swal.fire({
        icon: 'warning',
        title: 'No hay nada en tu carrito!',
        text: 'Ve a la tienda y agrega productos a tu carrito de compras',
        confirmButtonText: `OK!`
    })
}

/* function mostrarCarrito(produc) {
    let productos= JSON.parse(produc)
    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML= `
    <table id="tabla">
        <tr>
            <th>Stand</th>
            <th>Producto</th>
            <th>Precio</th>
        </tr>
    </table>
    `
    let tabla= document.getElementById("tabla")
    productos.forEach((producto) => {
        let datos = document.createElement("tr")
        datos.innerHTML=`
                <td>${producto[2]}</td>
                <td>${producto[0]}</td>
                <td>${producto[1]}</td>
        `
        tabla.appendChild(datos)
    });
} */
dibujarCarrito()

/* function dibujarCarrito() {
    let productos = JSON.parse(localStorage.getItem(`productosAgregados`))
    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML= `
    <table id="tabla">
        <tr>
            <th>Stand</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Subtotal</th>

        </tr>
    </table>
    `
    let tabla= document.getElementById("tabla")
    productos.forEach((producto) => {
        let datos = document.createElement("tr")
        datos.innerHTML=`
                <td>${producto.deLaEmp}</td>
                <td>${producto.producto}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
        `
        tabla.appendChild(datos)
    })
}
 */