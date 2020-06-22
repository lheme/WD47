console.log("=== objetos ===");

//sintaxe literal

var pessoa = {};

//proprieades

//sintaxe de ponto (dot notation)
//objeto.propriedade; => recupera um valor
//objeto.propriedade = "valor"; => define um valor

pessoa.altura = 1.87;
pessoa.peso = 98;

//sintaxe dos colchetes (bracket notation)
//objeto["propriedade"] => recupera um valor
//objeto["propriedade"] = "valor"; => define um valor

pessoa["sexo"] = "M";
pessoa["nome"] = "José";

//metodos

pessoa.falar = function() {
	return "Olá eu sou o " + pessoa.nome;
}

pessoa["andar"] = function(kmH) {
	return pessoa.nome + ((kmH > 7) ? " está correndo" : " está andando");
}

//teste 
console.log(pessoa);
console.log(pessoa.peso);
console.log(pessoa.falar());
console.log(pessoa["andar"](5));