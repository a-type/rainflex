$(function () {
	var $window = $(window);
	var $map = $(".map-image");
	var $mapSection = $(".map");
	var slides = $mapSection.children("div.slide");
	var $mapGuide = $(".map-guide");
	var $header = $(".header");
	$window.scroll(function () {
		setMapState();
	});

	function setMapState () {
		var top = $mapSection.offset().top;
		var windowHeight = $window.height();
		var lower = top - (windowHeight / 6);
		var upper = lower + $mapSection.outerHeight() - (windowHeight) + (windowHeight / 3);
		if (window.pageYOffset > lower && window.pageYOffset < upper) {
			$mapSection.addClass("in-view");
		}
		else {
			$mapSection.removeClass("in-view");
		}

		var slideHeight = (upper - lower) / 3;
		var slideIdx = Math.floor((window.pageYOffset - lower) / slideHeight);

		slides.removeClass("active");

		if (slideIdx > -1) {
			$(slides[slideIdx]).addClass("active");

			$mapGuide.removeClass("slide-1").removeClass("slide-2").removeClass("slide-3").addClass("slide-" + (slideIdx + 1));

			var groups = $(slides[slideIdx]).children("div.slide-item-group");
			var paginators = $(slides[slideIdx]).find("div.slide-pagination").children();

			var groupIdx = Math.floor(((window.pageYOffset - lower) % slideHeight) / (slideHeight / groups.length));

			groups.removeClass("active");
			paginators.removeClass("active");
			$(groups[groupIdx]).addClass("active");
			$(paginators[groupIdx]).addClass("active");
		}
	}
	setMapState();

	var paginators = $(".slide-pagination");

	// $.each(paginators, function (i, paginator) {
	// 	var buttons = $(paginator).children("a");
	// 	var groups = $(paginator).siblings(".slide-item-group");

	// 	$.each(buttons, function (j, button) {
	// 		$(button).click(function () {
	// 			$(groups).removeClass("active");
	// 			$(groups[j]).addClass("active");
	// 		});
	// 	});
	// });
});