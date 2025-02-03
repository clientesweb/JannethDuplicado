function OnlineMagazine() {
  const articles = [
    {
      title: "La Domotización en Bienes Raíces por Juan Carlos Solano Aguirre",
      url: "https://jannethaguirre.online/articulo/la-domotizacion-en-bienes-raices-por-juan-carlos-solano-aguirre",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "José Solines Aguayo: Construyendo Sueños",
      url: "https://jannethaguirre.online/articulo/jose-solines-aguayo-construyendo-suenos",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Boquete Pino Alto Country Club",
      url: "https://jannethaguirre.online/articulo/boquete-pino-alto-country-club",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return `
    <section id="revista-online" class="py-12 md:py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 md:mb-12 text-primary">Visita Nuestra Revista Online</h2>
        <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explora nuestra revista online para obtener información valiosa sobre el mercado inmobiliario, tendencias en bienes raíces y artículos exclusivos de expertos en el sector.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${articles
            .map(
              (article) => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-4 line-clamp-2">${article.title}</h3>
                <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition duration-300">
                  Leer Artículo
                </a>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="text-center mt-8">
          <a href="https://jannethaguirre.online" target="_blank" rel="noopener noreferrer" class="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Ver Todos los Artículos
          </a>
        </div>
      </div>
    </section>
  `
}

// Exportar la función OnlineMagazine
window.OnlineMagazine = OnlineMagazine

