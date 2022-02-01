$(document).ready(function () {
    $(".search-bar").click(function () {
        $(".togglesearch").toggle();
        //$(".search-wrapper").show();
        $(".togglesearch").css("display", "flex");
        $(".search-input").focus();
        $(".navbar-nav").hide();
        $(".navigation-socialMedia-icons").hide();
        $(".search-nav").css("width", "100%")
        $(".search-container").css({
            width: "90%",
            position: "absolute",
            right: "50px",
            top: "-35px",

        });
        $(".search-bar").css({
            width: "100%",
            border: "1px solid #dcdcdc",
            padding: "0 11px 0 20px"
        });
        $(".togglesearch").css("width", "100%");
    });
});
$(document).click(function (e) {
    var container = $(".search-bar");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        $('.togglesearch').hide();
        $('.search-wrapper').hide();
        $('.navbar-nav').show();
        $('.search-nav').show();
        $('.search-nav').css("width", "");
        $('.search-container').css({
            width: "",
            position: ""
        });
        $('.search-bar').show();
        $('.search-bar').css("border", "");
        $('.navigation-socialMedia-icons').show();

    }
});

$(document).ready(function () {
    $(".search-mobile-bar").click(function () {
        $(".togglesearch-mobile").toggle();
        $(".togglesearch-mobile").css({
            display: "flex",
            width: "100%",
            paddingRight: "10px"
        });
        $("#searchColumn").removeClass("col-3 col-md-4");
        $("#searchColumn").addClass("col-12");
        $(".search-input").focus();
        $(".navigation-mobil-image").hide();
    });
});
$(document).click(function (e) {
    var container = $(".search-mobile-bar");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        $('.togglesearch-mobile').hide();
        $('.navigation-mobil-image').show();
        $("#searchColumn").addClass("col-3 col-md-4");
        $("#searchColumn").removeClass("col-12");
    }
});


$('input[type=search]').on('input', function () {
    clearTimeout(this.delay);
    this.delay = setTimeout(function () {
        $(this).trigger('search');
    }.bind(this), 800);
}).on('search', function () {
    if (this.value) {
        console.log(this.value);
        $.ajax({
            type: "GET",
            dataType: "html",
            url: "/arama/suggest?q=" + this.value
        })
            .done(function (data) {
                $(".search-wrapper").html(data);
                $(".search-wrapper").show();
            });
        /* call ajax request here */
    }
});


