function svgturkiyeharitasi() {
    const element = document.querySelector('#svg-turkiye-haritasi');
  
  
    element.addEventListener(
      'click',
      function (event) {
        if (event.target.tagName === 'path') {
          var url = event.target.getAttribute('data-url');
          if(url!=undefined && url!=null && url!=""){
            window.open(url);
          }
        }
      }
    );
  }