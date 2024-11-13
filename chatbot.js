// chatbot.js

document.addEventListener('DOMContentLoaded', (event) => {
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeChatbotModal = document.getElementById('closeChatbotModal');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

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
        // Aquí puedes implementar la lógica para obtener una respuesta del chatbot
        // Por ahora, simplemente devolveremos una respuesta predefinida
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay de red
        return "Gracias por tu mensaje. Un agente se pondrá en contacto contigo pronto.";
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
        }
    });

    // Mensaje inicial del chatbot
    addMessage("¡Hola! Soy ARIA, tu asistente virtual. ¿En qué puedo ayudarte hoy?", 'bot');
});