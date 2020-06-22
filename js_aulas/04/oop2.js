console.log("=== oop2 ===");

function Conta(titular,saldo)  {
	this.titular = titular || "";
	this.saldo = saldo || 0;
}

Conta.prototype.deposita = function(valor){
	this.saldo += valor;
}

Conta.prototype.saca = function(valor){
	this.saldo -= valor;
}






var jose,maria;

contaJose = new Conta("José Luiz",5000);
contaMaria = new Conta("Maria José",1000);
contaAntonio = new Conta("Antonio Fonseca");
contaAntonio.deposita(20000);
contaAntonio.deposita(100);
contaAntonio.saca(5000);
contaMaria.deposita(3000);
contaMaria.saca(500);


console.log(contaJose);
console.log(contaMaria);
console.log(contaAntonio);



String.prototype.bold = function() {
	return "<strong>" + this + "</strong>";
}

console.log("Caelum".bold());


String.prototype.stripTags = function() {
	return this.replace(/\<\/?\w+\>/g,"");
}

console.log("Um texto <b>qualquer</b> de <i> exemplo </i>".stripTags());
