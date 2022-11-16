function quadrado(lado) {
    return lado**2
}
function retangulo(base, altura) {
    return base * altura
}
function triangulo(base, altura) {
    return retangulo(base, altura) / 2
}
function trapezio(basema, baseme, altura) {
    return (basema + baseme) * altura / 2
}
function circulo(raio) {
    return 3,14 * raio **2
}
let opcao
do {
    opcao = prompt("1- Triângulo\n2- Retângulo\n3- Quadrado\n4- Trapézio\n5- Circulo\n6- Sair")
    switch (opcao) {
        case "1":
            let baseTriangulo = prompt("Base do triângulo:")
            let alturaTriangulo = prompt("Altura do triângulo:")
            alert(triangulo(baseTriangulo, alturaTriangulo))
            break
        case "2":
            let baseRetangulo = prompt("Base do retãngulo:")
            let alturaRetangulo = prompt("Altura do retãngulo:")
            alert(retangulo(baseRetangulo, alturaRetangulo))
            break
        case "3":
            let ladoQuadrado = prompt("Lado do quadrado:")
            alert(quadrado(ladoQuadrado))
            break
        case "4":
            let baseMaior = prompt("Base maior do trapézio:")
            let baseMenor = prompt("Base menor do trapézio:")
            let alturaTrapezio = prompt("Altura do trapézio")
            alert(trapezio(baseMaior, baseMenor, alturaTrapezio))
            break
        case "5":
            let raio = prompt("Raio do circulo")
            alert(circulo(raio))
            break
        case "6":
            alert("Saindo...")
    }
} while (opcao !== "6")