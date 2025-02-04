function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "Departamentos exclusivos en Samborondón",
      price: "Desde $99,900",
      location: "Vía Samborondón, Ciudad Celeste – Sector Batán",
      image: "images/departamentos-exclusivos-en-samborondon.jpg",
      bedrooms: "1 - 2",
      bathrooms: "1 - 2",
      area: "60 m²",
      url: "https://www.jannethaguirre.com/departamentos-exclusivos-samborondon.html",
      description: "Modernos y confortables departamentos disponibles de 1 y 2 dormitorios",
      reserve: "Reserva con $500",
      status: "En Venta",
      type: "Departamento",
    },
    {
      id: 2,
      title: "Casas Modernas - Proyecto Residencial",
      price: "Desde $204,900",
      location: "km 9.4 de la Vía Samborondón, Ciudad Celeste - Sector Batan",
      image: "images/casas-modernas-proyecto-residencial-al-sol.jpg",
      bedrooms: "3 - 4",
      bathrooms: "1 - 2",
      area: "Desde 135 m²",
      url: "hhttps://jannethaguirre.com/casas-modernas-urbanizacion-residencial.html",
      description: "4 modelos disponibles de 3 y 4 dormitorios",
      reserve: "Reserva con $500",
      status: "Pre-venta",
      type: "Casa",
    },
    {
      id: 3,
      title: "Locales Comerciales y Consultorios",
      price: "Desde $138,000",
      location: "Km 9.5 Vía Samborondón, cerca del Parque Bicentenario",
      image: "images/locales-comerciales-consultorios-samborodon-city-center.jpg",
      bedrooms: "N/A",
      bathrooms: "1",
      area: "Desde 40 m²",
      url: "https://www.jannethaguirre.com/property/locales-comerciales-consultorios",
      description: "Locales comerciales y consultorios a estrenar, importante ubicación",
      reserve: "Reserva con $500",
      status: "Disponible",
      type: "Comercial",
    },
    {
      id: 4,
      title: "Departamentos de lujo y ubicación privilegiada",
      price: "Desde $223,000",
      location: "Isla Mocolí",
      image: "images/departamento-de-lujo-mocoli-bay.jpg",
      bedrooms: "3",
      bathrooms: "2 - 3",
      area: "Desde 118 m²",
      url: "https://www.jannethaguirre.com/property/departamentos-lujo-mocoli",
      description: "Departamentos primer y segundo piso. Incluye 2 parqueos",
      reserve: "Reserva con $500",
      status: "Últimas unidades",
      type: "Departamento",
    },
  ]

  return `
    <section id="propiedades-destacadas" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Propiedades Destacadas
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span class="text-primary">Encuentra</span>
            <span class="text-gray-800"> Tu Hogar Ideal</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Descubre nuestra selección de propiedades premium en las mejores ubicaciones.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${properties
            .map(
              (property) => `
            <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative overflow-hidden">
                <img src="${property.image}" 
                     alt="${property.title}" 
                     class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                    ${property.status}
                  </span>
                  <span class="bg-white/90 text-primary px-3 py-1 rounded-full text-sm">
                    ${property.type}
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
                  <div class="text-center">
                    <i class="fas fa-bed text-primary mb-1"></i>
                    <p class="text-sm text-gray-600">${property.bedrooms} Dorm.</p>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-bath text-primary mb-1"></i>
                    <p class="text-sm text-gray-600">${property.bathrooms} Baños</p>
                  </div>
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
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="mt-12 text-center">
          <a href="property-listing.html" 
             class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
            Ver Todas las Propiedades
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  `
}

