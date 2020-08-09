const Card = require('../models/card')

module.exports = app => {
    app.get('/cards', (req, res) => {
        Card.list(res);
    })

    app.get('/cards/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Card.searchById(id, res);
    })

    app.post('/cards', (req, res) => {
        const card = req.body;
        
        Card.add(card, res);
    })

    app.patch('/cards/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        
        Card.patch(id, values, res);
    })

    app.delete('/cards/:id', (req, res) => {
        const id = parseInt(req.params.id);
        
        Card.delete(id, res);
    })
}  