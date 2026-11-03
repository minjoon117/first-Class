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
        slide.setAttribute("aria-hidden", String(! indActive));
    });

    if (pageText) {
        pageText.textContent = `${currentIndex + 1} / ${slides.length}`;
    }
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
    if (!toggleButton) return;

    toggleButton.innerHTML = isPlaying
        ? '<span aria-hidden="true">&#8545;</span>'
        : '<span aria-hidden="true">&#9654;</span>';

    toggleButton.setAttribute(
        "aria-label",
        isPlaying ? "자동 재생 일시정지" : "자동 재생 시작"
    );
}

if (prevButton) {
    prevButton.addEventListener("click", () => {
        showSlide(currentIndex - 1);
        startAutoPlay();
    });
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1);
        startAutoPlay();
    });
}

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        isPlaying = !isPlaying;
        updateToggleButton();
        startAutoPlay();
    });
}

if (slider) {
    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);
    slider.addEventListener("focusin", stopAutoPlay);
    slider.addEventListener("focusout", startAutoPlay);
}

// 초기 실행
showSlide(0);
updateToggleButton();
startAutoPlay();
