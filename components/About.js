function About() {
  return `
    <section id="sobre-nosotros" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div class="lg:w-1/2">
                    <div class="space-y-6">
                        <div class="inline-block">
                            <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                14+ Años de Experiencia
                            </span>
                        </div>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                            <span class="text-primary">Sobre</span>
                            <span class="text-gray-800"> Janneth Aguirre</span>
                        </h2>
                        <div class="space-y-4">
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Janneth Aguirre se ha consolidado como una líder indiscutible en el sector inmobiliario ecuatoriano. Su éxito se basa en la satisfacción de sus clientes y en la prestación de servicios inmobiliarios de alta calidad.
                            </p>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Nuestro compromiso es brindar un servicio personalizado y de excelencia, asegurando que cada cliente encuentre la propiedad perfecta o logre la mejor inversión posible en el mercado inmobiliario.
                            </p>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="text-primary text-2xl font-bold">500+</div>
                                <div class="text-gray-600">Propiedades Vendidas</div>
                            </div>
                            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="text-primary text-2xl font-bold">1000+</div>
                                <div class="text-gray-600">Clientes Satisfechos</div>
                            </div>
                            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="text-primary text-2xl font-bold">14+</div>
                                <div class="text-gray-600">Años de Experiencia</div>
                            </div>
                            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="text-primary text-2xl font-bold">95%</div>
                                <div class="text-gray-600">Tasa de Satisfacción</div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4 pt-6">
                            <a href="#contacto" class="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-center group">
                                Contáctanos
                                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                            </a>
                            <a href="#servicios" class="inline-flex items-center justify-center bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300 font-bold py-3 px-8 rounded-full text-center">
                                Nuestros Servicios
                            </a>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 relative">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
                        <img src="images/premio-janneth.png" 
                             alt="Janneth Aguirre" 
                             class="rounded-3xl shadow-2xl w-full relative z-10 transform hover:-rotate-2 transition-transform duration-500">
                    </div>
                    <div class="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-xs">
                        <div class="flex items-center space-x-4">
                            <div class="bg-primary rounded-full p-3">
                                <i class="fas fa-award text-white text-xl"></i>
                            </div>
                            <div>
                                <p class="font-bold text-gray-800">Reconocida Excelencia</p>
                                <p class="text-sm text-gray-600">Premiada por su destacada trayectoria en el sector inmobiliario</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-20 md:mt-24">
                <h3 class="text-2xl md:text-3xl font-bold mb-10 text-center">
                    <span class="text-primary">Nuestros</span> Colaboradores y Aliados
                </h3>
                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    <img src="images/logo-c1.png" alt="Logo Colaborador 1" 
                         class="h-16 md:h-20 w-auto object-contain filter hover:brightness-75 transition-all duration-300 transform hover:scale-105">
                    <img src="images/logo-c2.png" alt="Logo Colaborador 2" 
                         class="h-16 md:h-20 w-auto object-contain filter hover:brightness-75 transition-all duration-300 transform hover:scale-105">
                    <img src="images/logo-c3.png" alt="Logo Colaborador 3" 
                         class="h-16 md:h-20 w-auto object-contain filter hover:brightness-75 transition-all duration-300 transform hover:scale-105">
                    <img src="images/logo-c4.png" alt="Logo Colaborador 4" 
                         class="h-16 md:h-20 w-auto object-contain filter hover:brightness-75 transition-all duration-300 transform hover:scale-105">
                    <img src="images/logo-c5.png" alt="Logo Colaborador 5" 
                         class="h-16 md:h-20 w-auto object-contain filter hover:brightness-75 transition-all duration-300 transform hover:scale-105">
                </div>
            </div>
        </div>
    </section>
    `
}

