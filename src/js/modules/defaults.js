var defaults = {

	events: () => {
		
	},
	
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

	init: () => {

		defaults.events();
		defaults.burger();

	}
}

export { defaults }