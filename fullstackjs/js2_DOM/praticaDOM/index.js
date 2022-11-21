function addContact() {
    const contactList = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const contactLi = document.createElement('li')
    contactLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'name-contact'
    contactLi.appendChild(nameInput)
    ul.appendChild(contactLi)

    const numberLi = document.createElement('li')
    numberLi.innerText = 'Número: '
    const numberInput = document.createElement('input')
    numberInput.type = 'tel'
    numberInput.name = 'number-contact'
    numberInput.placeholder = '(xx)xxxxx-xxxx'
    numberLi.appendChild(numberInput)
    ul.appendChild(numberLi)

    contactList.appendChild(h3)
    contactList.appendChild(ul)
}