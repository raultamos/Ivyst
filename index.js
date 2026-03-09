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

// const misServicios = [
//     { titulo: "Internet Fibra", desc: "Conexión de alta velocidad para tu hogar." },
//     { titulo: "Cámaras CCTV", desc: "Vigilancia 24/7 con acceso remoto." },
//     { titulo: "Cableado", desc: "Optimización y orden de racks y redes." },
//     { titulo: "Soporte Técnico", desc: "Atención especializada inmediata." }
// ];

/* var textWrapper = document.querySelector('.hero-title .letters, .planes-title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); */

// 2. Now, we animate!
/* anime.timeline({loop: false})
  .add({
    targets: '.hero-title .letter' ,
    translateY: [-100, 0], // Comes from -100px (above) to 0 (its natural position)
    opacity: [0, 1],       // Fades in
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 75 * i // stagger delay
  });

anime.timeline({loop: false})
  .add({
    targets: '.hero-title .letter' ,
    translateY: [-100, 0], // Comes from -100px (above) to 0 (its natural position)
    opacity: [0, 1],       // Fades in
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 75 * i // stagger delay
  }); */
//facilisimo verdad?
document.querySelectorAll('.hero-title .letters, .planes-title .letter').forEach(title => {
  title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// 2. Create ONE timeline for the whole page sequence
var mainTimeline = anime.timeline({
  loop: false,
  easing: 'easeOutExpo'
});

mainTimeline
  // Sequence A: The Hero Title
  .add({
    targets: '.hero-title .letter',
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 1400,
    delay: (el, i) => 75 * i // A cleaner way to write the delay!
  })

  .add({
    targets: '.planes-title .letter',
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 1200,
    delay: (el, i) => 75 * i
  }, '-=400'); 