function Footer() {
  return `
    <footer class="bg-primary text-white py-8 md:py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="images/logo-white.png" alt="Janneth Aguirre Bienes Raíces" class="h-16 md:h-24 mb-4">
            <p class="text-sm md:text-base">Descubre el mundo de los bienes raíces de lujo con Janneth Aguirre, tu experta en propiedades en Ecuador y el mundo.</p>
          </div>
          <div>
            <h3 class="text-xl md:text-2xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li><a href="index.html#servicios" class="hover:text-accent transition-colors duration-300 text-sm md:text-base">Servicios</a></li>
              <li><a href="property-listing.html" class="hover:text-accent transition-colors duration-300 text-sm md:text-base">Propiedades</a></li>
              <li><a href="index.html#sobre-nosotros" class="hover:text-accent transition-colors duration-300 text-sm md:text-base">Sobre Nosotros</a></li>
              <li><a href="index.html#contacto" class="hover:text-accent transition-colors duration-300 text-sm md:text-base">Contacto</a></li>
              <li><a href="index.html#descargar" class="hover:text-accent transition-colors duration-300 text-sm md:text-base">Descargar App</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl md:text-2xl font-bold mb-4">Síguenos</h3>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                <i class="fab fa-facebook-f text-xl md:text-2xl"></i>
              </a>
              <a href="https://instagram.com/janneth_aguirrem" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                <i class="fab fa-instagram text-xl md:text-2xl"></i>
              </a>
              <a href="https://www.youtube.com/@jannethaguirrebienesraices5728" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                <i class="fab fa-youtube text-xl md:text-2xl"></i>
              </a>
              <a href="https://vm.tiktok.com/ZMhnEwCHp/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                <i class="fab fa-tiktok text-xl md:text-2xl"></i>
              </a>
              <a href="https://x.com/cbrjam" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                <i class="fab fa-twitter text-xl md:text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-white/20 text-center">
          <p class="text-sm md:text-base">&copy; ${new Date().getFullYear()} Janneth Aguirre Bienes Raíces. Todos los derechos reservados.</p>
          <p class="mt-2 text-sm md:text-base">Desarrollado por <a href="https://dualitydomain.github.io/Dualitydomain/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Duality Domain</a></p>
        </div>
      </div>
    </footer>
  `
}

// Exportar la función Footer
window.Footer = Footer

