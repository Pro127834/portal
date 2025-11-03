// Portal entry interaction
const btn = document.querySelector(".enter-btn");
const portal = document.getElementById("portal");
const sections = document.querySelectorAll(".dimension");

// Create wormhole container dynamically
const wormhole = document.createElement("div");
wormhole.id = "wormhole";
document.body.appendChild(wormhole);

// Generate stars for warp effect
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  const angle = Math.random() * 2 * Math.PI;
  const distance = 300 + Math.random() * 300;
  star.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
  star.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  wormhole.appendChild(star);
}

btn.addEventListener("click", () => {
  portal.style.animation = "none";
  portal.style.transition = "1.5s";
  portal.style.transform = "translate(-50%, -50%) scale(5)";
  portal.style.opacity = "0";

  setTimeout(() => {
    wormhole.style.opacity = "1";
  }, 800);

  // Show warp for 4 seconds
  setTimeout(() => {
    wormhole.style.opacity = "0";
    wormhole.style.display = "none";
    document.querySelector(".hero").style.display = "none";
    portal.style.display = "none";
    document.body.style.background = "radial-gradient(circle at center, #1a0033, #000)";
    sections[0].classList.add("show");
  }, 4000);
});

// Reveal sections on scroll
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
