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

                  <!-- Mobile Social Icons -->
                  <div class="flex items-center space-x-4 md:hidden" role="navigation" aria-label="Redes sociales">
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
              </div>
          </div>
      </nav>
  </header>

  `
}

// Export the Header function
window.Header = Header

