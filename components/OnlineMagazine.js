function OnlineMagazine() {
  const articles = [
    {
      title: "La Domotización en Bienes Raíces",
      subtitle: "Transformando Espacios para el Futuro",
      description:
        "La domotización revoluciona el mercado inmobiliario, mejorando eficiencia, seguridad y confort. Descubre su impacto y las oportunidades que ofrece.",
      author: "Juan Carlos Solano Aguirre",
      date: "2 Feb 2025",
      url: "https://jannethaguirre.online/articulo/la-domotizacion-en-bienes-raices-por-juan-carlos-solano-aguirre",
      image: "https://jannethaguirre.online/juan-solano-aguirre.jpg",
      readTime: "5 min",
    },
    {
      title: "José Solines Aguayo",
      subtitle: "Construyendo Sueños y Transformando Ecuador",
      description:
        "Descubre la historia de uno de los constructores más emblemáticos e influyentes de Ecuador y su impacto en el desarrollo de Samborondón y Vía a la Costa.",
      author: "Janneth Aguirre",
      date: "1 Feb 2025",
      url: "https://jannethaguirre.online/articulo/jose-solines-aguayo-construyendo-suenos",
      image: "https://jannethaguirre.online/portada-jose-solines.jpg",
      readTime: "4 min",
    },
    {
      title: "Boquete Pino Alto Country Club",
      subtitle: "Lujo y Naturaleza en Panamá",
      description:
        "Descubre el exclusivo desarrollo residencial en las montañas de Boquete, que combina lujo, golf y una impresionante belleza natural.",
      author: "Janneth Aguirre",
      date: "28 Ene 2025",
      url: "https://jannethaguirre.online/articulo/boquete-pino-alto-country-club",
      image: "https://jannethaguirre.online/boquete-pino-alto-country-club.jpg",
      readTime: "6 min",
    },
  ]

  return `
    <section id="revista-online" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Revista Online
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span class="text-primary">Conocimiento</span>
            <span class="text-gray-800"> Inmobiliario</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Explora nuestros artículos exclusivos sobre el mercado inmobiliario, tendencias y oportunidades de inversión.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${articles
            .map(
              (article) => `
            <article class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative overflow-hidden">
                <img src="${article.image}" alt="${article.title}" 
                     class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <span class="text-sm bg-primary/90 px-3 py-1 rounded-full">${article.readTime} lectura</span>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4 text-sm text-gray-500">
                  <span class="flex items-center">
                    <i class="fas fa-user-edit mr-2"></i>
                    ${article.author}
                  </span>
                  <span class="mx-2">•</span>
                  <span>${article.date}</span>
                </div>
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  ${article.title}
                </h3>
                <h4 class="text-gray-600 font-semibold mb-3">${article.subtitle}</h4>
                <p class="text-gray-600 mb-4 line-clamp-2">${article.description}</p>
                <a href="${article.url}" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-2 transform">
                  Leer artículo <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </article>
          `,
            )
            .join("")}
        </div>

        <div class="mt-12 text-center">
          <a href="https://jannethaguirre.online" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
            Explorar Más Artículos
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  `
}

