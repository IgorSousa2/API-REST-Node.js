const trofeus = require('../models/trofeus')
const Trofeus = require('../models/trofeus')

module.exports = app => {
    app.get('/trofeus', (req, res) => {
        Trofeus.lista(res)
    })

    app.get('/trofeus/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Trofeus.buscaPorId(id, res)
    })

    app.post('/trofeus', (req, res) => {
        const trofeu = req.body

        Trofeus.insereTrofeu(trofeu, res)
    })

    app.patch('/trofeus/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Trofeus.alteraTrofeu(id, valores, res)
    })

    app.delete('/trofeus/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Trofeus.deletaTrofeu(id, res)
    })
}
