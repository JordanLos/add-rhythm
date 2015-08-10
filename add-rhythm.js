(function ( $ ) {

	$.fn.addRhythm = function(baseline) {
		
		return this.each(function() {
			var el = $( this );

			$( window ).resize(function() {	
				el.css(
					'margin-bottom', 
					baseline - (el.height() % baseline)
				);
			});
		});
	};

}( jQuery ));
