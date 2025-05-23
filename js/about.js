document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll('.about-block');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('animated-left')) {
          entry.target.classList.add('animate-in-left');
        } else if (entry.target.classList.contains('animated-right')) {
          entry.target.classList.add('animate-in-right');
        }
        obs.unobserve(entry.target); // sadece bir kez çalışsın
      }
    });
  }, {
    threshold: 0.2
  });

  blocks.forEach(block => observer.observe(block));
});
