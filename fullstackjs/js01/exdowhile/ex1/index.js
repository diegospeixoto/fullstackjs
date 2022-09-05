let opcao = prompt("1-\n2-\n3-\n4-\n5-encerrar")
do {
    alert(`Opção escolhida: ${opcao}`)
    if (opcao == 5) {
        break
    }
    opcao = prompt("1-\n2-\n3-\n4-\n5-encerrar")
} while (opcao != 5)
alert("Encerrando")