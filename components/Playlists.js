function Playlists() {
  return `
  <section id="playlists" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
          Contenido Multimedia
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
          <span class="text-primary">Nuestros</span>
          <span class="text-gray-800"> Videos</span>
        </h2>
        <p class="text-gray-600 text-lg">
          Descubre nuestro contenido exclusivo sobre el mercado inmobiliario, consejos y más.
        </p>
      </div>

      <!-- Instagram Reels Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-center">
          <span class="text-primary">Instagram</span>
          <span class="text-gray-800"> Reels</span>
        </h3>
        <div id="instagramSlider" class="flex overflow-x-auto gap-4 pb-6 -mx-4 px-4 scrollbar-hide">
          <!-- Instagram Reel 1 -->
          <div class="flex-none">
            <blockquote 
              class="instagram-media min-w-[280px] max-w-[280px]" 
              data-instgrm-permalink="https://www.instagram.com/reel/DFcFBd1OVf8/?igsh=MW13bzRhZjhpaGdhZw=="
              data-instgrm-version="14"
              style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:280px; min-width:280px; padding:0; width:99.375%;">
            </blockquote>
          </div>
          
          <!-- Instagram Reel 2 -->
          <div class="flex-none">
            <blockquote 
              class="instagram-media min-w-[280px] max-w-[280px]" 
              data-instgrm-permalink="https://www.instagram.com/reel/DFVnP4MOf9C/?igsh=MXAwcmgwbGJudG0xeA=="
              data-instgrm-version="14"
              style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:280px; min-width:280px; padding:0; width:99.375%;">
            </blockquote>
          </div>
          
          <!-- Instagram Reel 3 -->
          <div class="flex-none">
            <blockquote 
              class="instagram-media min-w-[280px] max-w-[280px]" 
              data-instgrm-permalink="https://www.instagram.com/reel/DFOTgdey30E/?igsh=MjhsZXN5eHhjeHR6"
              data-instgrm-version="14"
              style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:280px; min-width:280px; padding:0; width:99.375%;">
            </blockquote>
          </div>
        </div>
      </div>

      <!-- YouTube Videos Section -->
      <div id="playlist-container" class="relative">
        <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div class="flex overflow-x-auto space-x-6 pb-8 px-4 scrollbar-hide relative">
          <div class="flex-none w-96 group">
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative aspect-video">
                <div class="animate-pulse bg-gray-200 absolute inset-0">
                  <div class="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                    <i class="fas fa-play text-white text-xl"></i>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="animate-pulse space-y-4">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-none w-96 group">
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative aspect-video">
                <div class="animate-pulse bg-gray-200 absolute inset-0">
                  <div class="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                    <i class="fas fa-play text-white text-xl"></i>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="animate-pulse space-y-4">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-none w-96 group">
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative aspect-video">
                <div class="animate-pulse bg-gray-200 absolute inset-0">
                  <div class="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                    <i class="fas fa-play text-white text-xl"></i>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="animate-pulse space-y-4">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a href="https://www.youtube.com/@jannethaguirrebienesraices5728" 
           target="_blank" 
           rel="noopener noreferrer"
           class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
          Ver Todos los Videos
          <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
        </a>
      </div>
    </div>
  </section>

  <script>
    // Cargar el script de Instagram
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//www.instagram.com/embed.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'instagram-embed-0'));

    // Función para cargar los videos de la playlist
    function loadPlaylistVideos() {
      const API_KEY = "AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0"
      const PLAYLIST_ID = "PLZ_v3bWMqpjEYZDAFLI-0GuAH4BpA5PiL"

      fetch(
        \`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=\${PLAYLIST_ID}&maxResults=5&key=\${API_KEY}\`,
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(\`Network response was not ok: \${response.statusText}\`)
          }
          return response.json()
        })
        .then((data) => {
          const playlistContainer = document.getElementById("playlist-container")
          const videosData = data.items

          if (!videosData || videosData.length === 0) {
            console.warn("No videos found in playlist")
            return
          }

          const videoElements = videosData
            .map(
              (video) => \`
            <div class="flex-none w-96 group">
              <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div class="relative aspect-video">
                  <img src="\${video.snippet.thumbnails.high.url}" 
                       alt="\${video.snippet.title}"
                       class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                  <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <i class="fas fa-play text-white text-xl"></i>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    \${video.snippet.title}
                  </h3>
                  <p class="text-gray-600 text-sm line-clamp-2">
                    \${video.snippet.description}
                  </p>
                </div>
              </div>
            </div>
          \`,
            )
            .join("")

          const scrollContainer = playlistContainer.querySelector(".flex")
          scrollContainer.innerHTML = videoElements
        })
        .catch((error) => {
          console.error("Error fetching playlist:", error)
        })
    }

    // Cargar los videos cuando el documento esté listo
    document.addEventListener('DOMContentLoaded', loadPlaylistVideos);
  </script>
  `
}

// Exportar las funciones
window.Playlists = Playlists

