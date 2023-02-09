function add() { 
    const nomeJogador = document.getElementById("nome").value
    const posicaoJogador = document.getElementById("posicao").value
    const numeroJogador = document.getElementById("numero") .value

    const escalacao = document.getElementById('jogadores')

    escalacao.innerHTML = `<p>${nomeJogador}</p>`
}