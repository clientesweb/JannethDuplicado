// Import GSAP
import { gsap, ScrollTrigger } from "gsap/all"

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")

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

  // Logo Slider
  const logoSlider = document.querySelector(".logo-slider")
  if (logoSlider) {
    const logoWidth = logoSlider.querySelector("div").offsetWidth
    const totalWidth = logoWidth * logoSlider.children.length

    logoSlider.style.width = `${totalWidth * 2}px`
    logoSlider.innerHTML += logoSlider.innerHTML

    function slideLogos() {
      if (logoSlider.scrollLeft >= totalWidth) {
        logoSlider.scrollLeft = 0
      } else {
        logoSlider.scrollLeft += 1
      }
      requestAnimationFrame(slideLogos)
    }

    slideLogos()
  }

  // Fade-in effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  })

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))

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
  } else {
    console.error("Scroll to top button not found")
  }

  // GSAP animations
  // Import GSAP -  This should be handled at the top of the script now.
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger not loaded. Please include the GSAP library in your project.")
  } else {
    gsap.registerPlugin(ScrollTrigger)

    // Animate services on scroll
    gsap.utils.toArray("#servicios .text-center").forEach((service, i) => {
      gsap.from(service, {
        scrollTrigger: {
          trigger: service,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.2,
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

  // Property filter functionality
  const filterPropertiesBtn = document.getElementById("filterProperties")
  const propertyCards = document.querySelectorAll("#propiedades .bg-white")

  if (filterPropertiesBtn) {
    filterPropertiesBtn.addEventListener("click", () => {
      const filters = prompt('Ingrese filtros (ejemplo: "habitaciones:3,baños:2,precio:200000-500000"):')
      if (filters) {
        const filterObj = filters.split(",").reduce((acc, filter) => {
          const [key, value] = filter.split(":")
          acc[key] = value
          return acc
        }, {})

        propertyCards.forEach((card) => {
          let matches = true
          for (const key in filterObj) {
            const cardValue = card.dataset[key]
            const filterValue = filterObj[key]
            if (key === "precio") {
              const [min, max] = filterValue.split("-")
              const cardPrice = Number.parseInt(cardValue)
              if (!(cardPrice >= Number.parseInt(min) && cardPrice <= Number.parseInt(max))) {
                matches = false
                break
              }
            } else if (cardValue !== filterValue) {
              matches = false
              break
            }
          }
          card.style.display = matches ? "block" : "none"
        })
      }
    })
  }

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
})

