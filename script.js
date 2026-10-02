const mouse = document.querySelector(".mouse");
const mouseDot = document.querySelector(".mouseDot");

if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", e => {
    mouse.style.left = `${e.clientX}px`;
    mouse.style.top = `${e.clientY}px`;
    mouseDot.style.left = `${e.clientX}px`;
    mouseDot.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll("a,button,.project,.service,.heroCard").forEach(el => {
    el.addEventListener("mouseenter", () => mouse.classList.add("active"));
    el.addEventListener("mouseleave", () => mouse.classList.remove("active"));
  });
}

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
}, {passive:true});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll(".reveal").forEach((el,index) => {
  el.style.transitionDelay = `${Math.min(index % 5,4) * 70}ms`;
  revealObserver.observe(el);
});

document.querySelectorAll(".roundButton,.headerButton,.contactForm button").forEach(button => {
  button.addEventListener("mousemove", e => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * .12;
    const y = (e.clientY - rect.top - rect.height / 2) * .12;
    button.style.transform = `translate(${x}px,${y}px)`;
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0,0)";
  });
});

const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const project = form.elements.project.value.trim();
  const message = form.elements.message.value.trim();

  const subject = encodeURIComponent(project ? `Project enquiry: ${project}` : "Project enquiry");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProject: ${project}\n\n${message}`
  );

  window.location.href = `mailto:nazeem@example.com?subject=${subject}&body=${body}`;
  formMessage.textContent = "Opening your email app...";
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".menuOpen").forEach(x => x.classList.remove("menuOpen"));
  });
});