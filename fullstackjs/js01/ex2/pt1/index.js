let carro1 = prompt("Digite o nome do veiculo:")
let velo1 = parseInt(prompt("Digite a velocidade em KM:"))
let carro2 = prompt("Digite o nome do veiculo:")
let velo2 = parseInt(prompt("Digite a velocidade em KM:"))

if (velo1 > velo2) {
    alert(`O carro mais rápido é: ${carro1}`)
} else if (velo2 > velo1) {
    alert(`O carro mais rápido é: ${carro2}`)
} else {
    alert("Os carros estão na mesma velocidade.")
}