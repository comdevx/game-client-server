function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let hasMoved = false

    if (canvas.keys && canvas.keys[38]) {
        moveCharacter(0, -momentSpeed, facingUp)
        hasMoved = true
    } else if (canvas.keys && canvas.keys[40]) {
        moveCharacter(0, momentSpeed, facingDown)
        hasMoved = true
    }

    if (canvas.keys && canvas.keys[37]) {
        moveCharacter(-momentSpeed, 0, facingLeft)
        hasMoved = true
    } else if (canvas.keys && canvas.keys[39]) {
        moveCharacter(momentSpeed, 0, facingRight)
        hasMoved = true
    }

    if (hasMoved) {
        frameCount++
        if (frameCount >= frameLimit) {
            frameCount = 0
            user.currentLoopIndex++
            if (user.currentLoopIndex >= cycleLoop.length) {
                user.currentLoopIndex = 0
            }
        }
    }

    if (!hasMoved) {
        user.currentLoopIndex = 0
    }

    user.update()
    user.drawTextBox()

    players.forEach(p => {
        p.update()
        p.drawTextBox()
    })

    if (hasMoved) {
        socket.emit('move', {
            x: user.x,
            y: user.y,
            currentDirection: user.currentDirection,
            currentLoopIndex: user.currentLoopIndex
        })
    }
}