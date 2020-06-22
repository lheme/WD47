console.log("=== soma ===");

function obterNumeroDaString(frase) {
	var padrao = /[0-9]+/g;
	return frase.match(padrao);
}

function converterStringEmNumber(numero) {
	return parseInt(numero);
}

function soma(frase) {
	var numeros = obterNumeroDaString(frase);

	var soma = 0;

	for (var i = 0; i < numeros.length; i++) {
		soma += converterStringEmNumber(numeros[i]);
	}

	return soma;
}