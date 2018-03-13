class AdvanceSearchCondition {

    /**
     *
     * @param {string} title
     * @param {string} author
     * @param {string} publisher
     */
    constructor(title, author, publisher) {
        this.title     = title;
        this.author    = author;
        this.publisher = publisher;
    }

    /**
     *
     * @param sqlQuery
     * @return {*}
     */
    describe(sqlQuery) {
        let title     = this.title;
        let author    = this.author;
        let publisher = this.publisher;
        return sqlQuery.where('title', 'like', '%' + title + '%')
            .where('author', 'like', '%' + author + '%')
            .where('publishers.name', 'like', '%' + publisher + '%')
            .where({'books.deleted_at': null});
    }
}

module.exports = AdvanceSearchCondition;
