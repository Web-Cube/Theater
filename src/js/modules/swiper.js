import Swiper from 'swiper';

var swiper = {

	init: (e) => {
		
		$(".js-slider").each(function(){
			
			let total = $('.swiper-slide').length - 2;
			let slides = $(".js-slider").attr('data-slidesPerView');
			let center = $(".js-slider").attr('data-centeredSlides');

			var mainSlider = new Swiper($(this), {
				loop: true,
				slidesPerView: slides,
				keyboardControl: true,
				centeredSlides: center,
				navigation: {
					nextEl: ".swiper-next",
					prevEl: ".swiper-prev",
				},
				pagination: {
					type: "fraction",
					renderFraction: function (currentClass, totalClass) {
						return '<span class="' + currentClass + '"></span>' +
							'<span class="swiper-time"><span class="swiper-time__loader" style="width:' + 1/total*100 + '%;"></span></span>' +
							'<span class="' + totalClass + '"></span>';
					},
					el: ".swiper-pagination"
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					769: {
						slidesPerView: slides,
					}
				}
			});

			mainSlider.on('slideChange', function () {

				$(".js-slider").each(function(){
					let index = $(this).find('.swiper-slide-active').attr('data-swiper-slide-index')*1;
					index = index+2;
					let total = $(this).find('.swiper-pagination-total').html();
					let width = index/total*100;

					if ( index > total ) {
						$(this).find('.swiper-time__loader').css('width',1/total*100+'%');
					} else {
						$(this).find('.swiper-time__loader').css('width',width+'%');
					}
				})

			});
			
		});
		
		var galleryYears = new Swiper($('.gallery__years'), {
			loop: false,
			slidesPerView: 10,
			keyboardControl: true,
			freeMode: true,
			navigation: {
				nextEl: ".swiper-next",
				prevEl: ".swiper-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 3,
				},
				479: {
					slidesPerView: 5,
				},
				769: {
					slidesPerView: 10,
				}
			}
		});
		
		
		var sliderNews = new Swiper('.news__slider', {
			loop: false,
			slidesPerView: 4,
			slidesPerColumn: 2,
			slidesPerColumnFill: 'row',
			slidesPerGroup: 8,
			navigation: {
				nextEl: ".nav-slider__arrow_next",
				prevEl: ".nav-slider__arrow_prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					slidesPerColumn: 1,
					slidesPerGroup: 1,
				},
				580: {
					slidesPerView: 2,
					slidesPerGroup: 4,
				},
				769: {
					slidesPerView: 3,
					slidesPerGroup: 6,
				},
				1280: {
					slidesPerView: 4,
					slidesPerGroup: 8,
				},
			},
		});
		
		var sliderNews = new Swiper('.js-slider-groups', {
			loop: true,
			slidesPerView: 2,
			navigation: {
				nextEl: ".nav-slider__arrow_next",
				prevEl: ".nav-slider__arrow_prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				769: {
					slidesPerView: 2
				}
			},
		});

	}

};


export { swiper };