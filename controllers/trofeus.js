const Trofeus = require('../models/trofeus')

module.exports = app => {
    app.get('/trofeus', (req, res) => res.send('Rota de troféus (GET)'))

    app.post('/trofeus', (req, res) => {
        const trofeu = req.body

        Trofeus.insereTrofeu(trofeu, res)
    })
}
