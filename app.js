// Initialize particles.js with default size for loader
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 150, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": ["#6affff","#ff6fff"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.8, "random": true },
    "size": { "value": 4, "random": true }, // default size
    "line_linked": { "enable": true, "distance": 120, "color": "#ffffff", "opacity": 0.2, "width": 1 },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "bounce": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" } },
    "modes": { "repulse": { "distance": 100 } }
  },
  "retina_detect": true
});
// ===============================
// Initialize particles for main screen
// ===============================
particlesJS("particles-bg", {
  "particles": {
    "number": { "value": 120, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": ["#6affff","#ff6fff"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.7, "random": true },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
    "move": { "enable": true, "speed": 2, "random": false, "straight": false, "bounce": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" } },
    "modes": { "repulse": { "distance": 100 } }
  },
  "retina_detect": true
});

particlesJS("about-particles", {
  "particles": {
    "number": { "value": 30, "density": { "enable": true, "value_area": 500 } },
    "color": { "value": ["#6affff","#ff6fff"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 1, "random": true }
  },
  "interactivity": { "detect_on": "canvas" },
  "retina_detect": true
});


// ===============================
// Loader Elements
// ===============================
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const loadingText = document.getElementById('loading-text');

// Loader typewriter
const loaderText = "Initializing Portfolio";
let loaderIndex = 0;

function typeLoaderText() {
  if(loaderIndex < loaderText.length){
    loadingText.textContent += loaderText.charAt(loaderIndex);
    loaderIndex++;
    setTimeout(typeLoaderText, 150); // slower typing
  }
}

// Start loader typing
typeLoaderText();

// Hide loader after typing + extra delay
const loaderDuration = loaderText.length * 150 + 4000; // typing + extra 4s
setTimeout(() => {
  loader.classList.add('fade-out');
  loader.addEventListener('transitionend', () => {
    loader.style.display = 'none';
    mainContent.classList.add('show');
    document.body.classList.remove("no-scroll");
    typeHeadline(); // start intro headline typing
  }, { once: true });
}, loaderDuration);

// ===============================
// Intro Headline Typewriter
// ===============================
const headline = document.getElementById("headline");
const headlineText = "B.Tech CSE Student at UPES,Dehradun | ACM Technical Core Member | Exploring AI and Web Development";
let headlineIndex = 0;

function typeHeadline(){
  if(headlineIndex < headlineText.length){
    headline.textContent += headlineText.charAt(headlineIndex);
    headlineIndex++;
    setTimeout(typeHeadline, 70); // typing speed
  }
}

// ===============================
// Smooth Scroll for Anchor Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// ===============================
// Fade-in Sections on Scroll
// ===============================
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("fade-in");
  });
}, {threshold: 0.2});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
