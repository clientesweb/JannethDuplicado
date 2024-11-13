const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

const botResponses = {
    'hola': '¡Hola! ¿En qué puedo ayudarte hoy?',
    'propiedades': 'Tenemos una amplia variedad de propiedades disponibles. ¿Estás buscando algo específico?',
    'contacto': 'Puedes contactarnos al +593 98 716 7782 o por email a info@jannethaguirre.com',
    'servicios': 'Ofrecemos servicios de compra, venta y alquiler de propiedades, así como asesoramiento en inversiones inmobiliarias.',
    'default': 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla o preguntar algo más específico sobre nuestras propiedades o servicios?'
};

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `mb-2 ${sender === 'user' ? 'text-right' : ''}`;
    messageElement.innerHTML = `
        <span class="inline-block bg-${sender === 'user' ? 'primary' : 'gray-200'} text-${sender === 'user' ? 'white' : 'gray-800'} rounded-lg py-2 px-4">
            ${message}
        </span>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const lowercaseMessage = message.toLowerCase();
    for (const [key, value] of Object.entries(botResponses)) {
        if (lowercaseMessage.includes(key)) {
            return value;
        }
    }
    return botResponses.default;
}

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
        addMessage('user', message);
        chatInput.value = '';

        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage('bot', botResponse);
        }, 500);
    }
});

// Initial bot message
addMessage('bot', '¡Hola! Soy ARIA, tu asistente virtual. ¿En qué puedo ayudarte hoy?');
