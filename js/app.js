// Modo oscuro
const btnSwitch = document.getElementById('switchModoOscuro')

btnSwitch.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')

    // Guardamos el modo en el localStorage.
    document.body.classList.contains('dark') ? localStorage.setItem('dark-mode', 'true') : localStorage.setItem('dark-mode', 'false')
})

// Obtenemos el modo actual.
localStorage.getItem('dark-mode') === 'true' ? document.body.classList.add('dark') : document.body.classList.remove('dark')

// Carrito

// Se crea la variable que va a contener el stock.
let stockProductos = [
    { id: 1, nombre: "PC Gaming R5 5600G", motherboard: "Gigabyte A520M", socket: "AM4", procesador: "Ryzen 5 5600G", tipoRam: "DDR4", gbRam: "16GB", velRam: "3200mhz", grafica: "N/A", fuenteCertificada: true, wattsFuente: 650, precio: 90000, cantidad: 1, img: '../images/pc.png' },
    { id: 2, nombre: "PC Gaming R7 5700G", motherboard: "Gigabyte B450M", socket: "AM4", procesador: "Ryzen 5 5700G", tipoRam: "DDR4", gbRam: "32GB", velRam: "3600mhz", grafica: "RTX 3060", fuenteCertificada: true, wattsFuente: 750, precio: 200000, cantidad: 1, img: '../images/pc2.png' },
    { id: 3, nombre: "PC Athlon 3000G", motherboard: "Asus A320m-k", socket: "AM4", procesador: "Athlon 3000G", tipoRam: "DDR4", gbRam: "8GB", velRam: "2666mhz", grafica: "N/A", fuenteCertificada: false, wattsFuente: 500, precio: 70000, cantidad: 1, img: '../images/pc3.png' }
]

// Se define el DOM
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
// Contenedor cards main
const contenedorProductos = document.getElementById('contenedor-productos')
// Elementos del header
const btnCarrito = document.getElementById('boton-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
// Modal (menú desplegable contenedor de productos al presionar el boton de carrito)
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
const realizarCompra = document.getElementById('realizar-compra')
const carritoVacioMensaje = document.getElementById('carritoVacioMensaje')

botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    //Cuando presiono sobre el modal se finaliza la propagacion del click a los elementos padre.
    event.stopPropagation()
})


// Se define la variable que va a contener los productos que se vayan agregando al carrito
let carrito = []


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

// Se resetea el contador de productos del carrito y se llama a la función actualizarCarrito
botonVaciar.addEventListener('click', () => {
    // Si longitud de carrito es mayor o igual a 1, vaciarlo y ejecutar el toast que avisa que fue vaciado con exito
    // sino, avisarle al usuario que el carrito ya está vacío
    carrito.length >= 1 ? (carrito.length = 0, toastVaciarCarrito()) : toastCarritoYaVacio()
    localStorage.removeItem('carrito')
    actualizarCarrito()
})

// Botón en el modal para realizar la compra
realizarCompra.addEventListener('click', () => {
    carrito.length >= 1 ? (carrito.length = 0, efectuarCompra(), actualizarCarrito()) : toastCarritoYaVacio()
})


// Se crea el contenido de las cards mediante un bucle forEach.
stockProductos.forEach((producto) => {
    // Se crea el div que va a contener todo el contenido
    const div = document.createElement('div')
    div.classList.add('producto')
    // Se ingresa al div para agregarle el contenido llamando a las propiedades definidas en stockProductos.
    div.innerHTML = `
    <img src=${producto.img} class="img-fluid" alt="Computadora muy bonita, comprala :)">
    <h3 class="highlightedText boldTitle">${producto.procesador}</h3>
    <p><strong class="darkHighlightedText">Socket:</strong> ${producto.socket}</p>
    <p><strong class="darkHighlightedText">Motherboard:</strong> ${producto.motherboard}</p>
    <p><strong class="darkHighlightedText">RAM:</strong> ${producto.gbRam}</p>
    <p><strong class="darkHighlightedText">Velocidad RAM:</strong> ${producto.velRam}</p>
    <p><strong class="darkHighlightedText">Gráfica:</strong> ${producto.grafica}</p>
    <p><strong class="darkHighlightedText">Precio:</strong> ${producto.precio}</p>
    <div class="paddingBottom"></div>
    <div class="contenedorBotonAgregarCarrito">
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    </div>
    `
    // Se agrega un nuevo div hijo a la etiqueta padre para que se repita la creación de otra card.
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    //Se ejecuta el agregar el carrito con la id del producto.
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

//Se crea la función para agregar items al carrito.
const agregarAlCarrito = (prodId) => {

    //Aumenta la cantidad del item en vez de cargarlo nuevamente
    // Comprueba si el elemento ya existe en el carro
    const existe = carrito.some(prod => prod.id === prodId)

    //Si el producto seleccionado ya está en el carrito, actualizamos la cantidad en el modal.
    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
        //En caso de que el producto no esté en el carrito, lo agregamos.
    } else {
        // Se busca la ID especificada en el array de stock, si se encuentra, se pushea al carrito
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    toastAgregadoAlCarrito()
    actualizarCarrito()
}


// Se crea la función para eliminar productos del carrito.
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)


    //Busca el elemento del carrito y nos devuelve el índice correspondiente.
    const indice = carrito.indexOf(item)

    // Se le pasa el índice del elemento del carrito y se lo elimina.
    carrito.splice(indice, 1)
    toastEliminadoDelCarrito()
    localStorage.removeItem('carrito')
    actualizarCarrito()
    console.log(carrito)
}

