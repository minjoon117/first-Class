document.addEventListener("DOMContentLoaded", () => {
    const sliderElement = document.querySelector(".hero-slider");
    const pageText = document.querySelector(".hero-page");
    const toggleButton = document.querySelector(".hero-toggle");

    if (!sliderElement || typeof Swiper === "undefined") {
        console.error("Hero 슬라이더 또는 Swiper 라이브러리를 찾을 수 없습니다.");
        return;
    }

    const heroSwiper = new Swiper(sliderElement, {
        slidesPerView: 1,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            prevEl: ".hero-prev",
            nextEl: ".hero-next"
        },
        on: {
            init(swiper) {
                updatePage(swiper);
            },
            slideChange(swiper) {
                updatePage(swiper);
            }
        }
    });

    function updatePage(swiper) {
        if (pageText) {
            pageText.textContent = `${swiper.realIndex + 1} / ${swiper.slides.length}`;
        }
    }

    function updateToggleButton() {
        if (!toggleButton) return;

        const isPlaying = !heroSwiper.autoplay.paused && heroSwiper.autoplay.running;
        toggleButton.innerHTML = isPlaying
            ? '<span aria-hidden="true">&#8545;</span>'
            : '<span aria-hidden="true">&#9654;</span>';
        toggleButton.setAttribute(
            "aria-label",
            isPlaying ? "자동 재생 일시정지" : "자동 재생 시작"
        );
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            if (heroSwiper.autoplay.running && !heroSwiper.autoplay.paused) {
                heroSwiper.autoplay.stop();
            } else {
                heroSwiper.autoplay.start();
            }
            updateToggleButton();
        });
    }

    sliderElement.addEventListener("mouseenter", () => {
        if (heroSwiper.autoplay.running) heroSwiper.autoplay.pause();
        updateToggleButton();
    });

    sliderElement.addEventListener("mouseleave", () => {
        if (heroSwiper.autoplay.running) heroSwiper.autoplay.resume();
        updateToggleButton();
    });

    sliderElement.addEventListener("focusin", () => {
        if (heroSwiper.autoplay.running) heroSwiper.autoplay.pause();
        updateToggleButton();
    });

    sliderElement.addEventListener("focusout", () => {
        if (heroSwiper.autoplay.running) heroSwiper.autoplay.resume();
        updateToggleButton();
    });

    updateToggleButton();
});
