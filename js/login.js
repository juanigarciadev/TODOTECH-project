const formulario = document.getElementById('login');
const formRegister = document.getElementById('register');
const resultado = document.getElementById('error');
const togglePassword = document.getElementById('verContra')
const usuarioNom = document.getElementById('usuarioNombre')

class Usuario {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}

let usuarios = [];
// Se crean usuarios existentes utilizando el constructor de objetos
const usuario = new Usuario("Pepe", "HelloWorld!")
const usuario2 = new Usuario("NightShadow", "mishijoslosamo")
const usuario3 = new Usuario("NachotaGG", "JustMyDeveloperEmailhaha")

usuarios.push(usuario, usuario2, usuario3);


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passwordLogin = document.getElementById("pass").value;

    for (let user of usuarios) {
        if (user.user == userLogin && user.password == passwordLogin) {
            toastInicioSesionExitoso()
            setTimeout(() => {
                window.location.href = "../index.html"
            }, 1300);
            localStorage.setItem("usuario", user.user);
        } else if ((user.user != userLogin) && (user.password != passwordLogin)) {
            resultado.innerHTML = `
            <div class="paddingBottom"></div>
            <p>Credenciales incorrectas, volvé a intentarlo.</p>`
            // En caso de ingresar mal los datos, se elimina la contraseña para que tenga que volver a ser escrita.
        }
    }
})


function toastInicioSesionExitoso() {
    // Se muestra una notificación de que el producto fue agregado al carrito mediante la libreria toastify
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
    // Se muestra una notificación de que el producto fue agregado al carrito mediante la libreria toastify
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

