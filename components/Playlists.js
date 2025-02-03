function Playlists() {
  const playlistsHtml = `
    <section id="playlists" class="py-12 md:py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-center mb-8 md:mb-12 text-primary">Playlists</h2>
        <div id="playlist-container" class="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          <div class="flex-none w-96 aspect-video bg-gray-300 rounded-lg shadow-lg animate-pulse"></div>
          <div class="flex-none w-96 aspect-video bg-gray-300 rounded-lg shadow-lg animate-pulse"></div>
          <div class="flex-none w-96 aspect-video bg-gray-300 rounded-lg shadow-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  `

  return playlistsHtml
}

// Función para cargar los videos de la playlist
function loadPlaylistVideos() {
  const API_KEY = "AIzaSyB4HGg2WVC-Sq3Qyj9T9Z9aBBGbET1oGs0" // Sustituye por tu clave API
  const PLAYLIST_ID = "PLZ_v3bWMqpjEYZDAFLI-0GuAH4BpA5PiL" // Sustituye por tu ID de playlist

  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=5&key=${API_KEY}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`)
      }
      return response.json()
    })
    .then((data) => {
      const playlistContainer = document.getElementById("playlist-container")
      const videosData = data.items

      if (videosData.length === 0) {
        playlistContainer.innerHTML =
          '<p class="text-center text-gray-600">No se encontraron videos en esta playlist.</p>'
        return
      }

      playlistContainer.innerHTML = videosData
        .map(
          (video) => `
        <div class="flex-none w-96 aspect-video rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300">
          <iframe
            src="https://www.youtube.com/embed/${video.snippet.resourceId.videoId}"
            title="${video.snippet.title}"
            class="w-full h-full"
            frameborder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `,
        )
        .join("")
    })
    .catch((error) => {
      console.error("Error fetching the playlist:", error)
      const playlistContainer = document.getElementById("playlist-container")
      playlistContainer.innerHTML =
        '<p class="text-center text-red-600">Error al cargar los videos. Por favor, inténtalo de nuevo más tarde.</p>'
    })
}

// Exportar la función Playlists
window.Playlists = Playlists

