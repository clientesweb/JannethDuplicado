document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const parallax = document.querySelector(".parallax")
    const scrollPosition = window.pageYOffset
    parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)"
  })

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

  // Render Modal
  const renderModal = document.getElementById("renderModal")
  const renderTitle = document.getElementById("renderTitle")
  const renderVideo = document.getElementById("renderVideo")
  const closeRenderModal = document.getElementById("closeRenderModal")

  if (
    !propertyModal ||
    !propertyTitle ||
    !propertySlider ||
    !propertyDescription ||
    !propertyDetails ||
    !propertyContact ||
    !closePropertyModal ||
    !prevSlide ||
    !nextSlide ||
    !renderModal ||
    !renderTitle ||
    !renderVideo ||
    !closeRenderModal
  ) {
    console.error("One or more modal elements not found")
  }

  let currentPropertyIndex = 0

  // Cargar propiedades desde el archivo JSON
  fetch("properties.json")
    .then((response) => response.json())
    .then((properties) => {
      const featuredPropertiesContainer = document.getElementById("featuredProperties")
      if (featuredPropertiesContainer) {
        properties.forEach((property) => {
          const propertyCard = document.createElement("div")
          propertyCard.className = "bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80 mx-2"
          propertyCard.innerHTML = `
                        <img src="${property.images[0]}" alt="${property.title}" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                            <p class="text-gray-600 mb-4">${property.description.substring(0, 100)}...</p>
                            <button class="bg-primary text-white px-4 py-2 rounded property-details mr-2" data-property-id="${property.id}">Ver Detalles</button>
                            <button class="bg-secondary text-white px-4 py-2 rounded property-render" data-property-id="${property.id}">Ver Render</button>
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

        // Agregar event listeners a los botones de render
        document.querySelectorAll(".property-render").forEach((button) => {
          button.addEventListener("click", function () {
            const propertyId = Number.parseInt(this.getAttribute("data-property-id"))
            const property = properties.find((p) => p.id === propertyId)

            if (property && property.renderAttachment) {
              renderTitle.textContent = `Render de ${property.title}`
              renderVideo.src = property.renderAttachment
              renderModal.classList.remove("hidden")
              renderVideo.play() // Reproducir el video automáticamente
            } else {
              console.error("Render video not found for property:", property)
            }
          })
        })
      } else {
        console.error("Featured properties container not found")
      }
    })
    .catch((error) => console.error("Error loading properties:", error))

  if (closePropertyModal) {
    closePropertyModal.addEventListener("click", () => {
      propertyModal.classList.add("hidden")
    })
  }

  if (closeRenderModal) {
    closeRenderModal.addEventListener("click", () => {
      renderModal.classList.add("hidden")
      renderVideo.pause()
      renderVideo.currentTime = 0 // Reiniciar el video
    })
  }

  if (propertyModal) {
    propertyModal.addEventListener("click", (e) => {
      if (e.target === propertyModal) {
        propertyModal.classList.add("hidden")
      }
    })
  }

  if (renderModal) {
    renderModal.addEventListener("click", (e) => {
      if (e.target === renderModal) {
        renderModal.classList.add("hidden")
        renderVideo.pause()
        renderVideo.currentTime = 0 // Reiniciar el video
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

  // Fix for WhatsApp button
  if (propertyContact) {
    propertyContact.addEventListener("click", function (e) {
      e.preventDefault()
      window.open(this.href, "_blank")
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

  // Magazine Slider
  const magazineSlider = document.getElementById("magazineSlider")
  if (magazineSlider) {
    let isDown = false
    let startX
    let scrollLeft

    magazineSlider.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - magazineSlider.offsetLeft
      scrollLeft = magazineSlider.scrollLeft
    })

    magazineSlider.addEventListener("mouseleave", () => {
      isDown = false
    })

    magazineSlider.addEventListener("mouseup", () => {
      isDown = false
    })

    magazineSlider.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - magazineSlider.offsetLeft
      const walk = (x - startX) * 3
      magazineSlider.scrollLeft = scrollLeft - walk
    })

    // Touch events for mobile devices
    magazineSlider.addEventListener("touchstart", (e) => {
      isDown = true
      startX = e.touches[0].pageX - magazineSlider.offsetLeft
      scrollLeft = magazineSlider.scrollLeft
    })

    magazineSlider.addEventListener("touchend", () => {
      isDown = false
    })

    magazineSlider.addEventListener("touchmove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.touches[0].pageX - magazineSlider.offsetLeft
      const walk = (x - startX) * 3
      magazineSlider.scrollLeft = scrollLeft - walk
    })
  }

  // Logo Slider (Swiper) - This section is now removed as it's replaced by the new logo slider implementation above.
  // const logoSlider = new Swiper(".swiper-container", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     loop: true,
  //     autoplay: {
  //         delay: 3000,
  //         disableOnInteraction: false,
  //     },
  //     breakpoints: {
  //         640: {
  //             slidesPerView: 3,
  //         },
  //         768: {
  //             slidesPerView: 4,
  //         },
  //         1024: {
  //             slidesPerView: 5,
  //         },
  //     },
  // })

  // Top Banner Fix - This is now handled in the Top Banner Animation section above.

  console.log("Script loaded successfully!")
})

