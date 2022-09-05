let nome = prompt("Nome do turista:")
let visitas = confirm("Já visitou alguma cidade?")
let qntdCidades = 0
let totalCidades = []
let nomeCidades
while (visitas === true) {
    qntdCidades += 1
    nomeCidades = prompt("Nome da cidade")
    totalCidades.push(nomeCidades)
    visitas = confirm("Já visitou alguma outra cidade?")
}
alert(`Nome do turista: ${nome}\nVisitou: ${qntdCidades} cidades\nCidades visitadas:\n${totalCidades.join("\n")}`)