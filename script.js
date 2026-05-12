// Intersection observer for fade-in
  const els = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));

  // Trigger hero elements immediately
  document.querySelectorAll('#hero .fade-in').forEach(el => el.classList.add('visible'));