const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')

exports.setup = () => {
  client.on('connect', () => {
    client.subscribe('c115/projeto/vaga', (err) => {
      if (err) {
        console.log(err)
      }
    })
  })

  client.on('message', (topic, message) => {
    console.log(message.toString())
  })
}

exports.client = client