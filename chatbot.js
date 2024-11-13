// chatbot.js

document.addEventListener('DOMContentLoaded', (event) => {
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeChatbotModal = document.getElementById('closeChatbotModal');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    const propertyInfo = {
        samborondon: {
            title: "Lujosa Villa en Samborondón",
            description: "Espectacular villa con vistas panorámicas y acabados de lujo. 5 habitaciones, 6 baños, piscina infinita, y hermoso jardín."
        },
        cuenca: {
            title: "Departamentos en Cuenca",
            description: "Oportunidad única de invertir en Cuenca. Departamentos de 2 y 3 habitaciones, ideales para Airbnb."
        },
        nuevaSamborondon: {
            title: "Departamentos en Nuevo Samborondon",
            description: "Hermosos departamentos en la exclusiva zona de Nuevo Samborondón. 2 habitaciones, 2 baños modernos, áreas sociales."
        },
        islaMocoli: {
            title: "Departamentos en Isla Mocoli",
            description: "Proyecto exclusivo de departamentos de 3 habitaciones en Isla Mocoli. Vistas impresionantes."
        },
        localesComerciales: {
            title: "Locales Comerciales en Nuevo Samborondon",
            description: "Oportunidad única de invertir en locales comerciales. Ubicación estratégica con alto tráfico."
        },
        consultoriosMedicos: {
            title: "Consultorios Médicos en Nuevo Samborondon",
            description: "Espacios amplios y bien iluminados, con equipamiento médico de alta calidad."
        },
        casasPersonalizadas: {
            title: "Casas Personalizadas",
            description: "Hacemos realidad tu sueño de tener una casa perfecta. Diseño personalizado y materiales de alta calidad."
        }
    };

    const investmentInfo = {
        samborondon: "Samborondón es una zona exclusiva con excelente potencial de rentabilidad a largo plazo.",
        eeuu: "Invertir en Estados Unidos ofrece un mercado inmobiliario estable y diverso.",
        panama: "Panamá ofrece beneficios fiscales y una economía dolarizada para inversionistas."
    };

    const services = [
        "Asesoría inmobiliaria personalizada",
        "Gestión de propiedades",
        "Inversiones internacionales",
        "Financiamiento y créditos hipotecarios",
        "Servicios legales y notariales"
    ];

    // Función para agregar un mensaje al chat
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('mb-4', sender === 'user' ? 'text-right' : 'text-left');
        messageElement.innerHTML = `
            <div class="inline-block p-2 rounded-lg ${sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}">
                ${message}
            </div>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Función para obtener respuesta del chatbot
    async function getChatbotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (lowerMessage.includes('propiedad') || lowerMessage.includes('casa') || lowerMessage.includes('departamento')) {
            return "Tenemos varias propiedades disponibles. ¿Te interesa alguna zona en particular? Tenemos opciones en Samborondón, Cuenca, Nuevo Samborondón, Isla Mocoli, y más.";
        } else if (lowerMessage.includes('samborondon')) {
            return `En Samborondón tenemos ${propertyInfo.samborondon.title}. ${propertyInfo.samborondon.description}`;
        } else if (lowerMessage.includes('cuenca')) {
            return `En Cuenca ofrecemos ${propertyInfo.cuenca.title}. ${propertyInfo.cuenca.description}`;
        } else if (lowerMessage.includes('inversion') || lowerMessage.includes('invertir')) {
            return "Ofrecemos oportunidades de inversión en Ecuador, Estados Unidos y Panamá. ¿En qué país te interesaría invertir?";
        } else if (lowerMessage.includes('estados unidos') || lowerMessage.includes('eeuu')) {
            return investmentInfo.eeuu;
        } else if (lowerMessage.includes('panama')) {
            return investmentInfo.panama;
        } else if (lowerMessage.includes('servicio')) {
            return `Ofrecemos varios servicios, incluyendo: ${services.join(', ')}. ¿En cuál estás interesado?`;
        } else if (lowerMessage.includes('contacto') || lowerMessage.includes('agente')) {
            return "Para hablar directamente con un agente, puedes usar el botón de WhatsApp flotante en la esquina inferior derecha de la página. Estaremos encantados de atenderte personalmente.";
        } else {
            return "Lo siento, no tengo una respuesta específica para esa pregunta. ¿Te gustaría que te conecte con un agente a través de WhatsApp para obtener más información?";
        }
    }

    // Evento para abrir el modal del chatbot
    chatbotButton.addEventListener('click', () => {
        chatbotModal.classList.remove('hidden');
    });

    // Evento para cerrar el modal del chatbot
    closeChatbotModal.addEventListener('click', () => {
        chatbotModal.classList.add('hidden');
    });

    // Evento para enviar un mensaje
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';

            const response = await getChatbotResponse(message);
            addMessage(response, 'bot');

            // Sugerir opciones después de la respuesta
            setTimeout(() => {
                addMessage("¿Puedo ayudarte con algo más? Puedes preguntarme sobre propiedades, inversiones, o nuestros servicios.", 'bot');
            }, 1000);
        }
    });

    // Mensaje inicial del chatbot
    addMessage("¡Hola! Soy ARIA, tu asistente virtual IA de bienes raices. Puedo ayudarte con información sobre nuestras propiedades, oportunidades de inversión y servicios. ¿En qué puedo asistirte hoy?", 'bot');

    // Sugerir opciones iniciales
    setTimeout(() => {
        addMessage("Puedes preguntarme sobre propiedades en venta, oportunidades de inversión, o nuestros servicios inmobiliarios.", 'bot');
    }, 2000);
});

console.log('Chatbot script loaded successfully');