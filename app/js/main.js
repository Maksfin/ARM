$(document).ready(function() {

	if($('.navigation').length) {
		mainModule.init();
	}
	
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('.form').on('submit', function(e) {
		e.preventDefault();
	});

	$('.slider').bxSlider({
	 	// controls: false,
	 	auto: true,
	 	autoHover: true,
	 	mode: 'fade',
	 	speed: 800,
 	});	

}); // --> end


// Модуль 
var mainModule = (function() {
	
	var _navShow = function($this) {
		var
			navList = $('.navigation'),
			body = $('body'),
			duration = 500;

		
		if(!$this.hasClass('active')) {
			navList.animate({'right' : '0px'}, duration);
			$this.addClass('active');
			body.addClass('nav__opened');

		} else {
			navList.animate({'right' : '-420px'}, duration);
			$this.removeClass('active');
			body.removeClass('nav__opened');
		}
	};


	return {
		init: function() {
			$('.toggle__nav').on('click', function(e) {
				e.preventDefault();
				_navShow($(this));
			});
		}
	};
})();
