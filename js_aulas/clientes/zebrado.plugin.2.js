(function($){
	console.dir($.fn);
	$.fn.zebrado = function(userConfig){
		var base = {
			corBgPar:"blue"
			,corFgPar:"white"
			,corBgImpar:"yellow"
			,corFgImpar:"black"
		};

		$.extend(base,userConfig);

		$(this)
			.find("tbody tr:odd")
				.css({
					background:base.corBgPar
					,color:base.corFgPar
				})
			.end()
			.find("tbody tr:even")
				.css({
					background:base.corBgImpar
					,color:base.corFgImpar
				});
	};
})(jQuery);