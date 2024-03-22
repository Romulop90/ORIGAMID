var nome = window.prompt('qual é seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br/>`)
document.write(`Seu nome em Mausculo é ${nome.toUpperCase()}<br/>`)
document.write(`Seu nome em maiúsculas e ${nome.toLowerCase()}<br/>`)
document.write(`Sua comida favorita e ${nome.toLowerCase()}`)

// > var n1 = 1545.5
// > n1
// 1545.5
// > n1.toFixed(2)
// '1545.50'
// > n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// 'R$ 1.545,50'
