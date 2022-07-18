const menu =  document.querySelector("nav");
const menuImagen = document.querySelector(".menuHamburguesa");

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


