document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.querySelector('.search');
    var searchStylish = document.querySelector('.search_stylish');
  
    searchInput.addEventListener('focus', function() {
      searchStylish.classList.add('focused');
    });
  
    searchInput.addEventListener('blur', function() {
      searchStylish.classList.remove('focused');
    });
  });