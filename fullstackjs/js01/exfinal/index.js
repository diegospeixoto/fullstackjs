let option
let todasVagas = []

do {
    option = prompt("1-Listar vagas disponíveis\n2-Criar uma nova vaga\n3-Visualizar uma vaga\n4-Inscrever um candidato em uma vaga\n5-Excluir uma vaga\n6-Sair")
    switch (option) {
        case "1":
            todasVagas.forEach(function (vaga) {
                alert(`Indicie: ${todasVagas.indexOf(vaga)}\nNome: ${vaga.nome}\nNúmero de candidatos: ${vaga.candidatos.length}`)
            })
            break;
        case "2":
            let vaga = {}
            let nome = prompt("Digite o nome da vaga:")
            let descricao = prompt("Descrição da vaga:")
            let data = prompt("Data limite para a vaga:")
            let confirmacao = confirm("Deseja salvar essa vaga?")
            if (confirmacao == true) {
                vaga.nome = nome
                vaga.descricao = descricao
                vaga.data = data
                vaga.candidatos = []
                todasVagas.push(vaga)
            }
            break
        case "3":
            let indicie = parseInt(prompt("Digite o indicie da vaga desejada:"))
            alert(`Indicie: ${indicie}\nNome: ${todasVagas[indicie].nome}\nDescrição: ${todasVagas[indicie].descricao}\nData final: ${todasVagas[indicie].data}\nNúmero de candidatos: ${todasVagas[indicie].candidatos.length}\nNome dos candidatos: ${todasVagas[indicie].candidatos.join("; ")}`)
            break
        case "4":
            let nomeCandidato = prompt("Digite o nome do candidato")
            let indicieVaga = parseInt(prompt("Digite o indicie da vaga desejada"))
            todasVagas[indicieVaga].candidatos.push(nomeCandidato)
            break
        case "5":
            let indicieRemover = parseInt(prompt("Digite o indicie da vaga que deseja excluir:"))
            let remover = confirm(`Indicie: ${indicieRemover}\nNome: ${todasVagas[indicieRemover].nome}\nNúmero de candidatos: ${todasVagas[indicieRemover].candidatos.length}`)
            if (remover == true) {
                todasVagas.splice(indicieRemover, 1)
            }
            break
        default:
            alert("Opção invalida.")
            break;
    }
} while (option != "6");