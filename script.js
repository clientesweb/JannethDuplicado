import { Header } from "./components/Header.js"
import { Hero } from "./components/Hero.js"
import { About } from "./components/About.js"
import { Services } from "./components/Services.js"
import { ConstructionProgress } from "./components/ConstructionProgress.js"
import { Contact } from "./components/Contact.js"
import { AppDownload } from "./components/AppDownload.js"
import { Playlists, loadPlaylists } from "./components/Playlists.js"
import { Footer } from "./components/Footer.js"
import { BottomNavigation } from "./components/BottomNavigation.js"
import { gsap, ScrollTrigger } from "gsap/all"

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app")
  app.innerHTML = `
        ${Header()}
        <main>
            ${Hero()}
            ${About()}
            ${Services()}
            ${ConstructionProgress()}
            ${Contact()}
            ${AppDownload()}
            ${Playlists()}
        </main>
        ${Footer()}
        ${BottomNavigation()}
    `

  // Cargar las playlists después de que el DOM esté listo
  loadPlaylists()

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

  // GSAP animations
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

