(function($){
	console.dir($.fn);
	$.fn.zebrado = function(oddColor,evenColor){
		console.log($(this));
		$(this)
			.find("tbody tr:odd")
				.css("background",oddColor)
			//.closest("table") -- este tenho de informar o contexto
			.end()
			.find("tbody tr:even")
				.css("background",evenColor);
	};
})(jQuery);