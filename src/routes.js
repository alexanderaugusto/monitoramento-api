const routes = require('express').Router()

routes.get("/api/vagas", (req, res) => {
  return res.json({ api: "Foi" })
})

module.exports = routes