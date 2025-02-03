function Properties() {
  return `
    <section id="propiedades" class="py-12 md:py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 md:mb-12 text-primary">Propiedades Destacadas</h2>
        <div id="properties-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Las propiedades se cargarán aquí dinámicamente -->
        </div>
        <div class="text-center mt-8">
          <button id="load-more" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
            Cargar Más
          </button>
        </div>
      </div>
    </section>
  `
}

// Datos de ejemplo para las propiedades
const properties = [
  {
    id: 1,
    title: "Villa de Lujo en Samborondón",
    price: "$850,000",
    location: "Samborondón, Guayaquil",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    image: "https://picsum.photos/seed/prop1/400/300",
    description: "Espectacular villa con acabados de lujo, piscina privada y vistas panorámicas.",
  },
  {
    id: 2,
    title: "Apartamento Moderno en Puerto Santa Ana",
    price: "$320,000",
    location: "Puerto Santa Ana, Guayaquil",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    image: "https://picsum.photos/seed/prop2/400/300",
    description: "Apartamento de diseño contemporáneo con vistas al río Guayas y amenidades de primer nivel.",
  },
  {
    id: 3,
    title: "Casa Familiar en Ceibos",
    price: "$450,000",
    location: "Ceibos, Guayaquil",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 200,
    image: "https://picsum.photos/seed/prop3/400/300",
    description: "Amplia casa familiar en zona residencial, perfecta para criar a tus hijos con tranquilidad.",
  },
  // Agrega más propiedades según sea necesario
]

let currentPage = 1
const propertiesPerPage = 6

function loadProperties(page) {
  const start = (page - 1) * propertiesPerPage
  const end = start + propertiesPerPage
  const propertiesGrid = document.getElementById("properties-grid")

  properties.slice(start, end).forEach((property) => {
    const propertyCard = document.createElement("div")
    propertyCard.className =
      "bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    propertyCard.innerHTML = `
      <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-bold mb-2">${property.title}</h3>
        <p class="text-primary text-lg font-semibold mb-2">${property.price}</p>
        <p class="text-gray-600 mb-2">${property.location}</p>
        <div class="flex justify-between text-sm text-gray-500 mb-2">
          <span><i class="fas fa-bed mr-1"></i>${property.bedrooms} Hab.</span>
          <span><i class="fas fa-bath mr-1"></i>${property.bathrooms} Baños</span>
          <span><i class="fas fa-vector-square mr-1"></i>${property.area} m²</span>
        </div>
        <p class="text-gray-700 mb-4">${property.description}</p>
        <button class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 w-full">
          Ver Detalles
        </button>
      </div>
    `
    propertiesGrid.appendChild(propertyCard)
  })

  if (end >= properties.length) {
    document.getElementById("load-more").style.display = "none"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadProperties(currentPage)

  document.getElementById("load-more").addEventListener("click", () => {
    currentPage++
    loadProperties(currentPage)
  })
})

// Exportar la función Properties
window.Properties = Properties

