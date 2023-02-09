function addContact() {
    const contactList = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const contactLi = document.createElement('li')
    contactLi.innerHTML = '<label for="name-contact">Nome: </label>'
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name-contact'
    nameInput.id = 'name-contact'
    contactLi.appendChild(nameInput)
    ul.appendChild(contactLi)
    ul.appendChild(document.createElement('br'))

    const numberLi = document.createElement('li')
    numberLi.innerHTML = '<label for="number-contact">Número: </label>'
    const numberInput = document.createElement('input')
    numberInput.type = 'tel'
    numberInput.name = 'number-contact'
    numberInput.id = 'number-contact'
    numberInput.placeholder = '(xx)xxxxx-xxxx'
    numberLi.appendChild(numberInput)
    ul.appendChild(numberLi)
    ul.appendChild(document.createElement('br'))

    const adressLi = document.createElement('li')
    adressLi.innerHTML = '<label for="adress-contact">Endereço: </label>'
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'adress-contact'
    adressInput.id = 'adress-contact'
    adressLi.appendChild(adressInput)
    ul.appendChild(adressLi)
    ul.appendChild(document.createElement('br'))

    contactList.append(h3, ul)
}

function removeContact() {
    const contactList = document.getElementById('contact-list')

    const title = document.getElementsByTagName('h3')
    const uls = document.getElementsByTagName('ul')

    contactList.removeChild(title[title.length - 1])
    contactList.removeChild(uls[uls.length - 1])

}