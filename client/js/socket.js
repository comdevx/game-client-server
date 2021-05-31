socket.on(`playerconnected`, data => {
    data.forEach(p => {
        if (p.id !== socket.id && !players.some(p2 => p2.id === p.id)) {
            console.log(p)
            players.push(new component(scaledWidth, scaledHeight, p.x, p.y, p.id, p.name, p.chatId))
        }
    })
})

socket.on('playermove', data => {
    const index = players.findIndex(p => p.id === data.id)
    if (index !== -1) {
        players[index].x = data.x
        players[index].y = data.y
        players[index].currentDirection = data.currentDirection
        players[index].currentLoopIndex = data.currentLoopIndex
    }
})

socket.on('chat-world', data => {
    if (messageList.length > 99) {
        messageList.splice(0, 1)
    }
    messageList.push(` ${data.name}: ${data.message}\n`)
    chat.value = messageList.join('')
    chat.scrollTop = chat.scrollHeight

    const index = players.findIndex(p => p.name === data.name)
    if (players[index]) {
        players[index].message = data.message

        clearTimeout(players[index].chatTimeout)
        players[index].chatTimeout = setTimeout(() => {
            players[index].message = ''
            document.getElementById(players[index].chatId).hidden = true
        }, 5000)
    }
})

socket.on('logout', id => {
    const index = players.findIndex(p => p.id === id)
    if (players[index]) {
        document.getElementById(players[index].chatId).remove()
        players.splice(index, 1)
    }

})

socket.on('connect_error', () => {
    if (!socketDown) {
        alert('Failed connect server!!!')
        console.log('Failed connect to server')
        socketDown = true
    }
})