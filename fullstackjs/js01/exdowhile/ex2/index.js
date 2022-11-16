let qntdDinheiro = parseFloat(prompt("Quantia atual:"))
let opcao
do {
    opcao = prompt(`Saldo: ${qntdDinheiro}\n1-Adicionar dinheiro\n2-Retirar dinheiro\n3-Encerrar`)
    switch (opcao){
        case "1":
            let soma = parseFloat(prompt("Digite o valor que deseja adicionar:"))
            qntdDinheiro += soma
            break
        case "2":
            let retirar = parseFloat(prompt("Digite o valor que deseja retirar:"))
            qntdDinheiro -= retirar    
    }
} while (opcao != "3")
alert("encerrando...")