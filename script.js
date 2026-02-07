document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     HERO SEARCH BUTTON
  ========================== */
  const searchBtn = document.querySelector(".search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      alert("Search feature will be implemented next 🚗");
    });
  }

  /* =========================
     HERO IMAGE CAROUSEL
  ========================== */
  const heroImages = document.querySelectorAll(".carousel-img");
  let heroImageIndex = 0;

  if (heroImages.length > 0) {
    setInterval(() => {
      heroImages[heroImageIndex].classList.remove("active");
      heroImageIndex = (heroImageIndex + 1) % heroImages.length;
      heroImages[heroImageIndex].classList.add("active");
    }, 3000);
  }



document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".car-card");
  const prevBtn = document.querySelector(".nav-btn.prev");
  const nextBtn = document.querySelector(".nav-btn.next");

  // safety check (VERY IMPORTANT)
  if (!track || cards.length === 0 || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  const gap = 20;
  const cardWidth = cards[0].offsetWidth + gap;
  const visibleCards = 3;

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });

});







  /* =========================
     TESTIMONIAL SLIDER
  ========================== */
  window.moveTestimonial = function (index) {
    const testimonialTrack = document.querySelector(".testimonial-track");
    const testimonialDots = document.querySelectorAll(".dot");

    if (!testimonialTrack) return;

    testimonialTrack.style.transform = `translateX(-${index * 50}%)`;
    testimonialDots.forEach((dot) => dot.classList.remove("active"));
    testimonialDots[index]?.classList.add("active");
  };

  /* =========================
     POPULAR BRANDS SLIDER
  ========================== */
  const brandTrack = document.querySelector(".brands-track");
  const brandCards = document.querySelectorAll(".brand-card");

  let brandIndex = 0;
  const visibleBrands = 6;

  if (brandTrack && brandCards.length > 0) {
    const brandCardWidth = brandCards[0].offsetWidth + 16;
    const maxBrandIndex = brandCards.length - visibleBrands;

    window.slideBrands = function (direction) {
      brandIndex += direction;

      if (brandIndex < 0) brandIndex = 0;
      if (brandIndex > maxBrandIndex) brandIndex = maxBrandIndex;

      brandTrack.style.transform = `translateX(-${brandIndex * brandCardWidth}px)`;
    };
  }

  /* =========================
     FAQ ACCORDION
  ========================== */
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const currentItem = question.parentElement;

      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== currentItem) item.classList.remove("active");
      });

      currentItem.classList.toggle("active");
    });
  });

  /* =========================
     VACATION SCROLLER
  ========================== */
  const vacationCarousel = document.getElementById("vacationCarousel");
  const vacationNextBtn = document.getElementById("vacationNextBtn");
  const vacationPrevBtn = document.getElementById("vacationPrevBtn");

  if (vacationCarousel) {
    const vacationScrollAmount = 320;

    vacationNextBtn?.addEventListener("click", () => {
      vacationCarousel.scrollBy({
        left: vacationScrollAmount,
        behavior: "smooth",
      });
    });

    vacationPrevBtn?.addEventListener("click", () => {
      vacationCarousel.scrollBy({
        left: -vacationScrollAmount,
        behavior: "smooth",
      });
    });
  }
});
