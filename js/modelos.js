const modelos = [{id:1, nombre:"Argollas de madera", imagen:"argollas_de_madera.jpg", descripcion:["Aros de material madera" , "Forma redondas"], precio:200},
{id:2, nombre:"Cintas Reflex", imagen:"cintas reflex.jpg", descripcion:["Cintas de color reflex" , "Con cremallera"], precio:150},
{id:3, nombre:"Cordon de algodon", imagen:"cordon de algodon.png", descripcion:["Cordones de material de algodon"], precio:300},
{id:4, nombre:"Cremalleras", imagen:"cremalleras.jpg", descripcion:["Cremalleras de diferentes colores"], precio:200},
{id:5, nombre:"Hilo Algodon", imagen:"hilo_ algodon.png", descripcion:["Hilos de algodon diferentes colores"], precio:500},
{id:6, nombre:"Hilo ecologico", imagen:"hilo ecologico.png", descripcion:["Hilos de material ecologico"], precio:550},
{id:7, nombre:"Medias", imagen:"medias.jpg", descripcion:["Medias diferentes modelos"], precio:300},
{id:8, nombre:"Set para Bijou", imagen:"set para bijou.png", descripcion:["Set diferentes accesorios para crear bijou"], precio:1200},
{id:9, nombre:"Agujas de Bamboo", imagen:"Agujas de bamboo.jpg", descripcion:["Diferentes agujas para cocer, material bamboo"], precio:500},
{id:10, nombre:"Descocedores ojales", imagen:"Descocedores ojales.jpg", descripcion:["Distintos descocedores"], precio:300},
{id:11, nombre:"Rueda de alfileres", imagen:"Rueda de alfileres.jpg", descripcion:["Rueda de diferentes alfileres"], precio:900},
{id:12, nombre:"Kit de costura", imagen:"Kit de costura.jpg", descripcion:["Kit completo de costura"], precio:1500},
{id:13, nombre:"Toma puntos metalicos", imagen:"Toma puntos metalicos.jpg", descripcion:["Toma de puntos metalicos"], precio:200},
{id:14, nombre:"Lapiz tiza", imagen:"Lapiz tiza.jpg", descripcion:["Lapiz tiza varios colores"], precio:80},
{id:15, nombre:"Alicate", imagen:"Alikates.jpg", descripcion:["Alicates"], precio:700},
{id:16, nombre:"Mostacilla cara feliz", imagen:"Mostacilla cara feliz.jpg", descripcion:["Mostacilla de cara feliz"], precio:20}];


function mostrarModelos2() {
    let modelos = cargarModelosLocal();

    for (let modelo of modelos) {
        let columna = document.createElement("div");
        columna.className = "col-md-4 p-3";
        let encabezado = document.createElement("h4");
        encabezado.className = "p-3 mb-2 bg-dark text-white text-uppercase text-center";
        encabezado.innerHTML = modelo.nombre;
        let card = document.createElement("div");
        card.className = "card";
        let imagen = document.createElement("img");
        imagen.className = "card-img-top";
        imagen.src = "image/" + modelo.imagen;
        imagen.alt = modelo.nombre;
        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let encabezado2 = document.createElement("h5");
        encabezado2.className = "card-title text-primary text-center";
        encabezado2.innerHTML = "$" + modelo.precio;
        let card_text = document.createElement("p");
        card_text.className = "card-text";
        let lista = document.createElement("ul");
        lista.className = "list-group list-group-flush";

        for (let descrip of modelo.descripcion) {
            let item_lista = document.createElement("li");
            item_lista.className = "list-group-item";
            item_lista.innerHTML = descrip;
            lista.appendChild(item_lista);
        }

        let boton = document.createElement("button");
        boton.className = "btn btn-secondary";
        boton.innerHTML = "Agregar (+)";
        boton.onclick = () => {
        agregarAlCarrito(modelo.id);
        }
        card_text.appendChild(lista);
        card_body.appendChild(encabezado2);
        card_body.appendChild(card_text);
        card_body.appendChild(boton);
        card.appendChild(imagen);
        card.appendChild(card_body);
        columna.appendChild(encabezado);
        columna.appendChild(card);
        document.getElementById("modelos").appendChild(columna);

        let modelo_option = document.createElement("option");
        modelo_option.value = modelo.nombre;
        modelo_option.innerHTML = modelo.nombre;
        document.getElementById("modelo_cliente").appendChild(modelo_option);
    }
}

function guardarModelosLocal(modelos) {
    localStorage.setItem("modelos", JSON.stringify(modelos));
}

function cargarModelosLocal() {
    return JSON.parse(localStorage.getItem("modelos"));
}

function agregarAlCarrito(id) {
    let modelo = buscarModelo(id);
    let modelos = cargarCarrito();
    modelos.push(modelo);
    localStorage.setItem("carrito", JSON.stringify(modelos));
    localStorage.setItem("total_carrito", modelos.length);
    ActualizarTotalCarrito();
}


function buscarModelo(id) {
    let modelos = cargarModelosLocal();
    return modelos.find(x => x.id == id);
}

function cargarCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }
    return [];
}

function totalCarrito() {
    if (localStorage.getItem("total_carrito")) {
        return localStorage.getItem("total_carrito");
    }
    return 0;
}

function ActualizarTotalCarrito() {
    let total = totalCarrito();
    document.getElementById("datos_carrito").innerHTML = `<a href='carrito.html' title='Ver Carrito' class='nb4  fw-bold'><svg xmlns="http://www.w3.org/2000/svg" width="75" height="36" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> ${total} Carrito Producto(s)</a>`;
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    localStorage.removeItem("total_carrito");
    ActualizarTotalCarrito();
}



