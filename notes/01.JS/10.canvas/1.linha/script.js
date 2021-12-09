let tela = document.getElementById("tela");

let ctx= tela.getContext("2d"); // Existe o 3D, mas pouco utilizado
ctx.moveTo(0, 0); // Ponto inicial
ctx.lineTo(250, 250); // Até onde será desenhada a linha "line"
// ctx.stroke(); // Espessura da linha - Este stroke pode ser redirecionado
// ao stroke da linha 2, formando uma só linha
ctx.lineTo(500, 0); // Mais um movimento da linha, para fechar um V na tela
ctx.lineWidth = 5; // Definindo a Espessura da linha
ctx.strokeStyle = "red" // Atribuindo cor a linha 
ctx.stroke(); // Espessura da linha 2