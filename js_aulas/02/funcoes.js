console.log("=== funcoes ===");

//FUNCOES NOMEADAS

//declaracao de funcao 
function saudacao() {
 	
 	return ["tudo","bem","com","vc"].join(" "); 
}
//testando a funcao
console.log(saudacao());

//declaracao de funcao
function mensagem(nome) {
	return "Hola " + (nome || "");
}
// testando a funcao
console.log(mensagem());
console.log(mensagem("Maria"));


/*
function soma(x,y,z) {
	return x+y+z;
}*/


function soma() {
	total = 0;

	for(var x = 0; x < arguments.length; x++) {
		//console.log(x,arguments[x]);
		total += arguments[x];
	}

	return total;
}

//testando
console.log(soma());
console.log(soma(2,5));
console.log(soma(2,5,3));

//EXPRESSAO DE FUNCAO - FUNCAO ANONIMA

var setName = function() {
	return arguments[0] + " " + arguments[1];
}

//teste de funcao anonima
console.log(setName);
console.log(setName("Luiz","Leme"));