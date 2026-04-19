(function () {
  const config = window.APP_CONFIG || {};
  const songs = config.songs || [];
  if (!songs.length) return;

  const playlist = document.getElementById("playlist");
  const audio = document.getElementById("audio");
  const coverImage = document.getElementById("coverImage");
  const coverDisc = document.getElementById("coverDisc");
  const trackTitle = document.getElementById("trackTitle");
  const trackArtist = document.getElementById("trackArtist");
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const progressBar = document.getElementById("progressBar");
  const currentTimeLabel = document.getElementById("currentTime");
  const durationLabel = document.getElementById("duration");
  const currentPhrase = document.getElementById("currentPhrase");
  const upcomingPhrases = document.getElementById("upcomingPhrases");

  let currentIndex = 0;
  let isPlaying = false;

  function fallbackCover(title) {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop stop-color="#fff9fb" offset="0%"/>
            <stop stop-color="#f0c9d5" offset="100%"/>
          </linearGradient>
        </defs>
        <rect width="600" height="600" fill="url(#g)"/>
        <circle cx="300" cy="300" r="175" fill="rgba(255,255,255,0.7)"/>
        <circle cx="300" cy="300" r="118" fill="rgba(228,183,199,0.72)"/>
        <circle cx="300" cy="300" r="24" fill="white"/>
        <text x="300" y="522" font-size="28" text-anchor="middle" fill="#6d4a57" font-family="Arial, sans-serif">${title}</text>
      </svg>
    `.trim();
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function renderPlaylist() {
    playlist.innerHTML = "";
    songs.forEach((song, index) => {
      const item = document.createElement("button");
      item.className = `track-item ${index === currentIndex ? "active" : ""}`;
      item.type = "button";

      const thumb = document.createElement("img");
      thumb.className = "track-thumb";
      thumb.src = song.cover || fallbackCover(song.title);
      thumb.alt = `Portada de ${song.title}`;
      thumb.onerror = () => { thumb.src = fallbackCover(song.title); };

      const meta = document.createElement("div");
      meta.innerHTML = `
        <p class="track-name">${song.title}</p>
        <p class="track-subtitle">${song.artist || "Tu dedicatoria"}</p>
      `;

      item.appendChild(thumb);
      item.appendChild(meta);
      item.addEventListener("click", () => {
        loadTrack(index, true);
      });

      playlist.appendChild(item);
    });
  }

  function getCurrentSong() {
    return songs[currentIndex];
  }

  function updatePhraseDisplay() {
    const song = getCurrentSong();
    const phrases = song.phrases || [];
    const currentTime = audio.currentTime || 0;

    let current = phrases[0]?.text || "Agrega frases en config.js";
    let upcoming = [];

    for (let i = 0; i < phrases.length; i += 1) {
      const entry = phrases[i];
      const next = phrases[i + 1];

      if (currentTime >= entry.time && (!next || currentTime < next.time)) {
        current = entry.text;
        upcoming = phrases.slice(i + 1, i + 4);
        break;
      }
    }

    currentPhrase.textContent = current;

    upcomingPhrases.innerHTML = "";
    if (!upcoming.length) {
      upcomingPhrases.innerHTML = `<div class="empty-state">I love you so much</strong>.</div>`;
      return;
    }

    upcoming.forEach((item) => {
      const div = document.createElement("div");
      div.className = "upcoming-item";
      div.textContent = `${formatTime(item.time)} — ${item.text}`;
      upcomingPhrases.appendChild(div);
    });
  }

  function updatePlayState() {
    playBtn.textContent = isPlaying ? "❚❚" : "▶";
    coverDisc.classList.toggle("spinning", isPlaying);
  }

  function loadTrack(index, autoplay = false) {
    currentIndex = index;
    const song = getCurrentSong();

    audio.src = song.file || "";
    trackTitle.textContent = song.title || "Canción";
    trackArtist.textContent = song.artist || "Tu dedicatoria";
    coverImage.src = song.cover || fallbackCover(song.title || "Cover");
    coverImage.onerror = () => { coverImage.src = fallbackCover(song.title || "Cover"); };

    audio.load();
    progressBar.value = 0;
    currentTimeLabel.textContent = "0:00";
    durationLabel.textContent = "0:00";
    updatePhraseDisplay();
    renderPlaylist();

    if (autoplay) {
      audio.play().then(() => {
        isPlaying = true;
        updatePlayState();
      }).catch(() => {
        isPlaying = false;
        updatePlayState();
      });
    } else {
      isPlaying = false;
      updatePlayState();
    }
  }

  playBtn.addEventListener("click", async () => {
    if (!audio.src) {
      loadTrack(currentIndex, true);
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        isPlaying = true;
      } catch (error) {
        isPlaying = false;
      }
    } else {
      audio.pause();
      isPlaying = false;
    }

    updatePlayState();
  });

  prevBtn.addEventListener("click", () => {
    const nextIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadTrack(nextIndex, true);
  });

  nextBtn.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    loadTrack(nextIndex, true);
  });

  audio.addEventListener("timeupdate", () => {
    const current = audio.currentTime || 0;
    const duration = audio.duration || 0;
    currentTimeLabel.textContent = formatTime(current);
    durationLabel.textContent = formatTime(duration);

    const percent = duration ? (current / duration) * 100 : 0;
    progressBar.value = percent;
    updatePhraseDisplay();
  });

  audio.addEventListener("loadedmetadata", () => {
    durationLabel.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("play", () => {
    isPlaying = true;
    updatePlayState();
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    updatePlayState();
  });

  audio.addEventListener("ended", () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    loadTrack(nextIndex, true);
  });

  progressBar.addEventListener("input", () => {
    if (!audio.duration) return;
    const seekTo = (Number(progressBar.value) / 100) * audio.duration;
    audio.currentTime = seekTo;
    updatePhraseDisplay();
  });

  loadTrack(0, false);
})();
