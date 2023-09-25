document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".wrapper");
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slider-dots");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentIndex = 0;
  let isAnimating = false;

  function updateDots() {
    const dotElements = [];
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("span");
      dot.className = "dot";
      dotElements.push(dot);
      dotsContainer.appendChild(dot);
    }
    dotsContainer.innerHTML = "";
    dotElements.forEach((dot, index) => {
      dot.classList.remove("active");
      if (index === currentIndex) {
        dot.classList.add("active");
      }
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    if (isAnimating || index === currentIndex) return;

    isAnimating = true;
    const offset = -index * sliderContainer.offsetWidth - 100;
    slider.style.transform = `translateX(${offset}px)`;

    setTimeout(() => {
      currentIndex = index;
      isAnimating = false;
      updateDots();

      if (currentIndex === 0 && index === slides.length - 1) {
        slider.style.transition = "none";
        const offset = -slides.length * sliderContainer.offsetWidth;
        slider.style.transform = `translateX(${offset}px)`;
        setTimeout(() => {
          slider.style.transition = "transform 0.5s ease-in-out";
        }, 0);
      }
    }, 500);
  }

  prevButton.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  });

  nextButton.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  });

  dotsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("dot")) {
      const index = Array.from(dotsContainer.children).indexOf(event.target);
      goToSlide(index);
    }
  });

  updateDots();
});
