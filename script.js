document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.querySelector('.search');
  var searchStylish = document.querySelector('.search_stylish');
  var navButton = document.querySelector('.nav_button');
  var navContainer = document.querySelector('.nav_container');
  var buttonClicked
  searchInput.addEventListener('focus', function () {
    searchStylish.classList.add('focused');
  });

  searchInput.addEventListener('blur', function () {
    searchStylish.classList.remove('focused');
  });

  navButton.addEventListener('click', function () {
    navContainer.classList.toggle('focused');
    navButton.classList.toggle('focused');
  });
});