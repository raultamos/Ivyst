document.addEventListener('DOMContentLoaded', function() {
    // animacion de elementos y seleccion de objetos a observar
    const sectionsToObserve = document.querySelectorAll(
        '.hero-content, .hero-gif, .planes-title, .cards, .elegirnos h2, .motivo'
    );

    // definir la funcion callback del observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-reveal');
                // Dejar de observar el elemento una vez que se ha revelado
                observer.unobserve(entry.target); 
            }
        });
    };

    // crear la instancia del Intersection Observer
    const observerOptions = {
        root: null, // viewport contenedor
        rootMargin: '0px 0px -100px 0px', // inicio de revelacion de objetos
        threshold: 0.1 // activar cuando al menos el 10% del elemento sea visible
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // comienzo de la observacion
    sectionsToObserve.forEach(element => {
        observer.observe(element);
    });
});

//facilisimo verdad?