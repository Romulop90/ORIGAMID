/*var nome = window.prompt("Qual e seu nome");
window.alert(
  "É um grande prazer em te conhecer, " + nome + "!" + " pela segunda vez"
);

var n1 = Number(window.prompt("Digite um número: "));
var n2 = Number(window.prompt("Digite outro número: "));
var s = n1 + n2;
window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`);*/

// Exercicio 04
/*var nome = window.prompt("Qual é o seu nome");
document.write(`Seu nome tem <strong>${nome.length}</strong>! letras.</br>`);
document.write(`Seu nome em maiusculo é ${nome.toUpperCase()}.</br>`);
document.write(`Seu nome em minusculo é ${nome.toLocaleLowerCase()}.`);*/
// aula 7

//modulo c Conhecendo DOM
/*Document Object Model
Ärvore DOM
Manipulando DOM
-----------------
Não pule
Anote Tudo
Duas Telas
Pratique
Compartilhe
*/

// Introdução  ao DOM aula 9

// aula 11 Condições Simples e Compostas
/*var vel = 60.5;
console.log(`Avelocidade do seu carro e ${vel}`);
if (vel > 60) {
  // condição simples
  console.log("Voce ultrapassou a velocidade permitida. Multado");
}
console.log("Dirija sempre usando o cinto de segurnaça");


var pais = "Brasil";
console.group(`Vivendo em ${pais}`);
if (pais == "Brasil") {
  console.log("Você Brasileiro");
} else {
  console.log("Você Estrangeiro");
}*/

//aula 12
var idade = 15;
console.log(`Voce tem ${idade} anos.`);
if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade > 65) {
  console.log("Voto Opcional");
} else {
  console.log("Voto obrigatorio");
}

// exercicio 12
var agora = new Date(); // para puchar a hora do sistema (new Date())
var hora = agora.getHours(); // para puchar a hora do sistema (.getHours())
console.log(`Agora são exatamente ${hora} Horas.`);
if (hora < 12) {
  console.log("Bom dia");
} else if (hora <= 18) {
  console.log("Boa Tarde");
} else {
  console.log("Boa Noite");
}

//exercicio 12.2

var dia = new Date();
var diaSem = dia.getDay();
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("[ERRO] Data invalida");
    break;
}
