const User = require('../models/user')

module.exports = app => {
    app.get('/users', (req, res) => {
        User.list(res);
    })

    app.get('/users/:id', (req, res) => {
        const id = parseInt(req.params.id);

        User.searchById(id, res);
    })

    app.post('/users', (req, res) => {
        const user = req.body;
        
        User.add(user, res);
    })

    app.patch('/users/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        
        User.patch(id, values, res);
    })

    app.delete('/users/:id', (req, res) => {
        const id = parseInt(req.params.id);
        
        User.delete(id, res);
    })
}  