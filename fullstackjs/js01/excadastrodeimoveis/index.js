let imoveis = []
let opcao
do {
    opcao = prompt("1-Cadastrar imóvel\n2-Listar imóveis\n3-Sair\n")
    switch (opcao) {
        case "1":
            let imovel = {}
            imovel.nome = prompt("Digite o nome do dono do imóvel:")
            imovel.quartos = prompt("Quantidade de quartos do imóvel:")
            imovel.banheiros = prompt("Quantidade de banheiros do imóvel:")
            imovel.garagem = prompt("O imóvel possui garagem?")
            imoveis.push(imovel)
            break
        case "2":
            for (let i=0;i<=imoveis.length;i++) {
                alert(`Imóvel ${i+1}\nProprietário: ${imoveis[i].nome}\nQuartos: ${imoveis[i].quartos}\nBanheiros: ${imoveis[i ].banheiros}\nGaragem: ${imoveis[i].garagem}`)
            }
            break
        case "3":
            alert("Saindo...")
    }
} while (opcao != "3");