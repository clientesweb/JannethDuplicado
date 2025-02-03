function AppDownload() {
  return `
    <section id="descargar" class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-serif font-bold text-center mb-12 text-primary">Descarga Nuestra App</h2>
            <div class="flex flex-col md:flex-row items-center justify-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <img src="images/app-jannethaguirre.png" alt="AppMockup" class="mx-auto">
                </div>
                <div class="md:w-1/2 text-center md:text-left">
                    <p class="text-lg mb-6">Descarga nuestra aplicación para acceder a las mejores propiedades en cualquier momento y lugar.</p>
                    <div class="flex justify-center md:justify-start space-x-4">
                        <a href="#" class="inline-block">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Descargar en App Store" class="h-14">
                        </a>
                        <a href="App/JABienesRaíces.apk" class="inline-block">
                            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Disponible en Google Play" class="h-14">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
}

