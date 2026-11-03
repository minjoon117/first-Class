document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".hero-slider");
  const track = slider && slider.querySelector(".swiper-wrapper");
  const slides = track ? Array.from(track.querySelectorAll(".hero-slide")) : [];
  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");
  const page = document.querySelector(".hero-page");
  const toggle = document.querySelector(".hero-toggle");

  if (slider && track && slides.length) {
    let index = 0, timer = null, playing = true;
    function show(n) {
      index = (n + slides.length) % slides.length;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      if (page) page.textContent = (index + 1) + " / " + slides.length;
    }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    function start() {
      stop();
      if (playing && slides.length > 1) timer = setInterval(function () { show(index + 1); }, 5000);
    }
    function updateToggle() {
      if (!toggle) return;
      toggle.textContent = playing ? "Ⅱ" : "▶";
      toggle.setAttribute("aria-label", playing ? "자동 재생 일시정지" : "자동 재생 시작");
    }
    if (prev) prev.addEventListener("click", function () { show(index - 1); start(); });
    if (next) next.addEventListener("click", function () { show(index + 1); start(); });
    if (toggle) toggle.addEventListener("click", function () { playing = !playing; updateToggle(); start(); });
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);
    show(0); updateToggle(); start();
  }

  const header = document.querySelector(".site-header");
  const menu = document.querySelector(".mobile-menu");
  if (header && menu) {
    menu.setAttribute("aria-expanded", "false");
    menu.addEventListener("click", function () {
      const open = header.classList.toggle("menu-open");
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });
  }
});