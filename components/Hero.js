function Hero() {
  return `
    <section 
      class="relative min-h-screen w-full overflow-hidden"
      aria-label="Sección principal"
    >
        <!-- Contenedor de la imagen de fondo -->
        <div class="absolute inset-0 z-0">
            <picture>
                <!-- Versión móvil de la imagen -->
                <source
                    media="(max-width: 640px)"
                    srcset="images/magazine-janneth-aguirre-mobile.png"
                >
                <!-- Versión tablet de la imagen -->
                <source
                    media="(max-width: 1024px)"
                    srcset="images/magazine-janneth-aguirre-tablet.png"
                >
                <!-- Versión desktop de la imagen -->
                <img 
                    src="images/magazine-janneth-aguirre.png"
                    alt="Janneth Aguirre, experta en bienes raíces, junto a la bandera de Ecuador"
                    class="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                >
            </picture>
            <!-- Overlay con gradiente -->
            <div 
                class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
                aria-hidden="true"
            ></div>
        </div>

        <!-- Contenido principal -->
        <div class="relative z-10 h-full flex items-center">
            <div class="container mx-auto px-4 py-12 md:py-24">
                <div class="max-w-3xl">
                    <div class="space-y-8">
                        <!-- Título principal -->
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                            <span class="text-primary block mb-2">
                                Descubre Tu Hogar Ideal
                            </span>
                            <span class="text-white">
                                en Ecuador
                            </span>
                        </h1>
                        
                        <!-- Subtítulo -->
                        <p class="text-xl md:text-2xl text-white/90 max-w-2xl">
                            Janneth Aguirre: Tu experta en bienes raíces con más de 14 años 
                            brindando asesoría inmobiliaria profesional
                        </p>
                        
                        <!-- Botones de acción -->
                        <div class="flex flex-col sm:flex-row gap-4 pt-6">
                            <a 
                                href="#servicios" 
                                class="inline-flex items-center justify-center bg-primary hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
                                role="button"
                                aria-label="Explorar nuestros servicios"
                            >
                                Explorar Servicios
                                <span class="sr-only">Ver todos nuestros servicios inmobiliarios</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5 ml-2" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                        clip-rule="evenodd" 
                                    />
                                </svg>
                            </a>
                            <a 
                                href="#contacto" 
                                class="inline-flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
                                role="button"
                                aria-label="Contactar con nosotros"
                            >
                                Contactar Ahora
                                <span class="sr-only">Ponte en contacto con nuestro equipo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}