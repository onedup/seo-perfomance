document.querySelectorAll(".spoiler").forEach(spoiler => {
  const spoilerHeader = spoiler.querySelector(".spoiler__header");
  const spoilerContent = spoiler.querySelector('.spoiler__content');

  spoilerHeader.addEventListener('click', () => {
    const isActive = spoiler.classList.contains('spoiler--active');

    // if (isActive) {
    //   // Скрытие контента
    //   spoilerContent.style.transform = 'scaleY(0)';
    //   spoilerContent.style.padding = '0';
    // } else {
    //   // Открытие контента
    //   spoilerContent.style.transform = 'scaleY(1)';
    //   spoilerContent.style.padding = '10px 0';
    // }

    // Переключаем активный класс
    spoiler.classList.toggle('spoiler--active');
  });
});
