var productindex = 1;

$.fn.exists = function() {
	return this.length !== 0;
}

$(document).ready(function() {
	$('.popup').hide();
	$('.list').hide();
	$('#chicken').slideToggle(500);
	if ($(window).width() <= 768)
		$('.header ul').hide();
	$('.link').click(function() {

		if ($(this).attr('href') == '#landingpage') {
			$('html,body').animate({
				scrollTop : 0
			}, {
				duration : 500
			});
			return false;
		}

		$('html,body').animate({
			scrollTop : $($(this).attr('href')).offset().top
		}, {
			duration : 500
		});
		return false;
	});

	window.setInterval(function() {
		productindex++;
		$('.toggle').slideToggle(500);
		if ($('.product' + productindex).exists()) {
			window.setTimeout(function() {
				setDescription();
			}, 1000);

			$('.product1').animate({
				'marginLeft' : '-=1280'
			}, 500)
		} else {
			productindex = 1;
			window.setTimeout(function() {
				setDescription();
			}, 1000);
			$('.product1').animate({
				'marginLeft' : '0'
			}, 500)
		}

		window.setTimeout(function() {
			$('.toggle').slideToggle(500);
		}, 1000);
	}, 7000);

	$('.toggle .prev').hover(function() {
		$('.toggle .prev').find('span').addClass('hover');
	}, function() {
		$('.toggle .prev').find('span').removeClass('hover');
	});

	$('.toggle .next').hover(function() {
		$('.toggle .next').find('span').addClass('hover');
	}, function() {
		$('.toggle .next').find('span').removeClass('hover');
	});

	$('.toggle .next').click(function() {
		productindex++;
		$('.toggle').slideToggle(500);
		if ($('.product' + productindex).exists()) {
			window.setTimeout(function() {
				setDescription();
			}, 1000);

			$('.product1').animate({
				'marginLeft' : '-=1280'
			}, 500)
		} else {
			productindex = 1;
			window.setTimeout(function() {
				setDescription();
			}, 1000);
			$('.product1').animate({
				'marginLeft' : '0'
			}, 500)
		}

		window.setTimeout(function() {
			$('.toggle').slideToggle(500);
		}, 1000);
	});

	$('.toggle .prev').click(function() {
		$('.toggle').slideToggle(500);
		productindex--;
		if ($('.product' + productindex).exists()) {
			window.setTimeout(function() {
				setDescription();
			}, 1000);

			$('.product1').animate({
				'marginLeft' : '+=1280'
			}, 500);
		} else {
			productindex++;
			for (var i = 2; i <= 30; i++) { // max photo 30
				if ($('.product' + i).exists()) {
					productindex = i;
					window.setTimeout(function() {
						setDescription();
					}, 1000);
					$('.product1').animate({
						'marginLeft' : '-=1280'
					}, 500);
				} else {
					break;
				}

			}
		}

		window.setTimeout(function() {
			$('.toggle').slideToggle(500);

		}, 1000);
	});

	var lastscroll = 0;
	$(window).scroll(function(e) {
		if (lastscroll < $(window).scrollTop()) { // if scroll down
			if ($(window).scrollTop() == 100) {
				$('.home').animate({
					'top' : '-=50'
				}, 500);
				$('.header').animate({
					'top' : '-=40'
				}, 300);
			}
		} else { // if scroll up
			if ($(window).scrollTop() == 300) {
				$('.home').animate({
					'top' : '0'
				}, 250);
				$('.header').animate({
					'top' : '0'
				}, 300);
			} else if ($(window).scrollTop() == 0) {
				$('.home').animate({
					'top' : '0'
				}, 250);
				$('.header').animate({
					'top' : '0'
				}, 300);
			}
		}
		lastscroll = $(window).scrollTop();
	});

	$('.menulist .list .product img').click(function() {
		$href = $(this).attr('src');
		$('.popup').fadeIn('slow');
		$('.popup .fullscreen').css('background-image', 'url("' + $href + '")')
	});

	$('.popup .close').click(function() {
		$('.popup').fadeOut('slow');
	});
	$('.header .burger').click(function() {
		$('.header ul').slideToggle(500);
	});
	$('.categories .category').hover(function() {
		$(this).find('div.background').addClass('hover');
	}, function() {
		$(this).find('div.background').removeClass('hover');
	});
	$('.categories-2-cols .category').hover(function() {
		$(this).find('div.background').addClass('hover');
	}, function() {
		$(this).find('div.background').removeClass('hover');
	});
	$('.categories .category').click(function() {
		var id = "#" + $(this).attr('id').replace("cat", "");
		$('.categories .category').find('div.background').removeClass('selected');
		$('.categories-2-cols .category').find('div.background').removeClass('selected');
		$(this).find('div.background').addClass('selected');
		$('.list').hide('slide', {
			direction : 'left'
		}, 500);
		window.setTimeout(function() {
			$(id).show('slide', {
				direction : 'right'
			}, 500);
		}, 500);
	});
	
	$('.categories-2-cols .category').click(function() {
		var id = "#" + $(this).attr('id').replace("cat", "");
		$('.categories .category').find('div.background').removeClass('selected');
		$('.categories-2-cols .category').find('div.background').removeClass('selected');
		$(this).find('div.background').addClass('selected');
		$('.list').hide('slide', {
			direction : 'left'
		}, 500);
		window.setTimeout(function() {
			$(id).show('slide', {
				direction : 'right'
			}, 500);
		}, 500);
	});
});

function setDescription() {
	switch (productindex) {
	case 1:
		$('.toggle .title').html('PAKET HEMAT 1');
		$('.toggle .subtitle').html('Nasi Ayam Fillet Saus Asam Manis');
		break;
	case 2:
		$('.toggle .title').html('PAKET HEMAT 2');
		$('.toggle .subtitle').html('Nasi Ayam Fillet Saus Mentega');
		break;
	case 3:
		$('.toggle .title').html('PAKET HEMAT 3');
		$('.toggle .subtitle').html('Nasi Ayam Fillet Saus Tiram');
		break;
	case 4:
		$('.toggle .title').html('PAKET HEMAT 4');
		$('.toggle .subtitle').html('Nasi Ayam Fillet');
		break;
	}
}