function PropertyListing() {
  // Mantenemos los datos existentes y añadimos nuevos
  const properties = [
    {
      id: 1,
      title: "Departamentos Exclusivos en Samborondón",
      price: "Desde $99,900",
      location: "Vía Samborondón, Ciudad Celeste – Sector Batán",
      image: "images/departamentos-exclusivos-en-samborondon.jpg",
      bedrooms: "1 - 2",
      bathrooms: "1 - 2",
      area: "Desde 60 m²",
      url: "https://www.jannethaguirre.com/departamentos-exclusivos-samborondon",
      description:
        "Descubre la combinación perfecta de confort y exclusividad. Departamentos modernos con amplios espacios, seguridad 24/7 y amenidades premium. Ubicación estratégica y opciones de financiamiento disponibles. ¡Tu nuevo hogar te espera!",
      reserve: "Reserva con $500",
    },
    {
      id: 2,
      title: "Casas Modernas en Urbanización Residencial",
      price: "Desde $204,900",
      location: "Vía Samborondón, Ciudad Celeste - Sector Batan",
      image: "images/casas-modernas-proyecto-residencial-al-sol.jpg",
      bedrooms: "3 - 4",
      bathrooms: "3 - 4",
      area: "Desde 135 m²",
      url: "https://jannethaguirre.com/casas-modernas-urbanizacion-residencial.html",
      description:
        "Vive en una urbanización privada con casas y departamentos de diseño contemporáneo. Disfruta de exclusivas amenidades, áreas verdes y un entorno seguro para tu familia. ¡Reserva con facilidad y financia tu nuevo hogar!",
      reserve: "Reserva con $500",
    },
    {
      id: 3,
      title: "Locales Comerciales y Consultorios en Samborondón",
      price: "Desde $128,000",
      location: "Vía Samborondón, cerca del Parque Bicentenario",
      image: "images/locales-comerciales-consultorios-samborodon-city-center.jpg",
      bedrooms: "N/A",
      bathrooms: "1",
      area: "Desde 40 m²",
      url: "https://www.jannethaguirre.com/locales-comerciales-consultorios-samborondon.html",
      description:
        "Invierte en un proyecto exclusivo con locales comerciales y consultorios médicos en la mejor ubicación de Samborondón. Seguridad 24/7, parqueaderos privados y diseño moderno para tu negocio. ¡Consulta disponibilidad y asegura tu espacio hoy mismo!",
      reserve: "Reserva con $500",
    },
    {
      id: 4,
      title: "Departamentos de Lujo - Ubicación Privilegiada",
      price: "Desde $223,000",
      location: "Isla Mocolí, Samborondón",
      image: "images/mocoli-bay-exterior.jpg",
      bedrooms: "3",
      bathrooms: "2 - 3",
      area: "Desde 118 m²",
      url: "https://www.jannethaguirre.com/departamentos-lujo-isla-mocoli.html",
      description:
        "Vive en un entorno exclusivo en Isla Mocolí, Samborondón. Departamentos de 3 dormitorios desde 118m², cada uno con su propio baño y 2 parqueos privados. Disfruta de seguridad 24/7, casa club, gimnasio, zonas BBQ, áreas verdes y senderos. ¡Un estilo de vida único en la mejor ubicación!",
      reserve: "Reserva con $500",
    },
    {
      id: 5,
      title: "Preventa Exclusiva - Suites Modernas y de Alto Nivel",
      price: "Desde $75,000",
      location: "Cuenca",
      image: "images/suites-modernas-parque-historico-cuenca.jpg",
      bedrooms: "1",
      bathrooms: "1 - 2",
      area: "Desde 60 m²",
      url: "https://www.jannethaguirre.com/propiedades/suites-modernas-cuenca",
      description: "A pocos minutos del parque histórico, en una de las zonas más privilegiadas de Cuenca",
      reserve: "Reserva con $500",
    },
    {
      id: 6,
      title: "Terrenos En Venta Excelente Ubicación",
      price: "Desde $1,300 × m²",
      location: "Amador-Causeway, Panamá",
      image: "images/terrenos-en-venta-amador-causeway-panama.jpg",
      bedrooms: "N/A",
      bathrooms: "N/A",
      area: "Desde 1005 m²",
      url: "https://www.jannethaguirre.com/propiedades/terrenos-amador-causeway-panama",
      description: "Frente al Océano Pacífico, en la zona de mayor crecimiento de Panamá",
      reserve: "Reserva con $1,000",
    },
    {
      id: 7,
      title: "Preventa Exclusiva - Departamentos con vistas al Río",
      price: "Desde $79,900",
      location: "Primeros Km de Samborondón",
      image: "images/departamentos-vista-al-rio-samborondon.jpg",
      bedrooms: "1 - 2",
      bathrooms: "1 - 2",
      area: "Desde 60 m²",
      url: "https://jannethaguirre.com/departamentos-vistas-al-rio-samborondon.html",
      description:
        "¡Oportunidad Única en Samborondón! Pre-venta exclusiva de apartamentos ubicados en los primeros km de Samborondón. Zona céntrica, cerca de centros comerciales y universidades, con acceso rápido a todo lo que necesitas. Disponibles apartamentos desde 60m² y 80m², ¡adaptados a tu estilo de vida!",
      reserve: "Reserva con $500",
    },
  ]

  return `
    <main class="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <button onclick="window.history.back()" 
            class="mb-8 inline-flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
          <i class="fas fa-arrow-left mr-2"></i>
          Volver
        </button>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              <span class="text-primary">Encuentra</span>
              <span class="text-gray-800"> Tu Propiedad</span>
            </h1>
            <p class="text-gray-600 text-lg">Descubre nuestra selección de propiedades exclusivas</p>
          </div>

          <div class="mt-6 md:mt-0 flex flex-wrap gap-4">
            <div class="relative">
              <select class="appearance-none bg-white border border-gray-200 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">Tipo de Propiedad</option>
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="terreno">Terreno</option>
                <option value="comercial">Comercial</option>
              </select>
              <i class="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            <div class="relative">
              <select class="appearance-none bg-white border border-gray-200 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">Precio</option>
                <option value="0-100000">$0 - $100,000</option>
                <option value="100000-200000">$100,000 - $200,000</option>
                <option value="200000-300000">$200,000 - $300,000</option>
                <option value="300000+">$300,000+</option>
              </select>
              <i class="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            <button class="bg-primary hover:bg-primary/90 text-white rounded-full py-3 px-6 flex items-center gap-2 transition-colors duration-300">
              <i class="fas fa-search"></i>
              Buscar
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${properties
            .map(
              (property) => `
            <article class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative overflow-hidden">
                <div class="aspect-w-16 aspect-h-10">
                  <img src="${property.image}" 
                       alt="${property.title}" 
                       class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                       onclick="openImageModal(this.src)">
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                    ${property.status || "En Venta"}
                  </span>
                  <span class="bg-white/90 text-primary px-3 py-1 rounded-full text-sm">
                    ${property.type || "Propiedad"}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-white text-2xl font-bold mb-2">${property.price}</div>
                  <div class="flex items-center text-white/90 text-sm">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    ${property.location}
                  </div>
                </div>
              </div>

              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  ${property.title}
                </h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${property.description}</p>

                <div class="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                  ${
                    property.bedrooms !== "N/A"
                      ? `
                    <div class="text-center">
                      <i class="fas fa-bed text-primary mb-1"></i>
                      <p class="text-sm text-gray-600">${property.bedrooms} Dorm.</p>
                    </div>
                  `
                      : ""
                  }
                  ${
                    property.bathrooms !== "N/A"
                      ? `
                    <div class="text-center">
                      <i class="fas fa-bath text-primary mb-1"></i>
                      <p class="text-sm text-gray-600">${property.bathrooms} Baños</p>
                    </div>
                  `
                      : ""
                  }
                  <div class="text-center">
                    <i class="fas fa-vector-square text-primary mb-1"></i>
                    <p class="text-sm text-gray-600">${property.area}</p>
                  </div>
                </div>

                <div class="mt-4 flex flex-col gap-3">
                  <p class="text-green-600 font-semibold text-center">${property.reserve}</p>
                  <a href="${property.url}" 
                     class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 group">
                    Ver Detalles
                    <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </a>
                </div>
              </div>
            </article>
          `,
            )
            .join("")}
        </div>

        <div class="mt-12 flex justify-center">
          <button id="load-more" 
                  class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
            Cargar Más Propiedades
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </button>
        </div>
      </div>

      <!-- Modal para ver imágenes en tamaño completo -->
      <div id="imageModal" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 hidden">
        <div class="max-w-4xl w-full mx-4">
          <img id="modalImage" src="/placeholder.svg" alt="Imagen en tamaño completo" class="w-full h-auto rounded-lg">
          <button onclick="closeImageModal()" 
                  class="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </main>
  `
}

// Mantener los event listeners y funciones existentes
document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.getElementById("load-more")
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      alert("Cargando más propiedades...")
    })
  }
})

function openImageModal(src) {
  const modal = document.getElementById("imageModal")
  const modalImage = document.getElementById("modalImage")
  modalImage.src = src
  modal.classList.remove("hidden")
}

function closeImageModal() {
  const modal = document.getElementById("imageModal")
  modal.classList.add("hidden")
}

window.PropertyListing = PropertyListing
