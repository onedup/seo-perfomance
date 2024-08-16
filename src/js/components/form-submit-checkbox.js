document.addEventListener('DOMContentLoaded', function () {
  const requestPlanForm = document.querySelector("#request_plan");
  const requestPlanCheckbox = requestPlanForm.querySelector('#privacy_policy');
  const requestPlanSubmitButton = requestPlanForm.querySelector('.form__btn');

  // Функция для обновления состояния кнопки
  function updateButtonState() {
    requestPlanSubmitButton.disabled = !requestPlanCheckbox.checked;
  }
  // Вызываем функцию при загрузке страницы
  updateButtonState();

  requestPlanCheckbox.addEventListener('change', updateButtonState);


  requestPlanForm.addEventListener('submit', function (event) {
    if (!requestPlanCheckbox.checked) {
      event.preventDefault();
      alert('Пожалуйста, подтвердите согласие с политикой конфиденциальности');
    }
  });

});