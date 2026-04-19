(function () {
  const config = window.APP_CONFIG || {};
  const phraseContainer = document.getElementById("phraseContainer");
  const phrases = config.landing?.phrases || [];

  if (phraseContainer) {
    phrases.forEach((phrase) => {
      const section = document.createElement("section");
      section.className = "parallax-section";

      const glow = document.createElement("div");
      glow.className = "parallax-glow";

      const text = document.createElement("p");
      text.className = "parallax-text";
      text.textContent = phrase;

      section.appendChild(glow);
      section.appendChild(text);
      phraseContainer.appendChild(section);
    });
  }

  const sections = Array.from(document.querySelectorAll(".parallax-section, .hero-section"));

  function updateParallax() {
    const viewportHeight = window.innerHeight;
    document.documentElement.style.setProperty("--scroll-shift", `${window.scrollY}px`);

    sections.forEach((section) => {
      const text = section.querySelector(".parallax-text") || section.querySelector(".hero-inner");
      if (!text) return;

      const rect = section.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const progress = centerOffset / viewportHeight;
      const translateY = progress * -55;
      const opacity = Math.max(0.18, 1 - Math.abs(progress) * 1.05);

      text.style.transform = `translate3d(0, ${translateY}px, 0)`;
      text.style.opacity = opacity.toFixed(3);
    });
  }

  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", updateParallax);
  updateParallax();

  const canvas = document.getElementById("fireworksCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth * window.devicePixelRatio;
  let height = canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  let fireworks = [];
  let particles = [];
  let hueOffset = 0;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  class Firework {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = window.innerHeight + 10;
      this.targetY = 120 + Math.random() * (window.innerHeight * 0.55);
      this.speed = 2.4 + Math.random() * 2.1;
      this.size = 1.4 + Math.random() * 1.2;
      this.hue = (hueOffset + Math.random() * 60) % 360;
    }

    update() {
      this.y -= this.speed;
      if (this.y <= this.targetY) {
        this.explode();
        return false;
      }
      return true;
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = `hsla(${this.hue}, 100%, 78%, 0.95)`;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }

    explode() {
      const count = 34 + Math.floor(Math.random() * 24);
      for (let i = 0; i < count; i += 1) {
        particles.push(new Particle(this.x, this.y, this.hue));
      }
    }
  }

  class Particle {
    constructor(x, y, hue) {
      this.x = x;
      this.y = y;
      this.hue = hue;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = 0.6 + Math.random() * 4.2;
      this.friction = 0.985;
      this.gravity = 0.035 + Math.random() * 0.03;
      this.alpha = 1;
      this.decay = 0.008 + Math.random() * 0.018;
      this.radius = 1 + Math.random() * 1.9;
    }

    update() {
      this.speed *= this.friction;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + this.gravity;
      this.alpha -= this.decay;
      return this.alpha > 0.02;
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = `hsla(${this.hue}, 100%, 78%, ${this.alpha})`;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    if (Math.random() < 0.045) fireworks.push(new Firework());
    if (Math.random() < 0.016) fireworks.push(new Firework());

    fireworks = fireworks.filter((fw) => {
      fw.draw();
      return fw.update();
    });

    particles = particles.filter((particle) => {
      particle.draw();
      return particle.update();
    });

    hueOffset += 0.12;
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animate();
})();
