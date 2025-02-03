function FeaturedProperties() {
  // Estos son datos de ejemplo. En una implementación real,
  // estos datos vendrían de una API o base de datos.
  const properties = [
    {
      id: 1,
      title: "Departamentos exclusivos en Samborondón",
      price: "Desde $99,900",
      location: "Vía Samborondón, Ciudad Celeste – Sector Batán",
      image: "images/property1.jpg",
      bedrooms: "1 - 2",
      bathrooms: "1 - 2",
      area: "60 m²",
      url: "https://www.jannethaguirre.com/property/departamentos-exclusivos-samborondon",
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
      url: "https://www.jannethaguirre.com/property/casas-modernas-proyecto-residencial",
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
      url: "https://www.jannethaguirre.com/property/locales-comerciales-consultorios",
      description: "Locales comerciales y consultorios a estrenar, importante ubicación",
      reserve: "Reserva con $500",
    },
    {
      id: 4,
      title: "Departamentos de Lujo - Ubicación Privilegiada",
      price: "Desde $223,000",
      location: "Isla Mocolí",
      image: "images/property4.jpg",
      bedrooms: "3",
      bathrooms: "2 - 3",
      area: "Desde 118 m²",
      url: "https://www.jannethaguirre.com/property/departamentos-lujo-mocoli",
      description: "Departamentos primer y segundo piso. Incluye 2 parqueos",
      reserve: "Reserva con $500",
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
                <p class="text-gray-700 mb-4">${property.description}</p>
                <div class="flex justify-between text-sm text-gray-600 mb-4">
                  <span><i class="fas fa-bed mr-2"></i>${property.bedrooms} Dormitorios</span>
                  <span><i class="fas fa-bath mr-2"></i>${property.bathrooms} Baños</span>
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

