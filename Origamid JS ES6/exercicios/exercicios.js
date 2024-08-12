// Exercicios (COndicionais) *2
//Substitua o @ pela condicional correta para que
// o resultado seja TRUE

let x = 10;
let y = 5;
console.log(x > y);

//Substitua o @ pela condicional correta para que
// o resultado seja FALSE
let w = "10";
let z = 10;
console.log(w === y);

//Substitua o @ pela condicional correta para que
// o resultado seja TRUE
let a = 10;
let b = 5;
console.log(x != y);

// Crie uma condicional para verificar se o preço da
// Carne está barato ou caro. PS: até 45 está barato.
let preco = 40.3;
if (preco <= 45) {
  console.log("A carne esta barata");
} else {
  console.log("A carne esta cara");
}

// Modulo 2
//exercécio funções *4
/*
alcule a porcentagem entre 2 números.
Exemplo : 25% de 40 é 10
Formula da porcentagem : (y / x) * 100
Uso da função:


*/
function calcPct(n1, n2) {
  return (n2 / n1) * 100;
}

let p = 70;
let t = 7;
let pct = calcPct(p, t);
console.log(`${pct}% de ${p} e ${t}`);

//exercécio funções *5
/*Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 e 1x
- Se tiver 2 quartos, o m2 e 1.2x
- Se tiver 3 quartos, o m2 e 1.5x
Uso da funcao
*/

function calcularImovel(metragem, quartos) {
  let m2 = 3000;
  let precos = 0;

  switch (quartos) {
    case 1:
    default:
      precos = metragem * m2;
      break;
    case 2:
      precos = metragem * (m2 * 1.2);
      break;
    case 3:
      precos = metragem * (m2 * 1.5);
      break;
  }
  return precos;
}

let metragem = 123;
let quartos = 1;
let precos = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${precos}`);

//exercécio funções *6
/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
senha correta: 123
*/
// Uso da Função:

function validar(usuario, senha) {
  if (usuario === "predro" && senha === "123") {
    return true;
  } else {
    return false;
  }
}

let usuario = "prado";
let senha = "1234";
let validacao = validar(usuario, senha);
if (validacao) {
  console.log(`Acesso concedido.`);
} else {
  console.log(`Acesso Negado!`);
}
