var search = {
	
	search: () => {
		
	},
	
	delete: () => {
		
		$(".search-page__form-input").val('');
		
	},

	init: () => {

		$(document).on('click', '.search-page__form-delete', search.delete);

	}
}

export { search }