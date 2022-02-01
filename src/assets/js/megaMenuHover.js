var $boxes = $('.boxlink'),
$productLinks = $('.dropdown-content-submenu-unorder .product-link').mouseover(function() {
    $boxes.hide().filter('#box' + this.id).show();
});