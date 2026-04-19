/*
  Edita este archivo para personalizar la app.
  1) Cambia las frases del scroll inicial.
  2) Cambia las 6 canciones.
  3) Agrega los archivos MP3 dentro de /assets/audio
  4) Agrega las portadas dentro de /assets/covers
*/

window.APP_CONFIG = {
  landing: {
    phrases: [
      "Aquí puedes escribir la primera frase del recorrido.",
      "La segunda frase aparece mientras sigue bajando.",
      "Esta tercera frase puede ser corta, clara y emotiva.",
      "La cuarta puede recordar un momento bonito.",
      "La quinta puede sentirse íntima y sincera.",
      "La sexta puede aumentar la emoción poco a poco.",
      "La séptima puede prepararla para el final.",
      "Y la octava puede invitarla a abrir lo que sigue."
    ]
  },
  songs: [
    {
      id: "song-1",
      title: "Disfruto",
      artist: "Carla Morrison",
      file: "assets/audio/00-Carla-Morrison-Disfruto.mp3",
      cover: "assets/covers/cover-1.png",
      phrases: [
        { time: 0, text: "Frase 1 de la canción 2." },
        { time: 11, text: "Frase 2 de la canción 2." },
        { time: 23, text: "Frase 3 de la canción 2." },
        { time: 35, text: "Frase 4 de la canción 2." },
        { time: 47, text: "Frase 5 de la canción 2." },
        { time: 59, text: "Frase 6 de la canción 2." },
        { time: 71, text: "Frase 7 de la canción 2." },
        { time: 83, text: "Frase 8 de la canción 2." },
        { time: 95, text: "Frase 9 de la canción 2." },
        { time: 107, text: "Frase 10 de la canción 2." }
      ]
    },
    {
      id: "song-2",
      title: "Risk It All",
      artist: "Bruno Mars",
      file: "assets/audio/00-Bruno-Mars-Risk-It-All.mp3",
      cover: "assets/covers/cover-1.png",
      phrases: [
        { time: 0, text: "Frase 1 de la canción 1." },
        { time: 12, text: "Frase 2 de la canción 1." },
        { time: 24, text: "Frase 3 de la canción 1." },
        { time: 36, text: "Frase 4 de la canción 1." },
        { time: 48, text: "Frase 5 de la canción 1." },
        { time: 60, text: "Frase 6 de la canción 1." },
        { time: 72, text: "Frase 7 de la canción 1." },
        { time: 84, text: "Frase 8 de la canción 1." },
        { time: 96, text: "Frase 9 de la canción 1." },
        { time: 108, text: "Frase 10 de la canción 1." }
      ]
    },
    {
      id: "song-3",
      title: "Falling in Love",
      artist: "Cigarettes After Sex",
      file: "assets/audio/00-Cigarettes-After-Sex-Falling-In-Love.mp3",
      cover: "assets/covers/cover-1.png",
      phrases: [
        { time: 0, text: "Frase 1 de la canción 3." },
        { time: 10, text: "Frase 2 de la canción 3." },
        { time: 22, text: "Frase 3 de la canción 3." },
        { time: 34, text: "Frase 4 de la canción 3." },
        { time: 46, text: "Frase 5 de la canción 3." },
        { time: 58, text: "Frase 6 de la canción 3." },
        { time: 70, text: "Frase 7 de la canción 3." },
        { time: 82, text: "Frase 8 de la canción 3." },
        { time: 94, text: "Frase 9 de la canción 3." },
        { time: 106, text: "Frase 10 de la canción 3." }
      ]
    },
    {
      id: "song-4",
      title: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      file: "assets/audio/00-Elvis-Presley-Can_t-Help-Falling-In-Love.mp3",
      cover: "assets/covers/cover-1.png",
      phrases: [
        { time: 0, text: "Frase 1 de la canción 4." },
        { time: 14, text: "Frase 2 de la canción 4." },
        { time: 28, text: "Frase 3 de la canción 4." },
        { time: 42, text: "Frase 4 de la canción 4." },
        { time: 56, text: "Frase 5 de la canción 4." },
        { time: 70, text: "Frase 6 de la canción 4." },
        { time: 84, text: "Frase 7 de la canción 4." },
        { time: 98, text: "Frase 8 de la canción 4." },
        { time: 112, text: "Frase 9 de la canción 4." },
        { time: 126, text: "Frase 10 de la canción 4." }
      ]
    },
    {
      id: "song-5",
      title: "Halo",
      artist: "The Cure",
      file: "assets/audio/00-The-Cure-Halo.mp3",
      cover: "assets/covers/cover-1.png",
      phrases: [
        { time: 0, text: "Frase 1 de la canción 5." },
        { time: 9, text: "Frase 2 de la canción 5." },
        { time: 21, text: "Frase 3 de la canción 5." },
        { time: 33, text: "Frase 4 de la canción 5." },
        { time: 45, text: "Frase 5 de la canción 5." },
        { time: 57, text: "Frase 6 de la canción 5." },
        { time: 69, text: "Frase 7 de la canción 5." },
        { time: 81, text: "Frase 8 de la canción 5." },
        { time: 93, text: "Frase 9 de la canción 5." },
        { time: 105, text: "Frase 10 de la canción 5." }
      ]
    },
    {
      id: "song-6",
      title: "Everlong",
      artist: "Foo Fighters",
      file: "assets/audio/00-Foo-Fighters-Everlong.mp3",
      cover: "assets/covers/cover-1.png",
      phrases: [
        { time: 0, text: "Frase 1 de la canción 6." },
        { time: 13, text: "Frase 2 de la canción 6." },
        { time: 26, text: "Frase 3 de la canción 6." },
        { time: 39, text: "Frase 4 de la canción 6." },
        { time: 52, text: "Frase 5 de la canción 6." },
        { time: 65, text: "Frase 6 de la canción 6." },
        { time: 78, text: "Frase 7 de la canción 6." },
        { time: 91, text: "Frase 8 de la canción 6." },
        { time: 104, text: "Frase 9 de la canción 6." },
        { time: 117, text: "Frase 10 de la canción 6." }
      ]
    },
    {
      id: "song-7",
      title: "Parisienne Walkways",
      artist: "Gary Moore",
      file: "assets/audio/00-Gary-Moore-Parisienne-Walkways-_Live-At-Royal-Albert-Hall_-London-_-1993_.mp3",
      cover: "assets/covers/cover-1.png",
      phrases: [
        { time: 0, text: "Frase 1 de la canción 6." },
        { time: 13, text: "Frase 2 de la canción 6." },
        { time: 26, text: "Frase 3 de la canción 6." },
        { time: 39, text: "Frase 4 de la canción 6." },
        { time: 52, text: "Frase 5 de la canción 6." },
        { time: 65, text: "Frase 6 de la canción 6." },
        { time: 78, text: "Frase 7 de la canción 6." },
        { time: 91, text: "Frase 8 de la canción 6." },
        { time: 104, text: "Frase 9 de la canción 6." },
        { time: 117, text: "Frase 10 de la canción 6." }
      ]
    },
    {
      id: "song-8",
      title: "Iris",
      artist: "Goo Goo Dolls",
      file: "assets/audio/00-The-Goo-Goo-Dolls-Iris.mp3",
      cover: "assets/covers/cover-1.png",
      phrases: [
        { time: 0, text: "Frase 1 de la canción 6." },
        { time: 13, text: "Frase 2 de la canción 6." },
        { time: 26, text: "Frase 3 de la canción 6." },
        { time: 39, text: "Frase 4 de la canción 6." },
        { time: 52, text: "Frase 5 de la canción 6." },
        { time: 65, text: "Frase 6 de la canción 6." },
        { time: 78, text: "Frase 7 de la canción 6." },
        { time: 91, text: "Frase 8 de la canción 6." },
        { time: 104, text: "Frase 9 de la canción 6." },
        { time: 117, text: "Frase 10 de la canción 6." }
      ]
    }
  ]
};
