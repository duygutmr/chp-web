$(document).ready(function() {
    $(".chpTvCarousel").each(function(){
        $(this).owlCarousel({
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
          });

    })
    $(".chpTvSoftCarousel").each(function(){
        $(this).owlCarousel({
            margin:10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
          });

    })
    $("#carouselCalendar").each(function(){
        $(this).owlCarousel({

            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 5
                },
                1000: {
                    items: 9
                }
            }
          });
    })


    var owl = $('.owl-nav');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    
    var owl = $('.owl-nav');
    owl.owlCarousel();
    // Go to the next item
    $('.NextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.PrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    
});


