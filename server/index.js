const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')

app.use(cors({ origin: '*' }))

const httpServer = http.createServer(app)

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

let playerList = []

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('login', data => {
        console.log('user login', socket.id)
        data = { ...data, id: socket.id }
        playerList.push(data)
        io.emit(`playerconnected`, playerList)
    })

    socket.on('move', async data => {
        index = await playerList.findIndex(p => p.id === socket.id)
        console.log(index, playerList[index].x, playerList[index].y, data.x, data.y)
        data = { ...data, id: socket.id }
        playerList[index] = data
        io.emit('playermove', data)
    })

    socket.on('chat', async data => {
        console.log(data)
        if (data.type==='world'){
            io.emit('chat-world', data)
        }
    })

    socket.on("disconnect", () => {
        console.log('logout', socket.id)
        io.emit('logout', socket.id)
        index = playerList.findIndex(p => p.id === socket.id)
        playerList.splice(index, 1)
    })
})

httpServer.listen(3000, () => {
    console.log('listening on *:3000')
})