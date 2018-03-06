class IdSearchCondition {

    constructor(bookId) {
        this.bookId = bookId;
    }

    describe (sqlQuery) {
        return sqlQuery.where({'books.deleted_at': null, 'books.id': this.bookId});
    }
}

module.exports = IdSearchCondition;
