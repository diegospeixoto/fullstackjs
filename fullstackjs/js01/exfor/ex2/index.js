let palavra = prompt("Digite a palavra:")
let palindromo = ""
for (i=palavra.length-1;i>=0;i--) {
    palindromo += palavra[i]
    console.log(palindromo)
}
if (palavra == palindromo) {
    console.log(`${palavra} é um palíndromo`)
} else {
    console.log (`${palavra} não é um palíndromo`)
}