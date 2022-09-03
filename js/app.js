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




// Notificaciones para contactos.html
const enviarFormulario = document.getElementById('enviarForm')
const resetFormulario = document.getElementById('resetForm')

enviarFormulario.onclick = (e) => {
    e.preventDefault
    Toastify({
        text: "Enviando formulario, por favor, espere hasta ser redirigido.",
        avatar: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/whatsapp/238/white-heavy-check-mark_2705.png",
        duration: 5000,
        stopOnFocus: false,
        className: "info",
        style: {
            background: "linear-gradient(to right, #15B206, #51E721)",
        }
    }).showToast();
}

resetFormulario.onclick = () => {
    Toastify({
        text: "Formulario restablecido exitósamente.",
        avatar: "https://cdn-0.emojis.wiki/emoji-pics/facebook/cross-mark-button-facebook.png",
        duration: 2000,
        stopOnFocus: false,
        className: "info",
        style: {
            background: "linear-gradient(to right, #FE8227, #FE2727)",
        }
    }).showToast();
}