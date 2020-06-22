console.log("=== regex ===");

/*

CEP: 08030-190
^[0-9]{5}\-[0-9]{3}$
CEP: 08030190
CEP: 08030-190
^[0-9]{5}\-?[0-9]{3}$

^\d{5}\-?\d{3}$
*/

/*
EMAIL: ze@globo.com.br
^[a-zA-Z]{1,}\@(\w+\.){2}\w{2}$

EMAIL: jose_luiz@globo.com.br
^(\w|\-|\.)+\@\w+\.\w{3}(\.\w{2})?$
*/

/*
TELEFONE: +55 (11) 98555-6666
^(\+55\s\([1-9]{2}\)\s)?9?\d{4}\-?\d{4}$
^\+55\s\([1-9]{2}\)\s9?\d{4}\-?\d{4}$
*/

var cepUsuario = prompt("Digite o CEP:");

console.log(
	/^\d{5}\-?\d{3}$/.test(cepUsuario), cepUsuario
	);

console.log(
	/^\d{5}\-?\d{3}$/.exec(cepUsuario), cepUsuario
	);

console.log(
	cepUsuario.match(/^\d{5}\-?\d{3}$/), cepUsuario
	);

/* LIMPA HTML 
<i>080<b>30</i>-190</b>
*/

console.log(
	cepUsuario.replace(/\<\/?\w+\>/g,""), cepUsuario
	);