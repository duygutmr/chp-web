const pages = document.querySelectorAll(".pagination-numbers");

pages.forEach(function (item) {
   item.addEventListener('click', function () {
      pages.forEach(function (item) {
       item.style.backgroundColor = '#fff'
       item.style.color = '#063D5D'
     })
     this.style.backgroundColor = '#063D5D'
     this.style.color = '#fff'
   });
 })