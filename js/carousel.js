//<![CDATA[
$(window).load(function(){
	var triggers = $('ul.triggers li');
	var images = $('ul.images li');
	var lastElem = triggers.length-1;
	var target;

	triggers.first().addClass('active');

	function sliderResponse(target) {

		switch (target) {
		case 0:
			images.eq(target).switchClass("second-layer third-layer", "active", 2000);
			images.eq(target).children("img").switchClass("second-layer third-layer", "active", 2000);
			images.eq(target).next().switchClass("active third-layer", "second-layer", 2000);
			images.eq(target).next().children("img").switchClass("active third-layer", "second-layer", 2000);
			images.eq(target).next().next().switchClass("active second-layer", "third-layer", 2000);
			images.eq(target).next().next().children("img").switchClass("active second-layer", "third-layer", 2000);
			break;
		case 1:
			images.eq(target).prev().switchClass("active second-layer", "third-layer", 2000);
			images.eq(target).prev().children("img").switchClass("active second-layer", "third-layer", 2000);
			images.eq(target).switchClass("second-layer third-layer", "active", 2000);
			images.eq(target).children("img").switchClass("second-layer third-layer", "active", 2000);
			images.eq(target).next().switchClass("active third-layer", "second-layer", 2000);
			images.eq(target).next().children("img").switchClass("active third-layer", "second-layer", 2000);
			break;
		case 2:
			images.eq(target).prev().prev().switchClass("active third-layer", "second-layer", 2000);
			images.eq(target).prev().prev().children("img").switchClass("active third-layer", "second-layer", 2000);
			images.eq(target).prev().switchClass("active second-layer", "third-layer", 2000);
			images.eq(target).prev().children("img").switchClass("active second-layer", "third-layer", 2000);
			images.eq(target).switchClass("second-layer third-layer", "active", 2000);
			images.eq(target).children("img").switchClass("second-layer third-layer", "active", 2000);
			break;
		}

		triggers.removeClass('active').eq(target).addClass('active');
	}

	triggers.click(function() {
		if ( !$(this).hasClass('active') ) {
			target = $(this).index();
			sliderResponse(target);
			resetTiming();
		}
	});

	function sliderTiming() {
		target = $('ul.triggers li.active').index();
		target === lastElem ? target = 0 : target = target+1;
		sliderResponse(target);
	}

	var timingRun = setInterval(function() { sliderTiming(); },5000);
	function resetTiming() {
		clearInterval(timingRun);
		timingRun = setInterval(function() { sliderTiming(); },5000);
	}
});
//]]> 
