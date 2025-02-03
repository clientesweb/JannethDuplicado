function Contact() {
  return `
    <section id="contacto" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-serif font-bold text-center mb-12 text-primary">Contáctanos</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-2xl font-bold mb-4">Información de Contacto</h3>
                    <p class="mb-2"><i class="fas fa-phone mr-2 text-primary"></i> +593 98 716 7782</p>
                    <p class="mb-2"><i class="fas fa-envelope mr-2 text-primary"></i> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d7beb9b1b897bdb6b9b9b2a3bfb6b0a2bea5a5b2f9b4b8ba">[email&#160;protected]</a></p>
                    <p class="mb-2"><i class="fas fa-map-marker-alt mr-2 text-primary"></i> Guayaquil, Ecuador</p>
                    <p class="mb-4"><i class="fas fa-globe mr-2 text-primary"></i> <a href="https://jannethaguirrebienesraices.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Visita nuestra página web</a></p>
                    <p class="text-gray-600">Expertos en bienes raíces con años de experiencia en el mercado ecuatoriano.</p>
                </div>
                <div>
                    <form id="contact-form" class="space-y-4">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray700">Nombre</label>
                            <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
                            <input type="tel" id="phone" name="phone" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
                            <textarea id="message" name="message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
                        </div>
                        <div>
                            <button type="submit" class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300">Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `
}

