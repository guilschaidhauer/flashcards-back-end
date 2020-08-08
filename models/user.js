const moment = require('moment')
const connection = require('../infraestructure/connection')

class User {
    add(user, res) {
        const sql = 'INSERT INTO users SET ?'

        connection.query(sql, user, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(user);
            }
        })
    }

    list(res) {
        const sql = 'SELECT * FROM users';

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        })
    }

    searchById(id, res) {
        const sql = `SELECT * FROM users WHERE id=${id}`;

        connection.query(sql, (error, results) => {
            const user = results[0];
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(user);
            }
        })
    }

    patch(id, values, res) {
        if(values.data){
            values.data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        }

        const sql = 'UPDATE users SET ? WHERE id=?';

        connection.query(sql, [values, id], (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({...values, id});
            }
        })
    }
    
    delete(id, res) {
        const sql = 'DELETE FROM users WHERE id=?';

        connection.query(sql, id, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({id});
            }
        })
    }
}

module.exports = new User