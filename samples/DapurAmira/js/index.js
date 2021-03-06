var index = 1;
var url = 'http://amira.com';
$.fn.exists = function() {
	return this.length !== 0;
}

$(document)
		.ready(
				function() {
					if ($(window).width() > 768) {
						$('.homecontent').hide();
						$('.aboutcontent').hide();
					
						$('.aboutsub, .aboutsub2, .aboutpic').hide();
						$('.contactcontent .content, .contactcontent .pic')
								.hide();
					}
					
					$('.ordertable .submit').click(function(){
						sendEmail();
					});

					$('.ordertable .success').hide();
					$('.homecontent .pic').hide();
					$('.homecontent #pic1').show('slide', {
						direction : 'left'
					}, 500);

					if ($(window).width() <= 768) {
						$('.sidebar .menu').hide();
					}

					$('.sidebar .burger').click(function() {
						if ($('.sidebar .menu').is(':visible')) {
							$('.sidebar .menu').hide('slide', {
								direction : 'up'
							}, 300);
						} else {
							$('.sidebar .menu').show('slide', {
								direction : 'up'
							}, 300);
						}
					});

					$('.option').hover(function() {
						$('.menu .point').removeClass('active');
						var id = $(this).attr('id');
						while (id.indexOf('menu') > 0) {
							id = id.replace('menu', 'point');
						}
						$('#' + id).addClass('active');
					}, function() {
						$('.menu .point').removeClass('active');
					});

					$('.homecontent .next').click(function() {
						$('.homecontent .pic').hide('slide', {
							direction : 'left'
						}, 300);
						if (index == 3)
							index = 0;
						index++;
						var id = '#pic' + index;
						window.setTimeout(function() {
							$('.homecontent ' + id).show('slide', {
								direction : 'right'
							}, 500);
							
							// set desc
							if (index == 1) { // brownies in jar
								$('.homecontent .desc h3').html("Try our best: Brownies in a jar!");
								$('.homecontent .desc p').html("You will be tempted of our taste variants!")
							}
							else if(index == 2){ //brownies
								$('.homecontent .desc h3').html("Can't get enough of our brownies!");
								$('.homecontent .desc p').html("Looks simple but yummy!")
							}
							else if(index == 3){ //lasagna
								$('.homecontent .desc h3').html("Fulfill yourself by our lasagna!");
								$('.homecontent .desc p').html("Who wouldn't enjoy this creamy & tasty bites?")
							}
						}, 300);

					});

					$('.homecontent .prev').click(function() {
						$('.homecontent .pic').hide('slide', {
							direction : 'left'
						}, 300);
						if (index == 1)
							index = 4;
						index--;
						var id = '#pic' + index;
						window.setTimeout(function() {
							$('.homecontent ' + id).show('slide', {
								direction : 'right'
							}, 500);
							
							// set desc
							if (index == 1) { // brownies in jar
								$('.homecontent .desc h3').html("Try our best: Brownies in a jar!");
								$('.homecontent .desc p').html("You will be tempted of our taste variants!")
							}
							else if(index == 2){ //brownies
								$('.homecontent .desc h3').html("Can't get enough of our brownies!");
								$('.homecontent .desc p').html("Looks simple but yummy!")
							}
							else if(index == 3){ //lasagna
								$('.homecontent .desc h3').html("Fulfill yourself by our lasagna!");
								$('.homecontent .desc p').html("Who wouldn't enjoy this creamy & tasty bites?")
							}
						}, 300);

					});

					window.setInterval(function() {
						$('.homecontent .pic').hide('slide', {
							direction : 'left'
						}, 300);
						if (index == 3)
							index = 0;
						index++;
						var id = '#pic' + index;
						window.setTimeout(function() {
							$('.homecontent ' + id).show('slide', {
								direction : 'right'
							}, 500);
							$('.homecontent .next').removeClass('hover');

							// set desc
							if (index == 1) { // brownies in jar
								$('.homecontent .desc h3').html("Try our best: Brownies in a jar!");
								$('.homecontent .desc p').html("You will be tempted of our taste variants!")
							}
							else if(index == 2){ //brownies
								$('.homecontent .desc h3').html("Can't get enough of our brownies!");
								$('.homecontent .desc p').html("Looks simple but yummy!")
							}
							else if(index == 3){ //lasagna
								$('.homecontent .desc h3').html("Fulfill yourself by our lasagna!");
								$('.homecontent .desc p').html("Who wouldn't enjoy this creamy & tasty bites?")
							}
						}, 300);
						$('.homecontent .next').removeClass('hover');
						$('.homecontent .next').addClass('hover');
					}, 3000);

					$('.sidebar .menu .option').click(function() {
						var id = $(this).attr('id');
						id = id.replace('menu', '');
						if (id == 'home') {
							$('html,body').animate({
								scrollTop : 0
							}, {
								duration : 500
							});
						} else {
							var generator = '#' + id;
							$('html,body').animate({
								scrollTop : $(generator).offset().top
							}, {
								duration : 500
							});
						}
					});

					if ($(window).width() > 768) {
						$(document)
								.scroll(
										function() {
											var scrolltop = Number($(window)
													.scrollTop()) - 5;
											$('.row .sidebar').css('top',
													scrolltop);

											// animate

											// remove current active menu
											$('.sidebar .menu .option').css(
													'background-color', '');
											$('.sidebar .menu .point')
													.removeClass('active');

											if ($('#home').offset().top
													- $(window).scrollTop() <= 100
													&& $('#home').offset().top
															- $(window)
																	.scrollTop() >= -550) {
												$('.homecontent').show('scale',
														{
															direction : 'left'
														}, 500);
												$('.sidebar .menu #homemenu')
														.css(
																'background-color',
																'#FF92A8');
												$('.sidebar .menu #homemenu')
														.css('padding-left',
																'0px');
												$('.sidebar .menu #homepoint')
														.addClass('active');
											} else {
												$('.homecontent').hide('scale',
														{
															direction : 'left'
														}, 500);
											}

											if ($('#products').offset().top
													- $(window).scrollTop() <= 100
													&& $('#products').offset().top
															- $(window)
																	.scrollTop() >= -650) {
												$('.aboutcontent').show(
														'slide', {
															direction : 'left'
														}, 500);

												$(
														'.sidebar .menu #productsmenu')
														.css(
																'background-color',
																'#FF92A8');
												$(
														'.sidebar .menu #productsmenu')
														.css('padding-left',
																'0px');
												$(
														'.sidebar .menu #productspoint')
														.addClass('active');
											} else {
												$('.aboutcontent').hide(
														'slide', {
															direction : 'left'
														}, 500);
											}

											if ($('#about').offset().top
													- $(window).scrollTop() <= 300
													&& $('#about').offset().top
															- $(window)
																	.scrollTop() >= -400) {
												$('.aboutsub').show('slide', {
													direction : 'left'
												}, 500);
												$('.aboutpic').show('scale', {
													direction : 'right'
												}, 500);
												$('.aboutsub2').show('slide', {
													direction : 'right'
												}, 500);

												$('.sidebar .menu #aboutmenu')
														.css(
																'background-color',
																'#FF92A8');
												$('.sidebar .menu #aboutmenu')
														.css('padding-left',
																'0px');
												$('.sidebar .menu #aboutpoint')
														.addClass('active');
											} else {
												$('.aboutsub').hide('slide', {
													direction : 'left'
												}, 500);
												$('.aboutpic').hide('scale', {
													direction : 'right'
												}, 500);
												$('.aboutsub2').hide('slide', {
													direction : 'right'
												}, 500);
											}

											if ($('#contact').offset().top
													- $(window).scrollTop() <= 250
													&& $('#about').offset().top
															- $(window)
																	.scrollTop() >= -700) {
												$('.contactcontent .content')
														.show('slide', {
															direction : 'left'
														}, 200);
												$('.contactcontent .pic').show(
														'slide', {
															direction : 'right'
														}, 100);

												$('.sidebar .menu #contactmenu')
														.css(
																'background-color',
																'#FF92A8');
												$('.sidebar .menu #contactmenu')
														.css('padding-left',
																'0px');
												$(
														'.sidebar .menu #contactpoint')
														.addClass('active');
											} else {
												$('.contactcontent .content')
														.hide('slide', {
															direction : 'left'
														}, 200);
												$('.contactcontent .pic').hide(
														'slide', {
															direction : 'right'
														}, 100);
											}

										});
					}

					$('.homecontent .prev, .homecontent .next').hover(
							function() {
								$('.homecontent .prev, .homecontent .next')
										.removeClass('hover');
								$(this).addClass('hover');
							},
							function() {
								$('.homecontent .prev, .homecontent .next')
										.removeClass('hover');
							});
				});

// after load finished
$(window).on('load', function() {
	$('.homecontent').show('scale', {
		direction : 'left'
	}, 500);
});

//functions
function sendEmail() {
	var xmlhr = new XMLHttpRequest();
	xmlhr.open('POST', url + '/functions/sendEmail.php', true);
	xmlhr.onload = function(e) {
		if (xmlhr.readyState == 4) {
			if (xmlhr.status == 200) {
				if (xmlhr.responseText == '1') {
					$('#name').val('');
					$('#email').val('');
					$('#message').val('');
					$('.success').show('slide', {
						direction : 'up'
					}, 500);
				}
			}
		}
	};
	var data = new FormData();
	data.append('jsondata', '{ "name" : "' + $('#name').val() + '", "email": "'
			+ $('#email').val() + '", "content": "' + $('#message').val()
			+ '"}');
	xmlhr.send(data);
}