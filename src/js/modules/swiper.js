import Swiper from 'swiper';

var swiper = {

	init: (e) => {
		
		let total = $('.swiper-slide').length - 2;

		var mainSlider = new Swiper(".main-slider", {
			loop: true,
			slidesPerView: 1,
			keyboardControl: true,
			autoplay: {
    			delay: 5000,
  			},
			navigation: {
				nextEl: ".swiper-next",
				prevEl: ".swiper-prev",
			},
			pagination: {
				type: "fraction",
				renderFraction: function (currentClass, totalClass) {
					let total = $('.swiper-slide').length - 2;
					return '<span class="' + currentClass + '"></span>' +
						'<span class="swiper-time"><span class="swiper-time__loader" style="width:' + 1/total*100 + '%;"></span></span>' +
						'<span class="' + totalClass + '"></span>';
				},
				el: ".swiper-pagination"
			},
			on: {
				init: function () {
					let total = $('.swiper-slide').length - 2;
					let width = 1/total*100;
					$('.swiper-time__loader').css('width', '33' );
				},
			},
		});
		
		mainSlider.on('slideChange', function () {
			let index = this.activeIndex;
			let total = $('.main-slider').find('.swiper-pagination-total').html();
			let width = index/total*100;
			
			if ( index > total ) {
				$('.swiper-time__loader').css('width',1/total*100+'%');
			} else {
				$('.swiper-time__loader').css('width',width+'%');
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

	}

};


export { swiper };