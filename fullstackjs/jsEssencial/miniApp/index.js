let diaDaPartida = prompt("Dia da partida: (formato DD/MM/YYY)");
let diaDaPartidaMoment = moment(diaDaPartida, "DD/MM/YYY");
let hoje = moment();
let tempoDeVoo = hoje - diaDaPartidaMoment;
let opcao = prompt("Escolha como deseja ver o tempo de voo:\n1- Segundo\n2- Minuto\n3- Horas\n4- Dias");

if (opcao == "1") {
    let tempoSegundos = Math.round(tempoDeVoo / 1000);
    alert(`Tempo de viajem: ${tempoSegundos} segundos.`)
} else if (opcao == "2") {
    let tempoMinutos = Math.round(tempoDeVoo / 1000 / 60);
    alert(`Tempo de viajem: ${tempoMinutos} minutos.`)
} else if (opcao == "3") {
    let tempoHoras = Math.round(tempoDeVoo / 1000 / 3600);
    alert(`Tempo de viajem: ${tempoHoras} horas.`)
} else if (opcao == "4") {
    let tempoDias = Math.round(tempoDeVoo / 1000 / 3600 / 24);
    alert(`Tempo de viajem: ${tempoDias} dias.`)
} else {
    alert("Opção inválida")
}