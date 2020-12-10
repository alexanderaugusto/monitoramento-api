const routes = require('express').Router()
const Vagas = require('./models/Vagas')

routes.get("/api/vagas", async (req, res) => {
  const vagas = await Vagas.find()

  return res.json(vagas)
})

module.exports = routes