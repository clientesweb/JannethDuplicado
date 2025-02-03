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
  const app = document.getElementById("app")
  app.innerHTML = `
        ${Header()}
        <main>
            ${Hero()}
            ${About()}
            ${Services()}
            ${Properties()}
            ${ConstructionProgress()}
            ${Playlists()}
            ${Contact()}
            ${AppDownload()}
        </main>
        ${Footer()}
        ${BottomNavigation()}
    `

  // Cargar las propiedades iniciales
  loadProperties(currentPage)

  // Agregar evento al botón "Cargar Más"
  const loadMoreBtn = document.getElementById("load-more")
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentPage++
      loadProperties(currentPage)
    })
  }

  // Top Banner Animation
  const topBanner = document.querySelector(".animate-marquee")
  if (topBanner) {
    const content = topBanner.innerHTML
    topBanner.innerHTML = content + content // Duplicate content for seamless loop

    function animateMarquee() {
      if (topBanner.scrollLeft >= topBanner.scrollWidth / 2) {
        topBanner.scrollLeft = 0
      } else {
        topBanner.scrollLeft += 1
      }
      requestAnimationFrame(animateMarquee)
    }

    animateMarquee()
  }

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn")
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove("hidden")
      } else {
        scrollToTopBtn.classList.add("hidden")
      }
    })

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100, // Adjust for header height
          behavior: "smooth",
        })
      }
    })
  })

  // Instagram Embed
  if (window.instgrm) {
    window.instgrm.Embeds.process()
  } else {
    console.warn("Instagram embed script not loaded")
  }

  // Bottom Navigation active state
  const bottomNavLinks = document.querySelectorAll("nav.fixed.bottom-0 a")
  const sections = document.querySelectorAll("section[id]")

  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    bottomNavLinks.forEach((link) => {
      link.classList.remove("text-primary")
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("text-primary")
      }
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()
      const formData = new FormData(contactForm)
      const name = formData.get("name")
      const email = formData.get("email")
      const phone = formData.get("phone")
      const message = formData.get("message")

      // Construir el mensaje para WhatsApp
      const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AMensaje: ${message}`
      const whatsappUrl = `https://wa.me/593987167782?text=${whatsappMessage}`

      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappUrl, "_blank")

      // Opcional: Limpiar el formulario después del envío
      contactForm.reset()
    })
  } else {
    console.error("Contact form not found")
  }

  // Load playlist videos
  loadPlaylistVideos()
})

