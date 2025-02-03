document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")

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
  } else {
    console.error("Top banner not found")
  }

  // Carrusel de propiedades en el héroe
  const propertyCarousel = document.getElementById("propertyCarousel")
  const nextPropertyBtn = document.getElementById("nextProperty")
  const carouselIndicators = document.getElementById("carouselIndicators")
  let currentPropertyIndex = 0
  let properties = []

  // Cargar propiedades desde el archivo JSON
  fetch("properties.json")
    .then((response) => response.json())
    .then((data) => {
      properties = data
      initializeCarousel()
      initializeFeaturedProperties()
    })
    .catch((error) => console.error("Error loading properties:", error))

  function initializeCarousel() {
    properties.forEach((property, index) => {
      const slide = document.createElement("div")
      slide.className = `absolute inset-0 transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}`
      slide.style.backgroundImage = `url(${property.images[0]})`
      slide.style.backgroundSize = "cover"
      slide.style.backgroundPosition = "center"
      propertyCarousel.appendChild(slide)

      const indicator = document.createElement("button")
      indicator.className = `w-4 h-4 rounded-full ${index === 0 ? "bg-primary" : "bg-white"}`
      indicator.addEventListener("click", () => goToSlide(index))
      carouselIndicators.appendChild(indicator)
    })
  }

  function goToSlide(index) {
    const slides = propertyCarousel.children
    const indicators = carouselIndicators.children

    slides[currentPropertyIndex].classList.remove("opacity-100")
    slides[currentPropertyIndex].classList.add("opacity-0")
    indicators[currentPropertyIndex].classList.remove("bg-primary")
    indicators[currentPropertyIndex].classList.add("bg-white")

    currentPropertyIndex = index

    slides[currentPropertyIndex].classList.remove("opacity-0")
    slides[currentPropertyIndex].classList.add("opacity-100")
    indicators[currentPropertyIndex].classList.remove("bg-white")
    indicators[currentPropertyIndex].classList.add("bg-primary")
  }

  function nextSlide() {
    goToSlide((currentPropertyIndex + 1) % properties.length)
  }

  if (nextPropertyBtn) {
    nextPropertyBtn.addEventListener("click", nextSlide)
  }

  // Cambiar automáticamente la diapositiva cada 5 segundos
  setInterval(nextSlide, 5000)

  // Initialize featured properties
  function initializeFeaturedProperties() {
    const featuredPropertiesContainer = document.getElementById("featuredProperties")
    if (featuredPropertiesContainer) {
      properties.forEach((property) => {
        const propertyCard = document.createElement("div")
        propertyCard.className =
          "bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-80 mx-2 transform transition-all duration-300 hover:scale-105"
        propertyCard.innerHTML = `
                    <img src="${property.images[0]}" alt="${property.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                        <p class="text-gray-600 mb-4">${property.description.substring(0, 100)}...</p>
                        <div class="flex justify-between items-center">
                            <span class="text-primary font-bold">$${property.price.toLocaleString()}</span>
                            <button class="bg-primary text-white px-4 py-2 rounded-full property-details" data-property-id="${property.id}">Ver Detalles</button>
                        </div>
                    </div>
                `
        featuredPropertiesContainer.appendChild(propertyCard)
      })

      // Add horizontal scroll functionality
      const scrollLeftBtn = document.getElementById("scrollLeft")
      const scrollRightBtn = document.getElementById("scrollRight")

      if (scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener("click", () => {
          featuredPropertiesContainer.scrollBy({ left: -300, behavior: "smooth" })
        })

        scrollRightBtn.addEventListener("click", () => {
          featuredPropertiesContainer.scrollBy({ left: 300, behavior: "smooth" })
        })
      }

      // Property Details Modal
      const propertyModal = document.getElementById("propertyModal")
      const propertyTitle = document.getElementById("propertyTitle")
      const propertySlider = document.getElementById("propertySlider")
      const propertyDescription = document.getElementById("propertyDescription")
      const propertyDetails = document.getElementById("propertyDetails")
      const propertyContact = document.getElementById("propertyContact")
      const closePropertyModal = document.getElementById("closePropertyModal")
      const prevSlide = document.getElementById("prevSlide")
      const nextSlide = document.getElementById("nextSlide")

      if (
        !propertyModal ||
        !propertyTitle ||
        !propertySlider ||
        !propertyDescription ||
        !propertyDetails ||
        !propertyContact ||
        !closePropertyModal ||
        !prevSlide ||
        !nextSlide
      ) {
        console.error("One or more modal elements not found")
      }

      let currentPropertyIndex = 0

      // Agregar event listeners a los botones de detalles de propiedad
      document.querySelectorAll(".property-details").forEach((button) => {
        button.addEventListener("click", function () {
          const propertyId = Number.parseInt(this.getAttribute("data-property-id"))
          const property = properties.find((p) => p.id === propertyId)

          if (property) {
            propertyTitle.textContent = property.title
            propertyDescription.textContent = property.description
            propertySlider.innerHTML = property.images
              .map((img) => `<img src="${img}" alt="${property.title}" class="w-full h-64 object-cover">`)
              .join("")
            propertyDetails.innerHTML = Object.entries(property.details)
              .map(
                ([key, value]) => `
                                <div><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</div>
                            `,
              )
              .join("")

            // Actualizar el enlace de WhatsApp con el mensaje predefinido
            const whatsappMessage = encodeURIComponent(`Hola, estoy interesado en la propiedad: ${property.title}`)
            propertyContact.href = `https://wa.me/${property.whatsapp}?text=${whatsappMessage}`

            propertyModal.classList.remove("hidden")
            currentPropertyIndex = 0
            updateSlider()
          }
        })
      })

      if (closePropertyModal) {
        closePropertyModal.addEventListener("click", () => {
          propertyModal.classList.add("hidden")
        })
      }

      if (propertyModal) {
        propertyModal.addEventListener("click", (e) => {
          if (e.target === propertyModal) {
            propertyModal.classList.add("hidden")
          }
        })
      }

      function updateSlider() {
        const images = propertySlider.querySelectorAll("img")
        images.forEach((img, index) => {
          img.style.display = index === currentPropertyIndex ? "block" : "none"
        })
      }

      if (prevSlide && nextSlide) {
        prevSlide.addEventListener("click", () => {
          const images = propertySlider.querySelectorAll("img")
          currentPropertyIndex = (currentPropertyIndex - 1 + images.length) % images.length
          updateSlider()
        })

        nextSlide.addEventListener("click", () => {
          const images = propertySlider.querySelectorAll("img")
          currentPropertyIndex = (currentPropertyIndex + 1) % images.length
          updateSlider()
        })
      }
    } else {
      console.error("Featured properties container not found")
    }
  }

  // Fix for WhatsApp button
  if (propertyContact) {
    propertyContact.addEventListener("click", function (e) {
      e.preventDefault()
      window.open(this.href, "_blank")
    })
  }

  // Investment Opportunities Modal
  const investmentModal = document.getElementById("investmentModal")
  const investmentTitle = document.getElementById("investmentTitle")
  const investmentContent = document.getElementById("investmentContent")
  const closeInvestmentModal = document.getElementById("closeInvestmentModal")

  if (!investmentModal || !investmentTitle || !investmentContent || !closeInvestmentModal) {
    console.error("One or more investment modal elements not found")
  }

  const investments = [
    {
      id: 1,
      title: "Invertir en Samborondón",
      content: `
                <p class="mb-4">Samborondón es una de las zonas más exclusivas y de mayor crecimiento en Ecuador. Invertir aquí ofrece excelentes oportunidades de rentabilidad a largo plazo.</p>
                <h3 class="text-xl font-bold mb-2">Ventajas de invertir en Samborondón:</h3>
                <ul class="list-disc list-inside mb-4">
                    <li>Zona de alto prestigio y demanda constante</li>
                    <li>Infraestructura moderna y en constante desarrollo</li>
                    <li>Excelentes colegios y universidades en la zona</li>
                    <li>Cercanía a centros comerciales y áreas de entretenimiento</li>
                </ul>
                <p>Contáctenos para conocer las mejores oportunidades de inversión en Samborondón.</p>
            `,
    },
    {
      id: 2,
      title: "Invertir en Estados Unidos",
      content: `
                <p class="mb-4">Invertir en el mercado inmobiliario de Estados Unidos ofrece grandes oportunidades para diversificar su portafolio y obtener rendimientos estables.</p>
                <h3 class="text-xl font-bold mb-2">Beneficios de invertir en Estados Unidos:</h3>
                <ul class="list-disc list-inside mb-4">
                    <li>Mercado inmobiliario estable y maduro</li>
                    <li>Diversidad de opciones de inversión</li>
                    <li>Potencial de apreciación a largo plazo</li>
                    <li>Protección legal para inversionistas extranjeros</li>
                </ul>
                <p>Nuestro equipo puede guiarlo en el proceso de inversión en Estados Unidos.</p>
            `,
    },
    {
      id: 3,
      title: "Invertir en Panamá",
      content: `
                <p class="mb-4">Panamá se ha convertido en un destino atractivo para inversiones inmobiliarias, ofreciendo un mercado en crecimiento y beneficios fiscales para inversionistas.</p>
                <h3 class="text-xl font-bold mb-2">Ventajas de invertir en Panamá:</h3>
                <ul class="list-disc list-inside mb-4">
                    <li>Economía dolarizada y estable</li>
                    <li>Incentivos fiscales para inversionistas extranjeros</li>
                    <li>Ubicación estratégica para negocios internacionales</li>
                    <li>Creciente demanda de propiedades residenciales y comerciales</li>
                </ul>
                <p>Descubra las oportunidades que Panamá tiene para ofrecer con nuestra asesoría especializada.</p>
            `,
    },
  ]

  document.querySelectorAll(".investment-details").forEach((button) => {
    button.addEventListener("click", function () {
      const investmentId = Number.parseInt(this.getAttribute("data-investment-id"))
      const investment = investments.find((i) => i.id === investmentId)

      if (investment) {
        investmentTitle.textContent = investment.title
        investmentContent.innerHTML = investment.content
        investmentModal.classList.remove("hidden")
      }
    })
  })

  if (closeInvestmentModal) {
    closeInvestmentModal.addEventListener("click", () => {
      investmentModal.classList.add("hidden")
    })
  }

  if (investmentModal) {
    investmentModal.addEventListener("click", (e) => {
      if (e.target === investmentModal) {
        investmentModal.classList.add("hidden")
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

  // GSAP animations
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
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

    // Animate property cards on scroll
    gsap.utils.toArray("#propiedades .bg-white").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        delay: i * 0.1,
      })
    })

    // Animate FAQ items
    gsap.utils.toArray("#faq .bg-white").forEach((faq, i) => {
      gsap.from(faq, {
        scrollTrigger: {
          trigger: faq,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 0.5,
        delay: i * 0.2,
      })
    })
  } else {
    console.warn("GSAP or ScrollTrigger not loaded")
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

  // Bottom App Bar active state
  const bottomNavLinks = document.querySelectorAll(".fixed.bottom-0 a")
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
          acc[key.trim()] = value.trim()
          return acc
        }, {})

        propertyCards.forEach((card) => {
          const propertyData = JSON.parse(card.dataset.property)
          let show = true

          for (const [key, value] of Object.entries(filterObj)) {
            if (key === "precio") {
              const [min, max] = value.split("-").map(Number)
              if (propertyData.precio < min || propertyData.precio > max) {
                show = false
                break
              }
            } else if (propertyData[key] != value) {
              show = false
              break
            }
          }

          card.style.display = show ? "block" : "none"
        })
      }
    })
  } else {
    console.error("Filter properties button not found")
  }

  // Chatbot functionality
  const chatbotButton = document.getElementById("chatbotButton")
  const chatbotModal = document.getElementById("chatbotModal")
  const closeChatbotModal = document.getElementById("closeChatbotModal")
  const chatMessages = document.getElementById("chatMessages")
  const chatForm = document.getElementById("chatForm")
  const chatInput = document.getElementById("chatInput")

  if (chatbotButton && chatbotModal && closeChatbotModal) {
    chatbotButton.addEventListener("click", () => {
      console.log("Chatbot button clicked")
      chatbotModal.classList.remove("hidden")
      chatbotModal.style.display = "block"
    })

    closeChatbotModal.addEventListener("click", () => {
      console.log("Close chatbot button clicked")
      chatbotModal.classList.add("hidden")
      chatbotModal.style.display = "none"
    })
  } else {
    console.error("One or more chatbot elements not found")
  }

  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const message = chatInput.value.trim()
      if (message) {
        addMessage("user", message)
        chatInput.value = ""
        // Simulate ARIA's response (replace with actual AI integration later)
        setTimeout(() => {
          addMessage(
            "bot",
            "Gracias por tu mensaje. Soy ARIA, la asistente virtual de Janneth Aguirre Bienes Raíces. ¿En qué puedo ayudarte hoy?",
          )
        }, 1000)
      }
    })
  } else {
    console.error("Chat form or input not found")
  }

  function addMessage(sender, text) {
    if (chatMessages) {
      const messageElement = document.createElement("div")
      messageElement.classList.add(
        "mb-2",
        "p-2",
        "rounded",
        sender === "user" ? "bg-primary" : "bg-gray-300",
        sender === "user" ? "text-white" : "text-gray-800",
        sender === "user" ? "ml-auto" : "mr-auto",
      )
      messageElement.style.maxWidth = "80%"
      messageElement.textContent = text
      chatMessages.appendChild(messageElement)
      chatMessages.scrollTop = chatMessages.scrollHeight
    } else {
      console.error("Chat messages container not found")
    }
  }

  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll("#faq .bg-white")

  faqItems.forEach((item) => {
    const button = item.querySelector("button")
    const content = item.querySelector("div:last-child")
    const icon = button.querySelector("i")

    if (button && content && icon) {
      button.addEventListener("click", () => {
        content.classList.toggle("hidden")
        icon.classList.toggle("fa-chevron-down")
        icon.classList.toggle("fa-chevron-up")
      })
    } else {
      console.error("FAQ item elements not found")
    }
  })

  // YouTube Videos Section
  const youtubeSlider = document.getElementById("youtubeSlider")
  if (youtubeSlider) {
    const channelId = "UCiahlQJxCgPY-tEfjvkab8g"
    const apiKey = "AIzaSyBf5wzygVChOBD-3pPb4BR2v5NA4uE9J5c"
    const maxResults = 10 // Número de videos a mostrar

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`,
    )
      .then((response) => response.json())
      .then((data) => {
        data.items.forEach((item) => {
          if (item.id.kind === "youtube#video") {
            const videoElement = document.createElement("div")
            videoElement.className = "flex-shrink-0 w-80 mx-2"
            videoElement.innerHTML = `
                            <iframe width="320" height="180" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p class="mt-2 text-center">${item.snippet.title}</p>
                        `
            youtubeSlider.appendChild(videoElement)
          }
        })

        // Add horizontal scroll functionality to YouTube slider
        let isDown = false
        let startX
        let scrollLeft

        youtubeSlider.addEventListener("mousedown", (e) => {
          isDown = true
          startX = e.pageX - youtubeSlider.offsetLeft
          scrollLeft = youtubeSlider.scrollLeft
        })

        youtubeSlider.addEventListener("mouseleave", () => {
          isDown = false
        })

        youtubeSlider.addEventListener("mouseup", () => {
          isDown = false
        })

        youtubeSlider.addEventListener("mousemove", (e) => {
          if (!isDown) return
          e.preventDefault()
          const x = e.pageX - youtubeSlider.offsetLeft
          const walk = (x - startX) * 3
          youtubeSlider.scrollLeft = scrollLeft - walk
        })
      })
      .catch((error) => console.error("Error fetching YouTube videos:", error))
  } else {
    console.error("YouTube slider container not found")
  }

  // Instagram Reels Section
  const instagramSlider = document.getElementById("instagramSlider")
  if (instagramSlider) {
    let isDown = false
    let startX
    let scrollLeft

    instagramSlider.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - instagramSlider.offsetLeft
      scrollLeft = instagramSlider.scrollLeft
    })

    instagramSlider.addEventListener("mouseleave", () => {
      isDown = false
    })

    instagramSlider.addEventListener("mouseup", () => {
      isDown = false
    })

    instagramSlider.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - instagramSlider.offsetLeft
      const walk = (x - startX) * 3
      instagramSlider.scrollLeft = scrollLeft - walk
    })

    // Touch events for mobile devices
    instagramSlider.addEventListener("touchstart", (e) => {
      isDown = true
      startX = e.touches[0].pageX - instagramSlider.offsetLeft
      scrollLeft = instagramSlider.scrollLeft
    })

    instagramSlider.addEventListener("touchend", () => {
      isDown = false
    })

    instagramSlider.addEventListener("touchmove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.touches[0].pageX - instagramSlider.offsetLeft
      const walk = (x - startX) * 3
      instagramSlider.scrollLeft = scrollLeft - walk
    })
  }

  // Logo Slider
  const logoSlider = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  })

  // Cargar logos dinámicamente
  const logos = [
    "logo1.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
    "logo6.png",
    "logo7.png",
    "logo8.png",
    "logo9.png",
    "logo10.png",
  ]

  const swiperWrapper = document.querySelector(".swiper-wrapper")
  logos.forEach((logo) => {
    const slide = document.createElement("div")
    slide.className = "swiper-slide"
    slide.innerHTML = `<img src="images/logos/${logo}" alt="Logo" class="mx-auto h-16 object-contain">`
    swiperWrapper.appendChild(slide)
  })

  console.log("Script loaded successfully!")
})

