function PromotionalBanner() {
  // Datos de los proyectos
  const projects = [
    {
      id: "project1",
      title: "Locales comerciales y consultorios médicos",
      location: "Samborondón",
      description: "Modernos espacios comerciales y consultorios médicos ubicados en una de las zonas de mayor crecimiento de Samborondón. Diseñados para profesionales exigentes que buscan comodidad y prestigio.",
      videoSrc: "url/video/render_locales.mp4",
      poster: "/placeholder.svg?height=720&width=1280",
      features: ["Áreas desde 50m²", "Acabados de lujo", "Seguridad 24/7", "Estacionamiento privado"]
    },
    {
      id: "project2",
      title: "Departamentos de lujo",
      location: "Isla Mocoli",
      description: "Exclusivos departamentos con vistas panorámicas al río Daule. Diseño contemporáneo y acabados de primera calidad para quienes buscan un estilo de vida premium en un entorno natural privilegiado.",
      videoSrc: "url/video/render_mocoli.mp4",
      poster: "/placeholder.svg?height=720&width=1280",
      features: ["2 y 3 dormitorios", "Áreas sociales", "Piscina infinity", "Gimnasio equipado"]
    },
    {
      id: "project3",
      title: "Centro Comercial y Residencias",
      location: "Samborondón",
      description: "Innovador proyecto de uso mixto que combina espacios comerciales en planta baja y residencias exclusivas en los pisos superiores. La perfecta combinación entre comodidad y estilo de vida urbano.",
      videoSrc: "url/video/render_samborodon.mp4",
      poster: "/placeholder.svg?height=720&width=1280",
      features: ["Locales comerciales", "Apartamentos de 1-3 habitaciones", "Áreas verdes", "Seguridad integrada"]
    },
    {
      id: "project4",
      title: "Urbanización Residencial",
      location: "Vía a la Costa",
      description: "Proyecto residencial con amplias áreas verdes y casas diseñadas para familias que valoran la tranquilidad y el contacto con la naturaleza, sin renunciar a las comodidades de la vida moderna.",
      videoSrc: "url/video/render_alsol.mp4",
      poster: "/placeholder.svg?height=720&width=1280",
      features: ["Casas desde 150m²", "Club social", "Áreas deportivas", "Seguridad perimetral"]
    }
  ];

  return `
    <section id="proyectos-destacados" class="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <span class="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Proyectos Destacados
          </span>
          <h2 class="text-3xl md:text-5xl font-serif font-bold mb-4">
            <span class="text-primary">Renders</span>
            <span> Exclusivos</span>
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Explora nuestros proyectos más innovadores en desarrollo. Visualiza el futuro de la arquitectura y el diseño inmobiliario en Ecuador.
          </p>
        </div>

        <div class="promo-projects-container" id="promo-projects">
          ${projects.map((project, index) => `
            <div class="promo-project ${index === 0 ? 'active' : 'hidden'}" data-project-id="${project.id}">
              <div class="flex flex-col lg:flex-row gap-8 items-center">
                <!-- Video Column -->
                <div class="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-2xl">
                  <div class="aspect-video bg-gray-900 relative overflow-hidden">
                    <video 
                      class="w-full h-full object-cover" 
                      ${index === 0 ? 'autoplay' : ''} 
                      muted 
                      loop 
                      playsinline
                      poster="${project.poster}"
                      aria-label="Render de ${project.title} en ${project.location}">
                      <source src="${project.videoSrc}" type="video/mp4">
                      Tu navegador no soporta videos HTML5.
                    </video>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                <!-- Content Column -->
                <div class="w-full lg:w-1/2 p-4 md:p-8">
                  <div class="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-xl">
                    <h3 class="text-2xl md:text-3xl font-bold mb-2 text-white">
                      ${project.title}
                    </h3>
                    <div class="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-300">${project.location}</span>
                    </div>
                    <p class="text-gray-300 mb-6">
                      ${project.description}
                    </p>
                    
                    <div class="mb-8">
                      <h4 class="text-lg font-semibold mb-3 text-primary">Características destacadas:</h4>
                      <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        ${project.features.map(feature => `
                          <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            ${feature}
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                    
                    <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      Ver detalles del proyecto
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Project Navigation -->
        <div class="flex justify-center mt-8 space-x-2" id="project-indicators">
          ${projects.map((project, index) => `
            <button 
              class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${index === 0 ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}" 
              data-index="${index}" 
              aria-label="Ver proyecto ${project.title}">
            </button>
          `).join('')}
        </div>

        <!-- Navigation Arrows -->
        <div class="flex justify-center mt-8 space-x-4">
          <button id="prev-project" class="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 backdrop-blur-sm" aria-label="Proyecto anterior">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button id="next-project" class="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 backdrop-blur-sm" aria-label="Siguiente proyecto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>
        .promo-project {
          transition: opacity 0.5s ease-out;
        }
        .promo-project.active {
          display: block;
          opacity: 1;
        }
        .promo-project.hidden {
          display: none;
          opacity: 0;
        }
      </style>

      <script>
        // Script para inicializar el carrusel de proyectos
        document.addEventListener('DOMContentLoaded', function() {
          initPromoProjects();
        });

        function initPromoProjects() {
          const projects = document.querySelectorAll('.promo-project');
          const indicators = document.querySelectorAll('#project-indicators button');
          const nextButton = document.getElementById('next-project');
          const prevButton = document.getElementById('prev-project');
          
          if (!projects.length || !indicators.length) return;
          
          let currentIndex = 0;
          let autoplayInterval;
          
          // Función para mostrar un proyecto específico
          function showProject(index) {
            if (index < 0) index = projects.length - 1;
            if (index >= projects.length) index = 0;
            
            currentIndex = index;
            
            // Ocultar todos los proyectos y mostrar solo el actual
            projects.forEach((project, i) => {
              if (i === currentIndex) {
                project.classList.remove('hidden');
                project.classList.add('active');
                
                // Reproducir el video del proyecto actual
                const video = project.querySelector('video');
                if (video) {
                  video.play().catch(e => console.log('Error al reproducir video:', e));
                }
              } else {
                project.classList.add('hidden');
                project.classList.remove('active');
                
                // Pausar los videos de los proyectos no visibles
                const video = project.querySelector('video');
                if (video) {
                  video.pause();
                }
              }
            });
            
            // Actualizar indicadores
            indicators.forEach((indicator, i) => {
              if (i === currentIndex) {
                indicator.classList.add('bg-white', 'scale-125');
                indicator.classList.remove('bg-white/30');
              } else {
                indicator.classList.remove('bg-white', 'scale-125');
                indicator.classList.add('bg-white/30');
              }
            });
            
            // Reiniciar autoplay
            resetAutoplay();
          }
          
          // Función para ir al siguiente proyecto
          function nextProject() {
            showProject(currentIndex + 1);
          }
          
          // Función para ir al proyecto anterior
          function prevProject() {
            showProject(currentIndex - 1);
          }
          
          // Función para iniciar el autoplay
          function startAutoplay() {
            clearInterval(autoplayInterval);
            autoplayInterval = setInterval(nextProject, 8000); // Cambiar proyecto cada 8 segundos
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
              nextProject();
            });
          }
          
          if (prevButton) {
            prevButton.addEventListener('click', function(e) {
              e.preventDefault();
              prevProject();
            });
          }
          
          indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function(e) {
              e.preventDefault();
              showProject(index);
            });
          });
          
          // Iniciar el carrusel
          showProject(0);
          startAutoplay();
          
          // Pausar autoplay cuando el usuario interactúa con el carrusel
          const promoSection = document.getElementById('proyectos-destacados');
          if (promoSection) {
            promoSection.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
            promoSection.addEventListener('mouseleave', startAutoplay);
          }
          
          console.log('Carrusel de proyectos inicializado correctamente');
        }
      </script>
    </section>
  `;
}

// Exportar la función PromotionalBanner
window.PromotionalBanner = PromotionalBanner;