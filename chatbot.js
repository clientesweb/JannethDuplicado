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
            description: "Espectacular villa con vistas panorámicas y acabados de lujo. 5 habitaciones, 6 baños, piscina infinita, y hermoso jardín.",
            price: "$1,500,000",
            area: "500 m²"
        },
        cuenca: {
            title: "Departamentos en Cuenca",
            description: "Oportunidad única de invertir en Cuenca. Departamentos de 2 y 3 habitaciones, ideales para Airbnb.",
            price: "Desde $150,000",
            area: "80-120 m²"
        },
        nuevaSamborondon: {
            title: "Departamentos en Nuevo Samborondon",
            description: "Hermosos departamentos en la exclusiva zona de Nuevo Samborondón. 2 habitaciones, 2 baños modernos, áreas sociales.",
            price: "Desde $200,000",
            area: "90-110 m²"
        },
        islaMocoli: {
            title: "Departamentos en Isla Mocoli",
            description: "Proyecto exclusivo de departamentos de 3 habitaciones en Isla Mocoli. Vistas impresionantes.",
            price: "Desde $300,000",
            area: "120-150 m²"
        },
        localesComerciales: {
            title: "Locales Comerciales en Nuevo Samborondon",
            description: "Oportunidad única de invertir en locales comerciales. Ubicación estratégica con alto tráfico.",
            price: "Desde $500,000",
            area: "50-200 m²"
        },
        consultoriosMedicos: {
            title: "Consultorios Médicos en Nuevo Samborondon",
            description: "Espacios amplios y bien iluminados, con equipamiento médico de alta calidad.",
            price: "Desde $250,000",
            area: "40-100 m²"
        },
        casasPersonalizadas: {
            title: "Casas Personalizadas",
            description: "Hacemos realidad tu sueño de tener una casa perfecta. Diseño personalizado y materiales de alta calidad.",
            price: "A consultar",
            area: "Personalizable"
        }
    };

    const investmentInfo = {
        samborondon: "Samborondón es una zona exclusiva con excelente potencial de rentabilidad a largo plazo. Con un crecimiento constante y una demanda siempre en aumento, es ideal para inversiones inmobiliarias.",
        eeuu: "Invertir en Estados Unidos ofrece un mercado inmobiliario estable y diverso. Con opciones en múltiples ciudades y estados, puedes diversificar tu portafolio y aprovechar la estabilidad económica del país.",
        panama: "Panamá ofrece beneficios fiscales y una economía dolarizada para inversionistas. Su ubicación estratégica y el creciente mercado inmobiliario lo convierten en un destino atractivo para inversiones."
    };

    const services = [
        "Asesoría inmobiliaria personalizada",
        "Gestión de propiedades",
        "Inversiones internacionales",
        "Financiamiento y créditos hipotecarios",
        "Servicios legales y notariales",
        "Valuación de propiedades",
        "Diseño y remodelación de interiores",
        "Asesoría en inversiones Airbnb"
    ];

    let conversationContext = {
        lastTopic: null,
        propertyInterest: null,
        investmentInterest: null,
        serviceInterest: null
    };

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

    function addSuggestionButtons(suggestions) {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('mb-4', 'text-center');
        suggestionElement.innerHTML = suggestions.map(suggestion => 
            `<button class="bg-primary text-white px-3 py-1 rounded mr-2 mb-2 suggestion-btn">${suggestion}</button>`
        ).join('');
        chatMessages.appendChild(suggestionElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Add click event listeners to suggestion buttons
        suggestionElement.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.textContent;
                addMessage(message, 'user');
                handleUserInput(message);
            });
        });
    }

    async function getChatbotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (lowerMessage.includes('propiedad') || lowerMessage.includes('casa') || lowerMessage.includes('departamento') || lowerMessage.includes('terreno')) {
            conversationContext.lastTopic = 'property';
            return "Tenemos varias propiedades disponibles. ¿Te interesa alguna zona en particular? Tenemos opciones en Samborondón, Cuenca, Nuevo Samborondón, Isla Mocoli, y más.";
        } else if (lowerMessage.includes('samborondon')) {
            conversationContext.propertyInterest = 'samborondon';
            const property = propertyInfo.samborondon;
            return `En Samborondón tenemos ${property.title}. ${property.description} El precio es ${property.price} y tiene un área de ${property.area}. ¿Te gustaría más información o programar una visita?`;
        } else if (lowerMessage.includes('cuenca')) {
            conversationContext.propertyInterest = 'cuenca';
            const property = propertyInfo.cuenca;
            return `En Cuenca ofrecemos ${property.title}. ${property.description} Los precios comienzan en ${property.price} y las áreas van desde ${property.area}. ¿Quieres saber más sobre las opciones de inversión en Cuenca?`;
        } else if (lowerMessage.includes('inversion') || lowerMessage.includes('invertir')) {
            conversationContext.lastTopic = 'investment';
            return "Ofrecemos oportunidades de inversión en Ecuador, Estados Unidos y Panamá. ¿En qué país te interesaría invertir?";
        } else if (lowerMessage.includes('estados unidos') || lowerMessage.includes('eeuu')) {
            conversationContext.investmentInterest = 'eeuu';
            return `${investmentInfo.eeuu} ¿Te gustaría conocer más sobre alguna ciudad en particular o sobre el proceso de inversión en Estados Unidos?`;
        } else if (lowerMessage.includes('panama')) {
            conversationContext.investmentInterest = 'panama';
            return `${investmentInfo.panama} ¿Quieres que te explique más sobre los beneficios fiscales o las áreas de mayor crecimiento en Panamá?`;
        } else if (lowerMessage.includes('servicio')) {
            conversationContext.lastTopic = 'service';
            return `Ofrecemos varios servicios, incluyendo: ${services.join(', ')}. ¿En cuál estás interesado? Puedo darte más detalles sobre cualquiera de ellos.`;
        } else if (lowerMessage.includes('contacto') || lowerMessage.includes('agente')) {
            return "Para hablar directamente con un agente, puedes usar el botón de WhatsApp flotante en la esquina inferior derecha de la página. Estaremos encantados de atenderte personalmente. ¿Prefieres que te contactemos por WhatsApp o por correo electrónico?";
        } else if (lowerMessage.includes('gracias') || lowerMessage.includes('adios')) {
            return "Ha sido un placer ayudarte. Si tienes más preguntas en el futuro, no dudes en volver a contactarnos. ¡Que tengas un excelente día!";
        } else {
            return "Lo siento, no tengo una respuesta específica para esa pregunta. ¿Te gustaría que te conecte con un agente a través de WhatsApp para obtener más información? O puedo contarte sobre nuestras propiedades, inversiones o servicios.";
        }
    }

    async function handleUserInput(message) {
        const response = await getChatbotResponse(message);
        addMessage(response, 'bot');

        // Sugerir opciones después de la respuesta
        let suggestions = [];
        if (conversationContext.lastTopic === 'property') {
            suggestions = ['Samborondón', 'Cuenca', 'Nuevo Samborondón', 'Isla Mocoli'];
        } else if (conversationContext.lastTopic === 'investment') {
            suggestions = ['Ecuador', 'Estados Unidos', 'Panamá'];
        } else if (conversationContext.lastTopic === 'service') {
            suggestions = ['Asesoría inmobiliaria', 'Gestión de propiedades', 'Inversiones internacionales'];
        } else {
            suggestions = ['Propiedades', 'Inversiones', 'Servicios', 'Contactar agente'];
        }

        setTimeout(() => {
            addSuggestionButtons(suggestions);
        }, 1000);
    }

    chatbotButton.addEventListener('click', () => {
        chatbotModal.classList.remove('hidden');
    });

    closeChatbotModal.addEventListener('click', () => {
        chatbotModal.classList.add('hidden');
    });

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            await handleUserInput(message);
        }
    });

    // Mensaje inicial del chatbot
    addMessage("¡Hola! Soy ARIA, tu asistente virtual IA de bienes raíces. Estoy aquí para ayudarte con información sobre nuestras propiedades, oportunidades de inversión y servicios. ¿En qué puedo asistirte hoy?", 'bot');

    // Sugerir opciones iniciales
    setTimeout(() => {
        addSuggestionButtons(['Propiedades', 'Inversiones', 'Servicios', 'Contactar agente']);
    }, 2000);
});

console.log('Chatbot script loaded successfully');