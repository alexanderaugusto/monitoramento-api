const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')
const Vagas = require('../models/Vagas')

exports.setup = () => {
  client.on('connect', () => {
    client.subscribe('c115/projeto/vaga', (err) => {
      if (err) {
        console.log(err)
      }
    })
  })

  client.on('message', async (topic, message) => {
    const payload = JSON.parse(message.toString())

    const vaga = await Vagas.findOne({ _id: payload._id })

    vaga.status = payload.status

    await vaga.save()
  })
}

exports.client = client