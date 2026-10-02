// mobile menu
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}));

// slow parallax drift on each frame's image
const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
const frames = [...document.querySelectorAll(".frame,.stage")];
function drift() {
  frames.forEach(f => {
    const r = f.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
    f.querySelector(".img").style.transform = `translateY(${p * -6}%) scale(1.04)`;
  });
}
if (!still) {
  addEventListener("scroll", () => requestAnimationFrame(drift), { passive: true });
  addEventListener("resize", drift);
  drift();
}

// captions and panels fade in as each frame arrives
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll(".cap,.card").forEach(el => { el.classList.add("rise"); io.observe(el); });

// contact form opens the email app
const form = document.querySelector("#contactForm");
const msg = document.querySelector("#formMessage");
form.addEventListener("submit", e => {
  e.preventDefault();
  const v = n => form.elements[n].value.trim();
  const subject = encodeURIComponent(v("project") ? `Project enquiry: ${v("project")}` : "Project enquiry");
  const body = encodeURIComponent(`Name: ${v("name")}\nEmail: ${v("email")}\nProject: ${v("project")}\n\n${v("message")}`);
  location.href = `mailto:nazeem@example.com?subject=${subject}&body=${body}`;
  msg.textContent = "Opening your email app";
});
