class KeywordSearchCondition {

    constructor(keyword) {
        this.keyword = keyword;
    }

    describe(sqlQuery) {
        return
        sqlQuery.where(function () {
            this.where('title', 'like', '%' + this.keyword + '%')
                .orWhere('author', 'like', '%' + this.keyword + '%')
                .orWhere('publisher', 'like', '%' + this.keyword + '%')
        }).where({deleted_at: null});
    }

}

module.exports = KeywordSearchCondition;
