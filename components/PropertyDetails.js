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

  // Importar Header y Footer (asumiendo que son componentes funcionales)
  const Header = () => (
    <header>
      <h1>Este es un header</h1>
    </header>
  )
  const Footer = () => (
    <footer>
      <h1>Este es un footer</h1>
    </footer>
  )

  return `
    <div class="bg-gray-100 min-h-screen">
      ${Header()}
      <main class="container mx-auto px-4 py-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 text-primary">${property.title}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <img src="${property.images[0]}" alt="${property.title}" class="w-full h-64 object-cover">
            </div>
            <div class="grid grid-cols-4 gap-2">
              ${property.images
                .slice(1)
                .map(
                  (img) => `
                <img src="${img}" alt="${property.title}" class="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 transition duration-300">
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
                <input type="text" placeholder="Nombre" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required>
                <input type="email" placeholder="Email" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required>
                <input type="tel" placeholder="Teléfono" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required>
                <textarea placeholder="Mensaje" rows="4" class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                <button type="submit" class="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary transition duration-300">Enviar mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      ${Footer()}
    </div>
  `
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-agent-form")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      // Aquí iría la lógica para enviar el formulario
      alert("Mensaje enviado. El agente se pondrá en contacto con usted pronto.")
      form.reset()
    })
  }

  // Lógica para cambiar la imagen principal al hacer clic en las miniaturas
  const thumbnails = document.querySelectorAll(".grid-cols-4 img")
  const mainImage = document.querySelector(".h-64")
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src
    })
  })
})

// Exportar la función PropertyDetails
window.PropertyDetails = PropertyDetails

