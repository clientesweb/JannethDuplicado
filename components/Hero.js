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
                    srcset="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/magazine-janneth-aguirre-MQQJdAAMLDxg2rXQZrGeGoZuIUiJJU.png"
                >
                <!-- Versión tablet de la imagen -->
                <source
                    media="(max-width: 1024px)"
                    srcset="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/magazine-janneth-aguirre-MQQJdAAMLDxg2rXQZrGeGoZuIUiJJU.png"
                >
                <!-- Versión desktop de la imagen -->
                <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/magazine-janneth-aguirre-MQQJdAAMLDxg2rXQZrGeGoZuIUiJJU.png"
                    alt="Janneth Aguirre, experta en bienes raíces, junto a la bandera de Ecuador"
                    class="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchpriority="high"
                >
            </picture>
            <!-- Overlay con gradiente -->
            <div 
                class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
                aria-hidden="true"
            ></div>
        </div>

        <!-- Contenido principal -->
        <div class="relative z-10 h-full flex items-center">
            <div class="container mx-auto px-4 py-12 md:py-24">
                <!-- Contenedor principal con diseño moderno -->
                <div class="max-w-4xl backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                    <div class="space-y-10">
                        <!-- Título principal con diseño mejorado -->
                        <div class="space-y-4">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                                <span class="text-primary block mb-2 relative">
                                    Descubre Tu Hogar Ideal
                                    <span class="absolute -left-4 top-0 h-full w-1 bg-primary"></span>
                                </span>
                                <span class="text-white">
                                    en Ecuador
                                </span>
                            </h1>
                            
                            <!-- Subtítulo con mejor espaciado -->
                            <p class="text-xl md:text-2xl text-white/90 max-w-2xl border-l-4 border-primary/40 pl-4 italic">
                                Janneth Aguirre: Tu experta en bienes raíces con más de 14 años 
                                brindando asesoría inmobiliaria profesional
                            </p>
                        </div>
                        
                        <!-- Separador decorativo -->
                        <div class="w-24 h-1 bg-primary"></div>
                        
                        <!-- Botones de acción con diseño mejorado -->
                        <div class="flex flex-col sm:flex-row gap-6 pt-2">
                            <a 
                                href="#servicios" 
                                class="inline-flex items-center justify-center bg-primary hover:bg-white hover:text-primary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                                class="inline-flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                                role="button"
                                aria-label="Contactar con nosotros"
                            >
                                Contactar Ahora
                                <span class="sr-only">Ponte en contacto con nuestro equipo</span>
                            </a>
                        </div>
                        
                        <!-- Indicador de desplazamiento -->
                        <div class="hidden md:flex justify-center pt-8 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}

