var nome = window.prompt('qual é seu nome?')
document.write(`Ola, <strong>${nome}</strong>! Seu nome tem ${nome.length}`)
document.write(`Seu nome em maiusculas é ${nome.toLocaleUpperCase()}<br/>`)
document.write(`Seu nome em Mausculo e ${nome.toLocaleLowerCase()}`)

// > var n1 = 1545.5
// > n1
// 1545.5
// > n1.toFixed(2)
// '1545.50'
// > n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// 'R$ 1.545,50'
