// Método -> é uma função dentro do objeto

var familia = {
	nome: "Rafael",
	sobrenome: "Flores Silveira",
	nomeCompleto: function (n, s) {
			return n + " " + s;
}
}

console.log(familia.nomeCompleto(familia.nome, familia.sobrenome))

// Utilizando o "this" -> Usado para informar que se refere aquele objeto

var familia2 = {
	nome: "Mariana",
	sobrenome: "Nagel Silveira",
	nomeCompleto: function () {
			return (this.nome + " " + this.sobrenome);
}
}

console.log(familia2.nomeCompleto(familia2.nome, familia2.sobrenome))

// Alterando o código para que a função possa ser modificada para todos (Quando necessário)
// Para isto, utilizamos um novo exemplo mais prático
function calcMedia() {
	return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
	nome: "Julia",
	notas: [9, 7],
	media: calcMedia
}

var aluno2 = {
	nome: "Amora",
	notas: [6, 5],
	media: calcMedia
}


console.log(aluno.nome)
console.log(aluno.media());

console.log(aluno2.nome)
console.log(aluno2.media());
