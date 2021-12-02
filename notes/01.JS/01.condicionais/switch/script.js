// Após o resultado de um bloco de código condicional, o switch faz a operação com aquele resultado

var nota1 = 8.0;
var nota2 = 7.0;

var media = (nota1 + nota2) / 2;

var conceito = ""

if(media >7) {
	
	conceito = "Ótimo";
}
else if (media >= 6.5) {

	conceito = "Bom";

} else {

	conceito = "Regular";
}

console.log(media);
console.log(conceito);

switch(conceito) {
	
	case "Ótimo":
		(console.log("Parabéns, você foi muito bem"));
		break;
		case "Bom":
		(console.log("Você está indo bem, mas pode melhorar"));
		break;
		case "Regular":
		(console.log("Estude mais um pouco"));
		break;
		default:
		(console.log("Houve algum erro"));
		break;
}