function cargarProductosCarrito() {
    const currency = function(number){
        return new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARG', minimumFractionDigits: 2}).format(number);
    };
    let modelos = cargarCarrito();

    if (modelos.length == 0) {
        document.getElementById("productos_carrito").innerHTML = "<h2 class='text-center'>No se encontraron productos en el Carrito!</h2>";
        return false;
    }

    let total_pagar = 0;
    let contenido = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Articulo</th>
        <th scope="col">Modelo</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>`;

    for (let modelo of modelos) {
        let precio = currency(modelo.precio);
        contenido += `<tr>
        <td><img src='image/${modelo.imagen}' alt='${modelo.nombre}' width='180'></td>
        <td>${modelo.nombre}</td>
        <td>$${precio}</td>
        </tr>`;
        total_pagar += parseFloat(modelo.precio);
    }

    let total_pagar_precio = currency(total_pagar);
    contenido += `<tr>
    <td>&nbsp;</td>
    <td align='right'>Total</td>
    <td><b>$${total_pagar_precio}</b></td>
    </tr>
    </tbody>
    </table>`;
    document.getElementById("productos_carrito").innerHTML = contenido;
}

document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);

//  total de Productos en mi Carrito
ActualizarTotalCarrito();

// Cargo los Productos de mi Carrito
cargarProductosCarrito();