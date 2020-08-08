class Tables {
    init (connection) {
        //this.connection = connection;
        console.log("tables creation was called");

        this.connection = connection;
        this.createBooksTable();
    }

    createBooksTable() {
        //update SQL
        /*const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'*/
        
        const sql = 'CREATE TABLE IF NOT EXISTS books (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, description text, price int NOT NULL, PRIMARY KEY(id))';

        this.connection.query(sql, (error => {
            if(error) {
                console.log(error);
            } else {
                console.log("Books table created successfully")
            }
        }));
    }
}

module.exports = new Tables