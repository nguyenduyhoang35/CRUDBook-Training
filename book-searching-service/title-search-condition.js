class TitleSearchCondition {
    constructor(keyword) {
        this.keyword = keyword;
    }

    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery.where(function () {
            this.where('title', 'like', '%' + keyword + '%')
                .orWhere('author', 'like', '%' + keyword + '%')
                .orWhere('publishers.name', 'like', '%' + keyword + '%')
        }).where({'books.deleted_at': null});
    }
}

module.exports = TitleSearchCondition;
