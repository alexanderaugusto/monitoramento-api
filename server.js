const express = require('express')
const http = require('http')
const routes = require('./src/routes')
const mqttConfig = require('./src/config/mqtt')
const socketioConfig = require('./src/config/socketio')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

mqttConfig.setup()

const httpServer = http.createServer(app)
let server = httpServer.listen(process.env.PORT || 5000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log("Server is running on http://%s:%s", host, port)
})
socketioConfig.setup(httpServer)