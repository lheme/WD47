console.log("=== objetos2 ===");

//sintaxe literal

var car = {
	ano: [2014,2015]
	,cor: "prata"
	,modelo: {motor: 2.0, projeto:"Tucson"}
	,fabricante: "Hiunday"
	,ligar: function() {
		return "O " + this.modelo.projeto + " está ligado";
	}
	,desligar: function() {
		return "O " + this.modelo.projeto + " está desligado";
	}
};

//teste
/*console.log(carro);
console.log(carro.ligar());
console.log(carro.desligar());
console.log(carro.ano);*/