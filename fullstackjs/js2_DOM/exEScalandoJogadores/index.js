function add() { 
    const inputNome = document.getElementById("nome")

    const nomeJogador = document.getElementById("nome").value
    const posicaoJogador = document.getElementById("posicao").value
    const numeroJogador = document.getElementById("numero") .value

    let escalacao = document.getElementById('jogadores')

    let ul = document.createElement('ul')
    
    let liNome = document.createElement('li')
    liNome.innerText = `Nome: ${nomeJogador}`

    let liPosicao = document.createElement('li')
    liPosicao.innerText = `Posição: ${posicaoJogador}`

    let liNumero = document.createElement('li')
    liNumero = `Número: ${numeroJogador}`
    
    ul.append(liNome, liPosicao, liNumero,)
    escalacao.append(ul)
}

function remove() {
    let escalacao = document.getElementById('jogadores')

    let uls = document.getElementsByTagName('ul')

    escalacao.removeChild(uls[uls.length - 1])
}