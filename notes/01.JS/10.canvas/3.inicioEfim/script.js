// Para inicio de uma nova linha utilizamos o beginPath()
// Para finalizar uma nova linha utilizamos o closePath()

let tela = document.getElementById("tela");

let ctx= tela.getContext("2d"); // Existe o 3D, mas pouco utilizado

ctx.beginPath(); // Comando para inicio da linha

ctx.lineWidth = 5; // Definindo a Espessura da linha
ctx.strokeStyle = "red" // Atribuindo cor a linha
ctx.moveTo(10, 10); // Ponto inicial da linha
ctx.lineTo(200, 200); // Tamanho da linha
ctx.stroke(); // Espessura da linha

ctx.beginPath(); // Definindo o inicio de uma nova linha
// Especificando a nova linha
ctx.lineWidth = 7; // Definindo a Espessura da linha
ctx.strokeStyle = "blue" // Atribuindo cor a linha
ctx.moveTo(50, 10); // Ponto inicial da linha
ctx.lineTo(100, 200); // Tamanho da linha
ctx.lineTo(100, 150); // Continuidade da linha
ctx.closePath(); // Definindo o fechamento da linha de acordo com o inicio
ctx.stroke(); // Espessura da linha
