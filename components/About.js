function About() {
  return `
    <section id="sobre-nosotros" class="py-12 md:py-20 bg-gray-100">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div class="lg:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 font-serif text-primary">Sobre Janneth Aguirre</h2>
                    <p class="text-base md:text-lg mb-6">
                        Con más de 14 años de experiencia en el mercado inmobiliario ecuatoriano, Janneth Aguirre se ha consolidado como una líder indiscutible en el sector. Su éxito se basa en la satisfacción de sus clientes y en la prestación de servicios inmobiliarios de alta calidad.
                    </p>
                    <p class="text-base md:text-lg mb-8">
                        Nuestro compromiso es brindar un servicio personalizado y de excelencia, asegurando que cada cliente encuentre la propiedad perfecta o logre la mejor inversión posible en el mercado inmobiliario.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#contacto" class="bg-primary text-white hover:bg-secondary transition-colors duration-300 font-bold py-2 px-6 rounded-full text-center">
                            Contáctanos
                        </a>
                        <a href="#servicios" class="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300 font-bold py-2 px-6 rounded-full text-center">
                            Nuestros Servicios
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2 relative mt-8 lg:mt-0">
                    <img src="images/premio-janneth.png" alt="Janneth Aguirre" class="rounded-lg shadow-2xl w-full">
                    <div class="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                        <p class="font-bold text-xl md:text-2xl">14+ Años</p>
                        <p class="text-sm md:text-base">de Experiencia</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-16 md:mt-20">
                <h3 class="text-xl md:text-2xl font-bold mb-8 text-center">Nuestros Colaboradores y Aliados</h3>
                <div class="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                    <img src="images/logo-c1.png" alt="Logo Colaborador 1" class="h-16 md:h-20 w-auto object-contain">
                    <img src="images/logo-c2.png" alt="Logo Colaborador 2" class="h-16 md:h-20 w-auto object-contain">
                    <img src="images/logo-c3.png" alt="Logo Colaborador 3" class="h-16 md:h-20 w-auto object-contain">
                    <img src="images/logo-c4.png" alt="Logo Colaborador 4" class="h-16 md:h-20 w-auto object-contain">
                    <img src="images/logo-c5.png" alt="Logo Colaborador 5" class="h-16 md:h-20 w-auto object-contain">
                </div>
            </div>
        </div>
    </section>
    `
}

