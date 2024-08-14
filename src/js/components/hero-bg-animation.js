document.addEventListener('mousemove', (event) => {
  const blocks = document.querySelectorAll('.hero__bg');
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  blocks.forEach((block, index) => {
    if (isInViewport(block)) {
      const rect = block.getBoundingClientRect();
      const blockX = rect.left + rect.width / 2;
      const blockY = rect.top + rect.height / 2;

      const deltaX = mouseX - blockX;
      const deltaY = mouseY - blockY;

      // Используем разный коэффициент для каждого блока
      const offsetX = deltaX * (0.05 + index * 0.02); // Различные смещения по X
      const offsetY = deltaY * (0.05 + index * 0.02); // Различные смещения по Y

      block.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
  });
});

// Функция проверки видимости элемента в области просмотра
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
