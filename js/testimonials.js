document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".testimonial-wrapper");

  const testimonials = [
    {
      text: "We’ve worked with many suppliers, but none were this hands-on. Their quality inspections at every stage—especially during loading—gave us full peace of mind.",
      author: "Laura Meier, Procurement Manager at CleanPro"
    },
    {
      text: "As a mid-size company, we really appreciate their flexible shipping options. Being able to buy smaller volumes from their EU stock is a big advantage.",
      author: "Marta Kowalska, Supply Chain Coordinator at EkoChem"
    },
    {
      text: "We needed a specific bottle type on short notice. They sourced it through their China network within days. Super responsive and resourceful.",
      author: "James Ellis, Operations Director at GlowSense"
    },
    {
      text: "Excellent balance of price and quality. They helped us reduce unit cost without compromising on performance—plus they deliver globally.",
      author: "Isabella Rossi, Purchasing Lead at SunVera Cosmetics"
    }
  ];

  testimonials.forEach((t) => {
    const div = document.createElement("div");
    div.className = "testimonial";
    div.innerHTML = `
      <img src="assets/topquotation.svg" class="quotation quotation-top" alt="Quote Top" />
      <p class="testimonial-text">${t.text}</p>
      <p class="testimonial-author">${t.author}</p>
      <img src="assets/bottomquotation.svg" class="quotation quotation-bottom" alt="Quote Bottom" />
    `;
    wrapper.appendChild(div);
  });

  const slides = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function updateSlider() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  document.querySelector(".testimonial-arrow.right").addEventListener("click", nextTestimonial);
  document.querySelector(".testimonial-arrow.left").addEventListener("click", prevTestimonial);

  setInterval(nextTestimonial, 6000);
});
