function AppDownload() {
  return `
    <section id="descargar" class="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                <div class="md:w-1/2 text-center md:text-left">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-primary">
                        Lleva el Poder Inmobiliario en tu Bolsillo
                    </h2>
                    <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                        Descubre propiedades exclusivas, recibe notificaciones instantáneas y contacta con nosotros directamente desde tu dispositivo móvil.
                    </p>
                    <div class="space-y-6">
                        <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <a href="#" class="transform hover:scale-105 transition-transform duration-300">
                                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                                     alt="Descargar en App Store" 
                                     class="h-14 w-auto">
                            </a>
                            <a href="App/JABienesRaíces.apk" class="transform hover:scale-105 transition-transform duration-300">
                                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                                     alt="Disponible en Google Play" 
                                     class="h-14 w-auto">
                            </a>
                        </div>
                        <div class="flex items-center justify-center md:justify-start space-x-8 text-gray-600">
                            <div class="flex items-center">
                                <i class="fas fa-star text-primary mr-2"></i>
                                <span>4.8/5 Rating</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-download text-primary mr-2"></i>
                                <span>10K+ Descargas</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 relative">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
                        <img src="images/app-jannethaguirre.png" 
                             alt="App Janneth Aguirre Bienes Raíces" 
                             class="relative z-10 mx-auto transform hover:-rotate-2 transition-transform duration-500 max-w-sm">
                    </div>
                    <div class="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                        <div class="flex items-center space-x-4">
                            <div class="bg-primary rounded-full p-3">
                                <i class="fas fa-bell text-white text-xl"></i>
                            </div>
                            <div>
                                <p class="font-bold text-gray-800">Notificaciones Instantáneas</p>
                                <p class="text-sm text-gray-600">Mantente informado de nuevas propiedades</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="text-primary text-3xl mb-4">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Búsqueda Inteligente</h3>
                    <p class="text-gray-600">Encuentra tu propiedad ideal con filtros avanzados y búsqueda personalizada.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="text-primary text-3xl mb-4">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Favoritos</h3>
                    <p class="text-gray-600">Guarda y compara tus propiedades favoritas para tomar la mejor decisión.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="text-primary text-3xl mb-4">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Chat en Vivo</h3>
                    <p class="text-gray-600">Comunícate directamente con nuestro equipo de asesores inmobiliarios.</p>
                </div>
            </div>
        </div>
    </section>
  `
}

