class UndeletedSearchConditon {

    describe(sqlQuery) {
        return sqlQuery.where({'books.deleted_at':null});
    }
}

module.exports = UndeletedSearchConditon;