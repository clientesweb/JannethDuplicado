function ConstructionProgress() {
  return `
    <section id="avances-obra" class="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Seguimiento de Proyectos
                </span>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <span class="text-primary">Avances</span>
                    <span class="text-gray-800"> de Obra</span>
                </h2>
                <p class="text-gray-600 text-lg">
                    Mantente al día con el progreso de nuestros proyectos más exclusivos en desarrollo.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="images/vizcaya1_1.jpg" alt="VIZCAYA 1" 
                             class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-xl font-bold">VIZCAYA 1</h3>
                            <span class="text-primary"><i class="fas fa-building"></i></span>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Proyecto residencial de lujo en etapa avanzada. Disfrute de amplios espacios y acabados de primera calidad en una ubicación privilegiada.
                        </p>
                    </div>
                </div>

                <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="images/belice_8.jpg" alt="BELICE" 
                             class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-xl font-bold">BELICE</h3>
                            <span class="text-primary"><i class="fas fa-building"></i></span>
                        </div>
                        <p class="text-gray-600 mb-4">
                            Exclusivo desarrollo inmobiliario con un concepto moderno y sostenible. Avances significativos en la construcción de este proyecto único.
                        </p>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <a href="avances-obra.html" 
                   class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
                    Ver Todos los Avances
                    <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>
        </div>
    </section>
  `
}