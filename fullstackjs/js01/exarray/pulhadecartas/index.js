let cartas = ["1 copas", "As espadas", "Q ouros", "10 paus"]
let opicao 
do {
    opicao = prompt(`${cartas.join("\n")}\n1-Retirar carta\n2-Adicionar carta\n3-Sair`)
    switch (opicao) {
        case "1":
            let cartaRetirada = cartas.pop()
            alert(`Carta: ${cartaRetirada}`)
            break
        case "2":
            cartaNova = prompt("DIgite a carta que deseja adicionar:")
            cartas.push(cartaNova)
    }
} while (opicao != "3")