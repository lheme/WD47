console.log("=== primeiros-passos ===");
//wrapper jQuery
jQuery(document).ready(function(){
	console.log($("h1").text());
	$("h1").text("Novos rumos");
	$("h1").addClass("borda");
	//criando elementos
	$("<h2>").text("Criado agora").appendTo("body");
	$("<img>").attr("src","http://www.lorempixel.com/100/100").appendTo(".alvo");
	$("<p>").text("Eitcha!").addClass("borda").appendTo("#destino");
});


//wrapper jQuery - 2nd version
/*
jQuery(function(){}); -- é o mesmo que jQuery(document).ready(function(){});
$(function(){}); -- é a mesma coisa que jQuery(function(){});
*/
$(function(){
	//eventos - shortcut -> O evento direto
	$("h1").click(function(){
		$("h1").removeClass("borda"); // poderia ser $(this).removeClass("borda");
	});
	//eventos - on -> Para adicionar um evento do elemento
	$("img").on("click",function(){
		$(this).hide();
	});
});
