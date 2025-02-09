function Contact() {
  return `
    <section id="contacto" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Contáctanos
                </span>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <span class="text-primary">Conversemos</span>
                    <span class="text-gray-800"> Sobre Tu Próxima Propiedad</span>
                </h2>
                <p class="text-gray-600 text-lg">
                    Estamos aquí para ayudarte a encontrar la propiedad perfecta. Contáctanos y comienza tu journey inmobiliario.
                </p>
            </div>

            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                    <div class="md:col-span-2 space-y-6">
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <div class="space-y-6">
                                <div class="flex items-center gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <i class="fas fa-phone text-primary text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-lg">Llámanos</h3>
                                        <p class="text-gray-600">+593 98 716 7782</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <i class="fas fa-envelope text-primary text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-lg">Email</h3>
                                        <p class="text-gray-600">info@jannethaguirrebienesraices.com</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <i class="fas fa-map-marker-alt text-primary text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-lg">Ubicación</h3>
                                        <p class="text-gray-600">Guayaquil, Ecuador</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8 pt-8 border-t border-gray-100">
                                <h3 class="font-bold text-lg mb-4">Síguenos</h3>
                                <div class="flex space-x-4">
                                    <a href="https://www.facebook.com/@jannethaguirrebienesraices/?hr=1" 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://instagram.com/janneth_aguirrem" 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@jannethaguirrebienesraices5728" 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                    <a href="https://vm.tiktok.com/ZMhnEwCHp/" 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                                        <i class="fab fa-tiktok"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="bg-primary rounded-2xl shadow-lg p-8 text-white">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                    <i class="fas fa-star text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg">Experiencia Comprobada</h3>
                                    <p class="text-white/90">14+ años en el mercado inmobiliario</p>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-check-circle"></i>
                                    <span>500+ Propiedades Vendidas</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-check-circle"></i>
                                    <span>1000+ Clientes Satisfechos</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-check-circle"></i>
                                    <span>Asesoría Personalizada</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-3">
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <form id="contact-form" class="space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input type="text" 
                                               id="name" 
                                               name="name" 
                                               required 
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                    </div>
                                    <div class="space-y-2">
                                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" 
                                               id="email" 
                                               name="email" 
                                               required 
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                    </div>
                                </div>

                                <div class="space-y-2">
                                    <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
                                    <input type="tel" 
                                           id="phone" 
                                           name="phone" 
                                           required 
                                           class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                </div>

                                <div class="space-y-2">
                                    <label for="property-type" class="block text-sm font-medium text-gray-700">Tipo de Propiedad</label>
                                    <select id="property-type" 
                                            name="property-type" 
                                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                        <option value="">Selecciona una opción</option>
                                        <option value="casa">Casa</option>
                                        <option value="departamento">Departamento</option>
                                        <option value="terreno">Terreno</option>
                                        <option value="comercial">Local Comercial</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div class="space-y-2">
                                    <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
                                    <textarea id="message" 
                                              name="message" 
                                              rows="4" 
                                              required 
                                              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"></textarea>
                                </div>

                                <div class="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="checkbox" 
                                           id="privacy" 
                                           name="privacy" 
                                           required 
                                           class="rounded border-gray-300 text-primary focus:ring-primary">
                                    <label for="privacy">
                                        Acepto la política de privacidad y el tratamiento de mis datos personales
                                    </label>
                                </div>

                                <button type="submit" 
                                        class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center group">
                                    Enviar Mensaje
                                    <i class="fas fa-paper-plane ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}

