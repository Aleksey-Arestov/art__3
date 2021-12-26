$(document).ready(function () {
	$('.slider').slick({

		arrows: true,
		dots: true,
		centerMode: true,
		centerPadding: '10%',
		/* slidesToShow: 3, */

	});

});
$(document).ready(function () {
	$('.abc').slick({

		arrows: true,
		dots: true,
		slidesToShow: 3,

	});

});
$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({
		scrollTop: top
	}, 600);
});
