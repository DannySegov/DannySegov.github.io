const menuBoton = document.querySelector('.menuBoton'); //Devuelve el primer elemento de la clase menuBoton
const menu = document.querySelector('.menu-navegacion'); //Devuelve el primer elemento de la clase menu-navegacion

//console.log(menu)
//console.log(menuBoton)

menuBoton.addEventListener('click', ()=>{ //Aqui le damos indicaciones de que al elemento menuBoton le queremos agregar un evento click y que cuando el usuario le de click al icono menuBoton se arroje una función de flecha
    menu.classList.toggle("spread")//En esta linea decimos que cada vez que toque el menuBoton nos va a arrojar el menu de navegación o no los va a quitar
})

