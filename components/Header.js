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

                    <button class="md:hidden text-gray-600 hover:text-primary transition-colors duration-300" 
                            onclick="toggleMobileMenu()">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden" onclick="toggleMobileMenu()">
            <div class="absolute right-0 top-0 h-full w-64 bg-white shadow-lg" 
                 onclick="event.stopPropagation()">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-8">
                        <img src="images/logo.png" alt="Janneth Aguirre Bienes Raíces Logo" class="h-12">
                        <button class="text-gray-600 hover:text-primary transition-colors duration-300" 
                                onclick="toggleMobileMenu()">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                    </div>
                    <nav class="flex flex-col space-y-4">
                        <a href="#servicios" class="text-gray-700 hover:text-primary transition-colors duration-300 py-2">
                            Servicios
                        </a>
                        <a href="property-listing.html" class="text-gray-700 hover:text-primary transition-colors duration-300 py-2">
                            Propiedades
                        </a>
                        <a href="#sobre-nosotros" class="text-gray-700 hover:text-primary transition-colors duration-300 py-2">
                            Nosotros
                        </a>
                        <a href="#contacto" class="text-gray-700 hover:text-primary transition-colors duration-300 py-2">
                            Contacto
                        </a>
                        <a href="#descargar" class="text-gray-700 hover:text-primary transition-colors duration-300 py-2">
                            Instalar
                        </a>
                    </nav>
                    <div class="mt-8 flex justify-center space-x-4">
                        <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="text-gray-600 hover:text-primary transition-colors duration-300">
                            <i class="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="https://www.instagram.com/janneth_aguirrem/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="text-gray-600 hover:text-primary transition-colors duration-300">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="https://youtube.com/@jannethaguirrebienesraices5728" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="text-gray-600 hover:text-primary transition-colors duration-300">
                            <i class="fab fa-youtube text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <script>
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        }

        // Close mobile menu on window resize if it's open
        window.addEventListener('resize', () => {
            const menu = document.getElementById('mobileMenu');
            if (window.innerWidth >= 768 && !menu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    </script>
  `
}

