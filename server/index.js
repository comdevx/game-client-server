const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const path = require('path')

app.use(cors({ origin: '*' }))

const httpServer = http.createServer(app)

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/../client/index.html'))
// })

let playerList = []

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('login', data => {
        console.log('user login', socket.id)
        data = { ...data, id: socket.id }
        console.log(data)
        playerList.push(data)
        io.emit(`playerconnected`, playerList)
    })

    socket.on('move', data => {
        index = playerList.findIndex(p => p.id === socket.id)
        if (playerList[index]) {
            console.log(index, playerList[index].x, playerList[index].y, data.x, data.y)
            // data = { ...data, id: socket.id }
            // playerList[index] = data
            Object.assign(playerList[index], data)
            io.emit('playermove', playerList[index])
        }
    })

    socket.on('chat', data => {
        console.log(data)
        if (data.type === 'world') {
            io.emit('chat-world', data)
        }
    })

    socket.on("disconnect", () => {
        console.log('logout', socket.id)
        io.emit('logout', socket.id)
        index = playerList.findIndex(p => p.id === socket.id)
        console.log(playerList)
        playerList.splice(index, 1)
        console.log(playerList)
    })
})

httpServer.listen(3000, () => {
    console.log('listening on *:3000')
})