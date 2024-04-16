// let x = 10;
// let y =5 ;
// console.log(x > y);

// let w = "10";
// let z = 10;
// console.log( w === z);

// let a = 10;
// let b = 5;
// console.log(x != y);

// let preco = 50.3;
// if (preco <= 45) {
//   console.log("A carne esta barta");
// } else {
//   console.log("A carne esta  cara")
// }

// condicional alternaria vai ter o simbolo de (?)

// let number = 10;

// let shipping = number ? 15 : 60;

// console.log(number ? "Voce é membro" : "Voce não é membro");
// console.log("Frete: " + shipping);

// let profession = "Fiscal" || "fiscal";

// console.log("Profissão: " + profession);

// switch (profession) {
//   case "fiscal":
//     console.log("Sua camisa sera VERDE");
//     break;
//   case "bombeiro":
//     console.log("Sua camisa sera AZUL");
//     break;
//   case "jogador":
//     console.log("Sua camisa sera VERMELHO");
//     break;
//   default:
//     console.log("Sua camisa sera PRETA");
//     break;
// }

// function somar(n1, n2, n3, n4) {
//   let resultado = n1 + n2 - n3 + n4;
//   console.log("Resultado: " + resultado);
// }

// somar(32, 35, 25, 35);
// somar(44, 55, 88, 99);

function calcPct(n1, n2) {
  return (n1 / n2) * 100;
}

let x = 40;
let y = 25;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} e ${y}`);
