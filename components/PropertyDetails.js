function PropertyDetails() {
  // En una implementación real, estos datos vendrían de una API o base de datos
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
  }

  return `
    <main class="bg-gray-100 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <button onclick="history.back()" class="mb-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-300">
          <i class="fas fa-arrow-left mr-2"></i> Volver
        </button>
        <h1 class="text-3xl md:text-4xl font-bold mb-6 text-primary">${property.title}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <img src="${property.images[0]}" alt="${property.title}" class="w-full h-64 object-cover cursor-pointer" id="mainImage" onclick="openImageModal(this.src)">
            </div>
            <div class="grid grid-cols-4 gap-2">
              ${property.images
                .map(
                  (img, index) => `
                <img src="${img}" alt="${property.title}" class="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 transition duration-300 thumbnail" data-index="${index}" onclick="openImageModal(this.src)">
              `,
                )
                .join("")}
            </div>
          </div>
          <div>
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 class="text-2xl font-bold mb-4 text-primary">${property.price}</h2>
              <p class="text-gray-600 mb-4"><i class="fas fa-map-marker-alt mr-2"></i>${property.location}</p>
              <p class="text-gray-700 mb-6">${property.description}</p>
              <h3 class="text-xl font-bold mb-4">Características:</h3>
              <ul class="grid grid-cols-2 gap-2">
                ${property.features
                  .map(
                    (feature) => `
                  <li class="flex items-center"><i class="fas fa-check text-primary mr-2"></i>${feature}</li>
                `,
                  )
                  .join("")}
              </ul>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold mb-4">Contactar al agente</h3>
              <div class="flex items-center mb-4">
                <img src="images/agent-photo.jpg" alt="${property.agent.name}" class="w-16 h-16 rounded-full mr-4">
                <div>
                  <p class="font-bold">${property.agent.name}</p>
                  <p class="text-gray-600">${property.agent.phone}</p>
                  <p class="text-gray-600">${property.agent.email}</p>
                </div>
              </div>
              <form id="contact-agent-form" class="space-y-4">
                <input type="text" name="name" placeholder="Nombre" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required>
                <input type="email" name="email" placeholder="Email" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required>
                <input type="tel" name="phone" placeholder="Teléfono" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required>
                <textarea name="message" placeholder="Mensaje" rows="4" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                <button type="submit" class="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary transition duration-300">Enviar mensaje</button>
              </form>
            </div>
          </div>
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
  const form = document.getElementById("contact-agent-form")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const name = formData.get("name")
      const email = formData.get("email")
      const phone = formData.get("phone")
      const message = formData.get("message")

      // Construir el mensaje para WhatsApp
      const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AMensaje: ${message}`
      const whatsappUrl = `https://wa.me/593987167782?text=${whatsappMessage}`

      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappUrl, "_blank")

      // Limpiar el formulario después del envío
      form.reset()
    })
  }

  // Lógica para cambiar la imagen principal al hacer clic en las miniaturas
  const thumbnails = document.querySelectorAll(".thumbnail")
  const mainImage = document.getElementById("mainImage")
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src
      mainImage.alt = thumb.alt
    })
  })
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

// Exportar la función PropertyDetails
window.PropertyDetails = PropertyDetails

