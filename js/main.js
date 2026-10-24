// Простые скрипты для лендинга.
// Сюда позже можно добавить анимации при скролле.

document.addEventListener("DOMContentLoaded", () => {
  // Плавная прокрутка уже есть в CSS (scroll-behavior: smooth).
  // Этот файл нужен, чтобы было куда добавить JS без переделки сайта.

  // Пример: чуть подсветить шапку при прокрутке
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 12) {
      header.style.boxShadow = "0 4px 16px rgba(26, 36, 26, 0.06)";
    } else {
      header.style.boxShadow = "none";
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
