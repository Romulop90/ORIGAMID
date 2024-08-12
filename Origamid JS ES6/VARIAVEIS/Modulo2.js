// Introdução a FUnções
// - O que é uma função? aula 1

// Declarando um Função aula 2
function gravidade() {
  console.log("Agravidade do planeta e:");
  console.log(9.8);
}

// Como usar uma Função aula 3
gravidade();

// Passando parâmetros em funções aula 4
function somar(n1, n2) {
  let resultado = n1 + n2;
  console.log("Resultado: " + resultado);
}
somar(10, 15);

function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("Romulo", "Prado");

// Retorno da função aula 5
function nomeCompleto(nome1, sobrenome1) {
  return `${nome1} ${sobrenome1}`;
}
let completo = nomeCompleto("romulo", "prado");
console.log(`completo: ` + completo);
// Depois do (return) a função e finalizada
// ENTRADA -> PROCESSAMENTO -> SAIDA

// Função com retorno condicional  aula 6
function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
/*let verificacao = maiorDeIdade(13);
console.log(verificacao);*/

let idade = 17;
let verificacao = maiorDeIdade(idade);
if (verificacao) {
  console.log(`É maior de idade`);
} else {
  console.log("É menor de idade");
}

// Arrow Function aula 10
const somar1 = (x, y) => x + y;
console.log(somar1(10, 5));

/*const btc = (btci) => "Bitcoin " + btci;
const btc = btci => "Bitcoin " + btci;
const btc = (btci) => {
  return "Bitcoin " + btci
}*/

const btc = (btci) => {
  let coin = "Bitcoin " + btci;
  return coin;
};
console.log(btc("muito caro"));

// Variáveis dentro de funções aula 11
let count = 0;

function add() {
  count++;
}

add();
add();
console.log(count);

// Funções dentrod e funções aula12
function addSquares(a, b) {
  const square = (x) => x * x;

  let sqrA = square(a);
  let sqrB = square(b);
  return sqrA + sqrB;
}

console.log(addSquares(2, 3));

// Introdução a Array
let colors = ["blue", "red", "green"];

console.log(colors[0]);

let lista = ["digimon", "pokemon", 10, 14, 90];

console.log(lista[0]);

let lista2 = ["blalba", ["xx", "yy"]];

console.log(lista2[1][0]);
