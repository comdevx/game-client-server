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

function changeTab(evt, tabName) {
    var i, tabcontent, tablinks

    tabcontent = document.getElementsByClassName("tabcontent")
    tablinks = document.getElementsByClassName("tablinks")

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById(tabName).style.display = "block"
    evt.currentTarget.className += " active"
}

function getChatBar() {
    input.hidden = false
    chat.hidden = false
    input.select()

    if (chatType === 'public') {
        handleButtonPublic(true)
    } else {
        handleButtonPublic()
    }

    if (chatType === 'private') {
        handleButtonPrivate(true)
    } else {
        handleButtonPrivate()
    }

    if (chatType === 'party') {
        handleButtonParty(true)
    } else {
        handleButtonParty()
    }
}

function hideChatBar() {
    input.hidden = true
    chat.hidden = true
    tabPublic.style = `
        position: absolute;
        left: ${window.innerWidth / 2 - 145}px;
        top: 455px;
        width: 60px;
        height: 20px;
    `
    tabPrivate.style = `
        position: absolute;
        left: ${window.innerWidth / 2 - 85}px;
        top: 455px;
        width: 60px;
        height: 20px;
    `
    tabParty.style = `
        position: absolute;
        left: ${window.innerWidth / 2 - 25}px;
        top: 455px;
        width: 60px;
        height: 20px;
    `
}

function handleButtonPublic(active = false) {
    if (active) {
        tabPublic.style = `
            position: absolute;
            left: ${window.innerWidth / 2 - 145}px;
            top: 310px;
            width: 60px;
            height: 20px;
            background-color: gold;
            border-width: thin;
        `
    } else {
        tabPublic.style = `
            position: absolute;
            left: ${window.innerWidth / 2 - 145}px;
            top: 310px;
            width: 60px;
            height: 20px;
        `
    }
}

function handleButtonPrivate(active = false) {
    if (active) {
        tabPrivate.style = `
            position: absolute;
            left: ${window.innerWidth / 2 - 85}px;
            top: 310px;
            width: 60px;
            height: 20px;
            background-color: gold;
            border-width: thin;
        `
    } else {
        tabPrivate.style = `
            position: absolute;
            left: ${window.innerWidth / 2 - 85}px;
            top: 310px;
            width: 60px;
            height: 20px;
        `
    }
}

function handleButtonParty(active = false) {
    if (active) {
        tabParty.style = `
            position: absolute;
            left: ${window.innerWidth / 2 - 25}px;
            top: 310px;
            width: 60px;
            height: 20px;
            background-color: gold;
            border-width: thin;
        `
    } else {
        tabParty.style = `
            position: absolute;
            left: ${window.innerWidth / 2 - 25}px;
            top: 310px;
            width: 60px;
            height: 20px;
        `
    }
}