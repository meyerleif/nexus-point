const productos = [
    { id: "apple-12-pro-max", marca: "Apple", modelo: "iPhone 12 Pro Max", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 12 Pro Max.webp" },
    { id: "apple-12-12-pro", marca: "Apple", modelo: "iPhone 12 / 12 Pro", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 12_ 12 PRO.webp" },
    { id: "apple-14-pro-max", marca: "Apple", modelo: "iPhone 14 Pro Max", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 14 Pro Max.webp" },
    { id: "apple-14-pro", marca: "Apple", modelo: "iPhone 14 Pro", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 14 Pro.webp" },
    { id: "apple-15-plus-15-pro-max-16-plus", marca: "Apple", modelo: "iPhone 15 Plus / 15 Pro Max / 16 Plus", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 15 Pro Max_15 PLUS_ 16 PLUS.webp" },
    { id: "apple-15-pro", marca: "Apple", modelo: "iPhone 15 Pro", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 15 Pro-png.webp" },
    { id: "apple-15-pro-antiespia", marca: "Apple", modelo: "iPhone 15 Pro", tipo: "Vidrio templado antiespia", precio: 20000, stock: null, imagen: "assets/img/optimizado/Protector IP 15 pro antiespia.webp" },
    { id: "apple-15", marca: "Apple", modelo: "iPhone 15", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 15.webp" },
    { id: "apple-16-pro", marca: "Apple", modelo: "iPhone 16 Pro", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 16 PRO.webp" },
    { id: "apple-17-pro-max", marca: "Apple", modelo: "iPhone 17 Pro Max", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 17 PRO MAX.webp" },
    { id: "apple-18-pro-max", marca: "Apple", modelo: "iPhone 18 Pro Max", tipo: "Vidrio templado antiespia", precio: 20000, stock: null, imagen: "assets/img/optimizado/Protector IP 18 pro max.webp" },
    { id: "apple-18-pro", marca: "Apple", modelo: "iPhone 18 Pro", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP 18 Pro-png.webp" },
    { id: "apple-18-pro-antiespia", marca: "Apple", modelo: "iPhone 18 Pro", tipo: "Vidrio templado antiespia", precio: 20000, stock: null, imagen: "assets/img/optimizado/Protector IP 18 pro-antiespia.webp" },
    { id: "apple-xs-max-11-pro-max", marca: "Apple", modelo: "iPhone XS Max / 11 Pro Max", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP XS MAX_ 11Pro Max.webp" },
    { id: "apple-x-11-pro", marca: "Apple", modelo: "iPhone X / 11 Pro", tipo: "Vidrio templado", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector IP x_11 pro.webp" },
    { id: "samsung-s24-ultra", marca: "Samsung", modelo: "Galaxy S24 Ultra", tipo: "Protector de pantalla", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector Samsung 24 ultra.webp" },
    { id: "samsung-s26-ultra-anti-spy", marca: "Samsung", modelo: "Galaxy S26 Ultra antiespía", tipo: "Protector de pantalla antiespía", precio: 20000, stock: null, imagen: "assets/img/optimizado/Protector Samsung S26 ULTRA-webp.webp" },
    { id: "samsung-s26-ultra", marca: "Samsung", modelo: "Galaxy S26 Ultra", tipo: "Protector de pantalla", precio: 15000, stock: null, imagen: "assets/img/optimizado/Protector Samsung S26 ultra-png.webp" },
    { id: "colgante-ala", marca: "Joyas", modelo: "Colgante ala", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante ala.webp" },
    { id: "colgante-ancla", marca: "Joyas", modelo: "Colgante ancla", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante ancla.webp" },
    { id: "colgante-avion", marca: "Joyas", modelo: "Colgante avión", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante avion.webp" },
    { id: "colgante-corazon", marca: "Joyas", modelo: "Colgante corazón", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante corazon2.webp" },
    { id: "colgante-cristal", marca: "Joyas", modelo: "Colgante cristal", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante cristal.webp" },
    { id: "colgante-elefante", marca: "Joyas", modelo: "Colgante de elefante", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante de elefante2.webp" },
    { id: "colgante-letra-p", marca: "Joyas", modelo: "Colgante letra P", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante letra P.webp" },
    { id: "colgante-letra-v", marca: "Joyas", modelo: "Colgante letra V", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante letra V.webp" },
    { id: "colgante-mano", marca: "Joyas", modelo: "Colgante mano", tipo: "Joyería", precio: 25000, stock: null, imagen: "assets/img/optimizado/colgante mano.webp" },
    { id: "pendiente-cruz", marca: "Joyas", modelo: "Pendiente cruz", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendiente cruz.webp" },
    { id: "pendientes-buho", marca: "Joyas", modelo: "Pendientes búho", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes buho.webp" },
    { id: "pendientes-angel", marca: "Joyas", modelo: "Pendientes de ángel", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes de angel2.webp" },
    { id: "pendientes-caracol", marca: "Joyas", modelo: "Pendientes de caracol", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes de caracol1.webp" },
    { id: "pendientes-corazon", marca: "Joyas", modelo: "Pendientes de corazón", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes de corazon.webp" },
    { id: "pendientes-gallo", marca: "Joyas", modelo: "Pendientes de gallo", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes de gallo.webp" },
    { id: "pendientes-libelula", marca: "Joyas", modelo: "Pendientes de libélula", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes de libelula.webp" },
    { id: "pendientes-oso", marca: "Joyas", modelo: "Pendientes de oso", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes de oso.webp" },
    { id: "pendientes-pies", marca: "Joyas", modelo: "Pendientes de pies", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes de pies.webp" },
    { id: "pendientes-pulpo", marca: "Joyas", modelo: "Pendientes de pulpo", tipo: "Joyería", precio: 35000, stock: null, imagen: "assets/img/optimizado/pendientes de pulpo.webp" }
];

const contenedor = document.getElementById("catalogo");
const inputBuscador = document.getElementById("buscador");
const resumenResultados = document.getElementById("resumenResultados");
const paginacion = document.getElementById("paginacion");
const botonesFiltro = document.querySelectorAll(".filtros button[onclick]");
const botonLimpiarFiltros = document.getElementById("limpiarFiltros");
const modalImagen = document.getElementById("modalImagen");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const botonCerrarModal = document.querySelector(".modal-cerrar");
const productosPorPagina = 8;
let marcaActiva = "Todos";
let paginaActual = 1;

function abrirImagen(src, alt) {
    if (!modalImagen || !imagenAmpliada) return;

    imagenAmpliada.src = src;
    imagenAmpliada.alt = alt;
    modalImagen.classList.add("activo");
    modalImagen.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function cerrarModalImagen() {
    if (!modalImagen || !imagenAmpliada) return;

    modalImagen.classList.remove("activo");
    modalImagen.setAttribute("aria-hidden", "true");
    imagenAmpliada.src = "";
    document.body.classList.remove("modal-open");
}

if (botonCerrarModal) {
    botonCerrarModal.addEventListener("click", cerrarModalImagen);
}

if (modalImagen) {
    modalImagen.addEventListener("click", (event) => {
        if (event.target === modalImagen) {
            cerrarModalImagen();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalImagen && modalImagen.classList.contains("activo")) {
        cerrarModalImagen();
    }
});

function mostrarProductos(arrayProductos) {
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (arrayProductos.length === 0) {
        contenedor.innerHTML = "<p class='vacio'>No encontramos productos con esos criterios.</p>";
        return;
    }

    arrayProductos.forEach((prod) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card-producto");
        const imagenProducto = document.createElement("img");
        imagenProducto.src = prod.imagen;
        imagenProducto.alt = `${prod.marca} ${prod.modelo}`;
        imagenProducto.loading = "lazy";
        imagenProducto.width = 150;
        imagenProducto.height = 150;
        imagenProducto.decoding = "async";
        imagenProducto.classList.add("imagen-producto");
        imagenProducto.addEventListener("click", () => abrirImagen(prod.imagen, prod.modelo));

        const titulo = document.createElement("h3");
        titulo.textContent = `${prod.marca} ${prod.modelo}`;

        const tipo = document.createElement("p");
        tipo.classList.add("tipo");
        tipo.textContent = prod.tipo;

        const precio = document.createElement("p");
        precio.classList.add("precio");
        precio.textContent = prod.precio === null
            ? "Precio: Consultar"
            : `$${prod.precio.toLocaleString("es-CO")} COP`;

        const disponibilidad = document.createElement("p");
        disponibilidad.classList.add("disponibilidad");
        disponibilidad.textContent = prod.stock === null ? "Disponibilidad: Consultar" : `Disponibles: ${prod.stock}`;

        const botonPedido = document.createElement("button");
        botonPedido.type = "button";
        botonPedido.textContent = "Pedir por WhatsApp";
        botonPedido.addEventListener("click", () => pedirPorWhatsApp(prod));

        tarjeta.append(imagenProducto, titulo, tipo, precio, disponibilidad, botonPedido);

        contenedor.appendChild(tarjeta);
    });
}

function filtrarMarca(marca) {
    marcaActiva = marca;
    paginaActual = 1;
    botonesFiltro.forEach((boton) => {
        const activo = boton.textContent.trim() === marca;
        boton.setAttribute("aria-pressed", String(activo));
    });
    actualizarCatalogo();
}

if (botonLimpiarFiltros) {
    botonLimpiarFiltros.addEventListener("click", () => {
        if (inputBuscador) inputBuscador.value = "";
        filtrarMarca("Todos");
    });
}

if (inputBuscador) {
    inputBuscador.addEventListener("input", () => {
        paginaActual = 1;
        actualizarCatalogo();
    });
}

function actualizarCatalogo() {
    const texto = inputBuscador ? inputBuscador.value.trim().toLocaleLowerCase() : "";
    const resultados = productos.filter((producto) => {
        const coincideMarca = marcaActiva === "Todos" || producto.marca === marcaActiva;
        const coincideTexto = `${producto.marca} ${producto.modelo} ${producto.tipo}`
            .toLocaleLowerCase()
            .includes(texto);
        return coincideMarca && coincideTexto;
    });
    const totalPaginas = Math.ceil(resultados.length / productosPorPagina);

    if (paginaActual > totalPaginas) {
        paginaActual = Math.max(totalPaginas, 1);
    }

    const inicio = (paginaActual - 1) * productosPorPagina;
    mostrarProductos(resultados.slice(inicio, inicio + productosPorPagina));

    if (resumenResultados) {
        const rangoInicio = resultados.length === 0 ? 0 : inicio + 1;
        const rangoFin = Math.min(inicio + productosPorPagina, resultados.length);
        resumenResultados.textContent = `Mostrando ${rangoInicio}-${rangoFin} de ${resultados.length} productos`;
    }

    actualizarPaginacion(totalPaginas);
}

function actualizarPaginacion(totalPaginas) {
    if (!paginacion) return;
    paginacion.innerHTML = "";

    if (totalPaginas <= 1) return;

    const agregarBoton = (texto, pagina, deshabilitado, etiqueta, actual) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = texto;
        boton.setAttribute("aria-label", etiqueta);
        boton.disabled = deshabilitado;
        if (actual) boton.setAttribute("aria-current", "page");
        boton.addEventListener("click", () => {
            paginaActual = pagina;
            actualizarCatalogo();
        });
        paginacion.appendChild(boton);
    };

    agregarBoton("Anterior", paginaActual - 1, paginaActual === 1, "Página anterior", false);
    for (let pagina = 1; pagina <= totalPaginas; pagina += 1) {
        agregarBoton(String(pagina), pagina, false, `Página ${pagina}`, pagina === paginaActual);
    }
    agregarBoton("Siguiente", paginaActual + 1, paginaActual === totalPaginas, "Página siguiente", false);
}

function pedirPorWhatsApp(producto) {
    const telefono = "573003738276";
    const mensajeProducto = producto.marca === "Joyas"
        ? `la joya ${producto.modelo}`
        : `${producto.tipo.toLocaleLowerCase()} para ${producto.modelo}`;
    const mensaje = encodeURIComponent(`¡Hola! Me interesa ${mensajeProducto}. ¿Me confirmas disponibilidad?`);
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
}

actualizarCatalogo();
