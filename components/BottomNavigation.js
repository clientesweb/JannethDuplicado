function BottomNavigation() {
  return `
    <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
        <div class="flex justify-around items-center py-2">
            <a href="#servicios" class="flex flex-col items-center text-gray-600 hover:text-primary">
                <i class="fas fa-concierge-bell text-xl"></i>
                <span class="text-xs mt-1">Servicios</span>
            </a>
            <a href="#sobre-nosotros" class="flex flex-col items-center text-gray-600 hover:text-primary">
                <i class="fas fa-users text-xl"></i>
                <span class="text-xs mt-1">Nosotros</span>
            </a>
            <a href="#contacto" class="flex flex-col items-center text-gray-600 hover:text-primary">
                <i class="fas fa-envelope text-xl"></i>
                <span class="text-xs mt-1">Contacto</span>
            </a>
        </div>
    </nav>
    `
}

