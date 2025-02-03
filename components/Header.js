function Header() {
  return `
    <header class="sticky top-0 z-40 bg-white shadow-md">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center">
                <img src="images/logo.png" alt="Janneth Aguirre Bienes Raíces Logo" class="h-16 mr-4">
            </div>
            <nav class="hidden md:flex space-x-6">
                <a href="#servicios" class="text-gray-800 hover:text-primary transition-colors duration-300">Servicios</a>
                <a href="#sobre-nosotros" class="text-gray-800 hover:text-primary transition-colors duration-300">Nosotros</a>
                <a href="#contacto" class="text-gray-800 hover:text-primary transition-colors duration-300">Contacto</a>
                <a href="#descargar" class="text-gray-800 hover:text-primary transition-colors duration-300">Instalar</a>
            </nav>
            <div class="flex items-center space-x-4">
                <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-colors duration-300">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/janneth_aguirrem/profilecard/?igsh=anQ1c2sxcXFsaG85" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-colors duration-300">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com/@jannethaguirrebienesraices5728?si=15ukjHDXRUQyr0pV" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-colors duration-300">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://vm.tiktok.com/ZMhnEwCHp/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-colors duration-300">
                    <i class="fab fa-tiktok"></i>
                </a>
                <a href="https://x.com/cbrjam" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-colors duration-300">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        </div>
    </header>
    `
}

