function OnlineMagazine() {
  const articles = [
    {
      title: "Día Internacional de la Mujer",
      subtitle: "Celebrando el Liderazgo Femenino en Bienes Raíces",
      description:
        "En este día especial, destacamos el papel fundamental de las mujeres en el sector inmobiliario y su contribución al desarrollo del mercado en Ecuador.",
      author: "Janneth Aguirre",
      date: "8 Mar 2024",
      url: "https://jannethaguirre.online/articulo/dia-internacional-mujer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dia-internacional-mujer%20%281%29.jpg-Fstg8x1V66oIFSFPYYlGvFnwjJGNQX.png",
      readTime: "4 min",
    },
    {
      title: "Yunguilla: El Secreto Mejor Guardado del Azuay",
      subtitle: "Una Oportunidad Única de Inversión en el Sur de Ecuador",
      description:
        "Descubre el potencial de inversión en Yunguilla, un paraíso natural en el Azuay que combina clima privilegiado, naturaleza exuberante y desarrollo inmobiliario sostenible.",
      author: "Janneth Aguirre",
      date: "5 Mar 2024",
      url: "https://jannethaguirre.online/articulo/yunguilla-inversion-azuay",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yunguilla-azuay.jpg-zu2SMFCqA4d237H6RwWB7XUEH7YBD1.jpeg",
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          ${articles
            .map(
              (article) => `
            <article class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative overflow-hidden aspect-[16/9]">
                <img src="${article.image}" 
                     alt="${article.title}" 
                     class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <span class="text-sm bg-primary/90 px-3 py-1 rounded-full backdrop-blur-sm">${article.readTime} lectura</span>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4 text-sm text-gray-500">
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
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
                <a href="${article.url}" 
                   class="inline-flex items-center text-primary hover:text-primary/80 transition-all duration-300 group-hover:translate-x-2 transform">
                  Leer artículo 
                  <svg xmlns="http://www.w3.org/2000/svg" 
                       class="h-4 w-4 ml-2" 
                       fill="none" 
                       viewBox="0 0 24 24" 
                       stroke="currentColor">
                    <path stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          `,
            )
            .join("")}
        </div>

        <div class="mt-12 text-center">
          <a href="https://jannethaguirre.online" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Explorar Más Artículos
            <svg xmlns="http://www.w3.org/2000/svg" 
                 class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor">
              <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
}

// Export the Magazine function
window.OnlineMagazine = OnlineMagazine

