class Tables {
    init (connection) {
        console.log("tables creation was called");

        this.connection = connection;
        this.createUsersTable();
        this.createCardListsTable();
    }

    createUsersTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT, firstName varchar(50) NOT NULL, lastName varchar(50) NOT NULL, PRIMARY KEY(id))';

        this.connection.query(sql, (error => {
            if(error) {
                console.log(error);
            } else {
                console.log("users table created successfully")
            }
        }));
    }

    createCardListsTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS cardLists (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, userId int NOT NULL, PRIMARY KEY(id), FOREIGN KEY (userId) REFERENCES users(id))';

        this.connection.query(sql, (error => {
            if(error) {
                console.log(error);
            } else {
                console.log("cardLists table created successfully")
            }
        }));
    }
}

module.exports = new Tables