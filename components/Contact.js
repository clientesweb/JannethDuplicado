function Contact() {
  return `
    <section id="contacto" class="py-16 md:py-24 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-primary">Contáctanos</h2>
            <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 p-8 bg-primary text-white">
                        <h3 class="text-2xl font-bold mb-6">Información de Contacto</h3>
                        <div class="space-y-4">
                            <p class="flex items-center">
                                <i class="fas fa-phone mr-4 text-xl"></i>
                                <span>+593 98 716 7782</span>
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-envelope mr-4 text-xl"></i>
                                <span>janneth@jannethaguirre.com</span>
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-map-marker-alt mr-4 text-xl"></i>
                                <span>Guayaquil, Ecuador</span>
                            </p>
                        </div>
                        <div class="mt-8">
                            <h4 class="text-xl font-semibold mb-4">Síguenos</h4>
                            <div class="flex space-x-4">
                                <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                                    <i class="fab fa-facebook-f text-2xl"></i>
                                </a>
                                <a href="https://instagram.com/janneth_aguirrem" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                                    <i class="fab fa-instagram text-2xl"></i>
                                </a>
                                <a href="https://www.youtube.com/@jannethaguirrebienesraices5728" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                                    <i class="fab fa-youtube text-2xl"></i>
                                </a>
                                <a href="https://vm.tiktok.com/ZMhnEwCHp/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors duration-300">
                                    <i class="fab fa-tiktok text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 p-8">
                        <form id="contact-form" class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300">
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                <input type="tel" id="phone" name="phone" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300">
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                <textarea id="message" name="message" rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300"></textarea>
                            </div>
                            <div>
                                <button type="submit" class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300 font-semibold">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}

// Exportar la función Contact
window.Contact = Contact

