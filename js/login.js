// Se llama al DOM
const formulario = document.getElementById('login');
const formRegister = document.getElementById('register');
const resultado = document.getElementById('error');
const togglePassword = document.getElementById('verContra')
const usuarioNom = document.getElementById('usuarioNombre')
const toggleForm = document.getElementById('toggleForm')
const toggleFormRegister = document.getElementById('toggleFormRegister')
// const textoCambiable = document.getElementById('textoCambiableLogin')

// Se crea el constructor que define una sintaxis para crear los usuarios
class Usuario {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}

// Se define la variable que va a contener a los usuarios al ser pusheados
let usuarios = [];
// Se crean usuarios existentes utilizando el constructor de objetos
const usuario = new Usuario("NachotaGG", "JustMyDeveloperEmailhaha")
const usuario2 = new Usuario("NightShadow", "mishijoslosamo")
const usuario3 = new Usuario("Pepe", "HelloWorld!")

// Se pushean los usuarios a la variable
usuarios.push(usuario, usuario2, usuario3);


// Formulario registro
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("userRegister").value;
    let passwordLogin = document.getElementById("passRegister").value;

    if (userLogin && passwordLogin) {
        let nuevoUsuario = new Usuario(userLogin, passwordLogin);

        usuarios.push(nuevoUsuario)
        toastRegistroExitoso()
    }
})

// Formulario ingresar
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passwordLogin = document.getElementById("pass").value;

    for (let user of usuarios) {
        if (user.user == userLogin && user.password == passwordLogin) {
            toastInicioSesionExitoso()
            localStorage.setItem("usuario", user.user);
            window.location.href = "../index.html"
        } else {
            setTimeout(() => {
                resultado.innerHTML = `
                <div class="paddingBottom"></div>
                <p>Credenciales incorrectas, volvé a intentarlo.</p>`
            }, 1300);
        }
    }
})


// Al presionar el botón de registrarse al no tener cuenta, se oculta el login y se muestra el register
toggleForm.onclick = (e) => {
    e.preventDefault()
    const contenedorLoginForm = document.getElementById('contenedorLogin')
    const contenedorRegisterForm = document.getElementById('contenedorRegister')
    contenedorLoginForm.classList.toggle('notShown');
    contenedorRegisterForm.classList.toggle('notShown')
}

// Al presionar el botón de ingresar al tener cuenta, se oculta el register y se muestra el login
toggleFormRegister.onclick = (e) => {
    e.preventDefault()
    const contenedorLoginForm = document.getElementById('contenedorLogin')
    const contenedorRegisterForm = document.getElementById('contenedorRegister')
    contenedorLoginForm.classList.toggle('notShown');
    contenedorRegisterForm.classList.toggle('notShown')
}

// Toasts
function toastInicioSesionExitoso() {
    // Se muestra una notificación de que se inició sesión correctamente mediante la libreria toastify
    Toastify({
        text: "Se ha iniciado sesión correctamente.",
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

function toastRegistroExitoso() {
    // Se muestra una notificación de que se registró el usuario correctamente mediante la libreria toastify
    Toastify({
        text: "Te has registrado exitósamente.",
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

