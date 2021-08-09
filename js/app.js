const contenedor = document.querySelector('.contenedor');
const comprobarAncho = () => {
  if(window.innerWidth <= 768){
    contenedor.classList.remove('active');
  }
  else {
    contenedor.classList.add('active');
  }
}

document.querySelector('#boton-menu').addEventListener('click',() => {
  contenedor.classList.toggle('active');
});

window.addEventListener('resize', comprobarAncho);
comprobarAncho();