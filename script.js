document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('Scroll to top button not found');
    }

    // Property Details Modal
    const propertyModal = document.getElementById('propertyModal');
    const propertyTitle = document.getElementById('propertyTitle');
    const propertySlider = document.getElementById('propertySlider');
    const propertyDescription = document.getElementById('propertyDescription');
    const propertyDetails = document.getElementById('propertyDetails');
    const propertyContact = document.getElementById('propertyContact');
    const closePropertyModal = document.getElementById('closePropertyModal');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');

    if (!propertyModal || !propertyTitle || !propertySlider || !propertyDescription || !propertyDetails || !propertyContact || !closePropertyModal || !prevSlide || !nextSlide) {
        console.error('One or more property modal elements not found');
    }

    const properties = [
        {
            id: 2,
            title: "Terrenos en Venta o Alquiler",
            description: "Con una ubicación estratégica cerca de nuevo Country Club, Todo Nuevo Samborondon, Zonas industriales, estos terrenos están rodeados de amenidades y servicios que harán que su inversión sea aún más valiosa. Ofrecemos terrenos de diferentes tamaños y formas, con fácil acceso a carreteras y autopistas, en un vecindario tranquilo y seguro.",
            images: [
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
                "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            ],
            details: {
                area: "Varía según el lote",
                location: "Cerca de Country Club",
                features: "Acceso a carreteras, Vecindario seguro"
            },
            whatsapp: "593987167782"
        },
        {
            id: 3,
            title: "Departamentos en Venta - Nuevo Samborondon (Planos)",
            description: "Hermoso departamento en la exclusiva zona de Nuevo Samborondón. Cuenta con 2 habitaciones, 2 baños modernos, cocina abierta, sala y comedor acogedores. Áreas sociales incluyen piscina, gimnasio y salón de eventos. Seguridad 24/7 con conserjería y vigilancia.",
            images: [
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            ],
            details: {
                bedrooms: 2,
                bathrooms: 2,
                amenities: "Piscina, Gimnasio, Salón de eventos",
                security: "24/7"
            },
            whatsapp: "593987167782"
        },
        {
            id: 4,
            title: "Departamentos en Venta - Isla Mocoli (Planos)",
            description: "Proyecto exclusivo de departamentos de 3 habitaciones en Isla Mocoli. Ubicados en una de las zonas más prestigiosas y exclusivas de la ciudad. Cada departamento cuenta con 3 habitaciones amplias, 3.5 baños completos, salón-comedor con cocina integrada, y vistas impresionantes.",
            images: [
                "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            ],
            details: {
                bedrooms: 3,
                bathrooms: 3.5,
                amenities: "Gimnasio, Piscina, Área de descanso",
                parking: "Privado y de visitas"
            },
            whatsapp: "593987167782"
        },
        {
            id: 5,
            title: "Locales Comerciales en Nuevo Samborondon",
            description: "Oportunidad única de invertir en locales comerciales en Nuevo Samborondon. Ubicación estratégica con alto tráfico peatonal y vehicular. Ofrecemos locales de diferentes tamaños y diseños, con amplias ventanas y fachadas para maximizar la visibilidad.",
            images: [
                "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            ],
            details: {
                location: "Nuevo Samborondon",
                features: "Amplias ventanas, Fácil acceso",
                visibility: "Alta exposición comercial"
            },
            whatsapp: "593987167782"
        },
        {
            id: 6,
            title: "Consultorios Médicos en Nuevo Samborondon",
            description: "Oportunidad única de invertir en consultorios médicos en Nuevo Samborondon. Ubicación estratégica rodeada de hospitales y clínicas. Ofrecemos espacios amplios y bien iluminados, con equipamiento médico de alta calidad y tecnología avanzada.",
            images: [
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80",
                "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            ],
            details: {
                location: "Nuevo Samborondon",
                features: "Equipamiento médico de alta calidad",
                accessibility: "Fácil acceso para pacientes y personal"
            },
            whatsapp: "593987167782"
        },
        {
            id: 7,
            title: "Casas Personalizadas",
            description: "Hacemos realidad tu sueño de tener una casa perfecta. Nuestro equipo de expertos en construcción y diseño trabaja para crear casas personalizadas que se adaptan a las necesidades y gustos de cada cliente. Ofrecemos diseño personalizado, materiales de alta calidad, y construcción rápida y eficiente.",
            images: [
                "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            ],
            details: {
                features: "Diseño personalizado, Materiales de alta calidad",
                construction: "Rápida y eficiente",
                focus: "Atención al detalle"
            },
            whatsapp: "593987167782"
        },
        {
            id: 8,
            title: "Departamentos en Cuenca",
            description: "Oportunidad única de invertir en un departamento en Cuenca, ideal para Airbnb. Ofrecemos departamentos de 2 y 3 habitaciones amplias y bien iluminadas, con 2 y 3 baños completos, salón-comedor con cocina integrada, y vistas impresionantes a la ciudad. Incluye área de lavado y secado.",
            images: [
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                "images/cuenca3.jpg",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            ],
            details: {
                bedrooms: "2 y 3",
                bathrooms: "2 y 3",
                views: "Vistas impresionantes a la ciudad",
                amenities: "Seguridad 24/7, Gimnasio y spa, Piscina y área de descanso, Estacionamiento privado"
            },
            whatsapp: "593987167782"
        }
    ];

    let currentPropertyIndex = 0;

    // Generar tarjetas de propiedades
    const featuredPropertiesContainer = document.getElementById('featuredProperties');
    if (featuredPropertiesContainer) {
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80 mx-2';
            propertyCard.innerHTML = `
                <img src="${property.images[0]}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                    <p class="text-gray-600 mb-4">${property.description.substring(0, 100)}...</p>
                    <button class="bg-primary text-white px-4 py-2 rounded property-details" data-property-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            featuredPropertiesContainer.appendChild(propertyCard);
        });

        // Add horizontal scroll functionality
        const scrollLeftBtn = document.getElementById('scrollLeft');
        const scrollRightBtn = document.getElementById('scrollRight');

        if (scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', () => {
                featuredPropertiesContainer.scrollBy({ left: -300, behavior: 'smooth' });
            });

            scrollRightBtn.addEventListener('click', () => {
                featuredPropertiesContainer.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }

        // Agregar event listeners a los botones de detalles de propiedad
        document.querySelectorAll('.property-details').forEach(button => {
            button.addEventListener('click', function() {
                const propertyId = parseInt(this.getAttribute('data-property-id'));
                const property = properties.find(p => p.id === propertyId);

                if (property) {
                    propertyTitle.textContent = property.title;
                    propertyDescription.textContent = property.description;
                    propertySlider.innerHTML = property.images.map(img => `<img src="${img}" alt="${property.title}" class="w-full h-64 object-cover">`).join('');
                    propertyDetails.innerHTML = Object.entries(property.details).map(([key, value]) => `
                        <div><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</div>
                    `).join('');
                    
                    // Actualizar el enlace de WhatsApp con el mensaje predefinido
                    const whatsappMessage = encodeURIComponent(`Hola, estoy interesado en la propiedad: ${property.title}`);
                    propertyContact.href = `https://wa.me/${property.whatsapp}?text=${whatsappMessage}`;
                    
                    propertyModal.classList.remove('hidden');
                    currentPropertyIndex = 0;
                    updateSlider();
                }
            });
        });
    } else {
        console.error('Featured properties container not found');
    }

    if (closePropertyModal) {
        closePropertyModal.addEventListener('click', () => {
            propertyModal.classList.add('hidden');
        });
    }

    if (propertyModal) {
        propertyModal.addEventListener('click', (e) => {
            if (e.target === propertyModal) {
                propertyModal.classList.add('hidden');
            }
        });
    }

    function updateSlider() {
        const images = propertySlider.querySelectorAll('img');
        images.forEach((img, index) => {
            img.style.display = index === currentPropertyIndex ? 'block' : 'none';
        });
    }

    if (prevSlide && nextSlide) {
        prevSlide.addEventListener('click', () => {
            const images = propertySlider.querySelectorAll('img');
            currentPropertyIndex = (currentPropertyIndex - 1 + images.length) % images.length;
            updateSlider();
        });

        nextSlide.addEventListener('click', () => {
            const images = propertySlider.querySelectorAll('img');
            currentPropertyIndex = (currentPropertyIndex + 1) % images.length;
            updateSlider();
        });
    }

    // Fix for WhatsApp button
    if (propertyContact) {
        propertyContact.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    }

    // Investment Opportunities Modal
    const investmentModal = document.getElementById('investmentModal');
    const investmentTitle = document.getElementById('investmentTitle');
    const investmentContent = document.getElementById('investmentContent');
    const closeInvestmentModal = document.getElementById('closeInvestmentModal');

    if (!investmentModal || !investmentTitle || !investmentContent || !closeInvestmentModal) {
        console.error('One or more investment modal elements not found');
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
            `
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
            `
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
            `
        }
    ];

    document.querySelectorAll('.investment-details').forEach(button => {
        button.addEventListener('click', function() {
            const investmentId = parseInt(this.getAttribute('data-investment-id'));
            const investment = investments.find(i => i.id === investmentId);

            if (investment) {
                investmentTitle.textContent = investment.title;
                investmentContent.innerHTML = investment.content;
                investmentModal.classList.remove('hidden');
            }
        });
    });

    if (closeInvestmentModal) {
        closeInvestmentModal.addEventListener('click', () => {
            investmentModal.classList.add('hidden');
        });
    }

    if (investmentModal) {
        investmentModal.addEventListener('click', (e) => {
            if (e.target === investmentModal) {
                investmentModal.classList.add('hidden');
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');

            // Construir el mensaje para WhatsApp
            const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AMensaje: ${message}`;
            const whatsappUrl = `https://wa.me/593987167782?text=${whatsappMessage}`;

            // Abrir WhatsApp en una nueva ventana
            window.open(whatsappUrl, '_blank');

            // Opcional: Limpiar el formulario después del envío
            contactForm.reset();
        });
    } else {
        console.error('Contact form not found');
    }

    // GSAP animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animate services on scroll
        gsap.utils.toArray('#servicios .text-center').forEach((service, i) => {
            gsap.from(service, {
                scrollTrigger: {
                    trigger: service,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                delay: i * 0.2
            });
        });

        // Animate property cards on scroll
        gsap.utils.toArray('#propiedades .bg-white').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=50",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                delay: i * 0.1
            });
        });

        // Animate FAQ items
        gsap.utils.toArray('#faq .bg-white').forEach((faq, i) => {
            gsap.from(faq, {
                scrollTrigger: {
                    trigger: faq,
                    start: "top bottom-=50",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: -50,
                duration: 0.5,
                delay: i * 0.2
            });
        });
    } else {
        console.warn('GSAP or ScrollTrigger not loaded');
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Instagram Embed
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    } else {
        console.warn('Instagram embed script not loaded');
    }

    // Bottom App Bar active state
    const bottomNavLinks = document.querySelectorAll('.fixed.bottom-0 a');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        bottomNavLinks.forEach(link => {
            link.classList.remove('text-primary');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-primary');
            }
        });
    });

    // Property filter functionality
    const filterPropertiesBtn = document.getElementById('filterProperties');
    const propertyCards = document.querySelectorAll('#propiedades .bg-white');

    if (filterPropertiesBtn) {
        filterPropertiesBtn.addEventListener('click', () => {
            const filters = prompt('Ingrese filtros (ejemplo: "habitaciones:3,baños:2,precio:200000-500000"):');
            if (filters) {
                const filterObj = filters.split(',').reduce((acc, filter) => {
                    const [key, value] = filter.split(':');
                    acc[key.trim()] = value.trim();
                    return acc;
                }, {});

                propertyCards.forEach(card => {
                    const propertyData = JSON.parse(card.dataset.property);
                    let show = true;

                    for (const [key, value] of Object.entries(filterObj)) {
                        if (key === 'precio') {
                            const [min, max] = value.split('-').map(Number);
                            if (propertyData.precio < min || propertyData.precio > max) {
                                show = false;
                                break;
                            }
                        } else if (propertyData[key] != value) {
                            show = false;
                            break;
                        }
                    }

                    card.style.display = show ? 'block' : 'none';
                });
            }
        });
    } else {
        console.error('Filter properties button not found');
    }

    // Chatbot functionality
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeChatbotModal = document.getElementById('closeChatbotModal');
    const chatMessages = document.getElementById('chatMessages');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');

    if (chatbotButton && chatbotModal && closeChatbotModal) {
        chatbotButton.addEventListener('click', () => {
            console.log('Chatbot button clicked');
            chatbotModal.classList.remove('hidden');
            chatbotModal.style.display = 'block';
        });

        closeChatbotModal.addEventListener('click', () => {
            console.log('Close chatbot button clicked');
            chatbotModal.classList.add('hidden');
            chatbotModal.style.display = 'none';
        });
    } else {
        console.error('One or more chatbot elements not found');
    }

    if (chatForm && chatInput) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (message) {
                addMessage('user', message);
                chatInput.value = '';
                // Simulate ARIA's response (replace with actual AI integration later)
                setTimeout(() => {
                    addMessage('bot', "Gracias por tu mensaje. Soy ARIA, la asistente virtual de Janneth Aguirre Bienes Raíces. ¿En qué puedo ayudarte hoy?");
                }, 1000);
            }
        });
    } else {
        console.error('Chat form or input not found');
    }

    function addMessage(sender, text) {
        if (chatMessages) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('mb-2', 'p-2', 'rounded', sender === 'user' ? 'bg-primary' : 'bg-gray-300', sender === 'user' ? 'text-white' : 'text-gray-800', sender === 'user' ? 'ml-auto' : 'mr-auto');
            messageElement.style.maxWidth = '80%';
            messageElement.textContent = text;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
            console.error('Chat messages container not found');
        }
    }

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('#faq .bg-white');

    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('div:last-child');
        const icon = button.querySelector('i');

        if (button && content && icon) {
            button.addEventListener('click', () => {
                content.classList.toggle('hidden');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            });
        } else {
            console.error('FAQ item elements not found');
        }
    });

    // YouTube Videos Section
    const youtubeSlider = document.getElementById('youtubeSlider');
    if (youtubeSlider) {
        const channelId = 'UCiahlQJxCgPY-tEfjvkab8g';
        const apiKey = 'AIzaSyBf5wzygVChOBD-3pPb4BR2v5NA4uE9J5c';
        const maxResults = 10; // Número de videos a mostrar

        fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`)
            .then(response => response.json())
            .then(data => {
                data.items.forEach(item => {
                    if (item.id.kind === "youtube#video") {
                        const videoElement = document.createElement('div');
                        videoElement.className = 'flex-shrink-0 w-80 mx-2';
                        videoElement.innerHTML = `
                            <iframe width="320" height="180" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p class="mt-2 text-center">${item.snippet.title}</p>
                        `;
                        youtubeSlider.appendChild(videoElement);
                    }
                });

                // Add horizontal scroll functionality to YouTube slider
                let isDown = false;
                let startX;
                let scrollLeft;

                youtubeSlider.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - youtubeSlider.offsetLeft;
                    scrollLeft = youtubeSlider.scrollLeft;
                });

                youtubeSlider.addEventListener('mouseleave', () => {
                    isDown = false;
                });

                youtubeSlider.addEventListener('mouseup', () => {
                    isDown = false;
                });

                youtubeSlider.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - youtubeSlider.offsetLeft;
                    const walk = (x - startX) * 3;
                    youtubeSlider.scrollLeft = scrollLeft - walk;
                });
            })
            .catch(error => console.error('Error fetching YouTube videos:', error));
    } else {
        console.error('YouTube slider container not found');
    }

    // Instagram Reels Section
    const instagramSlider = document.getElementById('instagramSlider');
    if (instagramSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        instagramSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - instagramSlider.offsetLeft;
            scrollLeft = instagramSlider.scrollLeft;
        });

        instagramSlider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        instagramSlider.addEventListener('mouseup', () => {
            isDown = false;
        });

        instagramSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - instagramSlider.offsetLeft;
            const walk = (x - startX) * 3;
            instagramSlider.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile devices
        instagramSlider.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - instagramSlider.offsetLeft;
            scrollLeft = instagramSlider.scrollLeft;
        });

        instagramSlider.addEventListener('touchend', () => {
            isDown = false;
        });

        instagramSlider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - instagramSlider.offsetLeft;
            const walk = (x - startX) * 3;
            instagramSlider.scrollLeft = scrollLeft - walk;
        });
    }

    console.log('Script loaded successfully!');
});

console.log('JavaScript code executed successfully');