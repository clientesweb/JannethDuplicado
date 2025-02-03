function ConstructionProgress() {
  return `
    <section id="avances-obra" class="py-12 md:py-16 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 md:mb-12 text-primary">Avances de Obra</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="images/vizcaya1_1.jpg" alt="VIZCAYA 1" class="w-full h-48 object-cover">
                    <div class="p-4 md:p-6">
                        <h3 class="text-lg md:text-xl font-bold mb-2">VIZCAYA 1</h3>
                        <p class="text-sm md:text-base mb-4 line-clamp-3">Proyecto residencial de lujo en etapa avanzada. Disfrute de amplios espacios y acabados de primera calidad en una ubicación privilegiada.</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="images/belice_8.jpg" alt="BELICE" class="w-full h-48 object-cover">
                    <div class="p-4 md:p-6">
                        <h3 class="text-lg md:text-xl font-bold mb-2">BELICE</h3>
                        <p class="text-sm md:text-base mb-4 line-clamp-3">Exclusivo desarrollo inmobiliario con un concepto moderno y sostenible. Avances significativos en la construcción de este proyecto único.</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="images/alsol_1.jpg" alt="AL SOL 1 & 2" class="w-full h-48 object-cover">
                    <div class="p-4 md:p-6">
                        <h3 class="text-lg md:text-xl font-bold mb-2">AL SOL 1 & 2</h3>
                        <p class="text-sm md:text-base mb-4 line-clamp-3">Complejo residencial de dos fases en pleno desarrollo. Diseño contemporáneo y amenidades de primer nivel para un estilo de vida excepcional.</p>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <a href="avances-obra.html" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full transition-colors duration-300 inline-flex items-center group text-sm md:text-base">
                    Ver Todos los Avances
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
    `
}

