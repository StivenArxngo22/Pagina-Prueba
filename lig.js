const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-img')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburger') 
const galeria1 = document.querySelectorAll('.im')

galeria1.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=> {
    if(e.target != imageneslight){
        contenedorLight.classList.toggle('show')
        imageneslight.classList.toggle('showImages')
        hamburguer1.style.opacity = '1'
    }
})


const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorLight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    hamburguer1.style.opacity='0'
}