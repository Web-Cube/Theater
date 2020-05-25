var map = {

	init: (e) => {

		var map_load = false;
		
		function map_create() {
			map_load = true
			$.getScript( 'https://api-maps.yandex.ru/2.1/?lang=ru_RU', function( data, textStatus, jqxhr ) {
				ymaps.ready(function () {
					$('.map').each(function() {
						let len = Number($(this).data('len')), lng = Number($(this).data('lng')), thisID = $(this).attr('id');
						var myMap = new ymaps.Map(thisID, {
							// 
							center: [len, lng],
							zoom: 18,
							controls: []
						}, {
							searchControlProvider: 'yandex#search'
						}),

						myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						}, {
							iconLayout: 'default#image',
							iconImageHref: '/app/img/marker.svg',
							iconImageSize: [69, 73],
							iconImageOffset: [-35, -36]
						});

						myMap.geoObjects.add(myPlacemark);
						myMap.behaviors.disable('scrollZoom');
						myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullsxreenControl').remove('rullerControl');

						myMap.controls.add('zoomControl', {
							float: 'none',
							position: {
								right: 10,
								top: 50
							}
						});

						$('.modals_map').removeClass('js-map-loading')

						myMap.container.fitToViewport();				
					})			

				});
			});  
		}
		
		map_create();

	}

};


export { map };