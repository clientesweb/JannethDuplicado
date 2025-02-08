function Header() {
  return `
  <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-20">
              <div class="flex items-center">
                  <a href="/" class="flex items-center space-x-2 group">
                      <img src="images/logo.png" alt="Janneth Aguirre Bienes Raíces Logo" class="h-12 md:h-16 transform group-hover:scale-105 transition-transform duration-300">
                  </a>
              </div>

              <nav class="hidden md:flex items-center space-x-8">
                  <a href="#servicios" class="text-gray-700 hover:text-primary transition-colors duration-300 relative group">
                      Servicios
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="property-listing.html" class="text-gray-700 hover:text-primary transition-colors duration-300 relative group">
                      Propiedades
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#sobre-nosotros" class="text-gray-700 hover:text-primary transition-colors duration-300 relative group">
                      Nosotros
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#contacto" class="text-gray-700 hover:text-primary transition-colors duration-300 relative group">
                      Contacto
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#descargar" class="text-gray-700 hover:text-primary transition-colors duration-300 relative group">
                      Instalar
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
              </nav>

              <div class="flex items-center space-x-6">
                  <div class="hidden md:flex items-center space-x-4">
                      <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                          <i class="fab fa-facebook-f text-lg"></i>
                      </a>
                      <a href="https://www.instagram.com/janneth_aguirrem/" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                          <i class="fab fa-instagram text-lg"></i>
                      </a>
                      <a href="https://youtube.com/@jannethaguirrebienesraices5728" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                          <i class="fab fa-youtube text-lg"></i>
                      </a>
                      <a href="https://vm.tiktok.com/ZMhnEwCHp/" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                          <i class="fab fa-tiktok text-lg"></i>
                      </a>
                      <a href="https://x.com/cbrjam" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                          <i class="fab fa-twitter text-lg"></i>
                      </a>
                  </div>

                  <button id="mobileMenuButton"
                          class="md:hidden text-gray-600 hover:text-primary transition-colors duration-300 z-50" 
                          aria-label="Menú móvil">
                      <i class="fas fa-bars text-2xl"></i>
                  </button>
              </div>
          </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div id="mobileMenuOverlay" 
           class="fixed inset-0 bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 z-40">
      </div>

      <!-- Mobile Menu Panel -->
      <div id="mobileMenu" 
           class="fixed top-0 right-0 w-[300px] h-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50">
          <div class="h-full flex flex-col">
              <!-- Logo and Close Button -->
              <div class="flex justify-between items-center p-6 border-b border-gray-100">
                  <img src="images/logo.png" alt="Janneth Aguirre Bienes Raíces Logo" class="h-12">
                  <button id="closeMenuButton" class="text-gray-600 hover:text-primary transition-colors duration-300">
                      <i class="fas fa-times text-2xl"></i>
                  </button>
              </div>

              <!-- Navigation Links -->
              <nav class="flex-1 overflow-y-auto py-6 px-6">
                  <div class="space-y-6">
                      <a href="#servicios" class="block text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300 group">
                          <div class="flex items-center">
                              <i class="fas fa-concierge-bell w-8"></i>
                              Servicios
                          </div>
                          <div class="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
                      </a>
                      <a href="property-listing.html" class="block text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300 group">
                          <div class="flex items-center">
                              <i class="fas fa-home w-8"></i>
                              Propiedades
                          </div>
                          <div class="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
                      </a>
                      <a href="#sobre-nosotros" class="block text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300 group">
                          <div class="flex items-center">
                              <i class="fas fa-users w-8"></i>
                              Nosotros
                          </div>
                          <div class="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
                      </a>
                      <a href="#contacto" class="block text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300 group">
                          <div class="flex items-center">
                              <i class="fas fa-envelope w-8"></i>
                              Contacto
                          </div>
                          <div class="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
                      </a>
                      <a href="#descargar" class="block text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300 group">
                          <div class="flex items-center">
                              <i class="fas fa-download w-8"></i>
                              Instalar
                          </div>
                          <div class="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
                      </a>
                  </div>
              </nav>

              <!-- Social Links -->
              <div class="p-6 border-t border-gray-100">
                  <div class="flex justify-center space-x-6">
                      <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                          <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/janneth_aguirrem/" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                          <i class="fab fa-instagram"></i>
                      </a>
                      <a href="https://youtube.com/@jannethaguirrebienesraices5728" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                          <i class="fab fa-youtube"></i>
                      </a>
                      <a href="https://vm.tiktok.com/ZMhnEwCHp/" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                          <i class="fab fa-tiktok"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const closeMenuButton = document.getElementById('closeMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const menuIcon = mobileMenuButton.querySelector('i');
        
        function openMenu() {
            document.body.style.overflow = 'hidden';
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
        
        function closeMenu() {
            document.body.style.overflow = '';
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
        
        // Toggle menu
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenu.classList.contains('translate-x-full')) {
                openMenu();
            } else {
                closeMenu();
            }
        });
        
        // Close menu
        closeMenuButton.addEventListener('click', closeMenu);
        mobileMenuOverlay.addEventListener('click', closeMenu);
        
        // Close menu on link click
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Close menu on window resize if it's open
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && !mobileMenu.classList.contains('translate-x-full')) {
                closeMenu();
            }
        });
    });
  </script>
`
}

