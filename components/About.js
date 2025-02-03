function About() {
  return `
    <section id="sobre-nosotros" class="py-16 md:py-24 bg-gray-100">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div class="lg:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 font-serif text-primary">Sobre Janneth Aguirre</h2>
                    <p class="text-lg mb-6 leading-relaxed">
                        Con más de 14 años de experiencia en el mercado inmobiliario ecuatoriano, Janneth Aguirre se ha consolidado como una líder indiscutible en el sector. Su éxito se basa en la satisfacción de sus clientes y en la prestación de servicios inmobiliarios de alta calidad.
                    </p>
                    <p class="text-lg mb-8 leading-relaxed">
                        Nuestro compromiso es brindar un servicio personalizado y de excelencia, asegurando que cada cliente encuentre la propiedad perfecta o logre la mejor inversión posible en el mercado inmobiliario.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#contacto" class="bg-primary text-white hover:bg-secondary transition-colors duration-300 font-bold py-3 px-8 rounded-full text-center">
                            Contáctanos
                        </a>
                        <a href="#servicios" class="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300 font-bold py-3 px-8 rounded-full text-center">
                            Nuestros Servicios
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2 relative mt-12 lg:mt-0">
                    <img src="images/premio-janneth.png" alt="Janneth Aguirre" class="rounded-lg shadow-2xl w-full">
                    <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                        <p class="font-bold text-3xl md:text-4xl">14+ Años</p>
                        <p class="text-lg md:text-xl">de Experiencia</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-20 md:mt-24">
                <h3 class="text-2xl md:text-3xl font-bold mb-10 text-center">Nuestros Colaboradores y Aliados</h3>
                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    <img src="images/logo-c1.png" alt="Logo Colaborador 1" class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110">
                    <img src="images/logo-c2.png" alt="Logo Colaborador 2" class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110">
                    <img src="images/logo-c3.png" alt="Logo Colaborador 3" class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110">
                    <img src="images/logo-c4.png" alt="Logo Colaborador 4" class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110">
                    <img src="images/logo-c5.png" alt="Logo Colaborador 5" class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110">
                </div>
            </div>
        </div>
    </section>
    `
}

// Exportar la función About
window.About = About

