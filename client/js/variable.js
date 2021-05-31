let user
const players = []
const messageList = []
const scale = 2
const width = 16.1
const height = 18.1
const scaledHeight = scale * width
const scaledWidth = scale * height
const cycleLoop = [0, 1, 0, 2]
const facingDown = 0
const facingUp = 1
const facingLeft = 2
const facingRight = 3
const frameLimit = 12
const momentSpeed = 1

const socketUrl = 'https://a47e1f984f3d.ngrok.io'
const socket = io(socketUrl)

let frameCount = 0
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let keyPresses = {}
let message = ''
let userChatTimeout