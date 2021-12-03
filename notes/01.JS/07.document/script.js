// document -> Uma das propriedades mais importantes do window

// Podemos acessar o primeiro elemento do HTML puxando diretamente pelo document

console.log(document.head);

// OU

console.log(document.body);

// Mas não conseguimos acessar diretamente o próximo elemento como o title

// Acessando qualquer elemento do HTML
// Pelo ID

let p1 = document.getElementById("p1");
console.log(p1);

// Pela Classe

let par = document.getElementsByClassName("par");
console.log(par[1], par[0]);

// Pelo elemento TAG

let tp = document.getElementsByTagName("p");
console.log(tp[2], tp[1], tp[0]);

// Modificando Elementos

p1.innerHTML = "<h2>Alterando o p (ID: p1) para um H2</h2>"

// innerText` → Aparece somente o texto visível
// textContent` → Aparece todo o texto do elemento, mesmo que esteja como "não aparecer" (`display: none;`)

// Modificando Atributo

// p1.className = "" // Com isso eu retiro a classe do p1, e qualquer atributo vinculado a classe será perdido -> importante, somente atributos "padrões"

// // Para alteração de um atributo utilizo:

// let meuAtt = p1.getAttribute("meuAtt")

// // Para adicionar utilizo:

// p.setAttribute("novoAtt", "Outro") // -> também server para alterar