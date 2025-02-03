function PropertyListing() {
  const properties = [
    {
      id: 1,
      title: "Departamentos Exclusivos en Samborondón",
      price: "Desde $99,900",
      location: "Vía Samborondón, Ciudad Celeste – Sector Batán",
      image: "images/property1.jpg",
      bedrooms: "1 - 2",
      bathrooms: "1 - 2",
      area: "Desde 60 m²",
      url: "https://www.jannethaguirre.com/propiedades/departamentos-exclusivos-samborondon",
      description: "Modernos y confortables departamentos disponibles de 1 y 2 dormitorios",
      reserve: "Reserva con $500",
    },
    {
      id: 2,
      title: "Casas Modernas - Proyecto Residencial",
      price: "Desde $204,900",
      location: "km 9.4 de la Vía Samborondón, Ciudad Celeste - Sector Batan",
      image: "images/property2.jpg",
      bedrooms: "3 - 4",
      bathrooms: "1 - 2",
      area: "Desde 135 m²",
      url: "https://www.jannethaguirre.com/propiedades/casas-modernas-proyecto-residencial",
      description: "4 modelos disponibles de 3 y 4 dormitorios",
      reserve: "Reserva con $500",
    },
    {
      id: 3,
      title: "Locales Comerciales y Consultorios en Centro Comercial",
      price: "Desde $138,000",
      location: "Km 9.5 Vía Samborondón, cerca del Parque Bicentenario",
      image: "images/property3.jpg",
      bedrooms: "N/A",
      bathrooms: "1",
      area: "Desde 40 m²",
      url: "https://www.jannethaguirre.com/propiedades/locales-comerciales-consultorios",
      description: "Locales comerciales y consultorios a estrenar, importante ubicación",
      reserve: "Reserva con $500",
    },
    {
      id: 4,
      title: "Departamentos de lujo y ubicación privilegiada",
      price: "Desde $223,000",
      location: "Isla Mocolí",
      image: "images/property4.jpg",
      bedrooms: "3",
      bathrooms: "2 - 3",
      area: "Desde 118 m²",
      url: "https://www.jannethaguirre.com/propiedades/departamentos-lujo-mocoli",
      description: "Departamentos primer y segundo piso. Incluye 2 parqueos",
      reserve: "Reserva con $500",
    },
    {
      id: 5,
      title: "Preventa Exclusiva - Suites Modernas y de Alto Nivel",
      price: "Desde $75,000",
      location: "Cuenca",
      image: "images/property5.jpg",
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
      image: "images/property6.jpg",
      bedrooms: "N/A",
      bathrooms: "N/A",
      area: "Desde 1005 m²",
      url: "https://www.jannethaguirre.com/propiedades/terrenos-amador-causeway-panama",
      description: "Frente al Océano Pacífico, en la zona de mayor crecimiento de Panamá",
      reserve: "Reserva con $1,000",
    },
  ]

  return `
    <main class="bg-gray-100 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <button onclick="history.back()" class="mb-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-300">
          <i class="fas fa-arrow-left mr-2"></i> Volver
        </button>
        <h1 class="text-3xl md:text-4xl font-bold mb-6 text-primary">Nuestras Propiedades</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${properties
            .map(
              (property) => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover cursor-pointer" onclick="openImageModal(this.src)">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                <p class="text-gray-600 mb-4">${property.location}</p>
                <p class="text-primary text-2xl font-bold mb-4">${property.price}</p>
                <p class="text-gray-700 mb-4">${property.description}</p>
                <div class="flex justify-between text-sm text-gray-600 mb-4">
                  ${property.bedrooms !== "N/A" ? `<span><i class="fas fa-bed mr-2"></i>${property.bedrooms} Dormitorios</span>` : ""}
                  ${property.bathrooms !== "N/A" ? `<span><i class="fas fa-bath mr-2"></i>${property.bathrooms} Baños</span>` : ""}
                  <span><i class="fas fa-vector-square mr-2"></i>${property.area}</span>
                </div>
                <p class="text-green-600 font-semibold mb-4">${property.reserve}</p>
                <a href="${property.url}" class="mt-4 inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition duration-300">
                  Ver Detalles
                </a>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="mt-12 flex justify-center">
          <button id="load-more" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition duration-300">
            Cargar Más Propiedades
          </button>
        </div>
      </div>
    </main>

    <!-- Modal para ver imágenes en tamaño completo -->
    <div id="imageModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
      <div class="max-w-4xl w-full">
        <img id="modalImage" src="/placeholder.svg" alt="Imagen en tamaño completo" class="w-full h-auto">
        <button onclick="closeImageModal()" class="absolute top-4 right-4 text-white text-2xl">&times;</button>
      </div>
    </div>
  `
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.getElementById("load-more")
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      // Aquí iría la lógica para cargar más propiedades
      alert("Cargando más propiedades...")
    })
  }
})

// Funciones para el modal de imágenes
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

// Exportar la función PropertyListing
window.PropertyListing = PropertyListing

