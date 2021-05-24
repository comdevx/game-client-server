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

const playerList = []

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('login', data => {
        console.log('user login', socket.id)
        playerList.push({ id: socket.id, x: data.x, y: data.y })
        io.emit('playerConnected', playerList)
    })

    socket.on('move', data => {
        index = playerList.findIndex(p => p === socket.id)
        data = { ...data, id: socket.id }
        console.log(data)
        playerList[index] = data
        io.emit('playermove', data)
    })

    socket.on("disconnect", () => {
        console.log('logout', socket.id)
        io.emit('logout', socket.id)
        index = playerList.findIndex(p => p === socket.id)
        playerList.splice(index, 1)
    })
})

httpServer.listen(3000, () => {
    console.log('listening on *:3000')
})