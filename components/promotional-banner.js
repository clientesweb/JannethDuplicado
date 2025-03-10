function PromotionalBanner() {
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

        <div class="relative" id="renders-slider">
          <!-- Slider container -->
          <div class="overflow-hidden relative rounded-xl shadow-2xl">
            <div class="flex transition-transform duration-500 ease-out" id="slider-track">
              <!-- Slide 1 -->
              <div class="min-w-full relative">
                <div class="aspect-video md:aspect-[16/9] w-full bg-gray-900 relative overflow-hidden">
                  <video 
                    class="w-full h-full object-cover" 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    poster="/placeholder.svg?height=720&width=1280"
                    aria-label="Render de locales comerciales y consultorios médicos en Samborondón">
                    <source src="url/video/render_locales.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5.
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div class="max-w-lg">
                      <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Locales comerciales y consultorios médicos en Samborondón</h3>
                      <p class="text-gray-200 mb-4 hidden md:block">Espacios premium para su negocio o consulta médica en la zona más exclusiva de Samborondón.</p>
                      <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
              <div class="min-w-full relative">
                <div class="aspect-video md:aspect-[16/9] w-full bg-gray-900 relative overflow-hidden">
                  <video 
                    class="w-full h-full object-cover" 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    poster="/placeholder.svg?height=720&width=1280"
                    aria-label="Render de departamentos de lujo en Isla Mocoli">
                    <source src="url/video/render_mocoli.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5.
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div class="max-w-lg">
                      <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Departamentos de lujo en Isla Mocoli</h3>
                      <p class="text-gray-200 mb-4 hidden md:block">Exclusivos apartamentos con vistas panorámicas y acabados de primera en la prestigiosa Isla Mocoli.</p>
                      <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
              <div class="min-w-full relative">
                <div class="aspect-video md:aspect-[16/9] w-full bg-gray-900 relative overflow-hidden">
                  <video 
                    class="w-full h-full object-cover" 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    poster="/placeholder.svg?height=720&width=1280"
                    aria-label="Render de Centro Comercial y Residencias">
                    <source src="url/video/render_samborodon.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5.
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div class="max-w-lg">
                      <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Centro Comercial y Residencias</h3>
                      <p class="text-gray-200 mb-4 hidden md:block">Concepto mixto que integra comercio y vivienda en un entorno moderno y funcional en Samborondón.</p>
                      <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
              <div class="min-w-full relative">
                <div class="aspect-video md:aspect-[16/9] w-full bg-gray-900 relative overflow-hidden">
                  <video 
                    class="w-full h-full object-cover" 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    poster="/placeholder.svg?height=720&width=1280"
                    aria-label="Render de Urbanización Residencial">
                    <source src="url/video/render_alsol.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5.
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div class="max-w-lg">
                      <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Urbanización Residencial</h3>
                      <p class="text-gray-200 mb-4 hidden md:block">Excelente oportunidad para adquirir tu hogar en una comunidad planificada con todas las comodidades.</p>
                      <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
            <button class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-10 backdrop-blur-sm" id="prev-slide" aria-label="Slide anterior">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-10 backdrop-blur-sm" id="next-slide" aria-label="Siguiente slide">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Indicators -->
          <div class="flex justify-center mt-4 space-x-2" id="slider-indicators">
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 indicator-active" data-index="0" aria-label="Ver slide 1"></button>
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300" data-index="1" aria-label="Ver slide 2"></button>
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300" data-index="2" aria-label="Ver slide 3"></button>
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300" data-index="3" aria-label="Ver slide 4"></button>
          </div>
        </div>
      </div>

      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const track = document.getElementById('slider-track');
          const slides = track.children;
          const nextButton = document.getElementById('next-slide');
          const prevButton = document.getElementById('prev-slide');
          const indicators = document.querySelectorAll('#slider-indicators button');
          
          let currentIndex = 0;
          let slideWidth = slides[0].getBoundingClientRect().width;
          let autoplayInterval;
          
          // Función para actualizar el ancho de los slides cuando cambia el tamaño de la ventana
          function updateSlideWidth() {
            slideWidth = slides[0].getBoundingClientRect().width;
            goToSlide(currentIndex);
          }
          
          // Función para ir a un slide específico
          function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            currentIndex = index;
            track.style.transform = \`translateX(\${-slideWidth * currentIndex}px)\`;
            
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
            
            // Pausar y reproducir videos según el slide activo
            Array.from(slides).forEach((slide, i) => {
              const video = slide.querySelector('video');
              if (video) {
                if (i === currentIndex) {
                  video.play().catch(e => console.log('Error al reproducir video:', e));
                } else {
                  video.pause();
                }
              }
            });
            
            // Reiniciar el autoplay
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
            autoplayInterval = setInterval(nextSlide, 6000); // Cambiar slide cada 6 segundos
          }
          
          // Función para reiniciar el autoplay
          function resetAutoplay() {
            clearInterval(autoplayInterval);
            startAutoplay();
          }
          
          // Event listeners
          nextButton.addEventListener('click', nextSlide);
          prevButton.addEventListener('click', prevSlide);
          
          indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
          });
          
          window.addEventListener('resize', updateSlideWidth);
          
          // Iniciar el slider
          updateSlideWidth();
          startAutoplay();
          
          // Pausar autoplay cuando el usuario interactúa con el slider
          const slider = document.getElementById('renders-slider');
          slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
          slider.addEventListener('mouseleave', startAutoplay);
          
          // Accesibilidad con teclado
          slider.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
          });
        });
      </script>
    </section>
  `;
}

// Exportar la función PromotionalBanner
window.PromotionalBanner = PromotionalBanner;