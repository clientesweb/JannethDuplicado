function Header() {
  return `
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300" role="banner">
      <nav class="container mx-auto px-4" role="navigation" aria-label="Navegación principal">
          <div class="flex items-center justify-between h-20">
              <!-- Logo -->
              <div class="flex items-center">
                  <a href="/" class="flex items-center space-x-2 group" aria-label="Janneth Aguirre Bienes Raíces - Inicio">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20%287%29-V67iS14HFyAnU8NllQa1vWqqLmdwO6.png" 
                           alt="Janneth Aguirre Bienes Raíces Logo" 
                           class="h-12 md:h-14 w-auto transform group-hover:scale-105 transition-transform duration-300"
                           width="180"
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
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                          <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </a>
                      <div class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg py-2 hidden group-hover:block border border-gray-100 transform origin-top transition-all duration-300">
                          <a href="services/compra-venta.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-300">
                              Compra y Venta de Propiedades
                          </a>
                          <a href="services/analisis-mercado.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-300">
                              Análisis de Mercado
                          </a>
                          <a href="services/gestion-ventas.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-300">
                              Gestión de Ventas
                          </a>
                          <a href="services/proyectos-planos.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-300">
                              Venta de Proyectos en Planos
                          </a>
                          <a href="services/gestion-alquileres.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-300">
                              Gestión de Alquileres
                          </a>
                          <a href="services/inversiones-internacionales.html" class="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-300">
                              Inversiones Internacionales
                          </a>
                      </div>
                  </div>
                  <a href="property-listing.html" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Propiedades disponibles en Ecuador">
                      Propiedades
                      <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#sobre-nosotros" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Sobre Janneth Aguirre Bienes Raíces">
                      Nosotros
                      <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#contacto" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Contactar a Janneth Aguirre">
                      Contacto
                      <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#descargar" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Descargar app de Janneth Aguirre">
                      Instalar
                      <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
              </nav>

              <!-- Desktop Social Icons -->
              <div class="hidden md:flex items-center space-x-1" role="navigation" aria-label="Redes sociales">
                  <a href="https://www.linkedin.com/in/janneth-aguirre-0b1b3b1b3/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     class="p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
                     aria-label="Síguenos en LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                  </a>
                  <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     class="p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
                     aria-label="Síguenos en Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                  </a>
                  <a href="https://www.instagram.com/janneth_aguirrem/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     class="p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
                     aria-label="Síguenos en Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                  </a>
                  <a href="https://youtube.com/@jannethaguirrebienesraices5728" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     class="p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
                     aria-label="Síguenos en YouTube">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                  </a>
                  <a href="https://vm.tiktok.com/ZMhnEwCHp/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     class="p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
                     aria-label="Síguenos en TikTok">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                  </a>
              </div>

              <!-- Mobile Menu Button -->
              <button class="md:hidden p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300" aria-label="Abrir menú">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
              </button>
          </div>
      </nav>
  </header>
  `
}

// Export the Header function
window.Header = Header

