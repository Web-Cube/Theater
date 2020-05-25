var defaults = {
	
	burger: () => {
		
		$('.header__burger').click(function(){
			$('.js-mobile-menu').fadeIn(300);
		});
		
		$('.header-mobile__close').click(function(){
			$(this).closest('.header-mobile').fadeOut(300);
		});
		
		if ( $(window).innerWidth() < 769 ) {
			$('.header__search-btn').click(function(){
				$('.js-mobile-search').fadeIn(300);
			});
		}
		
	},
	
	dropdownMenu: () => {
		
		function dropdownMenu() {
			
			$('.footer__menu-item').click(function(){
				
				if ( $(this).hasClass('is-active') ) {
					$(this).removeClass('is-active');
					$(this).find('.footer__sub-menu').slideUp('300');
				} else {
					$('.footer__menu-item.is-active').removeClass('is-active');
					$('.footer__sub-menu:visible').slideUp('300');
					$(this).addClass('is-active');
					$(this).find('.footer__sub-menu').slideDown('300');
				}
				
			});
			
		}
		
		if ( $(window).innerWidth() < 580 ) {
			dropdownMenu();
		}
		
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

	init: () => {

		defaults.burger();
		defaults.dropdownMenu();
		defaults.quantityProducts();
		defaults.attachFile();

	}
}

export { defaults }