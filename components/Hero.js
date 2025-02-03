function Hero() {
  const heroSlides = [
    {
      title: "Descubre Tu Hogar Ideal en Ecuador",
      subtitle: "Janneth Aguirre: Tu experta en bienes raíces con más de 14 años de experiencia",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&h=1350&q=80",
      cta: {
        primary: { text: "Explorar Propiedades", url: "#propiedades-destacadas" },
        secondary: { text: "Contactar Ahora", url: "#contacto" },
      },
    },
    {
      title: "Inversiones Inteligentes en Bienes Raíces",
      subtitle: "Maximiza tu patrimonio con nuestras oportunidades exclusivas",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&h=1350&q=80",
      cta: {
        primary: { text: "Ver Inversiones", url: "#servicios" },
        secondary: { text: "Agendar Consulta", url: "#contacto" },
      },
    },
    {
      title: "Lujo y Confort en Cada Propiedad",
      subtitle: "Experimenta lo mejor de la vida en nuestras exclusivas residencias",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&h=1350&q=80",
      cta: {
        primary: { text: "Explorar Lujo", url: "#propiedades-destacadas" },
        secondary: { text: "Solicitar Tour", url: "#contacto" },
      },
    },
  ]

  return `
    <section id="hero-carousel" class="relative h-[calc(100vh-4rem)] overflow-hidden">
      ${heroSlides
        .map(
          (slide, index) => `
        <div class="hero-slide absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}" data-index="${index}">
          <div class="absolute inset-0 z-0">
            <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div class="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
            <div class="max-w-3xl">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                ${slide.title}
              </h1>
              <p class="text-xl md:text-2xl mb-8 animate-fade-in-up delay-300">
                ${slide.subtitle}
              </p>
              <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-600">
                <a href="${slide.cta.primary.url}" class="bg-primary hover:bg-secondary text-white transition-colors duration-300 font-bold py-3 px-8 rounded-full">
                  ${slide.cta.primary.text}
                </a>
                <a href="${slide.cta.secondary.url}" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-300 font-bold py-3 px-8 rounded-full">
                  ${slide.cta.secondary.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      `,
        )
        .join("")}
      <div class="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-20">
        ${heroSlides
          .map(
            (_, index) => `
          <button class="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300 carousel-dot" data-index="${index}"></button>
        `,
          )
          .join("")}
      </div>
      <button id="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-75 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button id="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-75 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  `
}

// Carrusel functionality
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide")
  const dots = document.querySelectorAll(".carousel-dot")
  const prevButton = document.getElementById("prevSlide")
  const nextButton = document.getElementById("nextSlide")
  let currentSlide = 0
  const totalSlides = slides.length

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0"
    })
    dots.forEach((dot, i) => {
      dot.classList.toggle("opacity-100", i === index)
      dot.classList.toggle("opacity-50", i !== index)
    })
    currentSlide = index
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % totalSlides)
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + totalSlides) % totalSlides)
  }

  nextButton.addEventListener("click", nextSlide)
  prevButton.addEventListener("click", prevSlide)

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index))
  })

  // Auto-advance slides every 5 seconds
  setInterval(nextSlide, 5000)
})

// Export the Hero function
window.Hero = Hero

