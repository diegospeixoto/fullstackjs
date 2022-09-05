let anosLuz = prompt("Distância em Anos Luz");
let option = prompt("Converter para:\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(Km)");

switch (option) {
    case "1":
        let conversaopc = 0.306601 * anosLuz
        alert(`Distância em Anos Luz:${anosLuz}\nDistância em Parsec: ${conversaopc} pc`)
        break
    case "2":
        let conversaoau = 63241.1 * anosLuz
        alert(`Distância em Anos Luz:${anosLuz}\nDistância em Unidade astronômica: ${conversaoau} AU`)
        break
    case "3":
        let conversaokm = (9.5 * (10**12)) * anosLuz
        alert(`Distância em Anos Luz:${anosLuz}\nDistância em Quilômetros: ${conversaokm} Km`)
        break
    default:
        alert("Unidade de conversão inválida")
}