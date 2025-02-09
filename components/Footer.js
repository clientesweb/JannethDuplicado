function Footer() {
  return `
    <footer class="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-24 md:pb-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div class="space-y-6">
                    <img src="images/logo.png" 
                         alt="Janneth Aguirre Bienes Raíces" 
                         class="h-16 md:h-20">
                    <p class="text-gray-400 max-w-xs">
                        Descubre el mundo de los bienes raíces de lujo con Janneth Aguirre, tu experta en propiedades en Ecuador y el mundo.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/janneth_aguirrem/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com/@jannethaguirrebienesraices5728" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://vm.tiktok.com/ZMhnEwCHp/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                            <i class="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 relative inline-block">
                        Enlaces Rápidos
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul class="space-y-4">
                        <li>
                            <a href="index.html#servicios" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="property-listing.html" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Propiedades
                            </a>
                        </li>
                        <li>
                            <a href="index.html#sobre-nosotros" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Sobre Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="index.html#contacto" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Contacto
                            </a>
                        </li>
                        <li>
                            <a href="index.html#descargar" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Descargar App
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 relative inline-block">
                        Servicios
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul class="space-y-4">
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Compra de Propiedades
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Venta de Propiedades
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Alquiler de Propiedades
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Asesoría Inmobiliaria
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Inversiones
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 relative inline-block">
                        Contacto
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul class="space-y-4">
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-phone mt-1 text-primary"></i>
                            <span class="text-gray-400">+593 98 716 7782</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-envelope mt-1 text-primary"></i>
                            <span class="text-gray-400">info@jannethaguirrebienesraices.com</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-map-marker-alt mt-1 text-primary"></i>
                            <span class="text-gray-400">Guayaquil, Ecuador</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-clock mt-1 text-primary"></i>
                            <span class="text-gray-400">Lun - Sáb: 9:00 AM - 6:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 mt-12">
                <div class="flex flex-col justify-between items-center space-y-4">
                    <p class="text-gray-400 text-sm text-center">
                        &copy; ${new Date().getFullYear()} Janneth Aguirre Bienes Raíces. Todos los derechos reservados.
                    </p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Política de Privacidad
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Términos y Condiciones
                        </a>
                    </div>
                    <p class="text-gray-400 text-sm">
                        Desarrollado por 
                        <a href="https://dualitydomain.github.io/Dualitydomain/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="text-primary hover:text-white transition-colors duration-300">
                            Duality Domain
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  `
}

