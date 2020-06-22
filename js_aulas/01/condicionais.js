console.log("=== condicionais ===");
//var n = prompt("Digite um número:");
var n = 2;
if(n%2==0){
	console.log(n,"é par");
} else {
	console.log(n,"é impar");
}
//ternario
console.log(n,
	(n%2==0) ? "é par" : "é impar"
	);
//switch/case
//var diaDaSemana = prompt("Digite o dia");
var diaDaSemana = 1;
switch(diaDaSemana) {
	case "1":
		console.log("Domingo");
	 	break;
	case "2":
		console.log("Segunda-feira");
		break;
	case "3":
		console.log("Terça-feira");
		break;
	case "4":
		console.log("Quarta-feira");
		break;
	case "5":
	 	console.log("Quinta-feira");
	 	break;
	case "6":
		console.log("Sexta-feira");
		break;
	case "7":
		console.log("Sábado");
	default: 
		console.log("Dia inválido");
		break;
}
