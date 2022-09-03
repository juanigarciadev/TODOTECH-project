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
