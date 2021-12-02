// IF - FAMOSO "SE"

x = 5;
y = 10;
if(x < y)
	console.log("y é maior que x")

// ELSE - FAMOSO "SENÃO"

x = 10;
y = 5;
if(x < y)
	console.log("y é maior que x");
else
	console.log("x é maior que y");

// Por padrão, utilizar { }

x = 10;
y = 5;
if(x < y) {
	console.log("y é maior que x");
	console.log("x é menor que y");
}
else
	console.log("x é maior que y");

// ELSE IF

x = 10;
y = 5;
if(x < y)
	console.log("y é maior que x");
else if(x == y)
	console.log("x é igual a y");
else
	console.log("x é maior que y");

// Operador ternário
// ? → Substitui o IF e : substitui o else

x = 5;
y = 10;
x < y ? console.log("y é maior que x") : console.log("x é maior que y");

