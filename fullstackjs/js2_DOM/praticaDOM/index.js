function addContact() {
    let contactsList = document.getElementById('contact-list')
    let h3 = document.createElement('h3')
    h3.innerText = 'Contatos'
    let ul = document.createElement('ul')
    let nameli = document.createElement('li')
    nameli.innerText = 'Nome: '
    let nameinput = document.createElement('input')
    nameinput.type = 'text' 
    nameinput.name = 'nameli'
    nameli.appendChild(nameinput)
    ul.appendChild(nameli)
    contactsList.appendChild(h3, ul)
}