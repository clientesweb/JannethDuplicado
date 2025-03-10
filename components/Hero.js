function Hero() {
  return `
    <section 
      class="relative w-full overflow-hidden"
      style="height: 85vh; max-height: 800px;"
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
                class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"
                aria-hidden="true"
            ></div>
        </div>

        <!-- Contenido principal con diseño moderno y compacto -->
        <div class="relative z-10 h-full flex items-center">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <!-- Columna de contenido principal -->
                    <div class="lg:col-span-7 space-y-6">
                        <!-- Etiqueta superior -->
                        <div class="inline-block bg-primary/90 text-white px-4 py-1 rounded-r-full -ml-4 mb-2 shadow-md">
                            <span class="text-sm font-bold tracking-wider uppercase">Bienes Raíces</span>
                        </div>
                        
                        <!-- Título principal con diseño moderno -->
                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                            <span class="text-primary block">
                                Descubre Tu Hogar Ideal
                            </span>
                            <span class="text-white">
                                en Ecuador
                            </span>
                        </h1>
                        
                        <!-- Línea decorativa -->
                        <div class="w-20 h-1 bg-primary"></div>
                        
                        <!-- Subtítulo con diseño mejorado -->
                        <p class="text-lg md:text-xl text-white/90 max-w-2xl">
                            Janneth Aguirre: Tu experta en bienes raíces con más de 14 años 
                            brindando asesoría inmobiliaria profesional en todo el territorio ecuatoriano.
                        </p>
                        
                        <!-- Características destacadas -->
                        <div class="flex flex-wrap gap-4 pt-2">
                            <div class="flex items-center text-white/80">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span>Asesoría Personalizada</span>
                            </div>
                            <div class="flex items-center text-white/80">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span>Propiedades Exclusivas</span>
                            </div>
                            <div class="flex items-center text-white/80">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span>Servicio Premium</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Columna de call-to-action -->
                    <div class="lg:col-span-5">
                        <div class="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
                            <h2 class="text-xl font-bold text-white mb-4">¿Listo para encontrar tu propiedad ideal?</h2>
                            
                            <!-- Botones de acción rediseñados -->
                            <div class="space-y-4">
                                <a 
                                    href="#servicios" 
                                    class="flex items-center justify-between w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 group"
                                    role="button"
                                    aria-label="Explorar nuestros servicios"
                                >
                                    <span class="text-left">
                                        <span class="block font-bold">Explorar Servicios</span>
                                        <span class="text-sm opacity-90">Conoce nuestra oferta inmobiliaria</span>
                                    </span>
                                    <span class="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-all">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            class="h-5 w-5" 
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
                                    </span>
                                </a>
                                
                                <a 
                                    href="#contacto" 
                                    class="flex items-center justify-between w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 group"
                                    role="button"
                                    aria-label="Contactar con nosotros"
                                >
                                    <span class="text-left">
                                        <span class="block font-bold text-primary">Contactar Ahora</span>
                                        <span class="text-sm text-gray-600">Agenda una asesoría personalizada</span>
                                    </span>
                                    <span class="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary/20 transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            
                            <!-- Credenciales -->
                            <div class="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                                <div class="text-white/80 text-sm">
                                    <span class="block font-medium">Certificada por:</span>
                                    <span class="text-primary font-bold">Sociedades y afiliaciones internacionales</span>
                                </div>
                                <div class="bg-white/90 h-12 w-12 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}

