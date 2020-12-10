const socketio = require('socket.io')

let io = null

exports.setup = (server) => {
  io = socketio(server, {
    cors: {
      origin: '*'
    }
  })

  io.on('connection', () => {

  })

  io.on('disconnect', () => {

  })
}