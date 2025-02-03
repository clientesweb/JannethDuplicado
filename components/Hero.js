function Hero() {
  return `
    <section class="relative h-screen overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="images/magazine-janneth-aguirre.png" alt="Hero Background" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40"></div>
        </div>
        <div class="relative z-10 h-full flex items-center">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl">
                    <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold text-primary mb-4 font-serif leading-tight text-shadow-lg">
                        Descubre Tu Hogar Ideal en Ecuador
                    </h1>
                    <p class="text-lg md:text-xl lg:text-2xl text-white mb-8 text-shadow-lg">
                        Janneth Aguirre: Tu experta en bienes raíces con más de 14 años de experiencia
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#servicios" class="bg-primary hover:bg-white hover:text-primary text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full transition-colors duration-300 text-center">
                            Explorar Servicios
                        </a>
                        <a href="#contacto" class="bg-white text-primary hover:bg-primary hover:text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full transition-colors duration-300 text-center">
                            Contactar Ahora
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
    `
}

