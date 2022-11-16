let nomeAtaque = prompt("Nome do atacante:")
let pontosAtaque = parseInt(prompt("Pontos de ataque"))
let nomeDefesa = prompt("Nome do defensor:")
let pontosVida = parseInt(prompt("Pontos de vida:"))
let pontosDefesa = parseInt(prompt("Pontos de defesa:"))
let escudo = confirm("O personagem possui escudo:")

if (pontosAtaque > pontosDefesa && escudo == false) {
    var dano = pontosAtaque - pontosDefesa
    pontosVida -= dano
} else if (pontosAtaque > pontosDefesa && escudo == true) {
    var dano = (pontosAtaque - pontosDefesa) / 2
    pontosVida -= dano
} else {
    var dano = 0
}
alert(`Personagem atacante: ${nomeAtaque}\nPontos de ataque: ${pontosAtaque}\nPersonagem defensor: ${nomeDefesa}\nPontos de vida: ${pontosVida}\nPontos de defesa: ${pontosDefesa}\nPossui escudo: ${escudo?"Sim":"Não"}\nDano: ${dano}`)