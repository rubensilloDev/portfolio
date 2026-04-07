let menuHamburguesa = document.querySelector('.menu-hamburguesa');
let menuNavegacion = document.querySelector('.menu-navegacion');
let menuHambuguesaCerrar = document.querySelector('.menu-hamburguesa-cerrar');

menuHamburguesa.addEventListener('click', () => {
    menuHamburguesa.classList.add('no-activo')
    menuNavegacion.classList.toggle('activo')
    menuHambuguesaCerrar.classList.toggle('activo')
    document.documentElement.classList.add('bloquear-scroll');
});

menuHambuguesaCerrar.addEventListener('click', () => {
    menuNavegacion.classList.toggle('activo')
    menuHambuguesaCerrar.classList.toggle('activo')
    menuHamburguesa.classList.remove('no-activo')
    document.documentElement.classList.remove('bloquear-scroll');
});




// ANIMACION DE CONTADOR 

// 1. Primero hay que coger al numero que queremos hacer esa animacion

let contador = document.getElementById('contador-proyectos')
let cuenta = 0 // el numero por el cual queremos iniciar


// 2. Creamos la funcion que vamos a crear con la animacion

function animacionContador() {
    if (cuenta < 15) {
        cuenta++
        contador.innerText = "+" + cuenta // esto lo que hace es que lo actualiza para que se vea en la web

        // y ahora debemos hacer que se ejecute la funcion cada 100 ms
        setTimeout(animacionContador, 70)
    }
}



// 3. Para que se ejecute al hacer scroll cuando lo vemos por pantalla


const vigilante = new IntersectionObserver((cosasVistas) => {
    // Ahora le decimos que por cada una de esas cosas de la lista que nos a dado hacemos lo siguiente
    cosasVistas.forEach(cosavista => {
        if (cosavista.isIntersecting) {
            animacionContador()
            // y luego dejamos de vigilar pa que si se sube o algo no se vuelva a ejecutar
            vigilante.unobserve(cosavista.target)
        }


    })


}, { threshold: 0.5 });

vigilante.observe(contador)

