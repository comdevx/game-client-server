function component(width, height, x, y, id, name, chatId) {

    this.id = id
    this.chatId = chatId
    this.name = name
    this.image = new Image()
    this.image.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.currentDirection = 0
    this.currentLoopIndex = 0
    this.loop = [0, 1, 0, 2]
    this.message = ''
    this.chatTimeout = 0

    this.textBox = document.createElement('textarea')
    this.textBox.id = chatId
    this.textBox.disabled = true
    this.textBox.focus = true
    this.textBox.hidden = true
    document.body.insertBefore(this.textBox, document.body.childNodes[0])

    this.update = () => {

        drawFrame(
            this.image,
            this.loop[this.currentLoopIndex],
            this.currentDirection,
            this.x,
            this.y
        )

        drawName(this.name,
            this.x,
            this.y
        )

        // this.currentLoopIndex = 0

    }

    this.drawTextBox = () => {

        if (this.message) {

            // const messageBox = document.getElementById(this.chatId)
            this.textBox.value = this.message
            // this.textBox.cols = 1
            this.textBox.disabled = true
            this.textBox.hidden = false

            if (this.x < 85) {
                posX = (window.innerWidth / 2) - 400
            } else if (this.x > canvas.width - 119) {
                posX = (window.innerWidth / 2) + 195
            } else {
                posX = (window.innerWidth / 2) - 400 + this.x - 85
            }

            if (this.y < 50) {
                posY = this.y + 60
            } else {
                posY = this.y - 40
            }

            this.textBox.style = `
                color: white;
                opacity: 0.6;
                background-color: black;
                position: absolute;
                left: ${posX}px;
                top: ${posY}px;
                width: 200px;
                min-height: 1.2;
                max-height: 100%;
                resize: none;
                font-size: 14px;
            `

        }

    }

}