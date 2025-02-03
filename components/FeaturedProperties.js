function FeaturedProperties() {
  // Estos son datos de ejemplo. En una implementación real,
  // estos datos vendrían de una API o base de datos.
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
      title: "Villa de Lujo en Urbanización Privada",
      price: "$580,000",
      location: "Vía a la Costa",
      image: "images/property4.jpg",
      bedrooms: 5,
      bathrooms: 4,
      area: "350 m²",
      url: "https://www.jannethaguirre.com/property/villa-lujo-urbanizacion",
    },
  ]

  return `
    <section id="propiedades-destacadas" class="py-12 md:py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 md:mb-12 text-primary">Propiedades Destacadas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${properties
            .map(
              (property) => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
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
        <div class="text-center mt-8">
          <a href="property-listing.html" class="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Ver Todas las Propiedades
          </a>
        </div>
      </div>
    </section>
  `
}

// Exportar la función FeaturedProperties
window.FeaturedProperties = FeaturedProperties

