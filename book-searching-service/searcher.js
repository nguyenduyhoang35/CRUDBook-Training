class Searcher {

    /**
     *
     * @param connection
     * @param {BookFactory}factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory    = factory;
    }

    /**
     * @param   condition
     * @return {Promise<Book[]>}
     */
    search(condition) {
        let factory  = this.factory;
        let sqlQuery = this.connection.select('books.id', 'title', 'author', 'publisher_id', 'price', 'name')
            .from('books').leftJoin('publishers', function () {
                this.on('books.publisher_id', '=', 'publishers.id')
            });
        condition.describe(sqlQuery);
        return sqlQuery.then(results => results.map(element => factory.makeFromRowData(element)));
    }
}

module.exports = Searcher;
