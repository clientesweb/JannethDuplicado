function BottomNavigation() {
  return `
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50 md:hidden" aria-label="Navegación móvil">
      <div class="flex justify-around items-center h-16 px-2">
        <a href="index.html#servicios" 
           class="relative flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-primary focus:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
           aria-label="Servicios">
          <div class="flex items-center justify-center h-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <span class="text-xs font-medium mt-1">Servicios</span>
          <span class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-[.active]:opacity-100 transition-opacity duration-200"></span>
        </a>
        
        <a href="property-listing.html" 
           class="relative flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-primary focus:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
           aria-label="Propiedades">
          <div class="flex items-center justify-center h-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span class="text-xs font-medium mt-1">Propiedades</span>
          <span class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-[.active]:opacity-100 transition-opacity duration-200"></span>
        </a>
        
        <a href="index.html#sobre-nosotros" 
           class="relative flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-primary focus:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
           aria-label="Nosotros">
          <div class="flex items-center justify-center h-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <span class="text-xs font-medium mt-1">Nosotros</span>
          <span class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-[.active]:opacity-100 transition-opacity duration-200"></span>
        </a>
        
        <a href="index.html#contacto" 
           class="relative flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-primary focus:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
           aria-label="Contacto">
          <div class="flex items-center justify-center h-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span class="text-xs font-medium mt-1">Contacto</span>
          <span class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-[.active]:opacity-100 transition-opacity duration-200"></span>
        </a>
      </div>
    </nav>

    <script>
      // Script para detectar la página activa y marcarla en el menú
      document.addEventListener('DOMContentLoaded', function() {
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
          const linkPath = link.getAttribute('href');
          
          // Verificar si el enlace coincide con la ruta actual o el hash actual
          if ((currentPath.includes(linkPath) && !linkPath.includes('#')) || 
              (linkPath.includes('#') && currentHash === linkPath.substring(linkPath.indexOf('#')))) {
            link.classList.add('active');
            link.classList.add('text-primary');
          }
        });
      });
    </script>
  `
}

// Exportar la función BottomNavigation
window.BottomNavigation = BottomNavigation