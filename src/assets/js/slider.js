(function ( $ ) {

  var Slider = {
      container:null,
      init:function(container){
        this.container = container;
        var that = this;
        $(this.container).on("click",".next-slide",function(){
            that.goNext();
        });
        $(this.container).on("click",".prev-slide",function(){
          that.goPrev();
      });
      },
      goNext:function(){
        var currentPosition = $(this.container).data("current-slide");
        if(currentPosition == undefined || currentPosition == null){
          currentPosition = 0;
        }
        var itemCount = $(this.container).find(".slider-item").length;
        currentPosition++
        if(currentPosition>=itemCount){
            currentPosition=0;
        }
        $(this.container).data("current-slide",currentPosition);
        $(this.container).find(".slider-item").removeClass("active");
        $($(this.container).find(".slider-item").get(currentPosition)).addClass("active");
      
      },
      goPrev:function(){
        var currentPosition = $(this.container).data("current-slide");
        if(currentPosition == undefined || currentPosition == null){
          currentPosition = 0;
        }
        var itemCount = $(this.container).find(".slider-item").length;
        currentPosition--
        if(currentPosition<0){
            currentPosition=(itemCount-1);
        }
        $(this.container).data("current-slide",currentPosition);
        $(this.container).find(".slider-item").removeClass("active");
        $($(this.container).find(".slider-item").get(currentPosition)).addClass("active");
      }
  };

  $.fn.chpSlider = function() {
    Slider.init($(this));
    return this;
  };

}( jQuery ));

$(document).ready(function(){
  $(".slider").chpSlider();
});
