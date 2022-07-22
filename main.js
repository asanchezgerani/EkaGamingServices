const menu =  document.querySelector("nav");
const menuImagen = document.querySelector(".menuHamburguesa");
const sliders = [...document.querySelectorAll('.slider_body')];
const arrowNext = document.querySelector('#next');
const arrowBefore = document.querySelector('#before');
let value;

arrowNext.addEventListener('click',() =>changePosition(1));
arrowBefore.addEventListener('click',() =>changePosition(-1));

menuImagen.addEventListener("click", function(){
    if(menuImagen.classList.toggle(".activo"))
    {
        menu.style.display = "flex";
        console.log(menuImagen);
        
    }
    else
    {
        menuImagen.classList.toggle(".inactivo");
        menu.style.display = "none";
        console.log(menuImagen);
    }
});

function changePosition(change)
{
    const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
    
    value = currentElement;
    value+= change;
    if(value === 0 || value == sliders.length+1)
    {
        value = value === 0 ? sliders.length : 1;
    }
    sliders[currentElement- 1].classList.toggle('slider_body--show');
    sliders[value - 1].classList.toggle('slider_body--show');
}


