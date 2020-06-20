var defaults = {
	
	burger: () => {
		
		$('.header__burger').click(function(){
			$('.js-mobile-menu').fadeIn(300);
		});
		
		$('.header-mobile__close').click(function(){
			$(this).closest('.header-mobile').fadeOut(300);
		});
		
		$('.header__search-btn').click(function(){
			if ( $(window).innerWidth() < 580 ) {
				$('.js-mobile-search').fadeIn(300);
			} else {
				$('.search-form').fadeIn(500);
				$('.header__search').addClass('is-active');
			}
		});
		
		$('.header__search-close').click(function(){
			if ( $(window).innerWidth() > 580 ) {
				$('.search-form').fadeOut(500);
				$('.header__search').removeClass('is-active');
			}
		});
		
	},
	
	dropdownMenu: () => {
		
		function dropdownMenu() {
			
			$('.js-toggle-item').click(function(){
				
				if ( $(this).hasClass('is-active') ) {
					$(this).removeClass('is-active');
					$(this).find('.js-toggle-content').slideUp('300');
				} else {
					$(this).closest('.js-toggle-container').find('.js-toggle-item.is-active').removeClass('is-active');
					$(this).closest('.js-toggle-container').find('.js-toggle-content:visible').slideUp('300');
					$(this).addClass('is-active');
					$(this).find('.js-toggle-content').slideDown('300');
				}
				
			});
			
		}
		
		if ( $(window).innerWidth() < 580 ) {
			dropdownMenu();
		}
		
		$(".case__artists-head").click(function(){
			$(this).closest('.case__artists').toggleClass('is-active');
			$(this).closest('.case__artists').find('.case__artists-inside').slideToggle(500);
		});
		
	},
	
	quantityProducts: () => {
		
			var $quantityArrowMinus = $(".form__quantity-arrow_minus");
			var $quantityArrowPlus = $(".form__quantity-arrow_plus");
			var $quantityNum = $(".js-quantity-num");

			$quantityArrowMinus.click(quantityMinus);
			$quantityArrowPlus.click(quantityPlus);

			function quantityMinus() {
			  if ($quantityNum.val() > 0) {
				$quantityNum.val(+$quantityNum.val() - 1);
			  }
			}

			function quantityPlus() {
			  $quantityNum.val(+$quantityNum.val() + 1);
			}
		
	},
	
	attachFile: () => {
		$('.attach-file__input').change(function(){
			$(this).closest('.attach-file').addClass('is-active');
		});
	},
	
	toggleSidebar: () => {
		
		$('.js-cat-item').click(function(){
			let text = $(this).text(),
				index = $(this).index();
			if ( $(this).hasClass('is-active') ) {
			} else {
				$('.js-cat-item.is-active').removeClass('is-active');
				$(this).addClass('is-active');
				$(this).closest('.js-mobile-select').find('.js-mobile-label').text(text);
				$('.js-cat-tab.is-active').removeClass('is-active');
				$('.js-cat-tab:eq(' + index + ')').addClass('is-active');
			}
		});
		
		if ( $(window).innerWidth() < 769 ) {
			
			$('.js-mobile-select').each(function(){
				$('.js-mobile-label').text( $('.js-mobile-item.is-active').text() );
			}).click(function(){
				$(this).toggleClass('is-active');
			})
			
		}
		
	},
	
	repertoireFilter: () => {
		
		$(".js-filter-item").click(function(){
			let name = $(this).data('filter');
			
			if ( name == 'all' ) {
				$('.js-filter-select').show(300);
			} else {
				$('.js-filter-select').not('.js-filter-select'+name).hide(300);
				$('.js-filter-select'+name).show(300);
			}
			
		});
		
	},
	
	slideLine: () => {
		
		$(".js-slide-line").each(function(){
			
			let strartWidth = $('.js-cat-item.is-active').innerWidth();
			
			$(this).css('width', strartWidth);
			
		});
		
		$('.js-cat-item').mouseover(function(){
			let positionLeft = $(this).position().left;
			let lineWidth = $(this).innerWidth();
			$(".js-slide-line").css({
				width: lineWidth,
				left: positionLeft
			})
		})
		
	},
	
	calendar: () => {
		$('.calendar').each(function(){
			$('.calendar__label').text( $('.calendar__item.is-active').text() );
		}).click(function(){
			$(this).toggleClass('is-active');
		});
		
		$('.calendar__item').click(function(){
			$('.calendar__item.is-active').removeClass('is-active');
			$(this).addClass("is-active");
			$('.calendar__label').text( $(this).text() );
		});
	},

	init: () => {

		defaults.burger();
		defaults.calendar();
		defaults.dropdownMenu();
		defaults.quantityProducts();
		defaults.attachFile();
		defaults.toggleSidebar();
		defaults.repertoireFilter();
		defaults.slideLine();
		
		$(window).resize(function(){
			defaults.slideLine();
		});
		
		
		$('.js-fixed').each(function(){
			$('.main-wrap').css('overflow','visible');
		});
		
		$('.js-nav-item').click(function(){
			let index = $(this).index();
			let container = $(this).closest('.js-container');
			if ( $(this).hasClass('is-active') ) {
			} else {
				container.find('.js-nav-item.is-active').removeClass('is-active');
				$(this).addClass('is-active');
				container.find('.js-tab.is-active').removeClass('is-active');
				container.find('.js-tab:eq(' + index + ')').addClass('is-active');
			}
		});
		
		if ( $(window).innerWidth() < 769 ) {
		
			$(".acting-groups__icon-btn").click(function(){
				$(".acting-groups__tooltip").toggleClass('is-active');
			});

			$(".acting-groups__tooltip-close").click(function(){
				$(".acting-groups__tooltip").removeClass('is-active');
			});
			
		};

	}
}

export { defaults }