var n1 = Number(window.prompt('Digite um Numero: '));
var n2 = Number(window.prompt('Digite outro Numero: '));
var s = n1 + n2;
// window.alert('A soma dos valores é' + s)
window.alert(`A soma entre ${n1} e ${n2} e igual a ${s}`)
// (number + numeber) + para adição
// (string + string) + para concatenação

/*
formatação String
'eu estou aprendendo s' nao faz interpolaçao
'eu estou aprendendo' + s usa concatenaçao
`eu estou aprendendo ${s}` usa template string
*/