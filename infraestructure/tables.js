class Tables {
    init (connection) {
        //this.connection = connection;
        console.log("tables creation was called");

        this.connection = connection;
        this.createBooksTable();
        this.createUsersTable();
    }

    createBooksTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS books (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, description text, price int NOT NULL, PRIMARY KEY(id))';

        this.connection.query(sql, (error => {
            if(error) {
                console.log(error);
            } else {
                console.log("Books table created successfully")
            }
        }));
    }

    createUsersTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT, firstName varchar(50) NOT NULL, lastName varchar(50) NOT NULL, PRIMARY KEY(id))';

        this.connection.query(sql, (error => {
            if(error) {
                console.log(error);
            } else {
                console.log("Users table created successfully")
            }
        }));
    }
}

module.exports = new Tables