let tela = document.getElementByID("tela");

let ctx = tela.getContext("2d");

let img = new Image();
img.src = "./foto.png";

img.onload = desenharImg;

function desenharImg(){
	ctx.drawImage(this, 20, 20, 50, 100);
// Pode ser determinado o tamanho (50, 100) acima
// this.naturalWidth / 2, this.naturalHeight / 2
// Método acima usado para diminuir proporcionalmente
}