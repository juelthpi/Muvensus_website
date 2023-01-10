$(document).ready(function(){
	$('#mobile_menu').click(function(){
		$('.header_area .col-lg-9.col-md-8.XXX').animate({
			width:'toggle'
		}, 300)
	});

	$('#mobile_menu').on('click', function () {
		$(this).toggleClass('actives');
	});

	$('.header_menu li a').click(function(){
		$('.header_menu li a').removeClass('active');
		$(this).addClass('active');
	});


});
