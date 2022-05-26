
let productosAgregadosLS = localStorage.getItem(`productosSeleccionados`)
console.log(productosAgregadosLS)
let empresasMostradasJSON = JSON.parse(productosAgregadosLS)
console.log(productosAgregadosLS)

productosAgregadosLS != null? mostrarCarrito(productosAgregadosLS) : aviso()

function aviso() {
    alert("hola")
    Swal.fire({
        icon: 'question',
        title: 'No hay nada en tu carrito!',
        text: 'Ve a la tienda y agrega productos a tu carrito de compras',
        confirmButtonText: `OK!`
    })
}

function mostrarCarrito(produc) {
    console.log(produc)
    let productos= JSON.parse(produc)
    console.log(productos)
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
}