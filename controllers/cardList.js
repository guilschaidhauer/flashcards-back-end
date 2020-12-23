const CardList = require('../models/cardList');

module.exports = app => {
    app.get('/cardLists', (req, res) => {
        CardList.list(res);
    })

    app.get('/cardLists/:id', (req, res) => {
        const id = parseInt(req.params.id);

        CardList.searchById(id, res);
    })

    app.get('/cardLists/byUserId/:userId', (req, res) => {
        const userId = parseInt(req.params.userId);

        CardList.searchByUserId(userId, res);
    })

    app.post('/cardLists', (req, res) => {
        const cardList = req.body;
        
        CardList.add(cardList, res);
    })

    app.patch('/cardLists/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        
        CardList.patch(id, values, res);
    })

    app.delete('/cardLists/:id', (req, res) => {
        const id = parseInt(req.params.id);
        
        CardList.delete(id, res);
    })
}  