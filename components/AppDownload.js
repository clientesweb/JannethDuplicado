function AppDownload() {
  return `
    <section id="descargar" class="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">Descarga Nuestra App</h2>
            <p class="text-xl text-gray-700 mb-8">
              Lleva el poder de Janneth Aguirre Bienes Raíces contigo. Encuentra tu hogar ideal en cualquier momento y lugar.
            </p>
            <ul class="mb-8 space-y-4">
              <li class="flex items-center text-gray-700">
                <svg class="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Búsqueda avanzada de propiedades
              </li>
              <li class="flex items-center text-gray-700">
                <svg class="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Notificaciones en tiempo real
              </li>
              <li class="flex items-center text-gray-700">
                <svg class="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Contacto directo con agentes
              </li>
            </ul>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#" class="transition transform hover:scale-105">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Descargar en App Store" class="h-14">
              </a>
              <a href="App/JABienesRaíces.apk" class="transition transform hover:scale-105">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png" alt="Disponible en Google Play" class="h-14">
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 relative mt-12 lg:mt-0">
            <img src="images/app-jannethaguirre.png" alt="App Mockup" class="mx-auto max-w-sm animate-float">
            <div class="absolute top-1/4 left-4 bg-white p-4 rounded-lg shadow-lg animate-fade-in-up">
              <p class="text-primary font-bold">Fácil de Usar</p>
              <p class="text-gray-600">Interfaz intuitiva</p>
            </div>
            <div class="absolute bottom-1/4 right-4 bg-white p-4 rounded-lg shadow-lg animate-fade-in-up delay-300">
              <p class="text-primary font-bold">Siempre Actualizada</p>
              <p class="text-gray-600">Listados en tiempo real</p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 left-0 right-0 transform -translate-y-1/2">
        <svg class="w-full h-24 text-gray-100" viewBox="0 0 1440 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48h1440V0c-192 22.4-384 34.133-576 35.2C672 36.267 480 24.533 288 2.133 192-6.933 96-12.533 0-14.667V48z"></path>
        </svg>
      </div>
    </section>
  `
}

// Export the AppDownload function
window.AppDownload = AppDownload

