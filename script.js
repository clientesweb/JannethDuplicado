// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

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

const properties = [
    {
        id: 1,
        title: "Lujosa Villa en Samborondón",
        description: "Espectacular villa con vistas panorámicas y acabados de lujo. Esta propiedad cuenta con 5 habitaciones, 6 baños, piscina infinita, y un hermoso jardín.",
        images: [
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        ],
        details: {
            bedrooms: 5,
            bathrooms: 6,
            area: "500 m²",
            parking: 3
        },
        whatsapp: "593987167782"
    },
    {
        id: 2,
        title: "Apartamento de Lujo en Cuenca",
        description: "Moderno apartamento en el corazón del centro histórico. Con 3 habitaciones, 2 baños, y una terraza con vista a la catedral.",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
        ],
        details: {
            bedrooms: 3,
            bathrooms: 2,
            area: "150 m²",
            parking: 1
        },
        whatsapp: "593987167782"
    },
    {
        id: 3,
        title: "Penthouse en Guayaquil",
        description: "Espectacular penthouse con vistas al río Guayas. Cuenta con 4 habitaciones, 3 baños, una amplia sala de estar y una terraza privada.",
        images: [
            "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
        ],
        details: {
            bedrooms: 4,
            bathrooms: 3,
            area: "300 m²",
            parking: 2
        },
        whatsapp: "593987167782"
    }
];

let currentPropertyIndex = 0;

document.querySelectorAll('.property-details').forEach(button => {
    button.addEventListener('click', function() {
        const propertyId = parseInt(this.getAttribute('data-property-id'));
        const property = properties.find(p => p.id === propertyId);

        if (property) {
            propertyTitle.textContent = property.title;
            propertyDescription.textContent = property.description;
            propertySlider.innerHTML = property.images.map(img => `<img src="${img}" alt="${property.title}" class="w-full h-64 object-cover">`).join('');
            propertyDetails.innerHTML = `
                <div><strong>Habitaciones:</strong> ${property.details.bedrooms}</div>
                <div><strong>Baños:</strong> ${property.details.bathrooms}</div>
                <div><strong>Área:</strong> ${property.details.area}</div>
                <div><strong>Estacionamientos:</strong> ${property.details.parking}</div>
            `;
            propertyContact.href = `https://wa.me/${property.whatsapp}?text=Hola, estoy interesado en la propiedad: ${property.title}`;
            propertyModal.classList.remove('hidden');
            currentPropertyIndex = 0;
            updateSlider();
        }
    });
});

closePropertyModal.addEventListener('click', () => {
    propertyModal.classList.add('hidden');
});

propertyModal.addEventListener('click', (e) => {
    if (e.target === propertyModal) {
        propertyModal.classList.add('hidden');
    }
});

function updateSlider() {
    const images = propertySlider.querySelectorAll('img');
    images.forEach((img, index) => {
        img.style.display = index === currentPropertyIndex ? 'block' : 'none';
    });
}

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

// Investment Opportunities Modal
const investmentModal = document.getElementById('investmentModal');
const investmentTitle = document.getElementById('investmentTitle');
const investmentContent = document.getElementById('investmentContent');
const closeInvestmentModal = document.getElementById('closeInvestmentModal');

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
            <p class="mb-4">El mercado inmobiliario de Estados Unidos ofrece estabilidad y potencial de crecimiento para inversionistas internacionales.</p>
            <h3 class="text-xl font-bold mb-2">Beneficios de invertir en Estados Unidos:</h3>
            <ul class="list-disc list-inside mb-4">
                <li>Mercado inmobiliario estable y regulado</li>
                <li>Oportunidades en diversas ciudades y estados</li>
                <li>Posibilidad de obtener visas de inversionista</li>
                <li>Potencial de apreciación a largo plazo</li>
            </ul>
            <p>Descubra cómo podemos ayudarle a invertir en el mercado estadounidense.</p>
        `
    },
    {
        id: 3,
        title: "Invertir en Panamá",
        content: `
            <p class="mb-4">Panamá se ha convertido en un hub de inversiones inmobiliarias en Latinoamérica, ofreciendo un mercado dinámico y en crecimiento.</p>
            <h3 class="text-xl font-bold mb-2">Razones para invertir en Panamá:</h3>
            <ul class="list-disc list-inside mb-4">
                <li>Economía dolarizada y estable</li>
                <li>Incentivos fiscales para inversionistas extranjeros</li>
                <li>Ubicación estratégica y excelente conectividad</li>
                <li>Mercado de alquileres activo para propiedades de lujo</li>
            </ul>
            <p>Explore las oportunidades que Panamá tiene para ofrecer a inversionistas como usted.</p>
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

closeInvestmentModal.addEventListener('click', () => {
    investmentModal.classList.add('hidden');
});

investmentModal.addEventListener('click', (e) => {
    if (e.target === investmentModal) {
        investmentModal.classList.add('hidden');
    }
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);

    try {
        const response = await fetch('https://formspree.io/f/your_formspree_id', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo más tarde.');
    }
});

// GSAP animations
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
window.addEventListener('load', function() {
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
});

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

// Chatbot functionality
const chatbotButton = document.getElementById('chatbotButton');
const chatbotModal = document.getElementById('chatbotModal');
const closeChatbotModal = document.getElementById('closeChatbotModal');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

chatbotButton.addEventListener('click', () => {
    chatbotModal.classList.remove('hidden');
});

closeChatbotModal.addEventListener('click', () => {
    chatbotModal.classList.add('hidden');
});

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

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('mb-2', 'p-2', 'rounded', sender === 'user' ? 'bg-primary' : 'bg-gray-300', sender === 'user' ? 'text-white' : 'text-gray-800', sender === 'user' ? 'ml-auto' : 'mr-auto');
    messageElement.style.maxWidth = '80%';
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('#faq .bg-white');

faqItems.forEach(item => {
    const button = item.querySelector('button');
    const content = item.querySelector('div:last-child');
    const icon = button.querySelector('i');

    button.addEventListener('click', () => {
        content.classList.toggle('hidden');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

console.log('Script loaded successfully!');