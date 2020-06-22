console.log("=== operadores ===");
//operadores matematicos ou aritmeticos
console.log("adicao","+",2+1,"2"+1, parseInt("2")+1);
console.log("subtracao", "-", 2-1,"2"-1);
console.log("multiplicacao", "*", 2*2, "2"*2);
console.log("divisao", "/", 4/2, "4"/2);
console.log("modulo", "%", 5%2);
//operadores incrementais e decrementais
var x = 2;
x = x + 1;
x ++;
x += 1;
console.log("x = ",x);
console.log(x++);
console.log(6);
console.log(++x);
console.log(--x);
console.log(x*=2);
console.log(x-=2);
console.log(x/=2);
console.log(x%=2);
//operadores comparacao
console.log("maior que", ">", 5>2);
console.log("menor que", "<", 2<5);
console.log("maior ou igual", ">=", 3>=2);
console.log("menor ou igual", "<=", 2<=3);
console.log("igualdade", "==", 5==5);
console.log("igualdade estrita", "===", "5"==5, "5"===5); //avalia os numeros e os tipos
console.log("diferente","!=", 2!=1, "2"!=1);
console.log("diferenca estrita","!==", 2!==1, "2"!==1);// avalia os numetos e os tipos
//operadoes logicos
//E
console.log("E logico", 2>1 && 1<2, 2>1 && 1<2 && 5==6);
//OU
console.log("OU logico", 1>2 || 1>0);
//NAO
console.log("NAO logico", !true);
console.log("NAO logico", !false);