function About() {
  return `
    <section id="sobre-nosotros" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <!-- Contenido de texto -->
                <div class="lg:w-1/2">
                    <div class="space-y-8">
                        <!-- Tags destacados -->
                        <div class="flex flex-wrap gap-3">
                            <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                14+ Años de Experiencia
                            </span>
                            <span class="bg-gradient-to-r from-primary to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Embajadora de Ecuador
                            </span>
                        </div>

                        <!-- Título principal -->
                        <div class="space-y-2">
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                                <span class="text-primary">Sobre</span>
                                <span class="text-gray-800"> Janneth Aguirre</span>
                            </h2>
                            <p class="text-rose-500 font-medium">
                                Representante Internacional del Sector Inmobiliario
                            </p>
                        </div>

                        <!-- Contenido principal -->
                        <div class="space-y-6">
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Janneth Aguirre se ha consolidado como una líder indiscutible en el sector inmobiliario ecuatoriano y una destacada representante internacional. Su éxito se basa en la satisfacción de sus clientes y en la prestación de servicios inmobiliarios de alta calidad.
                            </p>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Como Embajadora de Ecuador en eventos internacionales, Janneth representa la excelencia y el profesionalismo del sector inmobiliario ecuatoriano, brindando un servicio personalizado que trasciende fronteras.
                            </p>

                            <!-- Logros destacados -->
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                                <div class="bg-white p-4 rounded-xl shadow-md">
                                    <div class="text-2xl font-bold text-primary">300+</div>
                                    <div class="text-sm text-gray-600">Propiedades Vendidas</div>
                                </div>
                                <div class="bg-white p-4 rounded-xl shadow-md">
                                    <div class="text-2xl font-bold text-primary">98%</div>
                                    <div class="text-sm text-gray-600">Clientes Satisfechos</div>
                                </div>
                                <div class="bg-white p-4 rounded-xl shadow-md">
                                    <div class="text-2xl font-bold text-primary">15+</div>
                                    <div class="text-sm text-gray-600">Reconocimientos</div>
                                </div>
                            </div>
                        </div>

                        <!-- Botones de acción -->
                        <div class="flex flex-col sm:flex-row gap-4 pt-6">
                            <a href="#contacto" 
                               class="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-bold py-3 px-8 rounded-full text-center group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Contáctanos
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                                     viewBox="0 0 20 20" 
                                     fill="currentColor">
                                    <path fill-rule="evenodd" 
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                          clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#servicios" 
                               class="inline-flex items-center justify-center bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold py-3 px-8 rounded-full text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                Nuestros Servicios
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Contenedor de imagen -->
                <div class="lg:w-1/2 relative">
                    <div class="relative group">
                        <!-- Imagen principal -->
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/janneth-aguirre-embajadora-ecuador-inmo-peru.jpg-TIbqKt0T1SVRzFbUReGMMYPk0OVR11.jpeg" 
                             alt="Janneth Aguirre - Embajadora de Ecuador en el sector inmobiliario" 
                             class="rounded-3xl shadow-2xl w-full relative z-10">
                        
                        <!-- Decoración de fondo -->
                        <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 to-rose-500/20 rounded-[2rem] blur-2xl z-0 group-hover:blur-3xl transition-all duration-500"></div>
                        
                        <!-- Badge flotante -->
                        <div class="absolute -top-6 -right-6 bg-white px-4 py-2 rounded-full shadow-xl z-20 flex items-center gap-2">
                            <span class="text-primary font-bold">INMO PERÚ</span>
                            <span class="bg-primary text-white text-xs px-2 py-1 rounded-full">2025</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Sección de colaboradores -->
            <div class="mt-20 md:mt-24">
                <h3 class="text-2xl md:text-3xl font-bold mb-10 text-center">
                    <span class="text-primary">Nuestros</span> Colaboradores y Aliados
                </h3>
                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    <img src="images/logo-c1.png" alt="Logo Colaborador 1" 
                         class="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                    <img src="images/logo-c2.png" alt="Logo Colaborador 2" 
                         class="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                    <img src="images/logo-c3.png" alt="Logo Colaborador 3" 
                         class="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                    <img src="images/logo-c4.png" alt="Logo Colaborador 4" 
                         class="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                    <img src="images/logo-c5.png" alt="Logo Colaborador 5" 
                         class="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                </div>
            </div>
        </div>
    </section>
  `
}

