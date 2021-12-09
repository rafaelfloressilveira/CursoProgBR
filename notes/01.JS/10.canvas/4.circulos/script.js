// Desenhando um circulo

let tela = document.getElementById("tela");

let ctx = tela.getContext("2d"); // Existe o 3D, mas pouco utilizado

let x = 250; // Definindo o ponto x
let y = 250; // Definindo o ponto y
let raio = 100; // Definindo o tamanho do raio
let inicio = 0; // 2 pi radianos = circulo completo
let fim = 2 * Math.PI; // Fim exatamente no 2º PI

ctx.beginPath(); // Comando para inicio da linha
ctx.strokeStyle = "red"; // definindo a cor

ctx.arc(x, y, raio, inicio, fim); // método para criação do arco

ctx.stroke(); // Espessura da linha