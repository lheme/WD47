$(function(){
	var validateEntry = function(event){
		//console.log(event.keyCode);
		if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
			event.preventDefault();
		}
	};

	var getAddress = function(e){
		/*console.log(e.target,this);
		console.log(e.target.value,this.value);
		console.log($(this).val());*/
		var cep = $(this).val();
		$.ajax({
			url:"http://cep.correiocontrol.com.br/"+ cep +".json"
			,dataType:"json"
			,success:function(data){
				console.log(data);
				$.each(data,function(key,value){
					$("#"+key).val(value);
				});
			}
			,error:function(){
				$("input").not("#cep").each(function(){
					$(this).val("");
				});
				$("#cep").focus();
			}
		});
	};

	//adicionando os eventos
	$("#cep")
		.on("keypress",validateEntry)
		.on("blur",getAddress);
});