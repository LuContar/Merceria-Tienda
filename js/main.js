// Guardo los modelos en la localstorage
guardarModelosLocal(modelos);

// Leo el total de Productos en mi Carrito
ActualizarTotalCarrito();

// Carga los modelos
mostrarModelos2();

//Asignar el Evento "Click" al Botón "Enviar Datos"
document.getElementById("enviar_datos").addEventListener("click", enviarDatos);

//Asignar el Evento "Click" al Botón "Cargar Datos"
document.getElementById("cargar_datos").addEventListener("click", cargarDatos);

//Asignar el Evento "Click" al Botón "Cargar Datos"
document.getElementById("borrar_datos").addEventListener("click", borrarDatos);

//Asignar el Evento "Click" al Botón "Cargar Datos"
document.getElementById("limpiar_datos").addEventListener("click", limpiarEmail);

document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);



