// Criação de data com new Date

var d = new Date(); //Por padrão ele segue a sequência de "year, month, day, hours, minutes, seconds, milliseconds"

console.log(d);

// Se quisermos forçar uma data, no caso inserindo uma data, temos que seguir o padrão

var d2 = new Date(2022, 0, 30) // Informando somente o ano, mẽs e dia. Os demais irão vir padrão // no mês utilizamos o índice da Array MES, no caso JAN é 0

console.log(d2);

// Métodos para data

console.log(d2.getDay()) // Dia da semana, sendo 0 domingo

// Vários métodos são encontrados para data