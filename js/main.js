// Modo oscuro
const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
});

// Loader
$(window).on('load',function(){
    $(".loader").fadeOut(1000);
    $(".content").fadeIn(1000);
});