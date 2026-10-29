const slides = Array.from(document.querySelectorAll(".hero-slide"));
const prevButton = document.querySelector(".hero-prev");
const nextButton = document.querySelector(".hero-next");
const pageText = document.querySelector(".hero-page");
const toggleButton = document.querySelector(".hero-toggle");
const slider = document.querySelector(".hero-slider");

let currentIndex = 0;
let isPlaying = true;
let autoPlayTimer = null;

function showSlide(index) {
    if (slides.length === 0) return;

    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === currentIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
    });

    pageText.textContent = `${currentIndex + 1} / ${slides.length}`;
}

function stopAutoPlay() {
    window.clearInterval(autoPlayTimer);
    autoPlayTimer = null;
}

function startAutoPlay() {
    stopAutoPlay();

    if (!isPlaying || slides.length < 2) return;

    autoPlayTimer = window.setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
}

function updateToggleButton() {
    toggleButton.innerHTML = isPlaying
        ? '<span aria-hidden="true">&#8545;</span>'
        : '<span aria-hidden="true">&#9654;</span>';

    toggleButton.setAttribute(
        "aria-label",
        isPlaying ? "자동 재생 일시정지" : "자동 재생 시작"
    );
}

prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    startAutoPlay();
});

nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    startAutoPlay();
});

toggleButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    updateToggleButton();
    startAutoPlay();
});

slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);
slider.addEventListener("focusin", stopAutoPlay);
slider.addEventListener("focusout", startAutoPlay);

showSlide(0);
updateToggleButton();
startAutoPlay();
