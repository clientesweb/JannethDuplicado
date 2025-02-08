function Header() {
  return `
  <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm" role="banner">
      <nav class="container mx-auto px-4" role="navigation" aria-label="Navegación principal">
          <div class="flex items-center justify-between h-20">
              <!-- Logo -->
              <div class="flex items-center">
                  <a href="/" class="flex items-center space-x-2 group" aria-label="Janneth Aguirre Bienes Raíces - Inicio">
                      <img src="images/logo.png" 
                           alt="Janneth Aguirre Bienes Raíces Logo" 
                           class="h-12 md:h-16 transform group-hover:scale-105 transition-transform duration-300"
                           width="64"
                           height="64">
                  </a>
              </div>

              <!-- Desktop Navigation -->
              <nav class="hidden md:flex items-center space-x-8" role="menubar">
                  <div class="relative group">
                      <a href="#servicios" 
                         class="text-gray-700 hover:text-primary transition-colors duration-300 relative group inline-flex items-center"
                         role="menuitem"
                         aria-haspopup="true"
                         aria-expanded="false"
                         title="Servicios inmobiliarios en Ecuador">
                          Servicios
                          <i class="fas fa-chevron-down ml-2 text-sm"></i>
                          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </a>
                      <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                          <a href="services/compra-venta.html" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Compra y Venta de Propiedades
                          </a>
                          <a href="services/analisis-mercado.html" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Análisis de Mercado
                          </a>
                          <a href="services/gestion-ventas.html" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Gestión de Ventas
                          </a>
                          <a href="services/proyectos-planos.html" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Venta de Proyectos en Planos
                          </a>
                          <a href="services/gestion-alquileres.html" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Gestión de Alquileres
                          </a>
                          <a href="services/inversiones-internacionales.html" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Inversiones Internacionales
                          </a>
                      </div>
                  </div>
                  <a href="property-listing.html" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Propiedades disponibles en Ecuador">
                      Propiedades
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#sobre-nosotros" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Sobre Janneth Aguirre Bienes Raíces">
                      Nosotros
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#contacto" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Contactar a Janneth Aguirre">
                      Contacto
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#descargar" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Descargar app de Janneth Aguirre">
                      Instalar
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
              </nav>

              <!-- Desktop Social Icons -->
              <div class="flex items-center space-x-6">
                  <div class="hidden md:flex items-center space-x-4" role="navigation" aria-label="Redes sociales">
                      <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                         aria-label="Síguenos en Facebook">
                          <i class="fab fa-facebook-f text-lg" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.instagram.com/janneth_aguirrem/" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                         aria-label="Síguenos en Instagram">
                          <i class="fab fa-instagram text-lg" aria-hidden="true"></i>
                      </a>
                      <a href="https://youtube.com/@jannethaguirrebienesraices5728" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                         aria-label="Síguenos en YouTube">
                          <i class="fab fa-youtube text-lg" aria-hidden="true"></i>
                      </a>
                      <a href="https://vm.tiktok.com/ZMhnEwCHp/" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                         aria-label="Síguenos en TikTok">
                          <i class="fab fa-tiktok text-lg" aria-hidden="true"></i>
                      </a>
                  </div>

                  <!-- Mobile Menu Button -->
                  <button id="menuButton" 
                          class="md:hidden text-gray-600 hover:text-primary transition-colors duration-300"
                          aria-label="Abrir menú móvil"
                          aria-expanded="false"
                          aria-controls="mobileMenu">
                      <i class="fas fa-bars text-2xl" aria-hidden="true"></i>
                  </button>
              </div>
          </div>
      </nav>

      <!-- Mobile Navigation Menu -->
      <div id="mobileMenu" 
           class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden md:hidden"
           role="dialog"
           aria-modal="true"
           aria-label="Menú de navegación móvil">
          <div class="h-full w-full flex flex-col">
              <!-- Mobile Menu Header -->
              <div class="bg-white px-6 py-4 flex justify-between items-center shadow-lg">
                  <img src="images/logo.png" 
                       alt="Janneth Aguirre Bienes Raíces Logo" 
                       class="h-12"
                       width="48"
                       height="48">
                  <button id="closeButton" 
                          class="text-gray-600 hover:text-primary transition-colors duration-300"
                          aria-label="Cerrar menú">
                      <i class="fas fa-times text-2xl" aria-hidden="true"></i>
                  </button>
              </div>

              <!-- Mobile Menu Content -->
              <div class="flex-1 overflow-y-auto bg-white">
                  <nav class="py-8 px-6 space-y-6" role="navigation" aria-label="Menú móvil">
                      <a href="#inicio" 
                         class="mobile-link flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                         title="Inicio - Janneth Aguirre Bienes Raíces">
                          <i class="fas fa-home w-6" aria-hidden="true"></i>
                          <span>Inicio</span>
                      </a>
                      <div class="space-y-2">
                          <a href="#servicios" 
                             class="mobile-link flex items-center justify-between w-full text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                             title="Servicios inmobiliarios en Ecuador">
                              <div class="flex items-center space-x-4">
                                  <i class="fas fa-concierge-bell w-6" aria-hidden="true"></i>
                                  <span>Servicios</span>
                              </div>
                              <i class="fas fa-chevron-down"></i>
                          </a>
                          <div class="pl-10 space-y-2">
                              <a href="services/compra-venta.html" class="block text-gray-600 hover:text-primary transition-colors duration-300 mobile-link">
                                  Compra y Venta de Propiedades
                              </a>
                              <a href="services/analisis-mercado.html" class="block text-gray-600 hover:text-primary transition-colors duration-300 mobile-link">
                                  Análisis de Mercado
                              </a>
                              <a href="services/gestion-ventas.html" class="block text-gray-600 hover:text-primary transition-colors duration-300 mobile-link">
                                  Gestión de Ventas
                              </a>
                              <a href="services/proyectos-planos.html" class="block text-gray-600 hover:text-primary transition-colors duration-300 mobile-link">
                                  Venta de Proyectos en Planos
                              </a>
                              <a href="services/gestion-alquileres.html" class="block text-gray-600 hover:text-primary transition-colors duration-300 mobile-link">
                                  Gestión de Alquileres
                              </a>
                              <a href="services/inversiones-internacionales.html" class="block text-gray-600 hover:text-primary transition-colors duration-300 mobile-link">
                                  Inversiones Internacionales
                              </a>
                          </div>
                      </div>
                      <a href="property-listing.html" 
                         class="mobile-link flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                         title="Propiedades disponibles en Ecuador">
                          <i class="fas fa-building w-6" aria-hidden="true"></i>
                          <span>Propiedades</span>
                      </a>
                      <a href="#sobre-nosotros" 
                         class="mobile-link flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                         title="Sobre Janneth Aguirre Bienes Raíces">
                          <i class="fas fa-users w-6" aria-hidden="true"></i>
                          <span>Nosotros</span>
                      </a>
                      <a href="#avances-obra" 
                         class="mobile-link flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                         title="Avances de obra de proyectos inmobiliarios">
                          <i class="fas fa-hard-hat w-6" aria-hidden="true"></i>
                          <span>Avances de Obra</span>
                      </a>
                      <a href="#revista-online" 
                         class="mobile-link flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                         title="Revista inmobiliaria online">
                          <i class="fas fa-newspaper w-6" aria-hidden="true"></i>
                          <span>Revista Online</span>
                      </a>
                      <a href="#playlists" 
                         class="mobile-link flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                         title="Videos de propiedades y consejos inmobiliarios">
                          <i class="fas fa-play w-6" aria-hidden="true"></i>
                          <span>Videos</span>
                      </a>
                      <a href="#contacto" 
                         class="mobile-link flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                         title="Contactar a Janneth Aguirre">
                          <i class="fas fa-envelope w-6" aria-hidden="true"></i>
                          <span>Contacto</span>
                      </a>
                      <a href="#descargar" 
                         class="mobile-link flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300"
                         title="Descargar app de Janneth Aguirre">
                          <i class="fas fa-download w-6" aria-hidden="true"></i>
                          <span>Instalar App</span>
                      </a>
                  </nav>

                  <!-- Mobile Social Links -->
                  <div class="border-t border-gray-100 p-6">
                      <div class="grid grid-cols-4 gap-4" role="navigation" aria-label="Redes sociales">
                          <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                             aria-label="Facebook">
                              <i class="fab fa-facebook-f text-lg" aria-hidden="true"></i>
                          </a>
                          <a href="https://www.instagram.com/janneth_aguirrem/" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                             aria-label="Instagram">
                              <i class="fab fa-instagram text-lg" aria-hidden="true"></i>
                          </a>
                          <a href="https://youtube.com/@jannethaguirrebienesraices5728" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                             aria-label="YouTube">
                              <i class="fab fa-youtube text-lg" aria-hidden="true"></i>
                          </a>
                          <a href="https://vm.tiktok.com/ZMhnEwCHp/" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                             aria-label="TikTok">
                              <i class="fab fa-tiktok text-lg" aria-hidden="true"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <script>
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!menuButton || !closeButton || !mobileMenu) {
    console.error('Elementos del menú móvil no encontrados');
    return;
  }

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    menuButton.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
    menuButton.setAttribute('aria-expanded', 'false');
  }

  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });

  // Asegurarse de que el menú esté cerrado al cargar la página
  closeMenu();
});
</script>
`
}

// Export the Header function
window.Header = Header

