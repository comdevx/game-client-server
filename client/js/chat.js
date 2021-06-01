let input = document.getElementById('input')
input.id = 'input'
input.autofocus = true
input.hidden = true
input.max = 100
input.style = `
            position: absolute;
            left: 39.5%;
            top: 450px;
            width: 300px;
        `

let chat = document.getElementById('chat')
chat.id = 'chat'
chat.disabled = true
chat.focus = true
chat.hidden = true
chat.style = `
            position: absolute;
            left: 39.5%;
            top: 335px;
            width: 300px;
            height: 100px;
            resize:none
        `

const getDiv = document.getElementById('div')

let tabPublic = document.createElement('button')
tabPublic.innerHTML = 'Public'
tabPublic.style = `
    position: absolute;
    left: ${window.innerWidth / 2 - 145}px;
    top: 455px;
    width: 60px;
    height: 20px;
`
tabPublic.addEventListener('click', () => {
    chatType = 'public'
    getChatBar()
})
getDiv.appendChild(tabPublic)

let tabPrivate = document.createElement('button')
tabPrivate.innerHTML = 'Private'
tabPrivate.style = `
    position: absolute;
    left: ${window.innerWidth / 2 - 85}px;
    top: 455px;
    width: 60px;
    height: 20px;
`
tabPrivate.addEventListener('click', () => {
    chatType = 'private'
    getChatBar()
})
getDiv.appendChild(tabPrivate)

let tabParty = document.createElement('button')
tabParty.innerHTML = 'Party'
tabParty.style = `
    position: absolute;
    left: ${window.innerWidth / 2 - 25}px;
    top: 455px;
    width: 60px;
    height: 20px;
`
tabParty.addEventListener('click', () => {
    chatType = 'party'
    getChatBar()
})
getDiv.appendChild(tabParty)