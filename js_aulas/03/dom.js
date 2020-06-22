console.log("=== dom ===");
var p = document.createElement("p");
var text = document.createTextNode("criado com js");
p.appendChild(text);
document.body.appendChild(p);

//criando h2 <h2></h2>

var h2 = document.createElement("h2");
h2.textContent = "Trabalhando com DOM";
console.log(h2);
document.body.appendChild(h2);

//criando imagem <img>

var img = document.createElement("img");
img.setAttribute("src","http://www.lorempixel.com/300/200");
document.body.appendChild(img);

var foto = document.createElement("img");
foto.src = "http://www.lorempixel.com/50/50/people/3";
document.body.appendChild(foto);

//criando lista <ol></ol>

var ol = document.createElement("ol");
var lista = ["a", "e", "i", "o", "u"];
for (var x = 0; x < lista.length; x++) {
	console.log(lista[x]);
	var li = document.createElement("li");//<li></li>
	li.textContent = lista[x];
	ol.appendChild(li);
}
console.log(ol);
//document.body.appendChild(ol);

//adicionando logo apos o <p/>
var ref = document.querySelector("h2")
var pai = ref.parentNode;
//console.log(pai);
pai.insertBefore(ol,ref);

//navegando pelo DOM
console.log(
	//document.querySelector("script").parentNode.nextSibling.nextSibling
	/*document.querySelector("script").parentNode.nextElementSibling.children[3].firstChild
	.nextSibling.previousSibling.textContent = "A"*/
	
	document.querySelector("script").parentNode.nextElementSibling.children[3].firstChild
	.nextSibling.previousSibling
	.style.color = "Red"
	);

