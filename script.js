/* --- Scroll-triggered Reveal --- */
const revealEls = document.querySelectorAll(".animate-up, .animate-fade");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => io.observe(el));

/* --- Contact Form (Basic Front-end Handler) --- */
const form = document.getElementById("contact-form");
const statusTxt = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusTxt.textContent = "Sending…";

  // Replace the endpoint below with your form-processing service or back-end
  try {
    await fetch("https://example.com/form", {
      method: "POST",
      body: new FormData(form),
    });
    statusTxt.textContent = "Thank you! We’ll contact you soon.";
    form.reset();
  } catch (err) {
    statusTxt.textContent = "Error. Please try WhatsApp instead.";
  }
});

const navToggle = document.getElementById('navToggle');
const navMenu  = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('active');
});
// Basic horizontal slider
const slider = document.querySelector('.testimonials-slider');
const prevBtn = document.querySelector('.slider-nav .prev');
const nextBtn = document.querySelector('.slider-nav .next');

let offset = 0;
const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 32; // card + gap

prevBtn.addEventListener('click', () => {
  offset = Math.min(offset + cardWidth, 0);
  slider.style.transform = `translateX(${offset}px)`;
});
nextBtn.addEventListener('click', () => {
  const maxOffset = -(cardWidth * (slider.children.length - Math.floor(slider.parentElement.offsetWidth / cardWidth)));
  offset = Math.max(offset - cardWidth, maxOffset);
  slider.style.transform = `translateX(${offset}px)`;
});

