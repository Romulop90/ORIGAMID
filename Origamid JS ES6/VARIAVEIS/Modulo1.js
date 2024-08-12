// Módulo 1: Primeiros Passos

/*var nome = `Romulo`;
var possuiFaculdade = true;

let cidade = "São Paulo";
let estado = "Para";

console.log(estado);
console.log(cidade);

let idade = 90;
let logado = true;
let lista = ["ovo", "massa", "manteiga"];
let nomeCompleto = { nome: "romulo", idade: 90 };

console.log(typeof nome)*/

// 1. Cria uma variável para armazenar o nome
// do carro e ponha o valor ferrari. E exiba-a.
let nomeDoCarro = "Ferrari";

console.log(nomeDoCarro);

// 2. Crie uma variável par armazenar o preço
// do bolo, que custa R$ 19.99. E exiba-a.
let precoDoBolo = 19.99;

console.log(precoDoBolo);

// 3. Corrija o código a seguir (e exiba-o).
// let "cidade" = São Paulo
let cidade = "São Paulo";
console.log(cidade);

// operações em variáveis aula 11
let x = 13;
x = x + 8;
console.log(x);

let nome = "romulo";
let sobrenome = "prado";

let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

let n1 = 15;
let n2 = 25;

let soma = n1 + n2;
console.log(soma);

// String e Template String aula 12
// `${}` <== e uma espreção

let nome2 = "Rodrigo";
let sobrenome2 = "Prado";

let nomeCompleto2 = `${nome2} ${sobrenome2} do Prado`;

console.log("nome: " + nomeCompleto2);

let idade = 90;
let idadeString = `voce tem ${idade} anos`;

console.log(idadeString);

//Condicional If/else aula 13
let idade2 = 90;
/*se idade > 17
console.log("voce e maior de  idade")
caso contrario
console.log("voce e menor de idade")*/
if (idade2 > 17) {
  console.log("você é maior que idade.");
} else {
  console.log("você é menor de idade.");
}

/*
+ concatena/concatenação
< maior
> menor
== igual
=== exatamente igual
>= maior ou igual
<= meno ou igal
!= diferente
&& and/e (entre (restrito a um dos))
|| or/ou (um ou o outro (pode ser esse ou esse))
*/

// condicionais == e === aula 14
let idade3 = 20;
if (idade3 == 20) {
  console.log("Você tem 20 anos");
}

// multi-condicionais (&& e ||) aula 15
/*let idade4 = 90;
if (idade4 >= 18) {
  if (idade4 < 60) {
    console.log("Você ë um adulto");
  }
  
}*/
idade5 = 45;

//if (idade5 >= 18 || idade5 < 60)
if (idade5 >= 18 && idade5 < 60) {
  console.log("Você ë um adulto");
}

//condicional dupla (if else) aula 16
let idade6 = 17;
if (idade6 < 18) {
  console.log("você é uma criança.");
} else if (idade6 >= 18 && idade6 < 60) {
  console.log("você é um adulto.");
} else if (idade6 >= 60) {
  console.log("você é um idoso.");
}

//desmistificando o IF  aula 17
//Somente para verificar True e false

// Condicional Ternário aula 19
let isMember = true;

let shipping = isMember ? 2 : 10;
console.log(isMember ? "voce e membro" : "voce nao e membro");
console.log("Frete: " + shipping);

let age = 20;
let isAdult = age >= 18 ? "Y" : "N";
console.log(isAdult);

// switch aula 20
let profession = "bombeiro";
console.log("Porfissão: " + profession);
switch (profession) {
  case "fiscal":
    console.log("Sua camisa será Verder");
    break;
  case "bombeiro":
    console.log("Sua camisa será Vermelha");
    break;
  case "policial":
    console.log("Sua camisa será Azul");
    break;
  default:
    console.log("Sua camisa sera PRETA");
    break;
}

