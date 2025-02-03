function WhatsAppButton() {
  return `
    <a href="https://wa.me/593987167782" target="_blank" rel="noopener noreferrer" class="fixed bottom-20 right-4 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300">
      <i class="fab fa-whatsapp text-3xl"></i>
    </a>
  `
}

// Exportar la función WhatsAppButton
window.WhatsAppButton = WhatsAppButton

