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

const form = document.getElementById("contact-form");
const statusTxt = document.getElementById("form-status");
const whatsappNumber = "919847614681"; // country code + number without leading zero

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    statusTxt.textContent = "Please fill in the required fields.";
    return;
  }

  // Construct the WhatsApp URL with a pre-filled message
  const text = `Hello Emmanuel Builders,\n\n` +
               `I am interested in your services. Here are my details:\n` +
               `Name: ${name}\n` +
               `Email: ${email}\n` +
               (phone ? `Phone: ${phone}\n` : '') +
               `Message: ${message}`;

  const encodedText = encodeURIComponent(text);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  // Open WhatsApp Web or app in a new tab
  window.open(whatsappURL, "_blank");

  statusTxt.textContent = "Opening WhatsApp...";
  form.reset();
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
document.querySelectorAll('.accordion .question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('open');
  });
});
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const speed = target / 200;
    if (current < target) {
      counter.innerText = Math.ceil(current + speed);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

