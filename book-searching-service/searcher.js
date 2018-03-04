class Searcher {

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
        let sqlQuery = this.connection.select('id', 'title', 'author', 'publisher', 'price').from('books');
        condition.describe(sqlQuery);
        return sqlQuery.then(results => results.map(element => factory.make(element)));
    }
}

module.exports = Searcher;
