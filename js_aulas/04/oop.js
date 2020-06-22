console.log("=== oop ===");

function Cliente(nome,dataNasc) {
	//propriedades
	this.nome = nome || "";
	this.dataNascimento = dataNasc || "";
	this.cpf = 0;

	//metodos
	this.setCpf = function(num) {
		this.cpf = num || 0;
	};

	this.getCpf = function() {
		return this.cpf;
	}
}

var alexandre = new Cliente("Alexandre Pires","08/05/1970");
alexandre.setCpf("789.456.123-0",alexandre.getCpf());
var mara = new Cliente("Mara Maravilha");
mara.setCpf("123.456.789-0");

console.log(alexandre);
console.log(mara,mara.getCpf());