// Preenchido
let tela = document.getElementById("tela");

let ctx= tela.getContext("2d"); // Existe o 3D, mas pouco utilizado

ctx.fillStyle = "blue"; // Definição da cor
ctx.fillRect(10, 10, 10, 15); // Repassar as coordenadas X, Y, Largura e Altura


// Somente em linhas

let ctx2= tela.getContext("2d"); // Existe o 3D, mas pouco utilizado

ctx2.strokeStyle = "red"; // Definição da cor
ctx2.strokeRect(20, 30, 10, 15); // Repassar as coordenadas X, Y, Largura e Altura

// Preenchimento e linhas de cores diferentes
let ctx3= tela.getContext("2d"); // Existe o 3D, mas pouco utilizado

ctx3.rect(40, 40, 10, 15) // Cria o retângulo com as coordenadas

ctx3.fillStyle = "blue"; // Definição da cor preenchimento
ctx3.lineWidth = 2; // Aumentar o tamanho da borda (linha)
ctx3.strokeRect = "red"; // Definição da cor das linhas

ctx3.fill(); // execução do preenchimento
ctx3.stroke(); // execução da linha

// Outra função que pode ser feita é o clear, que faz com que onde é direcionada a coordenada, ele irá deixar transparente. 

// ctx.clearRect(10, 20, 20, 20);