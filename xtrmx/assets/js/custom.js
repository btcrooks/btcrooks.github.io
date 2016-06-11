/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	"use strict";
	
	// DETECT TOUCH DEVICE //
	function is_touch_device() {
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}
	
	
	// SHOW/HIDE MOBILE MENU //
	function show_hide_mobile_menu() {
		
		$("#mobile-menu-button").on("click", function(e) {
            
			e.preventDefault();
			
			$("#mobile-menu").slideToggle(300);
			
        });	
		
	}
	
	
	// MOBILE MENU //
	function mobile_menu() {
		
		if ($(window).width() < 992) {
			
			if ($("#menu").length > 0) {
			
				if ($("#mobile-menu").length < 1) {
					
					$("#menu").clone().attr({
						id: "mobile-menu",
						class: ""
					}).insertAfter("#header");
					
					$("#mobile-menu .megamenu > a").on("click", function(e) {
                        
						e.preventDefault();
						
						$(this).toggleClass("open").next("div").slideToggle(300);
						
                    });
					
					$("#mobile-menu .dropdown > a").on("click", function(e) {
                        
						e.preventDefault();
						
						$(this).toggleClass("open").next("ul").slideToggle(300);
						
                    });
				
				}
				
			}
				
		} else {
			
			$("#mobile-menu").hide();
			
		}
		
	}
	
	
	// HEADER SEARCH //
	function header_search() {	
		
		$(".search a").on("click", function(e) { 
	
			e.preventDefault();
			
			if(!$(".search a").hasClass("open")) {
			
				$("#search-form-container").addClass("open-search-form").fadeIn(300)
				
			} else {
				
				$("#search-form-container").removeClass("open-search-form").fadeOut(100);
			
			}
			
		});
		
		$("#search-form").after('<a class="search-form-close" href="#">x</a>');
		
		$("#search-form-container a.search-form-close").on("click", function(event){
			
			event.preventDefault();
			$("#search-form-container").removeClass("open-search-form").fadeOut(100);
			
		});
		
	}
	
	
	// STICKY //
	function sticky() {
		
		var sticky_point = $("#header").innerHeight() + 100;
		
		$("#header").clone().attr({
			id: "header-sticky",
			class: ""
		}).insertAfter("header");
		
		$(window).scroll(function(){
			
			if ($(window).scrollTop() > sticky_point) {  
				$("#header-sticky").slideDown(300).addClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "hidden"});
			} else {
				$("#header-sticky").slideUp(100).removeClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "visible"});
			}
			
		});
		
	}
	
 
	// PROGRESS BARS // 
	function progress_bars() {
		
		$(".progress .progress-bar:in-viewport").each(function() {
			
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).animate({
					width: $(this).attr("data-width") + "%"
				}, 2000);
			}
			
		});
		
	}


	// CHARTS //
	function pie_chart() {
		
		if (typeof $.fn.easyPieChart !== 'undefined') {
		
			$(".pie-chart:in-viewport").each(function() {
				
				$(this).easyPieChart({
					animate: 1500,
					lineCap: "square",
					lineWidth: $(this).attr("data-line-width"),
					size: $(this).attr("data-size"),
					barColor: $(this).attr("data-bar-color"),
					trackColor: $(this).attr("data-track-color"),
					scaleColor: "transparent",
					onStep: function(from, to, percent) {
						$(this.el).find(".pie-chart-percent .value").text(Math.round(percent));
					}
				});
				
			});
			
		}
		
	}
	
	// COUNTER //
	function counter() {
		
		if (typeof $.fn.jQuerySimpleCounter !== 'undefined') {
		
			$(".counter .counter-value:in-viewport").each(function() {
				
				if (!$(this).hasClass("animated")) {
					$(this).addClass("animated");
					$(this).jQuerySimpleCounter({
						start: 0,
						end: $(this).attr("data-value"),
						duration: 2000
					});	
				}
			
			});
			
		}
	}
	
	
	// STATISTICS //
	function statistics() {
		
		$(".statistics-container .animate-chart:in-viewport").each(function() {
			
			if(!$(this).hasClass("animated")) {
				
				$(this).addClass("animated");
				
				// LINE CHART //
				var data1 = {
					labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets : [
						{
							fill: "true",
							label: "Total",
							backgroundColor: "transparent",
							borderWidth: 1,
							borderColor: "#f85b38",
							pointBorderColor: "#f85b38",
							pointBackgroundColor: "#f85b38",
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "#f85b38",
							pointBorderWidth: 1,
							pointHoverBorderWidth: 1,
							tension: 0,
							stacked: false,
							data : [25, 100, 75, 125, 100, 175, 200, 300, 310, 380, 300, 350]
						}
					]
				}
				
				if ($("#chart-1").length > 0) {
					
					var chart_1 = new Chart(document.getElementById("chart-1").getContext("2d"), {
						type: 'line',
						data: data1,
						options: {
							responsive: true,
							legend: {
								display: false
							},
							tooltips: {
								enabled: true,
								xPadding: 15
							},
							scales: {
								xAxes: [{
									display: false
								}],
								yAxes: [{
									display: false
								}]
							}
						}
					});

				}
				
				
				
				// BAR CHART //
				var data2 = {
					labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets : [
						{
							label: "Total",
							backgroundColor: "rgba(248, 91, 56, 0.7)",
							borderColor: "#f85b38",
							borderWidth: 1,
							hoverBackgroundColor: "#f85b38",
							hoverBorderColor: "#f85b38",
							data : [25, 100, 75, 125, 100, 175, 200, 300, 310, 380, 300, 350]
						}
					]
				}
				
				if ($("#chart-2").length > 0) {
					
					var chart_2 = new Chart(document.getElementById("chart-2").getContext("2d"), {
						type: 'bar',
						data: data2,
						options: {
							responsive: true,
							legend: {
								display: false
							},
							tooltips: {
								enabled: true,
								xPadding: 15
							},
							scales: {
								xAxes: [{
									display: false
								}],
								yAxes: [{
									display: false
								}]
							}
						}
					});

				}
				
				
				// AREA CHART //
				var data3 = {
					labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets : [
						{
							fill: "true",
							label: "Total",
							backgroundColor: "rgba(248, 91, 56, 0.5)",
							borderWidth: 1,
							borderColor: "#f85b38",
							pointBorderColor: "#f85b38",
							pointBackgroundColor: "#f85b38",
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "#f85b38",
							pointBorderWidth: 1,
							pointHoverBorderWidth: 1,
							tension: 0,
							stacked: false,
							data : [25, 100, 75, 125, 100, 175, 200, 300, 310, 380, 300, 350]
						}
					]
				}
				
				if ($("#chart-3").length > 0) {
					
					var chart_3 = new Chart(document.getElementById("chart-3").getContext("2d"), {
						type: 'line',
						data: data3,
						options: {
							responsive: true,
							legend: {
								display: false
							},
							tooltips: {
								enabled: true,
								xPadding: 15
							},
							scales: {
								xAxes: [{
									display: false
								}],
								yAxes: [{
									display: false
								}]
							}
						}
					});

				}
				
				
				// PIE CHART //
				var data4 = {
					labels: [
						"Orange",
						"Black",
						"Grey"
					],
					datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
							"#f85b38",
							"#212121",
							"#d1d1d1"
						],
						hoverBackgroundColor: [
							"#f85b38",
							"#212121",
							"#d1d1d1"
						]
					}]
				};
				
				if ($("#chart-4").length > 0) {
					
					var chart_4 = new Chart(document.getElementById("chart-4").getContext("2d"), {
						type: 'pie',
						data: data4,
						options: {
							responsive: true,
							legend: {
								display: true
							},
							tooltips: {
								enabled: false
							},
							scales: {
								xAxes: [{
									display: false
								}],
								yAxes: [{
									display: false,
								}]
							}
						}
					});

				}
				
				
				// DOUGHNUT CHART //
				var data5 = {
					labels: [
						"Orange",
						"Black",
						"Grey"
					],
					datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
							"#f85b38",
							"#212121",
							"#d1d1d1"
						],
						hoverBackgroundColor: [
							"#f85b38",
							"#212121",
							"#d1d1d1"
						]
					}]
				};
				
				if ($("#chart-5").length > 0) {
					
					var chart_5 = new Chart(document.getElementById("chart-5").getContext("2d"), {
						type: 'doughnut',
						data: data5,
						options: {
							responsive: true,
							legend: {
								display: true
							},
							tooltips: {
								enabled: false
							},
							scales: {
								xAxes: [{
									display: false
								}],
								yAxes: [{
									display: false,
								}]
							}
						}
					});

				}
				
			}
			
		});
		
	}
	
	
	// LOAD MORE PROJECTS //
	function load_more_projects() {
	
		var number_clicks = 0;
		
		$(".load-more").on("click", function(e) {
			
			e.preventDefault();
			
			if (number_clicks == 0) {
				$.ajax({
					type: "POST",
					url: $(".load-more").attr("href"),
					dataType: "html",
					cache: false,
					msg : '',
					success: function(msg) {
						$(".isotope").append(msg);	
						$(".isotope").imagesLoaded(function() {
							$(".isotope").isotope("reloadItems").isotope();
							$(".fancybox").fancybox({
								prevEffect: 'none',
								nextEffect: 'none'
							});
						});
						number_clicks++;
						$(".load-more").html("Nothing to load");
					}
				});
			}
			
		});
		
	}
	
	
	// SHOW/HIDE SCROLL UP //
	function show_hide_scroll_top() {
		
		if ($(window).scrollTop() > $(window).height()/2) {
			$("#scroll-up").fadeIn(300);
		} else {
			$("#scroll-up").fadeOut(300);
		}
		
	}
	
	
	// SCROLL UP //
	function scroll_up() {				
		
		$("#scroll-up").on("click", function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
	}
	
	
	// INSTAGRAM FEED //
	function instagram_feed() {

		if ($("#instafeed").length > 0 ) {
				
			var nr = $("#instafeed").data('number');
			var userid = $("#instafeed").data('user');
			var accesstoken = $("#instafeed").data('accesstoken');
			
			var feed = new Instafeed({
				target: 'instafeed',
				get: 'user',
				userId: userid,
				accessToken: accesstoken,
				limit: nr,
				resolution: 'thumbnail',
				sortBy: 'most-recent'
			});
			
			feed.run();
		
		}
		
	}
	
	
	// TIMELINE //
	function timeline() {
		
		$(".timeline-title").on("click", function(e) {
			
			e.preventDefault();
			$(this).toggleClass("opened").next(".timeline-content").slideToggle(300);
			
		});
		
		$(".timeline li").each(function() {
			
			if ($(this).hasClass("active")) {
				$(this).find(".timeline-title").addClass("opened").next(".timeline-content").slideDown(300);
			}
			
		});
		
	}
	
	
	// SUBMIT RESUME //
	function submit_resume() {
		
		$(".submit-resume").css("height", $(".about-me-thumbnail").height() + "px");
		
		$(".submit-resume").on("click", function() {
			window.location = $(this).find("a").attr("href"); 
			return false;
		});
		
	}
	
	
	// EQUAL HEIGHT //
	function equal_height() {

		$(".text-boxes-list").each(function(){
			
			var x = 0;
			
			$(".text-boxes-list li").each(function() {
				
				if($(this).height() > x) {
					x = $(this).height();
				}
				
			});
			
			$(".text-boxes-list li .text-box").css("height", x + "px");

		});

	}
	
	
	// FULL SCREEN //
	function full_screen() {

		if ($(window).width() > 767) {
			$(".full-screen").css("height", $(window).height() + "px");
		} else {
			$(".full-screen").css("height", "auto");
		}

	}
	
	
	// ANIMATIONS //
	function animations() {
		
		animations = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 100,
			mobile: false,
			live: true
		});
		
		animations.init();
		
	}
	
	// DOCUMENT READY //
	$(document).ready(function(){
		
		// STICKY //
		sticky();
		
		
		// MENU //
		if (typeof $.fn.superfish !== 'undefined') {
			
			$(".menu").superfish({
				delay: 500,
				animation: {
					opacity: 'show',
					height: 'show'
				},
				speed: 'fast',
				autoArrows: true
			});
			
		}
		
		
		// SHOW/HIDE MOBILE MENU //
		show_hide_mobile_menu();
		
		
		// MOBILE MENU //
		mobile_menu();
		
		
		// HEADER SEARCH //
		header_search();
		
		
		// FANCYBOX //
		if (typeof $.fn.fancybox !== 'undefined') {
		
			$(".fancybox").fancybox({
				prevEffect: 'none',
				nextEffect: 'none'
			});
		
		}
		
		// REVOLUTION SLIDER //
		if (typeof $.fn.revolution !== 'undefined') {
			
			$(".rev_slider").revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 9000,
				navigation: {
					arrows:{
						style: "custom",
						enable: true,
						hide_onmobile: true,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 20,
							v_offset: 0
						 },
						 right: {
							h_align: "right",
							v_align: "center",
							h_offset: 20,
							v_offset: 0
						 }
					},
					bullets:{
						style: "custom",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '', 
						direction: "horizontal",
						space: 15,       
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 40
					},
					touch:{
						touchenabled: "on",
						swipe_treshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: false,
						swipe_direction: "horizontal"
					}
				},			
				gridwidth: 1170,
				gridheight: 910		
			});
			
		}
	
	
		// OWL Carousel //
		if (typeof $.fn.owlCarousel !== 'undefined') {
			
			// PORTFOLIOS SLIDER //
			var total = $(".portfolios-slider .item").length;
			var current = 1;
			
			$(".portfolios-slider-navigation .prev").after('<span class="current">' + current + '</span> / ' + total);
				
			var portfolios_slider = $(".owl-carousel.portfolios-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				nav: false,
				smartSpeed: 1200,
				navText: false,
				dots: false,
				stagePadding: 100, 
				margin: 10,
				mouseDrag: true,
				touchDrag: true,
				responsive: {
					0:{
						stagePadding: 50, 
					},
					768:{
						stagePadding: 100, 
					},
					1400:{
						stagePadding: 380, 
					}
				}
			});
			
			portfolios_slider.on('changed.owl.carousel', function(event) {
				
				current = event.item.index - 1;
				
				if (current < 1) {
					current = total - current;
				}
				
				if (current > 4) {
					current = 1;
				}
				
				$(".portfolios-slider-navigation .current").html(current);
				
			});
			
			
			$(".portfolios-slider-navigation .prev").on("click", function() {
				
				portfolios_slider.trigger('prev.owl.carousel');
				
				current--;
				
				if (current < 1) {
					current = total - current;
				}
				
				$(".portfolios-slider-navigation .current").html(current);
				
			});
			
			$(".portfolios-slider-navigation .next").on("click", function() {
				
				portfolios_slider.trigger('next.owl.carousel');
				
				current++;
				
				if (current > total) {
					current = 1;
				}
				
				$(".portfolios-slider-navigation .current").html(current);
				
			});
			
			
			// IMAGES SLIDER //
			var total_slides = $(".images-slider .item").length,
				current_slide = 1;
				
			var images_slider = $(".owl-carousel.images-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut'
			});
				
			$(".images-slider").append('<span class="current-slide"> 0' + current_slide + '</span>');
			
			images_slider.on('changed.owl.carousel', function(event) {
				
				current_slide = event.item.index - 1;
				
				if (current_slide > total_slides) {
					current_slide = 1;
				}
				
				$(".current-slide").html('0' + current_slide);
				
			});
			
			
			// IMAGES SLIDER 2 //
			$(".owl-carousel.images-slider-2").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true
			});
			
			
			// TESTIMONIALS SLIDER //
			$(".owl-carousel.testimonials-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true
			});
			
			
			// TESTIMONIALS SLIDER 2 //
			$(".owl-carousel.testimonials-slider-2").owlCarousel({
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 500,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true,
				margin: 30,
				responsive: {
					0:{
						items: 1
					},
					768:{
						items: 2
					},
					992:{
						items: 3
					}
				}
			});
			
			
			// LOGOS SLIDER //
			$(".owl-carousel.logos-slider").owlCarousel({
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: true,
				navText: false,
				dots: false,
				mouseDrag: true,
				touchDrag: true,
				responsive: {
					0:{
						items: 1
					},
					480:{
						items: 2
					},
					768:{
						items: 3
					},
					992:{
						items: 4
					},
					1200:{
						items: 5
					}
				}
			});
		
		}
		
		
		// GOOGLE MAPS //
		if (typeof $.fn.gmap3 !== 'undefined') {
		
			$(".map").each(function() {
				
				var data_zoom = 15,
					data_height,
					data_popup = false;
				
				if ($(this).attr("data-zoom") !== undefined) {
					data_zoom = parseInt($(this).attr("data-zoom"),10);
				}	
				
				if ($(this).attr("data-height") !== undefined) {
					data_height = parseInt($(this).attr("data-height"),10);
				}
				
				if ($(this).attr("data-address-details") !== undefined) {
					
					data_popup = true;
					
					var infowindow = new google.maps.InfoWindow({
						content: $(this).attr("data-address-details")
					});
					
				}
				
				
				$(this)
				.gmap3({
					address: $(this).attr("data-address"),
					zoom: data_zoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					scrollwheel: false
				})
				.marker([
					{address: $(this).attr("data-address")}
				])
				.on({
					click: function(marker, event){
						if (data_popup) {
							infowindow.open(marker.get('map'), marker);
						}
					}
				});
				  
				$(this).css("height", data_height + "px");
				
			});
			
		}
		
		
		// ISOTOPE //
		if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {
		
			$(".isotope").imagesLoaded( function() {
				
				var container = $(".isotope");
				
				container.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.8s'
				});
				
				$(".filter li a").on("click", function() {
					$(".filter li a").removeClass("active");
					$(this).addClass("active");
		
					var selector = $(this).attr("data-filter");
					container.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function() {
					container.isotope();
				});
				
			});
			
		}
		
		
		// LOAD MORE PORTFOLIO ITEMS //
		load_more_projects();
		
		
		// PLACEHOLDER //
		if (typeof $.fn.placeholder !== 'undefined') {
			
			$("input, textarea").placeholder();
			
		}
		
		
		// CONTACT FORM VALIDATE & SUBMIT //
		// VALIDATE //
		if (typeof $.fn.validate !== 'undefined') {
		
			$("#contact-form").validate({
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 3
					}
				},
				messages: {
					name: {
						required: "Please enter your name!"
					},
					email: {
						required: "Please enter your email!",
						email: "Please enter a valid email address"
					},
					subject: {
						required: "Please enter the subject!"
					},
					message: {
						required: "Please enter your message!"
					}
				},
					
				// SUBMIT //
				submitHandler: function(form) {
					var result;
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "assets/php/send.php",
						success: function(msg) {
							
							if (msg == 'OK') {
								result = '<div class="alert alert-success">Your message was successfully sent!</div>';
								$("#contact-form").clearForm();
							} else {
								result = msg;
							}
							
							$("#alert-area").html(result);
		
						},
						error: function() {
		
							result = '<div class="alert alert-danger">There was an error sending the message!</div>';
							$("#alert-area").html(result);
		
						}
					});
				}
			});
			
		}
		
		
		// PARALLAX //
		if (typeof $.fn.stellar !== 'undefined') {
		
			if (!is_touch_device()) {
				
				$(window).stellar({
					horizontalScrolling: false,
					verticalScrolling: true,
					responsive: true,
					verticalOffset: 50
				});
				
			}
		
		}
		
		
		// SHOW/HIDE SCROLL UP
		show_hide_scroll_top();
		
		
		// SCROLL UP //
		scroll_up();
		
		
		// PROGRESS BARS //
		progress_bars();
		
		
		// PIE CHARTS //
		pie_chart();
		
		
		// COUNTER //
		counter();
		
		
		// STATISTICS //
		statistics();
		
		
		// YOUTUBE PLAYER //
		if (typeof $.fn.mb_YTPlayer !== 'undefined') {
			
			$(".youtube-player").mb_YTPlayer();
		
		}
		
		
		// INSTAGRAM FEED //
		instagram_feed();
		
		
		// TWITTER //
		if(typeof twitterFetcher !== 'undefined' && ($('.widget-twitter').length > 0)) {
			
			$('.widget-twitter').each(function(index){
			
				var account_id = $('.tweets-list', this).attr('data-account-id'),
					items = $('.tweets-list', this).attr('data-items'),
					newID = 'tweets-list-' + index;
				
				$('.tweets-list', this).attr('id', newID);
				
				var config = {
				  "id": account_id,
				  "domId": newID,
				  "maxTweets": items,
				  "showRetweet": false,
				  "showTime": false,
				  "showUser": false,
				  "showInteraction": false
				};
				
				twitterFetcher.fetch(config);
			});
			
		}
		
		
		// COUNTDOWN //
		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".countdown").countdown('2017/12/31 00:00', function(event) {
				$(this).html(event.strftime(
					'<div><div class="count">%-D</div> <span>Days</span></div>' +
					'<div><div class="count">%-H</div> <span>Hours</span></div>' +
					'<div><div class="count">%-M</div> <span>Minutes</span></div>' +
					'<div><div class="count">%S</div> <span>Seconds</span></div>'
				));
			});
		
		}
		
		
		// TIMELINE //
		timeline();
		
		
		// SUBMIT RESUME //
		submit_resume();
		
		
		// EQUAL HEIGHT //
		equal_height();
		
		
		// FULL SCREEN //
		full_screen();
		
		
		// ANIMATIONS //
		animations();
		
	});

	
	// WINDOW SCROLL //
	$(window).scroll(function() {
		
		progress_bars();
		pie_chart();
		counter();
		statistics();
		show_hide_scroll_top();
		
	});
	
	
	// WINDOW RESIZE //
	$(window).resize(function() {

		mobile_menu();
		submit_resume();
		equal_height();
		full_screen();
		
	});
	
})(window.jQuery);