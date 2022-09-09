// Notificaciones para contactos.html
const enviarFormulario = document.getElementById('enviarForm')
const resetFormulario = document.getElementById('resetForm')
const nombreForm = document.getElementById('nombre-completo')
const emailForm = document.getElementById('email')
const consultaForm = document.getElementById('consulta')


enviarFormulario.onsubmit = (e) => {
    e.preventDefault()
    Toastify({
        text: "Enviando formulario, por favor, espere hasta ser redirigido.",
        avatar: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/whatsapp/238/white-heavy-check-mark_2705.png",
        duration: 5000,
        stopOnFocus: false,
        gravity: "bottom",
        className: "info",
        style: {
            background: "linear-gradient(to right, #15B206, #51E721)",
        }
    }).showToast();
}

resetFormulario.onclick = () => {
    Toastify({
        text: "Formulario restablecido exitósamente.",
        avatar: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/whatsapp/238/white-heavy-check-mark_2705.png",
        duration: 2000,
        stopOnFocus: false,
        className: "info",
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #15B206, #51E721)",
        }
    }).showToast();
}