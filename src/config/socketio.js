const socketio = require('socket.io')

let io = null

exports.setup = (server) => {
  io = socketio(server, {
    cors: {
      origin: '*'
    }
  })

  io.on('connection', (socket) => {
    console.log("SOCKET.IO CONNECTION -> ", socket.id)

    socket.on('disconnect', () => {
      console.log("SOCKET.IO DISCONNECT -> ", socket.id)
    })
  })
}

exports.io = () => io