class Tables {
    init (connection) {
        console.log("tables creation was called");

        this.connection = connection;
        this.createUsersTable();
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