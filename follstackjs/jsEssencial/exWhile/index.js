let nave = prompt("Digite o nome da nave:")
let dobra = confirm("Entrar em Dobra")

let qntdDobra = 0

while (dobra === true) {
    qntdDobra += 1
    dobra = confirm("Entrar em Dobra")
}

alert(`Nave: ${nave}\nQuantidade de Dobras: ${qntdDobra}`)