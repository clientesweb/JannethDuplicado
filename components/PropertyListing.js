function PropertyListing() {
  // En una implementación real, estos datos vendrían de una API o base de datos
  const properties = [
    {
      id: 1,
      title: "Lujoso Apartamento en el Centro",
      price: "$250,000",
      location: "Centro de Guayaquil",
      image: "images/property1.jpg",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
      url: "https://www.jannethaguirre.com/property/lujoso-apartamento-centro",
    },
    {
      id: 2,
      title: "Casa Familiar con Jardín",
      price: "$320,000",
      location: "Samborondón",
      image: "images/property2.jpg",
      bedrooms: 4,
      bathrooms: 3,
      area: "200 m²",
      url: "https://www.jannethaguirre.com/property/casa-familiar-jardin",
    },
    {
      id: 3,
      title: "Penthouse con Vista al Mar",
      price: "$450,000",
      location: "Malecon 2000",
      image: "images/property3.jpg",
      bedrooms: 3,
      bathrooms: 3,
      area: "180 m²",
      url: "https://www.jannethaguirre.com/property/penthouse-vista-mar",
    },
    {
      id: 4,
      title: "Apartamento Moderno en Torre Exclusiva",
      price: "$280,000",
      location: "Puerto Santa Ana",
      image: "images/property4.jpg",
      bedrooms: 2,
      bathrooms: 2,
      area: "120 m²",
      url: "https://www.jannethaguirre.com/property/apartamento-moderno-torre",
    },
    {
      id: 5,
      title: "Villa de Lujo con Piscina",
      price: "$580,000",
      location: "Vía a la Costa",
      image: "images/property5.jpg",
      bedrooms: 5,
      bathrooms: 4,
      area: "350 m²",
      url: "https://www.jannethaguirre.com/property/villa-lujo-piscina",
    },
    {
      id: 6,
      title: "Oficina Comercial en Distrito Financiero",
      price: "$420,000",
      location: "Centro de Negocios",
      image: "images/property6.jpg",
      bedrooms: "N/A",
      bathrooms: 2,
      area: "200 m²",
      url: "https://www.jannethaguirre.com/property/oficina-comercial-distrito",
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
                <div class="flex justify-between text-sm text-gray-600">
                  <span><i class="fas fa-bed mr-2"></i>${property.bedrooms} Habitaciones</span>
                  <span><i class="fas fa-bath mr-2"></i>${property.bathrooms} Baños</span>
                  <span><i class="fas fa-vector-square mr-2"></i>${property.area}</span>
                </div>
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

