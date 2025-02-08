function Header() {
  return `
  <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <!-- Previous desktop header content remains the same until mobile menu button -->
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
                  </div>

                  <!-- Mobile Menu Button -->
                  <button onclick="toggleMobileMenu()" 
                          class="md:hidden text-gray-600 hover:text-primary transition-colors duration-300">
                      <i class="fas fa-bars text-2xl"></i>
                  </button>
              </div>
          </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div id="mobileMenu" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden md:hidden">
          <div class="h-full w-full flex flex-col">
              <!-- Mobile Menu Header -->
              <div class="bg-white px-6 py-4 flex justify-between items-center shadow-lg">
                  <img src="images/logo.png" alt="Janneth Aguirre Bienes Raíces Logo" class="h-12">
                  <button onclick="toggleMobileMenu()" 
                          class="text-gray-600 hover:text-primary transition-colors duration-300">
                      <i class="fas fa-times text-2xl"></i>
                  </button>
              </div>

              <!-- Mobile Menu Content -->
              <div class="flex-1 overflow-y-auto bg-white">
                  <nav class="py-8 px-6 space-y-6">
                      <a href="#inicio" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-home w-6"></i>
                          <span>Inicio</span>
                      </a>
                      <a href="#servicios" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-concierge-bell w-6"></i>
                          <span>Servicios</span>
                      </a>
                      <a href="property-listing.html" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-building w-6"></i>
                          <span>Propiedades</span>
                      </a>
                      <a href="#sobre-nosotros" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-users w-6"></i>
                          <span>Nosotros</span>
                      </a>
                      <a href="#avances-obra" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-hard-hat w-6"></i>
                          <span>Avances de Obra</span>
                      </a>
                      <a href="#revista-online" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-newspaper w-6"></i>
                          <span>Revista Online</span>
                      </a>
                      <a href="#playlists" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-play w-6"></i>
                          <span>Videos</span>
                      </a>
                      <a href="#contacto" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-envelope w-6"></i>
                          <span>Contacto</span>
                      </a>
                      <a href="#descargar" onclick="toggleMobileMenu()" class="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors duration-300">
                          <i class="fas fa-download w-6"></i>
                          <span>Instalar App</span>
                      </a>
                  </nav>

                  <!-- Mobile Social Links -->
                  <div class="border-t border-gray-100 p-6">
                      <div class="grid grid-cols-4 gap-4">
                          <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                              <i class="fab fa-facebook-f text-lg"></i>
                          </a>
                          <a href="https://www.instagram.com/janneth_aguirrem/" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                              <i class="fab fa-instagram text-lg"></i>
                          </a>
                          <a href="https://youtube.com/@jannethaguirrebienesraices5728" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                              <i class="fab fa-youtube text-lg"></i>
                          </a>
                          <a href="https://vm.tiktok.com/ZMhnEwCHp/" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                              <i class="fab fa-tiktok text-lg"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <script>
    // Simple toggle function that will be available globally
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        const isMenuVisible = !mobileMenu.classList.contains('hidden');
        const menuButton = document.querySelector('.md\\:hidden .fas');
        
        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden');
        
        // Toggle body scroll
        document.body.style.overflow = isMenuVisible ? '' : 'hidden';
        
        // Toggle icon
        menuButton.classList.toggle('fa-bars');
        menuButton.classList.toggle('fa-times');
    }

    // Close menu on window resize if it's open
    window.addEventListener('resize', () => {
        const mobileMenu = document.getElementById('mobileMenu');
        if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
  </script>
`
}

