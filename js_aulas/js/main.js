console.log("=== main ===");

var numero = 9.9;
var formatado = numero.toFixed(2);
formatado = "R$ " + formatado;
formatado = formatado.replace(".",",");
console.log(formatado);

var texto = "R$ 120,35";
var compativelComParseFloat = texto.replace("R$", "");
compativelComParseFloat = compativelComParseFloat.replace(",",".");
var valor = parseFloat(compativelComParseFloat);
console.log(valor);

console.log(soma("Quanto é 10 mais 20?"));