let navName = prompt("Nome da nave:")
let oldChar = prompt("Qual caractere deseja trocar?")
let newChar = prompt("Por qual caractere deseja trocar?")
let newName = ""

for (let i = 0; i < navName.length; i++) {
    if (navName[i] == oldChar) {
        newName += newChar
    } else {
        newName += navName[i]
    }
}

alert(newName)