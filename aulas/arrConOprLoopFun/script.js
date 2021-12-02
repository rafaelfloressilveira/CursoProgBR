var nome =["Igor", "José", "Maria"]; // Definindo a lista
var notasA = [7.0, 6.0, 9,5]; // Definindo uma nova lista alinhado coms os indices da primeira lista
var notasB = [8.0, 7.0, 8.5]; // Idem

function media(n1, n2){
	return (n1 + n2) / 2;
}

function passou(media) {
		
	if(media >= 7) {
		return "Aprovado";
	}else{
		return "Reprovado";
	}
}

for (var index in nome) {
	
	var nota1 = notasA[index];
	var nota2 = notasB[index];
	
	var m = media(nota1, nota2);

	console.log(nome[index]+
				" - " +
				nota1 +
				" - " +
				nota2 +
				" - " +
				m +
				" - " +
				passou(m));
}