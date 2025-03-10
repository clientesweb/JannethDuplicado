function PromotionalBanner() {
  // Datos de los proyectos
  const projects = [
    {
      id: "project1",
      title: "Locales comerciales y consultorios médicos",
      location: "Samborondón",
      description: "Modernos espacios comerciales y consultorios médicos ubicados en una de las zonas de mayor crecimiento de Samborondón. Diseñados para profesionales exigentes que buscan comodidad y prestigio.",
      videoSrc: "/video/render_locales.mp4",
      poster: "/placeholder.svg?height=1280&width=720",
      features: ["Áreas desde 40m²", "Acabados de lujo", "Seguridad 24/7", "Estacionamiento privado"]
    },
    {
      id: "project2",
      title: "Departamentos de lujo",
      location: "Isla Mocoli",
      description: "Exclusivos departamentos con vistas panorámicas al río Daule. Diseño contemporáneo y acabados de primera calidad para quienes buscan un estilo de vida premium en un entorno natural privilegiado.",
      videoSrc: "/video/render_mocoli.mp4",
      poster: "/placeholder.svg?height=1280&width=720",
      features: ["2 y 3 dormitorios", "Áreas sociales", "Piscina infinity", "Gimnasio equipado"]
    },
    {
      id: "project3",
      title: "Centro Comercial y Residencias",
      location: "Samborondón",
      description: "Innovador proyecto de uso mixto que combina espacios comerciales en planta baja y residencias exclusivas en los pisos superiores. La perfecta combinación entre comodidad y estilo de vida urbano.",
      videoSrc: "/video/render_samborondon.mp4",
      poster: "/placeholder.svg?height=1280&width=720",
      features: ["Locales comerciales", "Apartamentos de 1-2 habitaciones", "Áreas verdes", "Seguridad integrada"]
    },
    {
      id: "project4",
      title: "Urbanización Residencial",
      location: "Vía a la Costa",
      description: "Proyecto residencial con amplias áreas verdes y casas diseñadas para familias que valoran la tranquilidad y el contacto con la naturaleza, sin renunciar a las comodidades de la vida moderna.",
      videoSrc: "/video/render_alsol.mp4",
      poster: "/placeholder.svg?height=1280&width=720",
      features: ["Casas desde 135m²", "Club social", "Áreas deportivas", "Seguridad perimetral"]
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
              <!-- Diseño responsivo con video vertical y contenido adaptable -->
              <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
                <!-- Video Column - Formato vertical como reel de Instagram -->
                <div class="w-full md:w-auto flex justify-center">
                  <div class="relative rounded-xl overflow-hidden shadow-2xl max-w-[280px] md:max-w-[320px]">
                    <div class="aspect-[9/16] w-full bg-gray-900 relative overflow-hidden">
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
                </div>
                
                <!-- Content Column - Adaptable al espacio disponible -->
                <div class="w-full md:w-3/5 lg:w-2/3">
                  <div class="bg-black/30 backdrop-blur-sm p-5 md:p-6 rounded-xl">
                    <h3 class="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
                      ${project.title}
                    </h3>
                    <div class="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-300">${project.location}</span>
                    </div>
                    
                    <!-- Descripción más compacta -->
                    <p class="text-gray-300 text-sm md:text-base mb-4">
                      ${project.description}
                    </p>
                    
                    <!-- Características en grid más compacto -->
                    <div class="mb-5">
                      <h4 class="text-sm md:text-base font-semibold mb-2 text-primary">Características destacadas:</h4>
                      <ul class="grid grid-cols-2 gap-1 text-sm">
                        ${project.features.map(feature => `
                          <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            ${feature}
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                    
                    <!-- Botón de acción -->
                    <a href="#" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base">
                      Ver detalles del proyecto
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Project Navigation - Más compacto y mejor posicionado -->
        <div class="flex justify-center mt-6 space-x-2" id="project-indicators">
          ${projects.map((project, index) => `
            <button 
              class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${index === 0 ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}" 
              data-index="${index}" 
              aria-label="Ver proyecto ${project.title}">
            </button>
          `).join('')}
        </div>

        <!-- Navigation Arrows - Mejor posicionados -->
        <div class="flex justify-center mt-4 space-x-4">
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
        
        /* Estilos adicionales para mejorar la apariencia en diferentes dispositivos */
        @media (max-width: 640px) {
          .promo-project .aspect-[9/16] {
            max-height: 70vh; /* Limitar altura en móviles */
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .promo-project .aspect-[9/16] {
            max-height: 60vh; /* Limitar altura en tablets */
          }
        }
      </style>
    </section>
  `;
}

// Exportar la función PromotionalBanner
window.PromotionalBanner = PromotionalBanner;

// Inicializar el carrusel de proyectos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Esperar un poco para asegurarse de que el componente esté en el DOM
  setTimeout(initPromoProjects, 500);
});

// Función global para inicializar el carrusel de proyectos
function initPromoProjects() {
  console.log('Inicializando carrusel de proyectos...');
  
  const projects = document.querySelectorAll('.promo-project');
  const indicators = document.querySelectorAll('#project-indicators button');
  const nextButton = document.getElementById('next-project');
  const prevButton = document.getElementById('prev-project');
  
  if (!projects.length || !indicators.length) {
    console.log('No se encontraron elementos del carrusel');
    return;
  }
  
  console.log('Elementos encontrados:', projects.length, 'proyectos,', indicators.length, 'indicadores');
  
  let currentIndex = 0;
  
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
  }
  
  // Función para ir al siguiente proyecto
  function nextProject() {
    console.log('Siguiente proyecto');
    showProject(currentIndex + 1);
  }
  
  // Función para ir al proyecto anterior
  function prevProject() {
    console.log('Proyecto anterior');
    showProject(currentIndex - 1);
  }
  
  // Agregar event listeners
  if (nextButton) {
    console.log('Configurando botón siguiente');
    nextButton.addEventListener('click', function(e) {
      e.preventDefault();
      nextProject();
    });
  } else {
    console.log('Botón siguiente no encontrado');
  }
  
  if (prevButton) {
    console.log('Configurando botón anterior');
    prevButton.addEventListener('click', function(e) {
      e.preventDefault();
      prevProject();
    });
  } else {
    console.log('Botón anterior no encontrado');
  }
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function(e) {
      e.preventDefault();
      showProject(index);
    });
  });
  
  // Iniciar el carrusel mostrando el primer proyecto
  showProject(0);
  
  console.log('Carrusel de proyectos inicializado correctamente (sin autoplay)');
}

// También intentar inicializar después de que la ventana esté completamente cargada
window.addEventListener('load', function() {
  setTimeout(initPromoProjects, 1000);
});

// Intentar inicializar periódicamente hasta que tenga éxito
let initAttempts = 0;
const maxAttempts = 5;
const initInterval = setInterval(function() {
  initAttempts++;
  console.log('Intento de inicialización #' + initAttempts);
  
  const projects = document.querySelectorAll('.promo-project');
  const nextButton = document.getElementById('next-project');
  
  if (projects.length && nextButton) {
    initPromoProjects();
    clearInterval(initInterval);
    console.log('Inicialización exitosa en el intento #' + initAttempts);
  } else if (initAttempts >= maxAttempts) {
    clearInterval(initInterval);
    console.log('Se alcanzó el número máximo de intentos de inicialización');
  }
}, 2000);