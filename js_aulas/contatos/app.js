(function() {
	var box = {};
	//ui
	box.email =  document.querySelector("#email");
	box.add =  document.querySelector(".add");
	box.list = document.querySelector("ul");
	//actions
	box.validate = function(event) {
		event.preventDefault();
		//console.log(box.email.value);
		if (/^(\w|\-|\_|\.)+\@\w+\.\w{3}(\.\w{2})?$/.test(box.email.value)) {
			console.log("valido");
			box.email.className = "";
			box.save(box.email.value);
			box.email.value = "";
		} else {
			console.log("invalido");
			box.email.className = "error";
			box.email.focus();
		}
	};
	box.save = function(email) {
		if (window.localStorage) {
			var lista;
			if (window.localStorage.getItem("contatos")) {
				lista = JSON.parse(window.localStorage.getItem("contatos"));
			} else {
				lista = [];
			}
			lista.push({mail:email});
			window.localStorage.setItem("contatos",JSON.stringify(lista));
			box.updateScreen();
		}
	};
	box.updateScreen = function() {
		if (window.localStorage) {
			if (window.localStorage.getItem("contatos")){
				var html = [];
				var lista = JSON.parse(window.localStorage.getItem("contatos"));
				for (var x=0; x < lista.length; x++) {
					html.push("<li>" + lista[x].mail + "</li>");					
				}
				box.list.innerHTML = html.join("");
			}
		}
	};
	box.init = function() {
		console.log("initialize app...");
		var eType = (typeof document.addEventListener=="function") ? "addEventListener" : "attachEvent";
		box.add[eType]("click",box.validate);
		box.updateScreen();
	}();
}());