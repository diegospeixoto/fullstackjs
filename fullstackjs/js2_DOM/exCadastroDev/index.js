const addTec = document.getElementById('addTec')
const formCad = document.getElementById('formCad')


addTec.addEventListener('click', function(ev) {

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome da tecnologia: '
    
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput. name = 'nameInput'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    const expLi = document.createElement('li')
    expLi.innerHTML = '<p>Tempo de experiêcia: </p>' 
    expLi.innerHTML += '<label for="0-3">0-3 anos:</label>'
    const exp03 = document.createElement('input')
    exp03.type = 'radio'
    exp03.name = 'exp'
    exp03.id = '0-3'
    expLi.appendChild(exp03)

    expLi.innerHTML += '<label for="4-5">  4-5 anos:</label>'
    const exp45 = document.createElement('input')
    exp45.type = 'radio'
    exp45.name = 'exp'
    exp45.id = '4-5'
    expLi.appendChild(exp45)

    expLi.innerHTML += '<label for="6+">  6 + anos:</label>'
    const exp6 = document.createElement('input')
    exp6.type = 'radio'
    exp6.name = 'exp'
    exp6.id = '6+'
    expLi.appendChild(exp6)

    ul.appendChild(expLi)

    formCad.appendChild(ul)
})


formCad.addEventListener('submit', function(formEv) {
    formEv.preventDefault()

    const name = document.getElementById('name').value
    
})