function PropertyDetails() {
  // Mantenemos los datos existentes
  const property = {
    id: 1,
    title: "Lujoso Apartamento en el Centro",
    price: "$250,000",
    location: "Centro de Guayaquil",
    description:
      "Hermoso apartamento de lujo ubicado en el corazón de Guayaquil. Disfrute de vistas panorámicas de la ciudad desde este espacioso piso 15. Acabados de primera calidad, cocina gourmet y amplias áreas sociales hacen de este apartamento el hogar perfecto para aquellos que buscan comodidad y elegancia en el centro de la ciudad.",
    features: [
      "3 habitaciones",
      "2 baños",
      "150 m²",
      "Estacionamiento para 2 vehículos",
      "Piscina",
      "Gimnasio",
      "Seguridad 24/7",
    ],
    images: ["images/property1-1.jpg", "images/property1-2.jpg", "images/property1-3.jpg", "images/property1-4.jpg"],
    agent: {
      name: "Janneth Aguirre",
      phone: "+593 98 716 7782",
      email: "janneth@jannethaguirre.com",
    },
    status: "En Venta",
    type: "Departamento",
  }

  // IMPORTANT: Add these functions to the window object immediately
  window.changeMainImage = (src) => {
    document.getElementById("mainImage").src = src
  }

  window.openImageModal = (src) => {
    const modal = document.getElementById("imageModal")
    const modalImage = document.getElementById("modalImage")
    modalImage.src = src
    modal.classList.remove("hidden")
  }

  window.closeImageModal = () => {
    const modal = document.getElementById("imageModal")
    modal.classList.add("hidden")
  }

  window.sendWhatsAppMessage = (form) => {
    const formData = new FormData(form)
    const propertyTitle = document.querySelector("h1").textContent
    const propertyPrice = document.querySelector(".text-3xl.font-bold.text-primary").textContent
    const propertyLocation = document.querySelector(".fa-map-marker-alt").parentElement.textContent.trim()

    const message = `*Consulta sobre propiedad*%0A%0A*Propiedad:* ${propertyTitle}%0A*Precio:* ${propertyPrice}%0A*Ubicación:* ${propertyLocation}%0A%0A*Datos del interesado:*%0A*Nombre:* ${formData.get("name")}%0A*Email:* ${formData.get("email")}%0A*Teléfono:* ${formData.get("phone")}%0A*Mensaje:* ${formData.get("message")}`

    window.open(`https://wa.me/593987167782?text=${message}`, "_blank")
    form.reset()
  }

  window.shareProperty = () => {
    const propertyTitle = document.querySelector("h1").textContent
    const propertyPrice = document.querySelector(".text-3xl.font-bold.text-primary").textContent
    const propertyLocation = document.querySelector(".fa-map-marker-alt").parentElement.textContent.trim()

    if (navigator.share) {
      navigator
        .share({
          title: propertyTitle,
          text: `${propertyTitle} - ${propertyPrice} - ${propertyLocation}`,
          url: window.location.href,
        })
        .then(() => console.log("Contenido compartido exitosamente"))
        .catch((error) => console.log("Error compartiendo", error))
    } else {
      // Fallback para navegadores que no soportan Web Share API
      const tempInput = document.createElement("input")
      tempInput.value = window.location.href
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand("copy")
      document.body.removeChild(tempInput)

      // Mostrar mensaje de confirmación
      const toast = document.createElement("div")
      toast.className =
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50"
      toast.textContent = "¡Enlace copiado al portapapeles!"
      document.body.appendChild(toast)

      setTimeout(() => {
        toast.remove()
      }, 3000)
    }
  }

  // Add initialization code
  window.initializePropertyDetails = () => {
    // Initialize form submission
    const form = document.getElementById("contact-agent-form")
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault()
        window.sendWhatsAppMessage(this)
      })
    }

    // Initialize share button
    const shareButton = document.querySelector('button[onclick="shareProperty()"]')
    if (shareButton) {
      shareButton.addEventListener("click", window.shareProperty)
    }
  }

  return `
    <main class="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div class="container mx-auto px-4">
        <nav class="flex items-center space-x-2 text-sm mb-8">
          <a href="index.html" class="text-gray-600 hover:text-primary transition-colors duration-300">Inicio</a>
          <span class="text-gray-400">/</span>
          <a href="property-listing.html" class="text-gray-600 hover:text-primary transition-colors duration-300">Propiedades</a>
          <span class="text-gray-400">/</span>
          <span class="text-primary">${property.title}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div class="relative">
                <div class="aspect-w-16 aspect-h-9">
                  <img src="${property.images[0]}" 
                       alt="${property.title}" 
                       id="mainImage"
                       class="w-full h-full object-cover cursor-pointer"
                       onclick="openImageModal(this.src)">
                </div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                    ${property.status}
                  </span>
                  <span class="bg-white/90 text-primary px-3 py-1 rounded-full text-sm">
                    ${property.type}
                  </span>
                </div>
              </div>

              <div class="p-6">
                <div class="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h1 class="text-2xl md:text-3xl font-bold mb-2">${property.title}</h1>
                    <p class="flex items-center text-gray-600">
                      <i class="fas fa-map-marker-alt text-primary mr-2"></i>
                      ${property.location}
                    </p>
                  </div>
                  <div class="text-right">
                    <div class="text-3xl font-bold text-primary mb-2">${property.price}</div>
                    <div class="text-sm text-gray-600">Precio de Venta</div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-100">
                  <div class="text-center">
                    <i class="fas fa-bed text-primary text-2xl mb-2"></i>
                    <p class="text-sm text-gray-600">3 Dormitorios</p>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-bath text-primary text-2xl mb-2"></i>
                    <p class="text-sm text-gray-600">2 Baños</p>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-vector-square text-primary text-2xl mb-2"></i>
                    <p class="text-sm text-gray-600">150 m²</p>
                  </div>
                </div>

                <div class="mt-6">
                  <h2 class="text-xl font-bold mb-4">Descripción</h2>
                  <p class="text-gray-600 leading-relaxed mb-6">${property.description}</p>
                  
                  <h2 class="text-xl font-bold mb-4">Características</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${property.features
                      .map(
                        (feature) => `
                      <div class="flex items-center">
                        <i class="fas fa-check-circle text-primary mr-2"></i>
                        <span class="text-gray-600">${feature}</span>
                      </div>
                    `,
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-4">
              ${property.images
                .map(
                  (img, index) => `
                <div class="relative rounded-lg overflow-hidden cursor-pointer group" 
                     onclick="openImageModal('${img}')">
                  <img src="${img}" 
                       alt="Imagen ${index + 1}" 
                       class="w-full h-24 object-cover">
                  <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
              <div class="p-6">
                <div class="flex items-center gap-4 mb-6">
                  <img src="images/agent-photo.jpg" 
                       alt="${property.agent.name}" 
                       class="w-16 h-16 rounded-full object-cover">
                  <div>
                    <h3 class="font-bold text-lg">${property.agent.name}</h3>
                    <p class="text-gray-600 text-sm">14+ años de experiencia</p>
                  </div>
                </div>

                <div class="space-y-4 mb-6">
                  <div class="flex items-center gap-2 text-gray-600">
                    <i class="fas fa-award text-primary"></i>
                    <span>500+ propiedades vendidas</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600">
                    <i class="fas fa-phone text-primary"></i>
                    <span>${property.agent.phone}</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600">
                    <i class="fas fa-envelope text-primary"></i>
                    <span>${property.agent.email}</span>
                  </div>
                </div>

                <form id="contact-agent-form" class="space-y-4">
                  <input type="text" 
                         name="name"
                         placeholder="Nombre" 
                         class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                         required>
                  <input type="email" 
                         name="email"
                         placeholder="Email" 
                         class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                         required>
                  <input type="tel" 
                         name="phone"
                         placeholder="Teléfono" 
                         class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                         required>
                  <textarea name="message"
                          placeholder="Mensaje" 
                          rows="4" 
                          class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                          required></textarea>
                  <button type="submit" 
                          class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <i class="fas fa-paper-plane"></i>
                    Enviar Mensaje
                  </button>
                </form>

                <div class="flex justify-center space-x-4 mt-6">
                  <button onclick="window.open('https://wa.me/593987167782', '_blank')"
                          class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <i class="fab fa-whatsapp"></i>
                    WhatsApp
                  </button>
                  <button onclick="shareProperty()"
                          class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <i class="fas fa-share-alt"></i>
                    Compartir
                  </button>
                </div>
              </div>
            </div>
          </div>
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

// Export the function
window.PropertyDetails = PropertyDetails

// Add initialization call to the script
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("contact-agent-form")) {
    window.initializePropertyDetails()
  }
})

