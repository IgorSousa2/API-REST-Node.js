module.exports = app => {
    app.get('/trofeus', (req, res) => res.send('Rota de troféus (GET)'))

    app.post('/trofeus', (req, res) => {
        console.log(req.body)
        res.send('Rota de troféus (POST)')
    })
}
