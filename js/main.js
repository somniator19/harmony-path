// Простые скрипты для лендинга.
// Сюда позже можно добавить анимации при скролле.

document.addEventListener("DOMContentLoaded", () => {
  
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.style.boxShadow =
        window.scrollY > 12 ? "0 4px 16px rgba(26, 36, 26, 0.06)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 8 фото: images/gallery/1.jpg … 8.jpg
  const gallery = [
    { src: "images/gallery/1.jpg", alt: "Занятие 1" },
    { src: "images/gallery/2.jpg", alt: "Занятие 2" },
    { src: "images/gallery/3.jpg", alt: "Занятие 3" },
    { src: "images/gallery/4.jpg", alt: "Занятие 4" },
    { src: "images/gallery/5.jpg", alt: "Занятие 5" },
    { src: "images/gallery/6.jpg", alt: "Занятие 6" },
    { src: "images/gallery/7.jpg", alt: "Занятие 7" },
    
  ];

  const openBtn = document.getElementById("open-gallery");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCounter = document.getElementById("lb-counter");
  const btnPrev = document.getElementById("lb-prev");
  const btnNext = document.getElementById("lb-next");
  if (!openBtn || !lightbox || !lbImg) return;

  let index = 0;

  function show(i) {
    index = (i + gallery.length) % gallery.length;
    const item = gallery[index];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCounter.textContent = index + 1 + " / " + gallery.length;
  }

  function open() {
    show(0);
    lightbox.hidden = false;
    document.body.classList.add("lb-open");
  }

  function close() {
    lightbox.hidden = true;
    document.body.classList.remove("lb-open");
    lbImg.src = "";
  }

  openBtn.addEventListener("click", open);
  lightbox.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", close);
  });
  btnPrev && btnPrev.addEventListener("click", () => show(index - 1));
  btnNext && btnNext.addEventListener("click", () => show(index + 1));

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
});