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

// Banner messages
const bannerMessages = [
    "Bienvenido a Janneth Aguirre Bienes Raíces - Lo mejor en Ecuador y el Mundo",
    "¡Encuentra tu hogar especial hoy!",
    "Síguenos en Instagram para contenido diario de propiedades de lujo"
];

let currentBannerMessage = 0;

function rotateBannerMessage() {
    currentBannerMessage = (currentBannerMessage + 1) % bannerMessages.length;
    const bannerContainer = document.getElementById('banner-messages');
    bannerContainer.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        bannerContainer.innerHTML = `<p class="text-center w-full">${bannerMessages[currentBannerMessage]}</p>`;
        bannerContainer.style.transform = 'translateY(0)';
    }, 500);
}

setInterval(rotateBannerMessage, 5000);
rotateBannerMessage();  // Initial call to display the first message

// Reviews carousel
const reviews = [
    { name: "Juan Pérez", text: "Janneth Aguirre me ayudó a encontrar la casa de mis sueños. ¡Excelente servicio!", rating: 5 },
    { name: "María González", text: "Profesionalismo y dedicación en cada paso del proceso. Altamente recomendado.", rating: 5 },
    { name: "Carlos Rodríguez", text: "Gracias a Janneth, invertir en bienes raíces nunca había sido tan fácil y seguro.", rating: 4 }
];

function showReviews() {
    const container = document.getElementById('reviews-container');
    container.innerHTML = '';
    reviews.forEach((review) => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'w-80 flex-shrink-0 p-4 snap-center';
        reviewElement.innerHTML = `
            <div class="bg-white p-6 rounded-lg h-full flex flex-col justify-between">
                <div>
                    <p class="text-lg mb-4 text-gray-800">"${review.text}"</p>
                    <p class="font-bold text-primary">- ${review.name}</p>
                </div>
                <div class="flex justify-center mt-4 text-yellow-400">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
            </div>
        `;
        container.appendChild(reviewElement);
    });
}

showReviews();

// Properties carousel
const properties = [
    'Samborondón', 'Cuenca', 'Guayaquil', 'Quito', 'Manta', 'Estados Unidos'
];

function showProperties() {
    const container = document.getElementById('properties-container');
    const propertyElements = properties.map(property => `
        <div class="flex-shrink-0 w-64 h-40 mx-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <img src="/placeholder.svg?height=160&width=256" alt="${property}" class="max-w-full max-h-full object-cover rounded-lg">
            <p class="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded text-sm">${property}</p>
        </div>
    `).join('');
    container.innerHTML = propertyElements + propertyElements; // Duplicate for seamless loop
}

showProperties();

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

// Gallery filter
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active', 'bg-primary', 'text-black'));
        button.classList.add('active', 'bg-primary', 'text-black');

        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// PWA Installation
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

document.getElementById('install-pwa').addEventListener('click', (e) => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    }
});

// Consultation Modal
const openConsultationModal = document.getElementById('openConsultationModal');
const closeConsultationModal = document.getElementById('closeConsultationModal');
const consultationModal = document.getElementById('consultationModal');
const consultationForm = document.getElementById('consultationForm');

openConsultationModal.addEventListener('click', () => {
    consultationModal.classList.remove('hidden');
});

closeConsultationModal.addEventListener('click', () => {
    consultationModal.classList.add('hidden');
});

consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(consultationForm);
    let message = "Nueva Consulta:\n\n";
    for (let [key, value] of formData.entries()) {
        message += `${key}: ${value}\n`;
    }
    
    // Replace this URL with your actual WhatsApp API endpoint
    const whatsappUrl = `https://api.whatsapp.com/send?phone=593XXXXXXXXX&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    consultationModal.classList.add('hidden');
    consultationForm.reset();
});

// Close modal if clicking outside
consultationModal.addEventListener('click', (e) => {
    if (e.target === consultationModal) {
        consultationModal.classList.add('hidden');
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
gsap.utils.toArray('#servicios .bg-white').forEach((service, i) => {
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

// Animate gallery items on scroll
gsap.utils.toArray('#gallery .gallery-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        delay: i * 0.1
    });
});

console.log('Script loaded successfully!');