$(function(){
	$.ajax({
		url:"http://www.mocky.io/v2/53a5e361483f31ee04b296e4"
		,dataType:"jsonp"
		,success:function(data){
			//console.log(data);
			var html = [];	
			$.each(data,function(key,cliente){
				//console.log(cliente);
				html.push("<tr>");
				html.push("<td>" + cliente.id + "</td>");
				html.push("<td>" + cliente.nome + "</td>");
				html.push("<td>" + cliente.email + "</td>");
				html.push("<td>" + cliente.telefone + "</td>");
				html.push("</tr>");
			});
			$(html.join("")).appendTo("tbody");
			//call do zebrado
			$("table").zebrado({corBgPar:"purple",corBgImpar:"cyan"});
		}
		,error:function(){
			console.log("erro");
		}
	});
});