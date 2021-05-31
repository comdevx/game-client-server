function randomId(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

function drawName(name, x, y) {
    ctx.fillStyle = "black"
    ctx.font = "12px Tahoma"
    ctx.textAlign = 'center'
    ctx.fillText(name, x + 15, y + 50)
}

function drawFrame(image, frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(image,
        frameX * width,
        frameY * height,
        width,
        height,
        canvasX,
        canvasY,
        scaledWidth,
        scaledHeight)
}

function moveCharacter(deltaX, deltaY, direction) {
    if (user.x + deltaX > 0 && user.x + scaledWidth + deltaX < canvas.width) {
        user.x += deltaX
    }
    if (user.y + deltaY > 0 && user.y + scaledHeight + 20 + deltaY < canvas.height) {
        user.y += deltaY
    }
    user.currentDirection = direction
}

function drawMenu(element) {

    posX = (window.innerWidth / 2) - 400 + element.x

    posY = element.y

    element.button.style = `
        position: absolute;
        width: ${element.width}px;
        height: ${element.height}px;
        left: ${posX}px;
        top: ${posY}px;
        opacity: 0;
    `
}