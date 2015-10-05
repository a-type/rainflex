$(function () {
	var $window = $(window);
	var $map = $(".map-image");
	var $mapSection = $(".map");
	var slides = $mapSection.children("div");
	var $header = $(".header");
	$window.scroll(function () {
		setMapState();
	});

	function setMapState () {
		var lower = $mapSection.offset().top - ($window.height() / 6);
		var upper = lower + $mapSection.height() - ($window.height());
		if (window.pageYOffset > lower && window.pageYOffset < upper) {
			$mapSection.addClass("in-view");
		}
		else {
			$mapSection.removeClass("in-view");
		}

		var slideIdx = Math.floor((window.pageYOffset - lower) / ((upper - lower) / 3));

		for (var i = slides.length - 1; i >= 0; i--) {
			if (i === slideIdx) {
				$(slides[i]).addClass("active");
			}
			else {
				$(slides[i]).removeClass("active");
			}
		};
	}
	setMapState();

	var paginators = $(".slide-pagination");

	$.each(paginators, function (i, paginator) {
		var buttons = $(paginator).children("a");
		var groups = $(paginator).siblings(".slide-item-group");

		$.each(buttons, function (j, button) {
			$(button).click(function () {
				$(groups).removeClass("active");
				$(groups[j]).addClass("active");
			});
		});
	});
});