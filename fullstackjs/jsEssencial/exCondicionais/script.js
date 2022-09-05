let name = prompt("Qual é o seu nome piloto?")
let velocity = prompt("Velocidade atual: 0\nQual velocidade usar?")
let veloConfirm = confirm(`Indo para velocidade: ${velocity}`)

while (veloConfirm === false) {
    velocity = prompt("Velocidade atual: 0\nQual velocidade usar?")
    veloConfirm = confirm(`Indo para velocidade: ${velocity}`)
}

if (velocity == 0) {
    alert("Nave parada , considere partir e aumentar a velocidade")
} else if (velocity >= 100) {
    alert("Velocidade perigosa. Controle automático forçado")
} else if (velocity >= 80) {
    alert("Velocidade alta, considere diminuir")
} else if (velocity >= 40) {
    alert("Parece uma boa velocidade para manter")
} else if (velocity < 40) {
    alert("Velocidade baixa, podemos aumentar")
}
