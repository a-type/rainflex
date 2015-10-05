$(function () {
	var $body = $("body");
	var $header = $(".header");
	$(window).scroll(function () {
        setHeaderSize();
    });

    function setHeaderSize () {
    	var headerHeight = $header.outerHeight() - 120;
    	if (window.pageYOffset > headerHeight) {
        	$body.removeClass("scrolled-top");
        }
        else {
        	$body.addClass("scrolled-top");
        }
    }
    setHeaderSize();
});