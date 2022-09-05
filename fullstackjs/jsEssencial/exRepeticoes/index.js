let navName = prompt("Nome da nave:");
let newName = "";

for (let i = -1; i >= -navName.length; i--) {
    newName += navName[i]
}

alert(newName)