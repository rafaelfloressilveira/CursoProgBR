// Durante a execução de um for, a referência aponta para um elemento de uma determinada sequência. A cada iteração esta referência é atualizada para que o bloco de código do for processe o elemento correspondente.

// FOR

for (var i = 0; i < 9; i++) {
	console.log(i);
}
// WHILE
// Utilizado para executar um bloco enquanto uma condição for atendida.

i = 0;
while (i < 5) {

	console.log(i);
	i = i + 1 // Neste caso pode ser feito i += 1;
}

/*Saída:
0
1
2
3
4
*/