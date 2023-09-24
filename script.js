const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style")
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px"
            }

            
        }
    });
}


const botonVolverArriba = document.getElementById("botonVolverArriba");
const botonIrAbajo = document.getElementById("botonIrAbajo");

botonVolverArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

botonIrAbajo.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        botonVolverArriba.style.display = "block";
    } else {
        botonVolverArriba.style.display = "none";
    }

    if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
        botonIrAbajo.style.display = "block";
    } else {
        botonIrAbajo.style.display = "none";
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const botonTop = document.getElementById("botonTop");
botonTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function myFunction2() {
    alert("Redireccionando a Wikipedia!");
}

function myFunction() {
    var x = document.getElementsByClassName("city2");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "none" || x[i].style.display === "") {
            x[i].style.display = "block"; // Mostrar el elemento
        } else {
            x[i].style.display = "none"; // Ocultar el elemento
        }
    }
}
