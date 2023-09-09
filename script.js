const botonVolverArriba = document.getElementById('botonVolverArriba');
const botonIrAbajo = document.getElementById('botonIrAbajo');

botonVolverArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

botonIrAbajo.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        botonVolverArriba.style.display = 'block';
    } else {
        botonVolverArriba.style.display = 'none';
    }

    if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
        botonIrAbajo.style.display = 'block';
    } else {
        botonIrAbajo.style.display = 'none';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const botonTop = document.getElementById("botonTop");
botonTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});