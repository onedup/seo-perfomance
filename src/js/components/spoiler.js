document.querySelectorAll(".spoiler").forEach((spoiler, index) => {
  const spoilerHeader = spoiler.querySelector(".spoiler__header");
  const spoilerContent = spoiler.querySelector('.spoiler__content');

  // Добавляем атрибуты для доступности
  spoilerHeader.setAttribute('role', 'button');
  spoilerHeader.setAttribute('aria-expanded', 'false');
  spoilerHeader.setAttribute('aria-controls', `spoiler-content-${index}`);
  spoilerHeader.setAttribute('tabindex', '0');
  spoilerContent.setAttribute('id', `spoiler-content-${index}`);

  function toggleSpoiler() {
    const isActive = spoiler.classList.contains('spoiler--active');
    spoiler.classList.toggle('spoiler--active');
    spoilerHeader.setAttribute('aria-expanded', !isActive);
    spoilerContent.hidden = isActive;
  }

  spoilerHeader.addEventListener('click', toggleSpoiler);

  spoilerHeader.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSpoiler();
    }
  });
});