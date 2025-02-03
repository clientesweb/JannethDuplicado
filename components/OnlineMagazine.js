function OnlineMagazine() {
  const articles = [
    {
      title: "La Domotización en Bienes Raíces: Transformando Espacios para el Futuro",
      subtitle:
        "La domotización revoluciona el mercado inmobiliario, mejorando eficiencia, seguridad y confort. Descubre su impacto y las oportunidades que ofrece.",
      url: "https://jannethaguirre.online/articulo/la-domotizacion-en-bienes-raices-por-juan-carlos-solano-aguirre",
      image: "https://jannethaguirre.online/juan-solano-aguirre.jpg",
    },
    {
      title: "José Solines Aguayo: Construyendo Sueños y Transformando Ecuador",
      subtitle:
        "Descubre la historia de uno de los constructores más emblemáticos e influyentes de Ecuador y su impacto en el desarrollo de Samborondón y Vía a la Costa.",
      url: "https://jannethaguirre.online/articulo/jose-solines-aguayo-construyendo-suenos",
      image: "https://jannethaguirre.online/portada-jose-solines.jpg",
    },
    {
      title: "Boquete Pino Alto Country Club: Lujo y Naturaleza en Panamá",
      subtitle:
        "Descubre el exclusivo desarrollo residencial en las montañas de Boquete, que combina lujo, golf y una impresionante belleza natural.",
      url: "https://jannethaguirre.online/articulo/boquete-pino-alto-country-club",
      image: "https://jannethaguirre.online/boquete-pino-alto-country-club.jpg",
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
              <img src="${article.image}" alt="${article.title}" class="w-full h-auto object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${article.title}</h3>
                <p class="text-gray-600 mb-4">${article.subtitle}</p>
                <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="inline-block text-primary hover:text-secondary font-bold transition duration-300">
                  Leer más →
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

