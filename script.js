// Preloader
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
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
const propertyContact = document.getElementById('propertyContact');
const closePropertyModal = document.getElementById('closePropertyModal');

const properties = [
    {
        id: 1,
        title: "Lujosa Villa en Samborondón",
        description: "Espectacular villa con vistas panorámicas y acabados de lujo. Esta propiedad cuenta con 5 habitaciones, 6 baños, piscina infinita, y un hermoso jardín.",
        images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600"
        ],
        whatsapp: "593987167782"
    },
    {
        id: 2,
        title: "Apartamento de Lujo en Cuenca",
        description: "Moderno apartamento en el corazón del centro histórico. Con 3 habitaciones, 2 baños, y una terraza con vista a la catedral.",
        images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600"
        ],
        whatsapp: "593987167782"
    },
    {
        id: 3,
        title: "Penthouse en Guayaquil",
        description: "Espectacular penthouse con vistas al río Guayas. Cuenta con 4 habitaciones, 3 baños, una amplia sala de estar y una terraza privada.",
        images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600"
        ],
        whatsapp: "593987167782"
    }
];

document.querySelectorAll('.property-details').forEach(button => {
    button.addEventListener('click', function() {
        const propertyId = parseInt(this.getAttribute('data-property-id'));
        const property = properties.find(p => p.id === propertyId);

        if (property) {
            propertyTitle.textContent = property.title;
            propertyDescription.textContent = property.description;
            propertySlider.innerHTML = property.images.map(img => `<img src="${img}" alt="${property.title}" class="w-full h-64 object-cover mb-4">`).join('');
            propertyContact.href = `https://wa.me/${property.whatsapp}?text=Hola, estoy interesado en la propiedad: ${property.title}`;
            propertyModal.classList.remove('hidden');
        }
    });
});

closePropertyModal.addEventListener('click', () => {
    propertyModal.classList.add('hidden');
});

// Close modal if clicking outside
propertyModal.addEventListener('click', (e) => {
    if (e.target === propertyModal) {
        propertyModal.classList.add('hidden');
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

console.log('Script loaded successfully!');