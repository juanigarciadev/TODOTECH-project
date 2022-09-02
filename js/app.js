// Modo oscuro
const btnSwitch = document.querySelector('#switchModoOscuro')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')

    // Guardamos el modo en el localStorage.
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true')
    } else {
        localStorage.setItem('dark-mode', 'false')
    }
})

// Obtenemos el modo actual.

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark')
} else {
    document.body.classList.remove('dark')
}

