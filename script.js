document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.querySelector('.search');
  var searchStylish = document.querySelector('.search_stylish');
  var navButton = document.querySelector('.nav_button');
  var navContainer = document.querySelector('.nav_container');
  var eshopButton = document.querySelector('.eshop_dropdown');
  var eshopDropdown = document.querySelector('.eshop_dropdown_menu');
  var backButton = document.querySelector('.back_button');

  searchInput.addEventListener('focus', function () {
    searchStylish.classList.add('focused');
  });

  searchInput.addEventListener('blur', function () {
    searchStylish.classList.remove('focused');
  });

  navButton.addEventListener('click', function () {
    if (navButton.classList.contains('focused')) {
      eshopDropdown.classList.remove('focused');
    }
    navContainer.classList.toggle('focused');
    navButton.classList.toggle('focused');
  });

  eshopButton.addEventListener('click', function () {
    eshopDropdown.classList.toggle('focused');
    eshopButton.classList.toggle('focused');
  });

  backButton.addEventListener('click', function () {
    eshopDropdown.classList.remove('focused');
    eshopButton.classList.toggle('focused');
  });
});