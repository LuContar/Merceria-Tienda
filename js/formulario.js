class Contacto {
    constructor(datos_formulario) {
        this.nombre = datos_formulario.nombre;
        this.email = datos_formulario.email;
        this.modelo = datos_formulario.modelo;
    }
}

//Función de Validación del Formulario
function enviarDatos() {
    let nombre_cliente = document.getElementById("nombre_cliente").value;
    let email_cliente = document.getElementById("email_cliente").value;
    let modelo_cliente = document.getElementById("modelo_cliente").value;

    if ((nombre_cliente == "") || (nombre_cliente.length <= 3)) {
        mostrarError(true, "Ingrese un Nombre!");
        return false;
    } else {
        mostrarError(false, "");
    }

    if ((email_cliente == "") || (email_cliente.length <= 3)) {
        mostrarError(true, "Ingrese un Email!");
        return false;
    } else {
        mostrarError(false, "");
    }

    guardarDatos(nombre_cliente, email_cliente, modelo_cliente);
    mostrarMensaje("Los datos se guardaron correctamente!");
}

function mostrarError(estado, mensaje) {
    if (estado) {
        document.getElementById("resultado").innerHTML = "<p class='p-3 mb-2 bg-danger text-white text-center'>" + mensaje + "</p>";
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
}

function mostrarMensaje(mensaje) {
    document.getElementById("resultado").innerHTML = "<p class='p-3 mb-2 bg-success text-white text-center'>" + mensaje + "</p>";
}

function guardarDatos(nombre_cliente, email_cliente, modelo_cliente) {
    let contacto = new Contacto({nombre:nombre_cliente, email:email_cliente, modelo:modelo_cliente});
    localStorage.setItem("datos_formulario", JSON.stringify(contacto));
}

function cargarDatos() {
    let contacto = JSON.parse(localStorage.getItem("datos_formulario"));
    console.log(contacto);
    document.getElementById("nombre_cliente").value = contacto.nombre;
    document.getElementById("email_cliente").value = contacto.email;
    document.getElementById("modelo_cliente").value = contacto.modelo;
    mostrarMensaje("Los datos se cargaron correctamente!");
}

function borrarDatos() {
    //localStorage.clear();
    localStorage.removeItem("datos_formulario");
    document.getElementById("nombre_cliente").value = "";
    document.getElementById("email_cliente").value = "";
    mostrarMensaje("Los datos se borraron correctamente!");
}


const URLGET   = "https://jsonplaceholder.typicode.com/posts"

const infoPost =  { nombre: "nombre", profesion: "Programador" };

$(".buscar-post").prepend('<button id="btn1" class="btn btn-primary">Enviar</button>');

/* $("#btn1").click(() => { 
    $.post(URLGET, infoPost , (respuesta, estado) => {
        if(estado === "success"){
            $(".buscar-post").prepend(`<div>
                    Guardado:${respuesta.nombre}
                </div>`);
        }  
    });
}); */

