function Hero() {
  return `
    <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary to-secondary">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Luxury Real Estate Background" class="w-full h-full object-cover opacity-30">
      </div>
      <div class="container mx-auto px-4 z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div class="w-full lg:w-1/2 text-white">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Descubre Tu Hogar Ideal en Ecuador
            </h1>
            <p class="text-xl md:text-2xl mb-8 animate-fade-in-up delay-300">
              Janneth Aguirre: Tu experta en bienes raíces con más de 14 años de experiencia
            </p>
            <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
              <a href="#servicios" class="bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-bold py-3 px-8 rounded-full text-center">
                Explorar Servicios
              </a>
              <a href="#contacto" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-300 font-bold py-3 px-8 rounded-full text-center">
                Contactar Ahora
              </a>
            </div>
          </div>
          <div class="w-full lg:w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Luxury Property Showcase" class="w-full max-w-2xl mx-auto rounded-lg shadow-2xl animate-float">
            <div class="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg animate-fade-in-up delay-300">
              <p class="text-primary font-bold">Propiedades Destacadas</p>
              <p class="text-gray-600">+100 listados exclusivos</p>
            </div>
            <div class="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg animate-fade-in-up delay-600">
              <p class="text-primary font-bold">Satisfacción del Cliente</p>
              <p class="text-gray-600">98% de clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-16 text-gray-100" viewBox="0 0 1440 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48h1440V0c-192 22.4-384 34.133-576 35.2C672 36.267 480 24.533 288 2.133 192-6.933 96-12.533 0-14.667V48z"></path>
        </svg>
      </div>
    </section>
  `
}

// Export the Hero function
window.Hero = Hero

