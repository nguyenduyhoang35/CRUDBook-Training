class IdSearchCondition {

    constructor(bookId) {
        this.bookId = bookId;
    }

    describe (sqlQuery) {
        return sqlQuery.where({deleted_at: null, id: this.bookId});
    }
}

module.exports = IdSearchCondition;
