const moment = require('moment')
const connection = require('../infraestructure/connection')

class CardList {
    add(cardList, res) {
        const sql = 'INSERT INTO cardLists SET ?'

        connection.query(sql, cardList, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(cardList);
            }
        })
    }

    list(res) {
        const sql = 'SELECT * FROM cardLists';

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        })
    }

    searchById(id, res) {
        const sql = `SELECT * FROM cardLists WHERE id=${id}`;

        connection.query(sql, (error, results) => {
            const cardList = results[0];
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(cardList);
            }
        })
    }

    searchUserById(userId, res) {
        const sql = `SELECT * FROM cardLists WHERE userId=${userId}`;

        connection.query(sql, (error, results) => {
            const cardLists = results;
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(cardLists);
            }
        })
    }

    patch(id, values, res) {
        if(values.data){
            values.data = moment(values.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        }

        const sql = 'UPDATE cardLists SET ? WHERE id=?';

        connection.query(sql, [values, id], (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({...values, id});
            }
        })
    }
    
    delete(id, res) {
        const sql = 'DELETE FROM cardLists WHERE id=?';

        connection.query(sql, id, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({id});
            }
        })
    }
}

module.exports = new CardList