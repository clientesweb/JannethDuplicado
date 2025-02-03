function Hero() {
  return `
    <section class="relative h-screen overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="images/magazine-janneth-aguirre.png" 
                 alt="Hero Background" 
                 class="w-full h-full object-cover animate-ken-burns">
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 h-full flex items-center">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl">
                    <div class="space-y-6 animate-fade-in-up">
                        <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold font-serif leading-tight">
                            <span class="text-primary animate-text-glow">Descubre Tu Hogar Ideal</span>
                            <span class="text-white"> en Ecuador</span>
                        </h1>
                        
                        <p class="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl animate-fade-in">
                            Janneth Aguirre: Tu experta en bienes raíces con más de 14 años de experiencia
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#servicios" 
                               class="inline-flex items-center justify-center bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 group">
                                Explorar Servicios
                                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                            </a>
                            <a href="#contacto" 
                               class="inline-flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                                Contactar Ahora
                            </a>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-6">
                            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                                <div class="text-2xl font-bold">500+</div>
                                <div class="text-sm text-white/80">Propiedades Vendidas</div>
                            </div>
                            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                                <div class="text-2xl font-bold">14+</div>
                                <div class="text-sm text-white/80">Años de Experiencia</div>
                            </div>
                            <div class="hidden sm:block bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                                <div class="text-2xl font-bold">1000+</div>
                                <div class="text-sm text-white/80">Clientes Satisfechos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>

        <style>
            @keyframes ken-burns {
                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(1.1);
                }
            }

            .animate-ken-burns {
                animation: ken-burns 20s ease-out infinite alternate;
            }

            @keyframes fade-in-up {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .animate-fade-in-up {
                animation: fade-in-up 1s ease-out forwards;
            }

            @keyframes fade-in {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            .animate-fade-in {
                animation: fade-in 1s ease-out forwards;
                animation-delay: 0.5s;
                opacity: 0;
            }

            @keyframes text-glow {
                0%, 100% {
                    text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
                }
                50% {
                    text-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
                }
            }

            .animate-text-glow {
                animation: text-glow 3s ease-in-out infinite;
            }
        </style>
    </section>
  `
}

