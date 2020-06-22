console.log("=== repeticao ===");
//while
var alfabeto = [],
	contador = 97;

while(contador <= 122) {
	alfabeto.push(String.fromCharCode(contador)); //adiciona no final
	//lfabeto.unshift(String.fromCharCode(contador));//adiciona na frente
	contador++;
}

console.dir(alfabeto);

//mostra na console o alfabeto
for(var i = 0; i <= alfabeto.length; i++) {
	console.log(i, alfabeto[i]);
}