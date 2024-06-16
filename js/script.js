var buttons = document.querySelectorAll('button');

  // Функция для изменения цвета кнопки
  function changeButtonColor(event) {
    // Сбрасываем цвет у всех кнопок
    buttons.forEach(function(button) {
      button.style.backgroundColor = '';
      button.style.color = '';
    });

    // Устанавливаем цвет для нажатой кнопки
    event.target.style.backgroundColor = '#37556B';
    event.target.style.color = '#ffffff';
  }
  buttons.forEach(function(button) {
    button.addEventListener('click', changeButtonColor);
  });