var familia = {
	nome:"Rafael",
	idade:"31"
}

// Chamando a propriedade do objeto
console.log(familia["nome"]);

// Chamando todas as propriedades do objeto
console.log(familia);

// Adicionando uma propriedade no objeto
familia.profissao = "dev"; /* OU */ // FAMILIA["profissao"] = "dev";
console.log(familia) // Deve retornar os dados nome, idade e profissao

// Adicionando uma propriedade no objeto (Outro método c/ variável)
var prop = "sobrenome";
familia[prop] = "Silveira";

// Método -> é uma função dentro do objeto

var familia = {
	nome: "Rafael",
	sobrenome: "Silveira",
	nomeCompleto: function (n, s) {
			return n + " " + s;
}
}

console.log(familia)