// Construtor simples

var calcMedia = function() {
    return (this.nota1 + this.nota2) / 2;
}

function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: calcMedia
    }
}


var turma = [
    criarAluno("Rafael", 9, 5),
    criarAluno("José", 5, 8),
    criarAluno("Maria", 7, 8)    

]

var aluno = turma[0]; // Aqui eu escolho qual eu quero demonstrar com o índice

console.log(aluno.nome + " obteve média " + aluno.media());

// Para listar todos os alunos criados podemos fazer pelo tradicional:

for (var aluno of turma) {
    console.log(aluno.nome + " obteve média " + aluno.media());
}

// OU utilizando o forEach
turma.forEach(function (elemento) {
    console.log(elemento);
})

// Utilizando o construtor com new - Instanciar o objeto

function aluna(name, t1, t2) { // Criando a função com seus atributos (propriedades do objeto)

    this.name = name;
    this.t1 = t1;
    this.t2 = t2;

    this.media2 = function() { // Criando a função dentro da própria função *Poderiamos ter colocado fora e feito como no anterior
        return (this.t1 + this.t2) / 2;
    }
}

var b = new aluna("Julia", 6, 9);

console.log(b);
console.log(b.name + " obteve média " + b.media2());
