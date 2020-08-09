const moment = require('moment')
const connection = require('../infraestructure/connection')

class Card {
    add(card, res) {
        const sql = 'INSERT INTO cards SET ?'

        connection.query(sql, card, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(card);
            }
        })
    }

    list(res) {
        const sql = 'SELECT * FROM cards';

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        })
    }

    searchById(id, res) {
        const sql = `SELECT * FROM cards WHERE id=${id}`;

        connection.query(sql, (error, results) => {
            const card = results[0];
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(card);
            }
        })
    }

    patch(id, values, res) {
        if(values.data){
            values.data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        }

        const sql = 'UPDATE cards SET ? WHERE id=?';

        connection.query(sql, [values, id], (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({...values, id});
            }
        })
    }
    
    delete(id, res) {
        const sql = 'DELETE FROM cards WHERE id=?';

        connection.query(sql, id, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({id});
            }
        })
    }
}

module.exports = new Card