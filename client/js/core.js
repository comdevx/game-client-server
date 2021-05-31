window.onload = () => {

    const name = prompt('Player name')
    const id = randomId(10)
    user = new component(30, 30, 0, 0, socket.id, name, id)

    window.addEventListener('keydown', (event) => {
        canvas.keys = (canvas.keys || [])
        canvas.keys[event.keyCode] = (event.type == "keydown")

        // enter
        if (canvas.keys && canvas.keys[13]) {
            if (input.hidden && !input.value) {
                input.hidden = false
                chat.hidden = false
                input.select()
            } else if (!input.hidden && input.value) {
                input.hidden = false
                chat.hidden = false
                user.textBox.hidden = false
                user.message = input.value
                socket.emit('chat', { type: 'world', name: user.name, message: input.value })
                input.value = ''

                // hide message after pressed enter in 5 sec
                clearTimeout(user.chatTimeout)
                user.chatTimeout = setTimeout(() => {
                    user.message = ''
                    document.getElementById(user.chatId).hidden = true
                }, 5000)

            } else {
                input.hidden = true
                chat.hidden = true
            }
        }

    })

    window.addEventListener('keyup', (event) => {
        canvas.keys[event.keyCode] = (event.type == "keydown")
    })

    socket.emit('login', { x: 0, y: 0, name, chatId: id })

    setInterval(gameLoop, 1000 / 60)

}