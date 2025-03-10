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
                  <a href="#servicios" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Servicios inmobiliarios en Ecuador">
                      Servicios
                      <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
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
                     class="text-gray-700 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/5"
                     role="menuitem"
                     title="Descargar app de Janneth Aguirre">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                  </a>
              </nav>
          </div>
      </nav>
  </header>
  `
}

// Export the Header function
window.Header = Header