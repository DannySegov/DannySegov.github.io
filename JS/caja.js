const imagenes = document.querySelectorAll('.img-galeria')
const imagenesCerrar = document.querySelector('.agregar-imagen')
const contenedorCerrar = document.querySelector('.img-cerrar')
const menuBoton1 = document.querySelector('.menuBoton');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{ //Cuando le demos click a una de las imagenes de la galeria se hara una acción
        aparecerImagen(imagen.getAttribute('src')) 
    })
})

contenedorCerrar.addEventListener('click', (e)=>{
    if(e.target != imagenesCerrar){
        contenedorCerrar.classList.toggle('show')
        imagenesCerrar.classList.toggle('showImg')
        menuBoton1.style.opacity = '1' //Cuando se cierre la imagen el menuBoton va a aparecer
    }
})

const aparecerImagen = (imagen)=>{
    imagenesCerrar.src = imagen;
    contenedorCerrar.classList.toggle('show')
    imagenesCerrar.classList.toggle('showImg') //agregue y quite la clase (showiamge) que declare en CSS que es la que hace que aparezca o desaparezca la imagen al darle click
    menuBoton1.style.opacity = '0' //Cuando se abra la imagen el menuBoton va a desaparecer
}