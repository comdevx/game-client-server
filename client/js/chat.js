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