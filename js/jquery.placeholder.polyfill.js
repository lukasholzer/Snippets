/**
 *	Placeholder Polyfill
 *  @author Stefan
 * 	@requires jQuery
 */


(function($) {
	if(!('placeholder' in $('<input>')[0])) {
		$('[placeholder]').each(function() {
			var that = $(this);
			that.val(that.attr('placeholder'));
		});
		
		$('[placeholder]').on('focus', function() {
			var that = $(this);
			if(that.val() === that.attr('placeholder')) {
				that.val('');
			}
		});

		$('[placeholder]').on('blur', function() {
			var that = $(this);
			if(that.val() === '') {
				that.val(that.attr('placeholder'));
			}
		});
	}
})(jQuery);