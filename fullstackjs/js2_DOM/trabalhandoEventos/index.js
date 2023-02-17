const button = document.getElementById('register-button')

function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirm = sectionElement.children.passwordConfirmation.value

    if(password == passwordConfirm) {
        alert(`Usuário ${username} registrado`)
    } else {
        alert('Senha não confere')
    }
}

button.addEventListener('click', register)

function removeEvent() {
    button.removeEventListener('click', register)
    alert('Evento removido')
}

button.addEventListener('mouseover', (ev) => console.log(ev))