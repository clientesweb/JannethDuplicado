function PromotionalBanner() {
  // Generar un ID único para este slider para evitar conflictos
  const sliderId = 'renders-slider-' + Math.random().toString(36).substring(2, 9);
  
  return `
    <section class="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <span class="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Proyectos Destacados
          </span>
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            <span class="text-primary">Renders</span>
            <span> Exclusivos</span>
          </h2>
          <p class="text-gray-300 text-lg">
            Explora nuestros proyectos más innovadores en desarrollo
          </p>
        </div>

        <div class="relative promotional-slider" id="${sliderId}">
          <!-- Slider container -->
          <div class="overflow-hidden relative rounded-xl shadow-2xl">
            <div class="flex transition-transform duration-500 ease-out slider-track">
              <!-- Slide 1 -->
              <div class="min-w-full relative slider-slide" data-index="0">
                <div class="aspect-[9/16] max-w-sm mx-auto bg-gray-900 relative overflow-hidden rounded-xl">
                  <video 
                    class="w-full h-full object-cover slider-video" 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    poster="/placeholder.svg?height=1280&width=720"
                    aria-label="Render de locales comerciales y consultorios médicos en Samborondón">
                    <source src="url/video/render_locales.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5.
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div>
                      <h3 class="text-lg md:text-xl font-bold text-white mb-2">Locales comerciales y consultorios médicos en Samborondón</h3>
                      <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full justify-center">
                        Ver detalles
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 2 -->
              <div class="min-w-full relative slider-slide" data-index="1">
                <div class="aspect-[9/16] max-w-sm mx-auto bg-gray-900 relative overflow-hidden rounded-xl">
                  <video 
                    class="w-full h-full object-cover slider-video" 
                    muted 
                    loop 
                    playsinline
                    poster="/placeholder.svg?height=1280&width=720"
                    aria-label="Render de departamentos de lujo en Isla Mocoli">
                    <source src="url/video/render_mocoli.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5.
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div>
                      <h3 class="text-lg md:text-xl font-bold text-white mb-2">Departamentos de lujo en Isla Mocoli</h3>
                      <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full justify-center">
                        Ver detalles
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 3 -->
              <div class="min-w-full relative slider-slide" data-index="2">
                <div class="aspect-[9/16] max-w-sm mx-auto bg-gray-900 relative overflow-hidden rounded-xl">
                  <video 
                    class="w-full h-full object-cover slider-video" 
                    muted 
                    loop 
                    playsinline
                    poster="/placeholder.svg?height=1280&width=720"
                    aria-label="Render de Centro Comercial y Residencias">
                    <source src="url/video/render_samborodon.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5.
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div>
                      <h3 class="text-lg md:text-xl font-bold text-white mb-2">Centro Comercial y Residencias</h3>
                      <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full justify-center">
                        Ver detalles
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 4 -->
              <div class="min-w-full relative slider-slide" data-index="3">
                <div class="aspect-[9/16] max-w-sm mx-auto bg-gray-900 relative overflow-hidden rounded-xl">
                  <video 
                    class="w-full h-full object-cover slider-video" 
                    muted 
                    loop 
                    playsinline
                    poster="/placeholder.svg?height=1280&width=720"
                    aria-label="Render de Urbanización Residencial">
                    <source src="url/video/render_alsol.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5.
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div>
                      <h3 class="text-lg md:text-xl font-bold text-white mb-2">Urbanización Residencial</h3>
                      <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full justify-center">
                        Ver detalles
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Arrows -->
            <button class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-10 backdrop-blur-sm slider-prev" aria-label="Slide anterior">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-10 backdrop-blur-sm slider-next" aria-label="Siguiente slide">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Indicators -->
          <div class="flex justify-center mt-4 space-x-2 slider-indicators">
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 indicator-active slider-indicator" data-index="0" aria-label="Ver slide 1"></button>
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 slider-indicator" data-index="1" aria-label="Ver slide 2"></button>
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 slider-indicator" data-index="2" aria-label="Ver slide 3"></button>
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 slider-indicator" data-index="3" aria-label="Ver slide 4"></button>
          </div>
        </div>
      </div>
    </section>

    <script>
    // Script inline para inicializar el slider inmediatamente después de que se inserte en el DOM
    (function() {
      // Función para inicializar el slider
      function initSlider(sliderId) {
        console.log('Intentando inicializar slider:', sliderId);
        
        const slider = document.getElementById(sliderId);
        if (!slider) {
          console.error('No se encontró el slider con ID:', sliderId);
          return false;
        }
        
        const track = slider.querySelector('.slider-track');
        const slides = slider.querySelectorAll('.slider-slide');
        const nextButton = slider.querySelector('.slider-next');
        const prevButton = slider.querySelector('.slider-prev');
        const indicators = slider.querySelectorAll('.slider-indicator');
        
        if (!track || slides.length === 0) {
          console.error('Elementos del slider no encontrados');
          return false;
        }
        
        console.log('Elementos del slider encontrados, inicializando...');
        
        let currentIndex = 0;
        let slideWidth = slides[0].getBoundingClientRect().width;
        let autoplayInterval;
        
        // Función para actualizar el ancho de los slides
        function updateSlideWidth() {
          slideWidth = slides[0].getBoundingClientRect().width;
          goToSlide(currentIndex, false);
        }
        
        // Función para ir a un slide específico
        function goToSlide(index, animate = true) {
          if (index < 0) index = slides.length - 1;
          if (index >= slides.length) index = 0;
          
          currentIndex = index;
          
          if (animate) {
            track.style.transition = 'transform 500ms ease-out';
          } else {
            track.style.transition = 'none';
          }
          
          track.style.transform = 'translateX(' + (-slideWidth * currentIndex) + 'px)';
          
          if (!animate) {
            setTimeout(() => {
              track.style.transition = 'transform 500ms ease-out';
            }, 50);
          }
          
          // Actualizar indicadores
          indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
              indicator.classList.add('bg-white', 'indicator-active');
              indicator.classList.remove('bg-white/30');
            } else {
              indicator.classList.remove('bg-white', 'indicator-active');
              indicator.classList.add('bg-white/30');
            }
          });
          
          // Pausar y reproducir videos
          slides.forEach((slide, i) => {
            const video = slide.querySelector('.slider-video');
            if (video) {
              if (i === currentIndex) {
                video.play().catch(e => console.log('Error al reproducir video:', e));
              } else {
                video.pause();
              }
            }
          });
          
          resetAutoplay();
        }
        
        // Función para ir al siguiente slide
        function nextSlide() {
          goToSlide(currentIndex + 1);
        }
        
        // Función para ir al slide anterior
        function prevSlide() {
          goToSlide(currentIndex - 1);
        }
        
        // Función para iniciar el autoplay
        function startAutoplay() {
          clearInterval(autoplayInterval);
          autoplayInterval = setInterval(nextSlide, 6000);
        }
        
        // Función para reiniciar el autoplay
        function resetAutoplay() {
          clearInterval(autoplayInterval);
          startAutoplay();
        }
        
        // Agregar event listeners
        if (nextButton) {
          nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
          });
        }
        
        if (prevButton) {
          prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
          });
        }
        
        indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(index);
          });
        });
        
        window.addEventListener('resize', updateSlideWidth);
        
        // Iniciar el slider
        updateSlideWidth();
        startAutoplay();
        
        // Pausar autoplay cuando el usuario interactúa con el slider
        slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        slider.addEventListener('mouseleave', startAutoplay);
        
        // Accesibilidad con teclado
        slider.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') prevSlide();
          if (e.key === 'ArrowRight') nextSlide();
        });
        
        console.log('Slider inicializado correctamente:', sliderId);
        return true;
      }
      
      // Intentar inicializar el slider inmediatamente
      let initialized = initSlider('${sliderId}');
      
      // Si no se pudo inicializar, intentar nuevamente después de un breve retraso
      if (!initialized) {
        console.log('Reintentando inicialización después de un retraso...');
        
        // Intentar varias veces con diferentes retrasos
        setTimeout(() => initSlider('${sliderId}'), 100);
        setTimeout(() => initSlider('${sliderId}'), 500);
        setTimeout(() => initSlider('${sliderId}'), 1000);
        setTimeout(() => initSlider('${sliderId}'), 2000);
      }
    })();
    </script>
  `;
}

// Exportar la función PromotionalBanner
window.PromotionalBanner = PromotionalBanner;

// Función global para inicializar todos los sliders promocionales en la página
window.initAllPromotionalSliders = function() {
  console.log('Buscando sliders promocionales...');
  
  // Buscar todos los sliders promocionales en la página
  const sliders = document.querySelectorAll('.promotional-slider');
  
  if (sliders.length === 0) {
    console.log('No se encontraron sliders promocionales en la página');
    return;
  }
  
  console.log('Se encontraron ' + sliders.length + ' sliders promocionales');
  
  // Intentar inicializar cada slider
  sliders.forEach(slider => {
    const sliderId = slider.id;
    console.log('Intentando inicializar slider:', sliderId);
    
    // Crear un evento personalizado para este slider
    const event = new CustomEvent('initialize-slider', { detail: { sliderId } });
    document.dispatchEvent(event);
  });
};

// Intentar inicializar los sliders en diferentes momentos
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(window.initAllPromotionalSliders, 500);
});

window.addEventListener('load', function() {
  setTimeout(window.initAllPromotionalSliders, 500);
});

// También intentar después de 3 segundos para asegurarnos
setTimeout(window.initAllPromotionalSliders, 3000);