// Se crea la función para actualizar el carrito cada vez que algo cambie.
const actualizarCarrito = () => {
    // Cada vez que se llame a actualizarCarrito se borra el nodo, después recorre el array para actualizarlo de nuevo y rellena con la nueva información.
    contenedorCarrito.innerHTML = ""


    //Por cada producto creamos un div con esta estructura y le agregamos un div hijo al modal mediante appendChild.
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

        // Se agrega al localStorage la variable carrito usando carrito como key y el JSON de carrito como valor.
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    // Se actualiza el número del carrito dependiendo la cantidad de productos ingresados
    contadorCarrito.innerText = carrito.length
    console.log(carrito)

    //Por cada producto que recorro en mi carrito, al acumulador (acc) le suma la propiedad precio, con el acumulador empezando en 0.
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}



// Cambio en el texto de Ingresar
const textoCambiable = document.getElementById('textoCambiableLogin')

textoCambiable.innerHTML = (`${localStorage.getItem('usuario')}`)




// Afiliados
let contenedorAfiliadosEmpresas = document.getElementById('contenedorAfiliados')

// Contenedor de afiliados en afiliados.html
function cargarAfiliados() {
    fetch('../js/afiliados.json')
        .then(respuesta => respuesta.json())
        .then(afiliados => {
            afiliados.forEach(afiliado => {
                const tarjetaContenedora = document.createElement('div');
                tarjetaContenedora.classList.add('afiliadoCard')
                tarjetaContenedora.innerHTML += `
                <h4 class="highlightedText textCenter">${afiliado.nombreEmpresa}</h4>
                <img src="${afiliado.logotipoEmpresa}">
                <strong>Número telefónico:</strong>
                <p>${afiliado.numeroEmpresa}</p>
                <strong>Dirección:</strong>
                <p>${afiliado.direccionEmpresa}</p>
                <a href="${afiliado.urlEmpresa}" target="_blank" class="btn afiliadosBtn">Ir a la página<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                `;
                contenedorAfiliadosEmpresas.appendChild(tarjetaContenedora)
            })
        })
        .catch(error => console.log("Hubo un error: " + error.message))
}

cargarAfiliados()




// Librerías


// Toastify
// Se crea la función contenedora del toast que anuncia que el producto se agregó al carrito.
function toastAgregadoAlCarrito() {
    // Se muestra una notificación de que el producto fue agregado al carrito mediante la libreria toastify
    Toastify({
        text: "Producto agregado al carrito.",
        avatar: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/whatsapp/238/white-heavy-check-mark_2705.png",
        duration: 2000,
        stopOnFocus: false,
        gravity: "bottom",
        className: "info",
        style: {
            background: "linear-gradient(to right, #15B206, #51E721)",
        }
    }).showToast();

}

// Se crea la función contenedora del toast que anuncia que el producto se eliminó del carrito.
function toastEliminadoDelCarrito() {
    Toastify({
        text: "Producto eliminado del carrito.",
        avatar: "https://cdn-0.emojis.wiki/emoji-pics/facebook/cross-mark-button-facebook.png",
        duration: 2000,
        stopOnFocus: false,
        gravity: "bottom",
        className: "info",
        style: {
            background: "linear-gradient(to right, #FE8227, #FE2727)",
        }
    }).showToast();
}

// Se crea la función contenedora del toast que anuncia que se eliminaron todos los productos del carrito.
function toastVaciarCarrito() {
    Toastify({
        text: "Carrito vaciado con éxito.",
        avatar: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/307/wastebasket_1f5d1-fe0f.png",
        duration: 2000,
        stopOnFocus: false,
        gravity: "bottom",
        className: "info",
        style: {
            background: "linear-gradient(to right, #27E4FE, #278CFE)",
        }
    }).showToast();
}

// Toast para cuando el carrito ya está vacío y el usuario sigue intentando vaciarlo.
function toastCarritoYaVacio() {
    Toastify({
        text: "El carrito está vacio.",
        avatar: "https://emojipedia-us.s3.amazonaws.com/source/skype/289/question-mark_2753.png",
        duration: 2000,
        stopOnFocus: false,
        gravity: "bottom",
        className: "info",
        style: {
            background: "linear-gradient(to right, #FFE000, #FFB900)",
        }
    }).showToast();
}

function efectuarCompra() {
    Toastify({
        text: "La compra ha sido realizada con éxito.",
        avatar: "https://emojitool.com/img/whatsapp/2.19.244/shopping-trolley-2323.png",
        duration: 2000,
        stopOnFocus: false,
        gravity: "bottom",
        className: "info",
        style: {
            background: "linear-gradient(to right, #15B206, #51E721)",
        }
    }).showToast();
    localStorage.removeItem('carrito')
}


// Made with <3