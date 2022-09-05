let medida = parseFloat(prompt("Digite uma medida em metros"))
let converter = prompt("Converter para:\n-milímetro(mm)\n-centímetro(cm)\n-decímetro(dm)\n-decâmetro(dam)\n-hectômetro(hm)\n-quilômetro(km)")

switch (converter) {
    case "mm":
        medida *= 1000
        break
    case "cm":
        medida *= 100
        break
    case "dm":
        medida *= 10
        break
    case "dam":
        medida /= 10
        break
    case "hm":
        medida /= 100
        break
    case "km":
        medida /= 1000
}
alert(`Nova medida\n${medida} ${converter}`)